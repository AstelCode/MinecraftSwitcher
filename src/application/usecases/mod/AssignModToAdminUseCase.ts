import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface AssignModToAdminUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "findById" | "assignAuthor">;
  tokenService: Pick<TokenService, "verify">;
}

export class AssignModToAdminUseCase {
  constructor(private readonly deps: AssignModToAdminUseCaseDependencies) {}

  async execute(token: string, modId: bigint, adminId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const superAdmin = await this.deps.userRepository.findById(payload.id);

    if (!superAdmin) {
      throw new Error("User not found.");
    }

    if (!superAdmin.isSuperadmin) {
      throw new Error("Unauthorized. Only superadmins can assign mods.");
    }

    const admin = await this.deps.userRepository.findById(adminId);
    if (!admin || (!admin.isAdmin && !admin.isSuperadmin)) {
      throw new Error("Target user is not an admin.");
    }

    const mod = await this.deps.modRepository.findById(modId);

    if (!mod) {
      throw new Error("Mod not found.");
    }
    
    if (mod.author) {
       throw new Error("Mod already has an author.");
    }

    await this.deps.modRepository.assignAuthor(modId, adminId);
  }
}
