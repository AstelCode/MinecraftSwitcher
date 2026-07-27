import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface AssignShaderToAdminUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "findById" | "assignAuthor">;
  tokenService: Pick<TokenService, "verify">;
}

export class AssignShaderToAdminUseCase {
  constructor(private readonly deps: AssignShaderToAdminUseCaseDependencies) {}

  async execute(token: string, shaderId: bigint, adminId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const superAdmin = await this.deps.userRepository.findById(payload.id);

    if (!superAdmin) {
      throw new Error("User not found.");
    }

    if (!superAdmin.isSuperadmin) {
      throw new Error("Unauthorized. Only superadmins can assign shaders.");
    }

    const admin = await this.deps.userRepository.findById(adminId);
    if (!admin || (!admin.isAdmin && !admin.isSuperadmin)) {
      throw new Error("Target user is not an admin.");
    }

    const shader = await this.deps.shaderRepository.findById(shaderId);

    if (!shader) {
      throw new Error("Shader not found.");
    }
    
    if (shader.author) {
       throw new Error("Shader already has an author.");
    }

    await this.deps.shaderRepository.assignAuthor(shaderId, adminId);
  }
}
