import { PackRepository } from "@/domain/repositories/PackRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeletePackUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "findById" | "delete">;
  tokenService: Pick<TokenService, "verify">;
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

    if (pack.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    await this.deps.packRepository.delete(packId);
  }
}
