import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { PackRepository } from "@/domain/repositories/PackRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeletePackImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "findById">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "findById" | "delete">;
  fileRepository: Pick<FileRepository, "deletePackImage">;
}

export class DeletePackImageUseCase {
  constructor(private readonly deps: DeletePackImageUseCaseDependencies) {}

  async execute(
    token: string,
    packId: bigint,
    imageId: bigint,
  ): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const pack = await this.deps.packRepository.findById(packId);

    if (!pack) {
      throw new Error("Pack not found.");
    }

    if (!user.isSuperadmin && pack.author?.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const image = await this.deps.imageRepository.findById(imageId);

    if (!image) {
      throw new Error("Image not found.");
    }

    if (!pack.images.some((img) => img.id === image.id)) {
      throw new Error("Image does not belong to pack.");
    }

    await this.deps.fileRepository.deletePackImage(pack.id, image.src);

    await this.deps.imageRepository.delete(image.id);
  }
}
