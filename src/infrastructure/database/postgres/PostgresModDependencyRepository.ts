import { ModDependencyRepository } from "@/domain/repositories/ModDependecyRepository";
import { ModDependency } from "@/domain/model/ModDependency";
import { prisma } from "./prisma";

export class PostgresModDependencyRepository implements ModDependencyRepository {
  async save(modDependency: ModDependency): Promise<void> {
    const { modId, dependencyId } = modDependency.toPersistance();

    await prisma.modDependency.create({
      data: {
        modId,
        dependencyId,
      },
    });
  }

  async findById(
    modId: bigint,
    dependencyId: bigint,
  ): Promise<ModDependency | undefined> {
    const data = await prisma.modDependency.findUnique({
      where: {
        // Prisma usa esta sintaxis para llaves compuestas
        modId_dependencyId: {
          modId,
          dependencyId,
        },
      },
      include: {
        mod: true,
        dependency: true,
      },
    });

    if (!data) return;
    return new ModDependency().fromData(data as any);
  }

  async delete(modId: bigint, dependencyId: bigint): Promise<void> {
    await prisma.modDependency.delete({
      where: {
        modId_dependencyId: {
          modId,
          dependencyId,
        },
      },
    });
  }

  async listAll(): Promise<ModDependency[]> {
    const data = await prisma.modDependency.findMany({
      include: { mod: true, dependency: true },
    });
    return data.map((item) => new ModDependency().fromData(item as any));
  }

  async listByMod(mod_id: bigint): Promise<ModDependency[]> {
    const data = await prisma.modDependency.findMany({
      where: { modId: mod_id },
      include: { mod: true, dependency: true },
    });
    return data.map((item) => new ModDependency().fromData(item as any));
  }
}
