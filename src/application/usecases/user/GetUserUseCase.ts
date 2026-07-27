import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { UserDTO } from "../dto/UserDTO";

export interface GetUserUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  tokenService: Pick<TokenService, "verify">;
}

export class GetUserUseCase {
  constructor(private readonly deps: GetUserUseCaseDependencies) {}

  async execute(token: string): Promise<UserDTO> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found");
    return {
      id: user.id.toString(),
      nickname: user.nickname,
      imageUrl: user.image?.src,
      isAdmin: user.isAdmin,
    };
  }
}
