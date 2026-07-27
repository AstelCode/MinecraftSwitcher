import { Image } from "@/domain/model/Image";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface UpdateShaderPrincipalImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "findById" | "setPrincipalImage">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "save" | "delete">;
  fileRepository: Pick<FileRepository, "saveShaderPrincipalFile" | "deleteShaderPrincipalFile">;
}

export class UpdateShaderPrincipalImageUseCase {
  constructor(private readonly deps: UpdateShaderPrincipalImageUseCaseDependencies) {}

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

    if (shader.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const oldImage = shader.principalImage;

    const src = await this.deps.fileRepository.saveShaderPrincipalFile(
      shader.id.toString(),
      file,
    );

    try {
      const image = new Image();
      image.src = src;

      await this.deps.imageRepository.save(image);

      await this.deps.shaderRepository.setPrincipalImage(shader.id, image.id);

      if (oldImage) {
        await this.deps.imageRepository.delete(oldImage.id);

        await this.deps.fileRepository.deleteShaderPrincipalFile(oldImage.src);
      }
    } catch (error) {
      await this.deps.fileRepository.deleteShaderPrincipalFile(src);
      throw error;
    }
  }
}
