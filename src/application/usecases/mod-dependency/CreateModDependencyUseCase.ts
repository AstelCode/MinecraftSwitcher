import { ModDependency } from "@/domain/model/ModDependency";
import { ModDependencyRepository } from "@/domain/repositories/ModDependecyRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface CreateModDependencyUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "findById">;
  modDependencyRepository: Pick<ModDependencyRepository, "save">;
  tokenService: Pick<TokenService, "verify">;
}

export class CreateModDependencyUseCase {
  constructor(private readonly deps: CreateModDependencyUseCaseDependencies) {}

  async execute(token: string, modId: bigint, dependencyId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const mod = await this.deps.modRepository.findById(modId);

    if (!mod) {
      throw new Error("Mod not found.");
    }

    if (!user.isSuperadmin && mod.author?.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const dependencyMod = await this.deps.modRepository.findById(dependencyId);

    if (!dependencyMod) {
      throw new Error("Dependency Mod not found.");
    }

    const modDependency = new ModDependency();
    modDependency.mod = mod;
    modDependency.dependency = dependencyMod;

    await this.deps.modDependencyRepository.save(modDependency);
  }
}
