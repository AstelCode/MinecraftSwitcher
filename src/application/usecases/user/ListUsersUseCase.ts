import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { UserDTO } from "../dto/UserDTO";

export class ListUsersUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
  ) {}

  async execute(token: string): Promise<UserDTO[]> {
    const payload = await this.tokenService.verify(token);
    const user = await this.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    if (!user.isAdmin) throw new Error("Unauthorized operation");
    const users = await this.userRepository.listAll();
    return users.map((item) => ({
      id: item.id.toString(),
      nickname: item.nickname,
      imageUrl: item.image?.src,
    }));
  }
}
