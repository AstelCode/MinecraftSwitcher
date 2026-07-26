import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";

export class ChangePasswordUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly tokenService: TokenService,
    public readonly hashService: HashService,
  ) {}

  async execute(
    token: string,
    lastPassword: string,
    newPassword: string,
  ): Promise<void> {
    if (lastPassword === newPassword) {
      throw new Error("The new password must be different.");
    }
    const payload = await this.tokenService.verify(token);
    const user = await this.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    const valid = await this.hashService.verifyPassword(
      lastPassword,
      user.password.password,
    );
    if (!valid) throw new Error("Current password is incorrect.");
    const hashedPassword = await this.hashService.hashPassword(newPassword);
    await this.userRepository.updatePassword(user.id, hashedPassword);
  }
}
