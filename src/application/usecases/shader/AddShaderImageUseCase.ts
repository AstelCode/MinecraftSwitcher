import { Image } from "@/domain/model/Image";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { UuidService } from "@/domain/services/RandomService";
import { TokenService } from "@/domain/services/TokenService";

export interface AddShaderImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "findById" | "addImage">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "save" | "delete">;
  fileRepository: Pick<FileRepository, "saveShaderImage" | "deleteShaderImage">;
  uuidService: Pick<UuidService, "generate">;
}

export class AddShaderImageUseCase {
  constructor(private readonly deps: AddShaderImageUseCaseDependencies) {}

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

    if (shader.author?.id !== user.id && !user.isSuperadmin) {
      throw new Error("Unauthorized.");
    }

    const uuid = this.deps.uuidService.generate();

    const fileName = `image_${shader.id}_${uuid}`;

    let filePath: string | undefined;
    let image: Image | undefined;

    try {
      filePath = await this.deps.fileRepository.saveShaderImage(
        shader.id,
        fileName,
        file,
      );

      image = new Image();
      image.src = filePath;

      await this.deps.imageRepository.save(image);

      await this.deps.shaderRepository.addImage(shader.id, image.id);
    } catch (error) {
      if (image) {
        await this.deps.imageRepository.delete(image.id);
      }

      if (filePath) {
        await this.deps.fileRepository.deleteShaderImage(shader.id, filePath);
      }

      throw error;
    }
  }
}
