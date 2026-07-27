import { PackRepository } from "@/domain/repositories/PackRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface AddPackModUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "findById" | "addMod">;
  modRepository: Pick<ModRepository, "findById">;
  tokenService: Pick<TokenService, "verify">;
}

export class AddPackModUseCase {
  constructor(private readonly deps: AddPackModUseCaseDependencies) {}

  async execute(token: string, packId: bigint, modId: bigint): Promise<void> {
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

    const mod = await this.deps.modRepository.findById(modId);

    if (!mod) {
      throw new Error("Mod not found.");
    }

    await this.deps.packRepository.addMod(pack.id, mod.id);
  }
}
