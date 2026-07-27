import { VersionType } from "@/domain/model/VersionType";
import { PackRepository } from "@/domain/repositories/PackRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface UpdatePackArgs {
  name: string;
  description?: string | null;
  minVersion: number;
  maxVersion: number;
  versionType: VersionType;
}

export interface UpdatePackUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "findById" | "update">;
  tokenService: Pick<TokenService, "verify">;
}

export class UpdatePackUseCase {
  constructor(private readonly deps: UpdatePackUseCaseDependencies) {}

  async execute(
    token: string,
    packId: bigint,
    data: UpdatePackArgs,
  ): Promise<void> {
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

    pack.name = data.name;
    pack.description = data.description ?? "";
    pack.minVersion = data.minVersion;
    pack.maxVersion = data.maxVersion;
    pack.versionType = data.versionType;

    await this.deps.packRepository.update(pack);
  }
}
