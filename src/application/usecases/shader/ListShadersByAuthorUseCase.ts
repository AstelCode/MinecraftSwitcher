import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { ShaderDTO } from "../dto/ShaderDTO";

export class ListShadersByAuthorUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly shaderRepository: ShaderRepository,
    public readonly tokenService: TokenService,
  ) {}

  async execute(token: string): Promise<ShaderDTO[]> {
    const payload = await this.tokenService.verify(token);
    const user = await this.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const data = await this.shaderRepository.listByAuthor(user.id);
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
