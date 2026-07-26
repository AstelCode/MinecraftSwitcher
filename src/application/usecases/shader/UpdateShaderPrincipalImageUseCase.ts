import { Image } from "@/domain/model/Image";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export class UpdateShaderPrincipalImageUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly shaderRepository: ShaderRepository,
    private readonly tokenService: TokenService,
    private readonly imageRepository: ImageRepository,
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

    const oldImage = shader.principalImage;

    const src = await this.fileRepository.saveShaderPrincipalFile(
      shader.id.toString(),
      file,
    );

    try {
      const image = new Image();
      image.src = src;

      await this.imageRepository.save(image);

      await this.shaderRepository.setPrincipalImage(shader.id, image.id);

      if (oldImage) {
        await this.imageRepository.delete(oldImage.id);

        await this.fileRepository.deleteShaderPrincipalFile(oldImage.src);
      }
    } catch (error) {
      await this.fileRepository.deleteShaderPrincipalFile(src);
      throw error;
    }
  }
}
