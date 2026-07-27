import { Image } from "@/domain/model/Image";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { PackRepository } from "@/domain/repositories/PackRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface UpdatePackPrincipalImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "findById" | "setPrincipalImage">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "save" | "delete">;
  fileRepository: Pick<FileRepository, "savePackPrincipalFile" | "deletePackPrincipalFile">;
}

export class UpdatePackPrincipalImageUseCase {
  constructor(private readonly deps: UpdatePackPrincipalImageUseCaseDependencies) {}

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

    if (!user.isSuperadmin && pack.author?.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const oldImage = pack.principalImage;

    const src = await this.deps.fileRepository.savePackPrincipalFile(
      pack.id,
      pack.id.toString(),
      file,
    );

    try {
      const image = new Image();
      image.src = src;

      await this.deps.imageRepository.save(image);

      await this.deps.packRepository.setPrincipalImage(pack.id, image.id);

      if (oldImage) {
        await this.deps.imageRepository.delete(oldImage.id);

        await this.deps.fileRepository.deletePackPrincipalFile(pack.id, oldImage.src);
      }
    } catch (error) {
      await this.deps.fileRepository.deletePackPrincipalFile(pack.id, src);
      throw error;
    }
  }
}
