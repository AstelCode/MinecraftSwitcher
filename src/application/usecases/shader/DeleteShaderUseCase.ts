import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteShaderUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "deleteByAuthor">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeleteShaderUseCase {
  constructor(private readonly deps: DeleteShaderUseCaseDependencies) {}

  async execute(token: string, shaderId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    await this.deps.shaderRepository.deleteByAuthor(shaderId, user.id);
  }
}
