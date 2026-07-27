import { ConflictRepository } from "@/domain/repositories/ConflictRepository";
import { ConflictDTO } from "../dto/ConflictDTO";

export interface GetConflictUseCaseDependencies {
  conflictRepository: Pick<ConflictRepository, "findById">;
}

export class GetConflictUseCase {
  constructor(private readonly deps: GetConflictUseCaseDependencies) {}

  async execute(id: string): Promise<ConflictDTO> {
    const conflict = await this.deps.conflictRepository.findById(BigInt(id));
    if (!conflict) throw new Error("Conflict not found");
    return {
      id: conflict.id.toString(),
      modId: conflict.mod?.id.toString(),
      conflictShaderId: conflict.conflictShader?.id.toString(),
      conflictModId: conflict.conflictMod?.id.toString(),
    };
  }
}
