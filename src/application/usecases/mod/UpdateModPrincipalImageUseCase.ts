import { Image } from "@/domain/model/Image";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ImageRepository } from "@/domain/repositories/ImageRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { UuidService } from "@/domain/services/RandomService";
import { TokenService } from "@/domain/services/TokenService";

export interface UpdateModPrincipalImageUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "findById" | "setPrincipalImage">;
  tokenService: Pick<TokenService, "verify">;
  imageRepository: Pick<ImageRepository, "updateSrc" | "save">;
  fileRepository: Pick<FileRepository, "saveModPrincipalFile" | "deleteModPrincipalFile">;
  uuidService: Pick<UuidService, "generate">;
}

export class UpdateModPrincipalImageUseCase {
  constructor(private readonly deps: UpdateModPrincipalImageUseCaseDependencies) {}

  async execute(token: string, modId: bigint, file: File): Promise<void> {
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

    const oldImage = mod.principalImage;

    const src = await this.deps.fileRepository.saveModPrincipalFile(
      mod.id,
      `${mod.id}_${this.deps.uuidService.generate()}`,
      file,
    );

    try {
      if (oldImage) {
        await this.deps.imageRepository.updateSrc(oldImage.id, src);
      } else {
        const image = new Image();
        image.src = src;
        await this.deps.imageRepository.save(image);
        await this.deps.modRepository.setPrincipalImage(mod.id, image.id);
      }
      if (oldImage) {
        await this.deps.fileRepository.deleteModPrincipalFile(mod.id, oldImage.src);
      }
    } catch (error) {
      await this.deps.fileRepository.deleteModPrincipalFile(mod.id, src);
      throw error;
    }
  }
}
