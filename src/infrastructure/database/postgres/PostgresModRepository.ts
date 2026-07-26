import { Mod } from "@/domain/model/Mod";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { prisma } from "./prisma";

export class PostgresModRepository implements ModRepository {
  async save(mod: Mod): Promise<void> {
    const {
      name,
      description,
      min_version,
      max_version,
      src,
      weight,
      autorId,
      versionType,
    } = mod.toPersistence();

    const newMod = await prisma.mod.create({
      data: {
        name,
        description,
        min_version,
        max_version,
        src,
        weight,
        author: { connect: { id: autorId } },
        versionType,
      },
    });

    mod.id = newMod.id;
  }

  async update(mod: Mod): Promise<void> {
    const {
      name,
      description,
      min_version,
      max_version,
      src,
      weight,
      versionType,
      images,
      principalImage,
    } = mod.toPersistence();

    const id = mod.getPersistanceId();

    await prisma.mod.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        min_version,
        max_version,
        src,
        weight,
        versionType,
        images: {
          connect: images.map((item) => ({ id: item.id })),
        },
        principalImage: principalImage
          ? {
              connect: { id: principalImage },
            }
          : undefined,
      },
    });
  }

  async findById(id: bigint): Promise<Mod | undefined> {
    const mod = await prisma.mod.findFirst({
      where: { id },
      include: {
        images: true,
        author: true,
        modDependencies: {
          include: {
            dependency: true,
          },
        },
        conflictsFrom: {
          include: {
            conflictMod: true,
            conflictShader: true,
          },
        },
        comments: true,
      },
    });
    if (!mod) return;
    return new Mod().fromData(mod);
  }

  async delete(id: bigint): Promise<void> {
    await prisma.mod.delete({ where: { id } });
  }

  async listAll(): Promise<Mod[]> {
    const data = await prisma.mod.findMany({
      include: { images: true, author: true },
    });
    return data.map((item) => new Mod().fromData(item));
  }

  async listByAdmin(admin_id: bigint): Promise<Mod[]> {
    const data = await prisma.mod.findMany({
      where: { authorId: admin_id },
      include: { images: true, author: true },
    });
    return data.map((item) => new Mod().fromData(item));
  }

  async listByPack(pack_id: bigint): Promise<Mod[]> {
    const data = await prisma.mod.findMany({
      where: { packs: { some: { id: pack_id } } },
      include: { images: true, author: true },
    });
    return data.map((item) => new Mod().fromData(item));
  }

  async listByQuery(name: string): Promise<Mod[]> {
    const data = await prisma.mod.findMany({
      where: {
        OR: [
          {
            name: {
              search: name,
            },
          },
          {
            description: {
              search: name,
            },
          },
        ],
      },
      include: { images: true, author: true },
    });
    return data.map((item) => new Mod().fromData(item));
  }
}
