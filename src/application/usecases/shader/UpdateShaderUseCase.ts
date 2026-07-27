import { Shader } from "@/domain/model/Shader";
import { VersionType } from "@/domain/model/VersionType";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface UpdateShaderArgs {
  name: string;
  description?: string | null;
  versionType: VersionType;
}

export interface UpdateShaderUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "findById" | "update">;
  tokenService: Pick<TokenService, "verify">;
}

export class UpdateShaderUseCase {
  constructor(private readonly deps: UpdateShaderUseCaseDependencies) {}

  async execute(
    token: string,
    shaderId: bigint,
    data: UpdateShaderArgs,
  ): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const shader = await this.deps.shaderRepository.findById(shaderId);

    if (!shader) {
      throw new Error("Shader not found.");
    }

    if (!user.isSuperadmin && shader.author?.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    shader.name = data.name;
    shader.description = data.description ?? "";
    shader.versionType = data.versionType;

    await this.deps.shaderRepository.update(shader);
  }
}
