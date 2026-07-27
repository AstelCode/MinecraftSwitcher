import { ConflictRepository } from "@/domain/repositories/ConflictRepository";
import { ConflictDTO } from "../dto/ConflictDTO";

export interface ListConflictsByModUseCaseDependencies {
  conflictRepository: Pick<ConflictRepository, "listAllByMod">;
}

export class ListConflictsByModUseCase {
  constructor(private readonly deps: ListConflictsByModUseCaseDependencies) {}

  async execute(modId: bigint): Promise<ConflictDTO[]> {
    const data = await this.deps.conflictRepository.listAllByMod(modId);
    return data.map((item) => ({
      id: item.id.toString(),
      modId: item.mod?.id.toString(),
      conflictShaderId: item.conflictShader?.id?.toString(),
      conflictModId: item.conflictMod?.id?.toString(),
    }));
  }
}
