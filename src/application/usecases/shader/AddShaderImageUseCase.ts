import { Image } from "@/domain/model/Image";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { UuidService } from "@/domain/services/RandomService";
import { TokenService } from "@/domain/services/TokenService";

export class AddShaderImageUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly shaderRepository: ShaderRepository,
    private readonly tokenService: TokenService,
    private readonly imageRepository: ImageRepository,
    private readonly fileRepository: FileRepository,
    private readonly uuidService: UuidService,
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

    const uuid = this.uuidService.generate();

    const fileName = `image_${shader.id}_${uuid}`;

    let filePath: string | undefined;
    let image: Image | undefined;

    try {
      filePath = await this.fileRepository.saveShaderImage(fileName, file);

      image = new Image();
      image.src = filePath;

      await this.imageRepository.save(image);

      await this.shaderRepository.addImage(shader.id, image.id);
    } catch (error) {
      if (image) {
        await this.imageRepository.delete(image.id);
      }

      if (filePath) {
        await this.fileRepository.deleteShaderFile(filePath);
      }

      throw error;
    }
  }
}
