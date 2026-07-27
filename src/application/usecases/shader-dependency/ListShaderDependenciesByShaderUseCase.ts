import { ShaderDependencyRepository } from "@/domain/repositories/ShaderDependecyRepository";
import { ShaderDependencyDTO } from "../dto/ShaderDependencyDTO";

export interface ListShaderDependenciesByShaderUseCaseDependencies {
  shaderDependencyRepository: Pick<ShaderDependencyRepository, "listByShader">;
}

export class ListShaderDependenciesByShaderUseCase {
  constructor(private readonly deps: ListShaderDependenciesByShaderUseCaseDependencies) {}

  async execute(shaderId: bigint): Promise<ShaderDependencyDTO[]> {
    const data = await this.deps.shaderDependencyRepository.listByShader(shaderId);
    return data.map((item) => ({
      shaderId: item.shader.id.toString(),
      modId: item.mod.id.toString(),
    }));
  }
}
