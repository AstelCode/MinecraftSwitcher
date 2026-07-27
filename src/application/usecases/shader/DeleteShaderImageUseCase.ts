import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteShaderImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "findById">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "findById" | "delete">;
  fileRepository: Pick<FileRepository, "deleteShaderImage">;
}

export class DeleteShaderImageUseCase {
  constructor(private readonly deps: DeleteShaderImageUseCaseDependencies) {}

  async execute(
    token: string,
    shaderId: bigint,
    imageId: bigint,
  ): Promise<void> {
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

    const image = await this.deps.imageRepository.findById(imageId);

    if (!image) {
      throw new Error("Image not found.");
    }

    if (!shader.images.some((img) => img.id === image.id)) {
      throw new Error("Image does not belong to shader.");
    }

    await this.deps.fileRepository.deleteShaderImage(shader.id, image.src);

    await this.deps.imageRepository.delete(image.id);
  }
}
