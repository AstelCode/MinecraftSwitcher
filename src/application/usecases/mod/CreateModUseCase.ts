import { Mod } from "@/domain/model/Mod";
import { VersionType } from "@/domain/model/VersionType";
import { FileRepository } from "@/domain/repositories/FileRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { UuidService } from "@/domain/services/RandomService";
import { TokenService } from "@/domain/services/TokenService";
import { ModDTO } from "../dto/ModDTO";

export interface CreateModArgs {
  name: string;
  description?: string | null;
  minVersion: number;
  maxVersion: number;
  file: File;
  versionType: VersionType;
}

export interface CreateModUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "save" | "delete" | "updateSrc">;
  tokenService: Pick<TokenService, "verify">;
  fileRepository: Pick<FileRepository, "saveModFile" | "deleteModFile" | "deleteModData">;
  uuidService: Pick<UuidService, "generate">;
}

export class CreateModUseCase {
  constructor(private readonly deps: CreateModUseCaseDependencies) {}

  async execute(token: string, data: CreateModArgs): Promise<ModDTO> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }
    if (!user.isAdmin) {
      throw new Error("Unauthorized.");
    }

    let mod: Mod | undefined;
    let filePath: string | undefined;

    try {
      mod = new Mod();
      mod.name = data.name;
      mod.description = data.description ?? "";
      mod.minVersion = data.minVersion;
      mod.maxVersion = data.maxVersion;
      mod.versionType = data.versionType;
      mod.weight = data.file.size;
      mod.src = "";
      mod.author = user;

      await this.deps.modRepository.save(mod);

      const fileName = `mod_${this.deps.uuidService.generate()}`;
      filePath = await this.deps.fileRepository.saveModFile(mod.id, fileName, data.file);
      
      mod.src = filePath;
      await this.deps.modRepository.updateSrc(mod.id, filePath);

    } catch (error) {
      if (mod?.id !== undefined) {
        if (filePath) {
          await this.deps.fileRepository.deleteModFile(mod.id, filePath);
        }
        await this.deps.modRepository.delete(mod.id);
      }

      throw error;
    }
    return {
      id: mod.id.toString(),
      name: mod.name,
    };
  }
}
