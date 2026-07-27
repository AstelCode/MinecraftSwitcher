import { Conflict } from "@/domain/model/Conflict";
import { ConflictRepository } from "@/domain/repositories/ConflictRepository";
import { prisma } from "./prisma";

export class PostgresConflictRepository implements ConflictRepository {
  async save(conflict: Conflict): Promise<void> {
    const { modId, conflictModId, conflictShaderId } = conflict.toPersistance();
    const newConflict = await prisma.conflict.create({
      data: {
        mod: {
          connect: {
            id: modId,
          },
        },
        conflictShader: conflictShaderId
          ? { connect: { id: conflictShaderId } }
          : undefined,
        conflictMod: conflictModId
          ? { connect: { id: conflictModId } }
          : undefined,
      },
    });
    conflict.id = newConflict.id;
  }
  async delete(id: bigint): Promise<void> {
    await prisma.conflict.delete({
      where: {
        id,
      },
    });
  }
  async findById(id: bigint): Promise<Conflict | undefined> {
    const data = await prisma.conflict.findFirst({
      where: {
        id,
      },
      include: {
        mod: true,
        conflictMod: true,
        conflictShader: true,
      },
    });
    if (!data) return;
    return new Conflict().fromData(data);
  }
  async listAll(): Promise<Conflict[]> {
    const data = await prisma.conflict.findMany({
      include: {
        mod: true,
        conflictMod: true,
        conflictShader: true,
      },
    });
    return data.map((item) => new Conflict().fromData(item));
  }
  async listAllByMod(mod_id: bigint): Promise<Conflict[]> {
    const data = await prisma.conflict.findMany({
      where: {
        modId: mod_id,
      },
      include: {
        mod: true,
        conflictMod: true,
        conflictShader: true,
      },
    });
    return data.map((item) => new Conflict().fromData(item));
  }
  async listAllByShader(shader_id: bigint): Promise<Conflict[]> {
    const data = await prisma.conflict.findMany({
      where: {
        conflictshaderId: shader_id,
      },
      include: {
        mod: true,
        conflictMod: true,
        conflictShader: true,
      },
    });
    return data.map((item) => new Conflict().fromData(item));
  }
}
