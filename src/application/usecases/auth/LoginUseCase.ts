import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";

export class LoginUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly tokenService: TokenService,
    public readonly hashService: HashService,
  ) {}
  async execute(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("Invalid email or password");
    const valid = await this.hashService.verifyPassword(
      user.password.password,
      password,
    );
    if (!valid) throw new Error("Invalid email or password");
    const token = this.tokenService.generate({
      id: user.id,
      email: user.email.email,
    });
    return token;
  }
}
