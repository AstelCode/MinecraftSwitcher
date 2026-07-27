import { ModDependencyRepository } from "@/domain/repositories/ModDependecyRepository";
import { ModDependencyDTO } from "../dto/ModDependencyDTO";

export interface ListModDependenciesUseCaseDependencies {
  modDependencyRepository: Pick<ModDependencyRepository, "listAll">;
}

export class ListModDependenciesUseCase {
  constructor(private readonly deps: ListModDependenciesUseCaseDependencies) {}

  async execute(): Promise<ModDependencyDTO[]> {
    const data = await this.deps.modDependencyRepository.listAll();
    return data.map((item) => ({
      modId: item.mod.id.toString(),
      dependencyId: item.dependency.id.toString(),
    }));
  }
}
