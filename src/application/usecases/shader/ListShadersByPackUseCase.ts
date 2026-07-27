import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { ShaderDTO } from "../dto/ShaderDTO";

export interface ListShadersByPackUseCaseDependencies {
  shaderRepository: Pick<ShaderRepository, "listByPack">;
}

export class ListShadersByPackUseCase {
  constructor(private readonly deps: ListShadersByPackUseCaseDependencies) {}

  async execute(packId: bigint): Promise<ShaderDTO[]> {
    const data = await this.deps.shaderRepository.listByPack(packId);
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
