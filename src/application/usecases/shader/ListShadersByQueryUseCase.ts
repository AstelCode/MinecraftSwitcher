import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { ShaderDTO } from "../dto/ShaderDTO";

export interface ListShadersByQueryUseCaseDependencies {
  shaderRepository: Pick<ShaderRepository, "listByQuery">;
}

export class ListShadersByQueryUseCase {
  constructor(private readonly deps: ListShadersByQueryUseCaseDependencies) {}

  async execute(query: string): Promise<ShaderDTO[]> {
    const data = await this.deps.shaderRepository.listByQuery(query);
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
