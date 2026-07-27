import { ConflictRepository } from "@/domain/repositories/ConflictRepository";
import { ConflictDTO } from "../dto/ConflictDTO";

export interface ListConflictsByShaderUseCaseDependencies {
  conflictRepository: Pick<ConflictRepository, "listAllByShader">;
}

export class ListConflictsByShaderUseCase {
  constructor(private readonly deps: ListConflictsByShaderUseCaseDependencies) {}

  async execute(shaderId: bigint): Promise<ConflictDTO[]> {
    const data = await this.deps.conflictRepository.listAllByShader(shaderId);
    return data.map((item) => ({
      id: item.id.toString(),
      modId: item.mod?.id.toString(),
      conflictShaderId: item.conflictShader?.id?.toString(),
      conflictModId: item.conflictMod?.id?.toString(),
    }));
  }
}
