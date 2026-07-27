import { PackRepository } from "@/domain/repositories/PackRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeletePackShaderUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "findById" | "removeShader">;
  shaderRepository: Pick<ShaderRepository, "findById">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeletePackShaderUseCase {
  constructor(private readonly deps: DeletePackShaderUseCaseDependencies) {}

  async execute(token: string, packId: bigint, shaderId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const pack = await this.deps.packRepository.findById(packId);

    if (!pack) {
      throw new Error("Pack not found.");
    }

    if (pack.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const shader = await this.deps.shaderRepository.findById(shaderId);

    if (!shader) {
      throw new Error("Shader not found.");
    }

    if (!pack.shaders.some((s) => s.id === shader.id)) {
      throw new Error("Shader does not belong to pack.");
    }

    await this.deps.packRepository.removeShader(pack.id, shader.id);
  }
}
