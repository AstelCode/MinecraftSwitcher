import { Pack } from "@/domain/model/Pack";
import { VersionType } from "@/domain/model/VersionType";
import { PackRepository } from "@/domain/repositories/PackRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface CreatePackArgs {
  name: string;
  description?: string | null;
  minVersion: number;
  maxVersion: number;
  versionType: VersionType;
}

export interface CreatePackUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "save">;
  tokenService: Pick<TokenService, "verify">;
}

export class CreatePackUseCase {
  constructor(private readonly deps: CreatePackUseCaseDependencies) {}

  async execute(token: string, data: CreatePackArgs): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const pack = new Pack();
    pack.name = data.name;
    pack.description = data.description ?? "";
    pack.minVersion = data.minVersion;
    pack.maxVersion = data.maxVersion;
    pack.versionType = data.versionType;
    pack.author = user;

    await this.deps.packRepository.save(pack);
  }
}
