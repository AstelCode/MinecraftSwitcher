import { ModDependencyRepository } from "@/domain/repositories/ModDependecyRepository";
import { ModDependencyDTO } from "../dto/ModDependencyDTO";

export interface ListModDependenciesByModUseCaseDependencies {
  modDependencyRepository: Pick<ModDependencyRepository, "listByMod">;
}

export class ListModDependenciesByModUseCase {
  constructor(private readonly deps: ListModDependenciesByModUseCaseDependencies) {}

  async execute(modId: bigint): Promise<ModDependencyDTO[]> {
    const data = await this.deps.modDependencyRepository.listByMod(modId);
    return data.map((item) => ({
      modId: item.mod.id.toString(),
      dependencyId: item.dependency.id.toString(),
    }));
  }
}
