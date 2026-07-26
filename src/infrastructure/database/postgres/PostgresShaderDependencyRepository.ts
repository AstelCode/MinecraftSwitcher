import { ShaderDependency } from "@/domain/model/ShaderDependency";
import { prisma } from "./prisma";
import { ShaderDependencyRepository } from "@/domain/repositories/ShaderDependecyRepository";

export class PostgresShaderDependencyRepository implements ShaderDependencyRepository {
  async save(shaderDependency: ShaderDependency): Promise<void> {
    const { modId, shaderId } = shaderDependency.toPersistance();

    // Nota: Usamos shaderDependecy porque así está escrito (con error tipográfico) en tu schema.prisma
    await prisma.shaderDependecy.create({
      data: {
        modId,
        shaderId,
      },
    });
  }

  async findById(
    shaderId: bigint,
    modId: bigint,
  ): Promise<ShaderDependency | undefined> {
    const data = await prisma.shaderDependecy.findUnique({
      where: {
        shaderId_modId: {
          shaderId,
          modId,
        },
      },
      include: {
        mod: true,
        shader: true,
      },
    });

    if (!data) return;
    return new ShaderDependency().fromData(data as any);
  }

  async delete(shaderId: bigint, modId: bigint): Promise<void> {
    await prisma.shaderDependecy.delete({
      where: {
        shaderId_modId: {
          shaderId,
          modId,
        },
      },
    });
  }

  async listAll(): Promise<ShaderDependency[]> {
    const data = await prisma.shaderDependecy.findMany({
      include: { mod: true, shader: true },
    });
    return data.map((item) => new ShaderDependency().fromData(item as any));
  }

  async listByShader(shader_id: bigint): Promise<ShaderDependency[]> {
    const data = await prisma.shaderDependecy.findMany({
      where: { shaderId: shader_id },
      include: { mod: true, shader: true },
    });
    return data.map((item) => new ShaderDependency().fromData(item as any));
  }
}
