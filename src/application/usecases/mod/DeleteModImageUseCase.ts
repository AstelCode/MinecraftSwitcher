import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteModImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "findById">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "findById" | "delete">;
  fileRepository: Pick<FileRepository, "deleteModImage">;
}

export class DeleteModImageUseCase {
  constructor(private readonly deps: DeleteModImageUseCaseDependencies) {}

  async execute(
    token: string,
    modId: bigint,
    imageId: bigint,
  ): Promise<void> {
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

    const image = await this.deps.imageRepository.findById(imageId);

    if (!image) {
      throw new Error("Image not found.");
    }

    if (!mod.images.some((img) => img.id === image.id)) {
      throw new Error("Image does not belong to mod.");
    }

    await this.deps.fileRepository.deleteModImage(mod.id, image.src);

    await this.deps.imageRepository.delete(image.id);
  }
}
