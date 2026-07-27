import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface DeleteUserUseCaseDependencies {
  userRepository: Pick<UserRepository, "delete">;
  tokenService: Pick<TokenService, "verify">;
}

export class DeleteUserUseCase {
  constructor(private readonly deps: DeleteUserUseCaseDependencies) {}

  async executeByToken(token: string): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);

    await this.execute(payload.id);
  }

  async execute(id: bigint): Promise<void> {
    await this.deps.userRepository.delete(id);
  }
}
