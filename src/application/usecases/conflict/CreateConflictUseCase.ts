import { Conflict } from "@/domain/model/Conflict";
import { ConflictRepository } from "@/domain/repositories/ConflictRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface CreateConflictArgs {
  modId: bigint;
  conflictModId?: bigint;
  conflictShaderId?: bigint;
}

export interface CreateConflictUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "findById">;
  conflictRepository: Pick<ConflictRepository, "save">;
  tokenService: Pick<TokenService, "verify">;
}

export class CreateConflictUseCase {
  constructor(private readonly deps: CreateConflictUseCaseDependencies) {}

  async execute(token: string, data: CreateConflictArgs): Promise<void> {
    if (!data.conflictModId && !data.conflictShaderId) {
      throw new Error("Conflict must have either a conflictModId or a conflictShaderId.");
    }

    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const mod = await this.deps.modRepository.findById(data.modId);

    if (!mod) {
      throw new Error("Mod not found.");
    }

    if (mod.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const conflict = new Conflict();
    conflict.mod = mod;

    if (data.conflictModId) {
      const conflictMod = await this.deps.modRepository.findById(data.conflictModId);
      if (!conflictMod) throw new Error("Conflict Mod not found.");
      conflict.conflictMod = conflictMod;
    }

    if (data.conflictShaderId) {
      const conflictShader = await this.deps.shaderRepository.findById(data.conflictShaderId);
      if (!conflictShader) throw new Error("Conflict Shader not found.");
      conflict.conflictShader = conflictShader;
    }

    await this.deps.conflictRepository.save(conflict);
  }
}
