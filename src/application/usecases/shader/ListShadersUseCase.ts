import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { ShaderDTO } from "../dto/ShaderDTO";

export interface ListShadersUseCaseDependencies {
  shaderRepository: Pick<ShaderRepository, "listAll">;
}

export class ListShadersUseCase {
  constructor(private readonly deps: ListShadersUseCaseDependencies) {}

  async execute(): Promise<ShaderDTO[]> {
    const data = await this.deps.shaderRepository.listAll();
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
