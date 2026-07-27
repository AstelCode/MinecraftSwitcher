import { FileRepository } from "@/domain/repositories/FileRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteShaderUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "findById" | "delete">;
  tokenService: Pick<TokenService, "verify">;
  fileRepository: Pick<FileRepository, "deleteShaderData">;
}

export class DeleteShaderUseCase {
  constructor(private readonly deps: DeleteShaderUseCaseDependencies) {}

  async execute(token: string, shaderId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const shader = await this.deps.shaderRepository.findById(shaderId);

    if (!shader) {
      throw new Error("Shader not found.");
    }

    if (!user.isSuperadmin && shader.author?.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    await this.deps.shaderRepository.delete(shaderId);
    await this.deps.fileRepository.deleteShaderData(shaderId);
  }
}
