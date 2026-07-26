import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { ShaderDTO } from "../dto/ShaderDTO";

export class ListShadersByPackUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly shaderRepository: ShaderRepository,
  ) {}

  async execute(packId: bigint): Promise<ShaderDTO[]> {
    const data = await this.shaderRepository.listByPack(packId);
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
