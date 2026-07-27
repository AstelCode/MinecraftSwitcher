import { PackRepository } from "@/domain/repositories/PackRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface AssignPackToAdminUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "findById" | "assignAuthor">;
  tokenService: Pick<TokenService, "verify">;
}

export class AssignPackToAdminUseCase {
  constructor(private readonly deps: AssignPackToAdminUseCaseDependencies) {}

  async execute(token: string, packId: bigint, adminId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const superAdmin = await this.deps.userRepository.findById(payload.id);

    if (!superAdmin) {
      throw new Error("User not found.");
    }

    if (!superAdmin.isSuperadmin) {
      throw new Error("Unauthorized. Only superadmins can assign packs.");
    }

    const admin = await this.deps.userRepository.findById(adminId);
    if (!admin || (!admin.isAdmin && !admin.isSuperadmin)) {
      throw new Error("Target user is not an admin.");
    }

    const pack = await this.deps.packRepository.findById(packId);

    if (!pack) {
      throw new Error("Pack not found.");
    }
    
    if (pack.author) {
       throw new Error("Pack already has an author.");
    }

    await this.deps.packRepository.assignAuthor(packId, adminId);
  }
}
