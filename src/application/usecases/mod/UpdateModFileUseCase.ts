import { FileRepository } from "@/domain/repositories/FileRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface UpdateModFileUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "findById" | "updateSrc">;
  tokenService: Pick<TokenService, "verify">;
  fileRepository: Pick<FileRepository, "saveModFile" | "deleteModFile">;
}

export class UpdateModFileUseCase {
  constructor(private readonly deps: UpdateModFileUseCaseDependencies) {}

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

    if (mod.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const oldSrc = mod.src;
    let newSrc: string | undefined;

    try {
      const fileName = `mod_${mod.id}`;
      newSrc = await this.deps.fileRepository.saveModFile(fileName, file);
      await this.deps.modRepository.updateSrc(mod.id, newSrc);
      if (oldSrc) {
        await this.deps.fileRepository.deleteModFile(oldSrc);
      }
    } catch (error) {
      if (newSrc) {
        await this.deps.fileRepository.deleteModFile(newSrc);
      }
      throw error;
    }
  }
}
