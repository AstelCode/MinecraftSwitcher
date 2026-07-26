import { FileRepository } from "@/domain/repositories/FileRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export class UpdateShaderFileUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly shaderRepository: ShaderRepository,
    private readonly tokenService: TokenService,
    private readonly fileRepository: FileRepository,
  ) {}

  async execute(token: string, shaderId: bigint, file: File): Promise<void> {
    const payload = await this.tokenService.verify(token);

    const user = await this.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const shader = await this.shaderRepository.findById(shaderId);

    if (!shader) {
      throw new Error("Shader not found.");
    }

    if (shader.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const oldSrc = shader.src;
    let newSrc: string | undefined;

    try {
      const fileName = `shader_${shader.id}`;
      newSrc = await this.fileRepository.saveShaderFile(fileName, file);
      await this.shaderRepository.updateSrc(shader.id, newSrc);
      if (oldSrc) {
        await this.fileRepository.deleteShaderFile(oldSrc);
      }
    } catch (error) {
      if (newSrc) {
        await this.fileRepository.deleteShaderFile(newSrc);
      }
      throw error;
    }
  }
}
