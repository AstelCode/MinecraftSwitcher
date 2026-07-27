import { ModDependencyRepository } from "@/domain/repositories/ModDependecyRepository";
import { ModDependencyDTO } from "../dto/ModDependencyDTO";

export interface GetModDependencyUseCaseDependencies {
  modDependencyRepository: Pick<ModDependencyRepository, "findById">;
}

export class GetModDependencyUseCase {
  constructor(private readonly deps: GetModDependencyUseCaseDependencies) {}

  async execute(modId: string, dependencyId: string): Promise<ModDependencyDTO> {
    const modDependency = await this.deps.modDependencyRepository.findById(BigInt(modId), BigInt(dependencyId));
    if (!modDependency) throw new Error("Mod dependency not found");
    return {
      modId: modDependency.mod.id.toString(),
      dependencyId: modDependency.dependency.id.toString(),
    };
  }
}
