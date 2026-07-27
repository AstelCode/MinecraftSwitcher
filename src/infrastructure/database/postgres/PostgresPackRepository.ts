import { Pack } from "@/domain/model/Pack";
import { PackRepository } from "@/domain/repositories/PackRepository";
import { prisma } from "./prisma"; // Ajusta la ruta de importación de Prisma

export class PostgresPackRepository implements PackRepository {
  async save(pack: Pack): Promise<void> {
    const {
      max_version,
      min_version,
      versionType,
      name,
      description,
      authorId,
    } = pack.toPersistance();

    const newPack = await prisma.pack.create({
      data: {
        name,
        description,
        max_version,
        min_version,
        versionType,
        author: authorId ? { connect: { id: authorId } } : undefined,
      },
    });

    pack.id = newPack.id;
  }

  async update(pack: Pack): Promise<void> {
    const {
      max_version,
      min_version,
      versionType,
      name,
      description,
      images,
      mods,
      shaders,
      principalImage,
    } = pack.toPersistance();

    const id = pack.getPersistanceId();

    await prisma.pack.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        max_version,
        min_version,
        versionType,
        images: {
          connect: images.map((item) => ({ id: item.id })),
        },
        mods: {
          connect: mods.map((item) => ({ id: item.id })),
        },
        shaders: {
          connect: shaders.map((item) => ({ id: item.id })),
        },
        principalImage: principalImage
          ? { connect: { id: principalImage } }
          : undefined,
      },
    });
  }

  async findById(id: bigint): Promise<Pack | undefined> {
    const pack = await prisma.pack.findFirst({
      where: { id },
      include: {
        principalImage: true,
        author: true,
        comments: true,
        images: true,
        mods: true,
        shaders: true,
      },
    });

    if (!pack) return;
    return new Pack().fromData(pack as any);
  }

  async delete(id: bigint): Promise<void> {
    await prisma.pack.delete({ where: { id } });
  }

  async addImage(packId: bigint, imageId: bigint): Promise<void> {
    await prisma.pack.update({
      where: { id: packId },
      data: { images: { connect: { id: imageId } } },
    });
  }

  async setPrincipalImage(packId: bigint, imageId: bigint): Promise<void> {
    await prisma.pack.update({
      where: { id: packId },
      data: { principalImage: { connect: { id: imageId } } },
    });
  }

  async addMod(packId: bigint, modId: bigint): Promise<void> {
    await prisma.pack.update({
      where: { id: packId },
      data: { mods: { connect: { id: modId } } },
    });
  }

  async addShader(packId: bigint, shaderId: bigint): Promise<void> {
    await prisma.pack.update({
      where: { id: packId },
      data: { shaders: { connect: { id: shaderId } } },
    });
  }

  async removeMod(packId: bigint, modId: bigint): Promise<void> {
    await prisma.pack.update({
      where: { id: packId },
      data: { mods: { disconnect: { id: modId } } },
    });
  }

  async removeShader(packId: bigint, shaderId: bigint): Promise<void> {
    await prisma.pack.update({
      where: { id: packId },
      data: { shaders: { disconnect: { id: shaderId } } },
    });
  }

  async listAll(): Promise<Pack[]> {
    const data = await prisma.pack.findMany({
      include: { author: true },
    });
    return data.map((item) => new Pack().fromData(item as any));
  }

  async listByName(name: string): Promise<Pack[]> {
    const data = await prisma.pack.findMany({
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
      include: { author: true },
    });
    return data.map((item) => new Pack().fromData(item as any));
  }

  async listByAdmin(admin_id: bigint): Promise<Pack[]> {
    const data = await prisma.pack.findMany({
      where: { authorId: admin_id },
      include: { author: true },
    });
    return data.map((item) => new Pack().fromData(item as any));
  }

  async assignAuthor(id: bigint, authorId: bigint): Promise<void> {
    await prisma.pack.update({
      where: { id },
      data: { author: { connect: { id: authorId } } },
    });
  }
}
