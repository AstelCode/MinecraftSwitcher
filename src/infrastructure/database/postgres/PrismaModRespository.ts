import { Mod } from "@/domain/model/Mod";
import { Image } from "@/domain/model/Image";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { prisma } from "@/infrastructure/database/postgres/prisma";
import { User } from "@/domain/model/User";

export class PrimsaModRespository implements ModRepository {
  async save(mod: Mod): Promise<void> {
    const createdMod = await prisma.mod.create({
      data: {
        ...mod.toPersistence(),
        autor: {
          connect: {
            id: mod.author.id,
          },
        },
        images: {
          create: mod.images
            ? mod.images.map((img) => img.toPersistence())
            : [],
        },
      },
      include: {
        images: true,
      },
    });

    mod.id = createdMod.id;
    if (mod.images && createdMod.images.length === mod.images.length) {
      mod.images = createdMod.images.map((item) => new Image().fromJson(item));
    }
  }
  async update(mod: Mod): Promise<void> {
    await prisma.mod.update({
      where: {
        id: mod.id,
      },
      data: {
        ...mod.toPersistence(),
        images: {
          deleteMany: {},
          create: mod.images
            ? mod.images.map((img) => img.toPersistence())
            : [],
        },
      },
    });
  }
  async findById(id: bigint): Promise<Mod | undefined> {
    const data = await prisma.mod.findUnique({
      where: { id },
      // Incluimos las relaciones necesarias para reconstruir el Mod
      include: {
        autor: true,
        images: true,
        modDependencies: true,
        conflictsFrom: true,
      },
    });

    if (!data) return undefined;

    return this.mapToDomain(data);
  }

  async listByPack(pack_id: bigint): Promise<Mod[]> {
    const data = await prisma.mod.findMany({
      where: {
        packs: {
          some: {
            id: pack_id,
          },
        },
      },
      include: {
        autor: true,
        images: true,
      },
    });

    return data.map((item) => this.mapToDomain(item));
  }

  async delete(id: bigint): Promise<void> {
    await prisma.mod.delete({
      where: { id },
    });
  }

  async listAll(): Promise<Mod[]> {
    const data = await prisma.mod.findMany({
      include: {
        autor: true,
        images: true,
      },
    });

    return data.map((item) => this.mapToDomain(item));
  }

  private mapToDomain(prismaData: any): Mod {
    const mod = new Mod();

    mod.id = prismaData.id;
    mod.name = prismaData.name;
    mod.description = prismaData.description ?? ""; // Manejamos null
    mod.minVersion = prismaData.min_version;
    mod.maxVersion = prismaData.max_version;
    mod.url = prismaData.url;
    mod.weight = prismaData.weight;

    if (prismaData.autor) {
      const author = new User();
      author.fromJson(prismaData.autor); // Depende de cómo implementaste User
      mod.author = author;
    }

    // Mapeo de las imágenes
    if (prismaData.images) {
      mod.images = prismaData.images.map((imgData: any) =>
        new Image().fromJson(imgData),
      );
    }

    // Mapeo de Ids de Dependencias (opcional, dependiendo si los incluiste en el query)
    if (prismaData.modDependencies) {
      mod.dependencyIds = prismaData.modDependencies.map((dep: any) =>
        Number(dep.dependencyId),
      );
    }

    // Mapeo de Ids de Conflictos (opcional, dependiendo si los incluiste en el query)
    if (prismaData.conflictsFrom) {
      mod.conflictsIds = prismaData.conflictsFrom.map((conflict: any) =>
        Number(conflict.conflictModId),
      );
    }

    return mod;
  }
}
