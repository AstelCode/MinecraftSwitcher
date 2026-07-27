import { FileRepository } from "@/domain/repositories/FileRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteModUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  fileRepository: Pick<FileRepository, "deleteModFile">;
  modRepository: Pick<ModRepository, "findById" | "delete">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeleteModUseCase {
  constructor(private readonly deps: DeleteModUseCaseDependencies) {}

  async execute(token: string, modId: bigint): Promise<void> {
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

    // Se asume que delete maneja la lógica para remover el registro validando permisos o existencia
    await this.deps.modRepository.delete(modId);
    await this.deps.fileRepository.deleteModFile(mod.src);
  }
}
