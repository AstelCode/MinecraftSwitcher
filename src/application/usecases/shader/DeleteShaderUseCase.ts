import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export class DeleteShaderUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly shaderRepository: ShaderRepository,
    private readonly tokenService: TokenService,
  ) {}

  async execute(token: string, shaderId: bigint): Promise<void> {
    const payload = await this.tokenService.verify(token);

    const user = await this.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    await this.shaderRepository.deleteByAuthor(shaderId, user.id);
  }
}
