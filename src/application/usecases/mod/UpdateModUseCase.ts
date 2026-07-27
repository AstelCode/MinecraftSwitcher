import { VersionType } from "@/domain/model/VersionType";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { ModDTO } from "../dto/ModDTO";

export interface UpdateModArgs {
  name: string;
  description?: string | null;
  minVersion: number;
  maxVersion: number;
  versionType: VersionType;
}

export interface UpdateModUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "findById" | "update">;
  tokenService: Pick<TokenService, "verify">;
}

export class UpdateModUseCase {
  constructor(private readonly deps: UpdateModUseCaseDependencies) {}

  async execute(
    token: string,
    modId: bigint,
    data: UpdateModArgs,
  ): Promise<ModDTO> {
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

    mod.name = data.name;
    mod.description = data.description ?? "";
    mod.minVersion = data.minVersion;
    mod.maxVersion = data.maxVersion;
    mod.versionType = data.versionType;

    await this.deps.modRepository.update(mod);

    return {
      id: mod.id.toString(),
      name: mod.name,
      imageUrl: mod.principalImage?.src,
    };
  }
}
