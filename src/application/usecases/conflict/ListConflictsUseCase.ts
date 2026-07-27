import { ConflictRepository } from "@/domain/repositories/ConflictRepository";
import { ConflictDTO } from "../dto/ConflictDTO";

export interface ListConflictsUseCaseDependencies {
  conflictRepository: Pick<ConflictRepository, "listAll">;
}

export class ListConflictsUseCase {
  constructor(private readonly deps: ListConflictsUseCaseDependencies) {}

  async execute(): Promise<ConflictDTO[]> {
    const data = await this.deps.conflictRepository.listAll();
    return data.map((item) => ({
      id: item.id.toString(),
      modId: item.mod?.id.toString(),
      conflictShaderId: item.conflictShader?.id?.toString(),
      conflictModId: item.conflictMod?.id?.toString(),
    }));
  }
}
