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

export class CreateShaderUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly shaderRepository: ShaderRepository,
    public readonly tokenService: TokenService,
    public readonly fileRepository: FileRepository,
  ) {}

  async execute(token: string, data: CreateShaderArgs): Promise<void> {
    const payload = await this.tokenService.verify(token);

    const user = await this.userRepository.findById(payload.id);

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

      await this.shaderRepository.save(shader);

      const fileName = `shader_${shader.id}`;

      filePath = await this.fileRepository.saveShaderFile(fileName, data.file);

      await this.shaderRepository.updateSrc(shader.id, filePath);
    } catch (error) {
      if (filePath) {
        await this.fileRepository.deleteShaderFile(filePath);
      }

      if (shader?.id !== undefined) {
        await this.shaderRepository.delete(shader.id);
      }

      throw error;
    }
  }
}
