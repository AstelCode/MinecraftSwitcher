import { Image } from "@/domain/model/Image";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { PackRepository } from "@/domain/repositories/PackRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { UuidService } from "@/domain/services/RandomService";
import { TokenService } from "@/domain/services/TokenService";

export interface AddPackImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "findById" | "addImage">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "save" | "delete">;
  fileRepository: Pick<FileRepository, "savePackImage" | "deletePackImage">;
  uuidService: Pick<UuidService, "generate">;
}

export class AddPackImageUseCase {
  constructor(private readonly deps: AddPackImageUseCaseDependencies) {}

  async execute(token: string, packId: bigint, file: File): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const pack = await this.deps.packRepository.findById(packId);

    if (!pack) {
      throw new Error("Pack not found.");
    }

    if (pack.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const uuid = this.deps.uuidService.generate();

    const fileName = `image_${pack.id}_${uuid}`;

    let filePath: string | undefined;
    let image: Image | undefined;

    try {
      filePath = await this.deps.fileRepository.savePackImage(fileName, file);

      image = new Image();
      image.src = filePath;
      await this.deps.imageRepository.save(image);

      await this.deps.packRepository.addImage(pack.id, image.id);
    } catch (error) {
      if (image) {
        await this.deps.imageRepository.delete(image.id);
      }

      if (filePath) {
        await this.deps.fileRepository.deletePackImage(filePath);
      }

      throw error;
    }
  }
}
