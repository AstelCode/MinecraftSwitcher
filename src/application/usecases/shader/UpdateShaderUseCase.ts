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

export class UpdateShaderUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly shaderRepository: ShaderRepository,
    private readonly tokenService: TokenService,
  ) {}

  async execute(
    token: string,
    shaderId: bigint,
    data: UpdateShaderArgs,
  ): Promise<void> {
    const payload = await this.tokenService.verify(token);

    const user = await this.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const shader = await this.shaderRepository.findById(shaderId);

    if (!shader) {
      throw new Error("Shader not found.");
    }

    if (shader.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    shader.name = data.name;
    shader.description = data.description ?? "";
    shader.versionType = data.versionType;

    await this.shaderRepository.update(shader);
  }
}
