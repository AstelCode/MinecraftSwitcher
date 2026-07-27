import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";

export interface ChangePasswordUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById" | "updatePassword">;
  tokenService: Pick<TokenService, "verify">;
  hashService: Pick<HashService, "verifyPassword" | "hashPassword">;
}

export class ChangePasswordUseCase {
  constructor(private readonly deps: ChangePasswordUseCaseDependencies) {}

  async execute(
    token: string,
    lastPassword: string,
    newPassword: string,
  ): Promise<void> {
    if (lastPassword === newPassword) {
      throw new Error("The new password must be different.");
    }
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const valid = await this.deps.hashService.verifyPassword(
      user.password.password,
      lastPassword,
    );
    if (!valid) throw new Error("Current password is incorrect.");
    const hashedPassword = await this.deps.hashService.hashPassword(newPassword);
    await this.deps.userRepository.updatePassword(user.id, hashedPassword);
  }
}
