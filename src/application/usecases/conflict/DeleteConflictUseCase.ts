import { ConflictRepository } from "@/domain/repositories/ConflictRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteConflictUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  conflictRepository: Pick<ConflictRepository, "findById" | "delete">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeleteConflictUseCase {
  constructor(private readonly deps: DeleteConflictUseCaseDependencies) {}

  async execute(token: string, conflictId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const conflict = await this.deps.conflictRepository.findById(conflictId);

    if (!conflict) {
      throw new Error("Conflict not found.");
    }

    if (!conflict.mod) {
      throw new Error("Invalid conflict: mod not assigned.");
    }

    if (conflict.mod.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    await this.deps.conflictRepository.delete(conflictId);
  }
}
