import { ModDependencyRepository } from "@/domain/repositories/ModDependecyRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteModDependencyUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modDependencyRepository: Pick<ModDependencyRepository, "findById" | "delete">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeleteModDependencyUseCase {
  constructor(private readonly deps: DeleteModDependencyUseCaseDependencies) {}

  async execute(token: string, modId: bigint, dependencyId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const modDep = await this.deps.modDependencyRepository.findById(modId, dependencyId);

    if (!modDep) {
      throw new Error("Mod dependency not found.");
    }

    if (!user.isSuperadmin && modDep.mod.author?.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    await this.deps.modDependencyRepository.delete(modId, dependencyId);
  }
}
