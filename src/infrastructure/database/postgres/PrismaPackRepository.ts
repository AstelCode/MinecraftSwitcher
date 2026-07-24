import { Pack } from "@/domain/model/Pack";
import { Image } from "@/domain/model/Image";
import { Comment } from "@/domain/model/Comment";
import { Shader } from "@/domain/model/Shader";
import { PackRepository } from "@/domain/repositories/PackRepository";
import { prisma } from "@/infrastructure/database/postgres/prisma";
import { Mod } from "@/domain/model/Mod";

export class PrismaPackRepository implements PackRepository {
  async save(pack: Pack): Promise<void> {
    const createdPack = await prisma.pack.create({
      data: {
        name: pack.name,
        min_version: pack.minVersion,
        max_version: pack.maxVersion,
        score: pack.score,
        autor: { connect: { id: pack.author.id } },
        images: {
          create: pack.images
            ? pack.images.map((img) => img.toPersistence())
            : [],
        },
        mods: {
          connect: pack.mods ? pack.mods.map((mod) => ({ id: mod.id })) : [],
        },
        shaders: {
          connect: pack.shaders
            ? pack.shaders.map((shader) => ({ id: shader.id }))
            : [],
        },
      },
    });

    pack.id = createdPack.id;
  }

  async update(pack: Pack): Promise<void> {
    await prisma.pack.update({
      where: { id: pack.id },
      data: {
        name: pack.name,
        min_version: pack.minVersion,
        max_version: pack.maxVersion,
        score: pack.score,

        images: {
          deleteMany: {},
          create: pack.images
            ? pack.images.map((img) => img.toPersistence())
            : [],
        },
        mods: {
          set: pack.mods ? pack.mods.map((mod) => ({ id: mod.id })) : [],
        },
        shaders: {
          set: pack.shaders
            ? pack.shaders.map((shader) => ({ id: shader.id }))
            : [],
        },
      },
    });
  }

  async findById(id: bigint): Promise<Pack | undefined> {
    const data = await prisma.pack.findUnique({
      where: { id },
      include: {
        images: true,
        mods: true,
        shaders: true,
        comments: true,
      },
    });
    if (data == null) return;

    return this.mapToDomain(data);
  }

  async listByName(name: string): Promise<Pack[]> {
    const data = await prisma.pack.findMany({
      where: {
        name: {
          contains: name, // Búsqueda parcial (LIKE %name%)
          mode: "insensitive", // No distingue mayúsculas y minúsculas
        },
      },
      include: { images: true },
    });

    return data.map((item) => this.mapToDomain(item));
  }

  async listByAdmin(admin_id: bigint): Promise<Pack[]> {
    const data = await prisma.pack.findMany({
      where: {
        authorId: admin_id,
      },
      include: { images: true },
    });

    return data.map((item) => this.mapToDomain(item));
  }

  async delete(id: bigint): Promise<void> {
    await prisma.pack.delete({
      where: { id },
    });
  }

  async listAll(): Promise<Pack[]> {
    const data = await prisma.pack.findMany({
      include: { images: true },
    });

    return data.map((item) => this.mapToDomain(item));
  }

  /**
   * Método auxiliar para mapear el modelo de Prisma a la Entidad de Dominio
   */
  private mapToDomain(prismaData: any): Pack {
    const pack = new Pack();

    pack.id = prismaData.id;
    pack.name = prismaData.name;
    pack.minVersion = prismaData.min_version;
    pack.maxVersion = prismaData.max_version;
    pack.score = prismaData.score;

    if (prismaData.images) {
      pack.images = prismaData.images.map((img: any) =>
        new Image().fromJson(img),
      );
    }
    if (prismaData.mods) {
      pack.mods = prismaData.mods.map((mod: any) => new Mod().fromJson(mod));
    }
    if (prismaData.shaders) {
      pack.shaders = prismaData.shaders.map((shader: any) =>
        new Shader().fromJson(shader),
      );
    }
    if (prismaData.comments) {
      pack.comments = prismaData.comments.map((comment: any) =>
        new Comment().fromJson(comment),
      );
    }
    return pack;
  }
}
