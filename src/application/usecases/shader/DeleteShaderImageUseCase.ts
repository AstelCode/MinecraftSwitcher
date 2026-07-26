import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export class DeleteShaderImageUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly shaderRepository: ShaderRepository,
    public readonly tokenService: TokenService,
    public readonly imageRepository: ImageRepository,
    public readonly fileRepository: FileRepository,
  ) {}

  async execute(
    token: string,
    shaderId: bigint,
    imageId: bigint,
  ): Promise<void> {
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

    const image = await this.imageRepository.findById(imageId);

    if (!image) {
      throw new Error("Image not found.");
    }

    if (!shader.images.some((img) => img.id === image.id)) {
      throw new Error("Image does not belong to shader.");
    }

    await this.fileRepository.deleteShaderImage(image.src);

    await this.imageRepository.delete(image.id);
  }
}
