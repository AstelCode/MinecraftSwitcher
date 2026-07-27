import { ShaderDependencyRepository } from "@/domain/repositories/ShaderDependecyRepository";
import { ShaderDependencyDTO } from "../dto/ShaderDependencyDTO";

export interface GetShaderDependencyUseCaseDependencies {
  shaderDependencyRepository: Pick<ShaderDependencyRepository, "findById">;
}

export class GetShaderDependencyUseCase {
  constructor(private readonly deps: GetShaderDependencyUseCaseDependencies) {}

  async execute(shaderId: string, modId: string): Promise<ShaderDependencyDTO> {
    const shaderDependency = await this.deps.shaderDependencyRepository.findById(BigInt(shaderId), BigInt(modId));
    if (!shaderDependency) throw new Error("Shader dependency not found");
    return {
      shaderId: shaderDependency.shader.id.toString(),
      modId: shaderDependency.mod.id.toString(),
    };
  }
}
