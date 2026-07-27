import { Shader } from "@/domain/model/Shader";
import { VersionType } from "@/domain/model/VersionType";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
export interface CreateShaderArgs {
  name: string;
  description?: string | null;
  file: File;
  versionType: VersionType;
}

export interface CreateShaderUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "save" | "updateSrc" | "delete">;
  tokenService: Pick<TokenService, "verify">;
  fileRepository: Pick<FileRepository, "saveShaderFile" | "deleteShaderFile" | "deleteShaderData">;
}

export class CreateShaderUseCase {
  constructor(private readonly deps: CreateShaderUseCaseDependencies) {}

  async execute(token: string, data: CreateShaderArgs): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    let shader: Shader | undefined;
    let filePath: string | undefined;

    try {
      shader = new Shader();

      shader.name = data.name;
      shader.description = data.description ?? "";
      shader.versionType = data.versionType;
      shader.weight = data.file.size;
      shader.src = "";
      shader.author = user;

      await this.deps.shaderRepository.save(shader);

      const fileName = `shader_${shader.id}`;

      filePath = await this.deps.fileRepository.saveShaderFile(shader.id, fileName, data.file);
      
      shader.src = filePath;
      await this.deps.shaderRepository.updateSrc(shader.id, filePath);
    } catch (error) {
      if (shader?.id !== undefined) {
        if (filePath) {
          await this.deps.fileRepository.deleteShaderFile(shader.id, filePath);
        }
        await this.deps.shaderRepository.delete(shader.id);
      }

      throw error;
    }
  }
}
