import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";

export class LoginUseCase {
  constructor(
    public readonly users: UserRepository,
    public readonly token: TokenService,
    public readonly hash: HashService,
  ) {}
  async login(email: string, password: string): Promise<string> {
    const user = await this.users.findByEmail(email);
    if (!user) throw new Error("Invalid email or password");
    const valid = await this.hash.verifyPassword(
      user.password.password,
      password,
    );
    if (!valid) throw new Error("Invalid email or password");
    const token = this.token.generate({ id: user.id, email: user.email.email });
    return token;
  }
}
