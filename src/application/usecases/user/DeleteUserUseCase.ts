import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export class DeleteUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
  ) {}

  async executeByToken(token: string): Promise<void> {
    const payload = await this.tokenService.verify(token);

    await this.execute(payload.id);
  }

  async execute(id: bigint): Promise<void> {
    await this.userRepository.delete(id);
  }
}
