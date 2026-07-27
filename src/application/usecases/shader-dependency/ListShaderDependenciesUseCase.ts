import { ShaderDependencyRepository } from "@/domain/repositories/ShaderDependecyRepository";
import { ShaderDependencyDTO } from "../dto/ShaderDependencyDTO";

export interface ListShaderDependenciesUseCaseDependencies {
  shaderDependencyRepository: Pick<ShaderDependencyRepository, "listAll">;
}

export class ListShaderDependenciesUseCase {
  constructor(private readonly deps: ListShaderDependenciesUseCaseDependencies) {}

  async execute(): Promise<ShaderDependencyDTO[]> {
    const data = await this.deps.shaderDependencyRepository.listAll();
    return data.map((item) => ({
      shaderId: item.shader.id.toString(),
      modId: item.mod.id.toString(),
    }));
  }
}
