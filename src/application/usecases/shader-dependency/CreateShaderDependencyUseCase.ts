import { ShaderDependency } from "@/domain/model/ShaderDependency";
import { ShaderDependencyRepository } from "@/domain/repositories/ShaderDependecyRepository";
import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface CreateShaderDependencyUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "findById">;
  modRepository: Pick<ModRepository, "findById">;
  shaderDependencyRepository: Pick<ShaderDependencyRepository, "save">;
  tokenService: Pick<TokenService, "verify">;
}

export class CreateShaderDependencyUseCase {
  constructor(private readonly deps: CreateShaderDependencyUseCaseDependencies) {}

  async execute(token: string, shaderId: bigint, modId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("User not found.");
    }

    const shader = await this.deps.shaderRepository.findById(shaderId);

    if (!shader) {
      throw new Error("Shader not found.");
    }

    if (shader.author.id !== user.id) {
      throw new Error("Unauthorized.");
    }

    const mod = await this.deps.modRepository.findById(modId);

    if (!mod) {
      throw new Error("Mod not found.");
    }

    const dependency = new ShaderDependency();
    dependency.shader = shader;
    dependency.mod = mod;

    await this.deps.shaderDependencyRepository.save(dependency);
  }
}
