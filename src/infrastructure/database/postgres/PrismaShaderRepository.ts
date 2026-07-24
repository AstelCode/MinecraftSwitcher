import { Shader } from "@/domain/model/Shader";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { prisma } from "@/infrastructure/database/postgres/prisma";
import { Image } from "@/domain/model/Image";
export class PrismaShaderRepository implements ShaderRepository {
  async save(shader: Shader): Promise<void> {
    const createdShader = await prisma.shader.create({
      data: {
        ...shader.toPersistence(),
        // name: shader.name,
        // description: shader.description,
        // url: shader.url,
        // weight: shader.weight,
        // score: shader.score,

        autor: { connect: { id: shader.author.id } },
        images: {
          create: shader.images
            ? shader.images.map((img) => img.toPersistence())
            : [],
        },
      },
    });

    shader.id = createdShader.id;
  }

  async update(shader: Shader): Promise<void> {
    await prisma.shader.update({
      where: { id: shader.id },
      data: {
        ...shader.toPersistence(),
        // name: shader.name,
        // description: shader.description,
        // url: shader.url,
        // weight: shader.weight,
        // score: shader.score,
        images: {
          deleteMany: {},
          create: shader.images
            ? shader.images.map((img) => img.toPersistence())
            : [],
        },
      },
    });
  }

  async findById(id: bigint): Promise<Shader | undefined> {
    const data = await prisma.shader.findUnique({
      where: { id },
      include: {
        images: true,
        autor: true,
      },
    });

    if (!data) return undefined;

    return this.mapToDomain(data);
  }

  async listByPack(pack_id: bigint): Promise<Shader[]> {
    const data = await prisma.shader.findMany({
      where: {
        packs: {
          some: {
            id: pack_id,
          },
        },
      },
      include: {
        images: true,
      },
    });

    return data.map((item) => this.mapToDomain(item));
  }

  async delete(id: bigint): Promise<void> {
    await prisma.shader.delete({
      where: { id },
    });
  }

  async listAll(): Promise<Shader[]> {
    const data = await prisma.shader.findMany({
      include: {
        images: true,
      },
    });

    return data.map((item) => this.mapToDomain(item));
  }

  private mapToDomain(prismaData: any): Shader {
    const shader = new Shader();
    shader.fromJson(prismaData);
    if (prismaData.images) {
      shader.images = prismaData.images.map((img: any) =>
        new Image().fromJson(img),
      );
    }
    return shader;
  }
}
