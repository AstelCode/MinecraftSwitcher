import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { ShaderDTO } from "../dto/ShaderDTO";

export class ListShadersByAuthorUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly shaderRepository: ShaderRepository,
  ) {}

  async execute(): Promise<ShaderDTO[]> {
    const data = await this.shaderRepository.listAll();
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
