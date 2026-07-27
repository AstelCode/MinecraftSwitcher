import { FileRepository } from "@/domain/repositories/FileRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface UpdateShaderFileUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "findById" | "updateSrc">;
  tokenService: Pick<TokenService, "verify">;
  fileRepository: Pick<FileRepository, "saveShaderFile" | "deleteShaderFile">;
}

export class UpdateShaderFileUseCase {
  constructor(private readonly deps: UpdateShaderFileUseCaseDependencies) {}

  async execute(token: string, shaderId: bigint, file: File): Promise<void> {
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

    const oldSrc = shader.src;
    let newSrc: string | undefined;

    try {
      const fileName = `shader_${shader.id}`;
      newSrc = await this.deps.fileRepository.saveShaderFile(shader.id, fileName, file);
      await this.deps.shaderRepository.updateSrc(shader.id, newSrc);
      if (oldSrc) {
        await this.deps.fileRepository.deleteShaderFile(shader.id, oldSrc);
      }
    } catch (error) {
      if (newSrc) {
        await this.deps.fileRepository.deleteShaderFile(shader.id, newSrc);
      }
      throw error;
    }
  }
}
