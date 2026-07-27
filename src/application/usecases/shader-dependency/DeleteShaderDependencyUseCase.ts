import { ShaderDependencyRepository } from "@/domain/repositories/ShaderDependecyRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteShaderDependencyUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderDependencyRepository: Pick<ShaderDependencyRepository, "findById" | "delete">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeleteShaderDependencyUseCase {
  constructor(private readonly deps: DeleteShaderDependencyUseCaseDependencies) {}

  async execute(token: string, shaderId: bigint, modId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const dependency = await this.deps.shaderDependencyRepository.findById(
      shaderId,
      modId,
    );

    if (!dependency) {
      throw new Error("Shader dependency not found.");
    }

    if (!user.isSuperadmin && dependency.shader.author?.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    await this.deps.shaderDependencyRepository.delete(shaderId, modId);
  }
}
