import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { ShaderDTO } from "../dto/ShaderDTO";

export interface GetShaderUseCaseDependencies {
  shaderRepository: Pick<ShaderRepository, "findById">;
}

export class GetShaderUseCase {
  constructor(private readonly deps: GetShaderUseCaseDependencies) {}

  async execute(id: string): Promise<ShaderDTO> {
    const shader = await this.deps.shaderRepository.findById(BigInt(id));
    if (!shader) throw new Error("Shader not found");
    return {
      id: shader.id.toString(),
      name: shader.name,
      imageUrl: shader.principalImage?.src,
    };
  }
}
