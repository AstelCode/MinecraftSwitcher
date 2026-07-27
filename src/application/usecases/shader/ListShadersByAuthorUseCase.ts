import { ShaderRepository } from "@/domain/repositories/ShaderRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { ShaderDTO } from "../dto/ShaderDTO";

export interface ListShadersByAuthorUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  shaderRepository: Pick<ShaderRepository, "listByAuthor">;
  tokenService: Pick<TokenService, "verify">;
}

export class ListShadersByAuthorUseCase {
  constructor(private readonly deps: ListShadersByAuthorUseCaseDependencies) {}

  async execute(token: string): Promise<ShaderDTO[]> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const data = await this.deps.shaderRepository.listByAuthor(user.id);
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
