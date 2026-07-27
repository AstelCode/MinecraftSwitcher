import { Image } from "@/domain/model/Image";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { UuidService } from "@/domain/services/RandomService";
import { TokenService } from "@/domain/services/TokenService";
import { ImageDTO } from "../dto/ImageDTO";

export interface AddModImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "findById" | "addImage">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "save" | "delete">;
  fileRepository: Pick<FileRepository, "saveModImage" | "deleteModImage">;
  uuidService: Pick<UuidService, "generate">;
}

export class AddModImageUseCase {
  constructor(private readonly deps: AddModImageUseCaseDependencies) {}

  async execute(token: string, modId: bigint, file: File): Promise<ImageDTO> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const mod = await this.deps.modRepository.findById(modId);

    if (!mod) {
      throw new Error("Mod not found.");
    }

    if (!user.isSuperadmin && mod.author?.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const uuid = this.deps.uuidService.generate();
    const fileName = `image_${mod.id}_${uuid}`;

    let filePath: string | undefined;
    let image: Image | undefined;

    try {
      filePath = await this.deps.fileRepository.saveModImage(
        mod.id,
        fileName,
        file,
      );

      image = new Image();
      image.src = filePath;
      await this.deps.imageRepository.save(image);

      await this.deps.modRepository.addImage(mod.id, image.id);
    } catch (error) {
      if (image) {
        await this.deps.imageRepository.delete(image.id);
      }

      if (filePath) {
        await this.deps.fileRepository.deleteModImage(mod.id, filePath);
      }

      throw error;
    }

    return {
      id: image.id.toString(),
      src: image.src,
    };
  }
}
