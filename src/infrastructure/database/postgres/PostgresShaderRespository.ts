import { Shader } from "@/domain/model/Shader";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { prisma } from "./prisma";

export class PostgresShaderRepository implements ShaderRepository {
  async save(shader: Shader): Promise<void> {
    const { name, description, score, weight, authorId, versionType, url } =
      shader.toPersistence();
    const newShader = await prisma.shader.create({
      data: {
        name,
        description,
        score,
        weight,
        author: { connect: { id: authorId } },
        versionType,
        url,
      },
    });
    shader.id = newShader.id;
  }
  async update(shader: Shader): Promise<void> {
    const {
      name,
      description,
      score,
      weight,
      authorId,
      versionType,
      url,
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
        score,
        weight,
        versionType,
        url,
        images: {
          connect: images.map((item) => ({ id: item.id })),
        },
      },
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
