import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { Image } from "@/domain/model/Image";
import { UuidService } from "@/domain/services/RandomService";

export interface ChangeImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById" | "updateImage">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "updateSrc" | "save">;
  fileRepository: Pick<FileRepository, "saveProfileImage" | "deleteProfileImage">;
  uuidService: Pick<UuidService, "generate">;
}

export class ChangeImageUseCase {
  constructor(private readonly deps: ChangeImageUseCaseDependencies) {}
  
  async execute(token: string, file: File): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");

    const oldImage = user.image;

    let filePath;
    let image;
    try {
      filePath = await this.deps.fileRepository.saveProfileImage(
        `${user.id}_${this.deps.uuidService.generate()}`,
        file,
      );
      try {
        if (oldImage) {
          await this.deps.imageRepository.updateSrc(oldImage.id, filePath);
        } else {
          image = new Image();
          image.src = filePath;
          await this.deps.imageRepository.save(image);
          await this.deps.userRepository.updateImage(user.id, image.id);
        }
      } catch (error) {
        await this.deps.fileRepository.deleteProfileImage(user.id.toString());
        throw error;
      }
      if (oldImage) {
        await this.deps.fileRepository.deleteProfileImage(oldImage.src);
      }
    } catch (error) {
      throw error;
    }
  }
}
