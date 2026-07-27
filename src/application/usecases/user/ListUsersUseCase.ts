import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { UserDTO } from "../dto/UserDTO";

export interface ListUsersUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById" | "listAll">;
  tokenService: Pick<TokenService, "verify">;
}

export class ListUsersUseCase {
  constructor(private readonly deps: ListUsersUseCaseDependencies) {}

  async execute(token: string): Promise<UserDTO[]> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    if (!user.isAdmin) throw new Error("Unauthorized operation");
    const users = await this.deps.userRepository.listAll();
    return users.map((item) => ({
      id: item.id.toString(),
      nickname: item.nickname,
      imageUrl: item.image?.src,
      isAdmin: item.isAdmin,
    }));
  }
}
