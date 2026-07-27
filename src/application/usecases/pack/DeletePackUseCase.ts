import { FileRepository } from "@/domain/repositories/FileRepository";
import { PackRepository } from "@/domain/repositories/PackRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeletePackUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "findById" | "delete">;
  tokenService: Pick<TokenService, "verify">;
  fileRepository: Pick<FileRepository, "deletePackData">;
}

export class DeletePackUseCase {
  constructor(private readonly deps: DeletePackUseCaseDependencies) {}

  async execute(token: string, packId: bigint): Promise<void> {
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

    await this.deps.packRepository.delete(packId);
    await this.deps.fileRepository.deletePackData(packId);
  }
}
