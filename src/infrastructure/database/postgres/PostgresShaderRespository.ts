import { Shader } from "@/domain/model/Shader";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { prisma } from "./prisma";

export class PostgresShaderRepository implements ShaderRepository {
  async addImage(shaderId: bigint, imageId: bigint): Promise<void> {
    await prisma.shader.update({
      where: { id: shaderId },
      data: {
        images: {
          connect: { id: imageId },
        },
      },
    });
  }
  async setPrincipalImage(shaderId: bigint, imageId: bigint): Promise<void> {
    await prisma.shader.update({
      where: { id: shaderId },
      data: {
        principalImage: { connect: { id: imageId } },
      },
    });
  }

  async save(shader: Shader): Promise<void> {
    const { name, description, weight, authorId, versionType, src } =
      shader.toPersistence();
    const newShader = await prisma.shader.create({
      data: {
        name,
        description,
        weight,
        author: { connect: { id: authorId } },
        versionType,
        src,
      },
    });
    shader.id = newShader.id;
  }
  async update(shader: Shader): Promise<void> {
    const {
      name,
      description,
      weight,
      versionType,
      src: url,
      images,
    } = shader.toPersistence();
    const id = shader.getPersistanceId();
    await prisma.shader.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        weight,
        versionType,
        url,
        images: {
          connect: images.map((item) => ({ id: item.id })),
        },
      },
    });
  }

  async updateSrc(shaderId: bigint, src: string): Promise<void> {
    await prisma.shader.update({
      where: { id: shaderId },
      data: { src },
    });
  }

  async findById(id: bigint): Promise<Shader | undefined> {
    const shader = await prisma.shader.findFirst({
      where: { id },
      include: {
        images: true,
        author: true,
        shaderDependecies: { include: { mod: true } },
      },
    });
    if (!shader) return;
    shader.shaderDependecies;
    return new Shader().fromData(shader);
  }
  async delete(id: bigint): Promise<void> {
    await prisma.shader.delete({ where: { id } });
  }
  async deleteByAuthor(id: bigint, authorId: bigint): Promise<void> {
    await prisma.shader.delete({ where: { id, authorId } });
  }
  async listAll(): Promise<Shader[]> {
    const data = await prisma.shader.findMany({ include: { images: true } });
    return data.map((item) => new Shader().fromData(item));
  }
  async listByAuthor(authorId: bigint): Promise<Shader[]> {
    const data = await prisma.shader.findMany({
      where: { authorId },
      include: { images: true },
    });
    return data.map((item) => new Shader().fromData(item));
  }
  async listByPack(packId: bigint): Promise<Shader[]> {
    const data = await prisma.shader.findMany({
      where: { packs: { some: { id: packId } } },
      include: { images: true },
    });
    return data.map((item) => new Shader().fromData(item));
  }
  async listByQuery(query: string): Promise<Shader[]> {
    const data = await prisma.shader.findMany({
      where: {
        OR: [
          {
            name: {
              search: query,
            },
          },
          {
            description: {
              search: query,
            },
          },
        ],
      },
      include: { images: true },
    });
    return data.map((item) => new Shader().fromData(item));
  }
}
