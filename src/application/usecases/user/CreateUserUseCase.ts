import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";
export class CreateUserUseCase {
  constructor(
    public readonly users: UserRepository,
    public readonly token: TokenService,
    public readonly hash: HashService,
  ) {}

  async create(email: string, password: string): Promise<string> {
    const user = new User();
    user.create(email, password);
    const passwordHashed = await this.hash.hashPassword(password);
    user.setHashedPassword(passwordHashed);
    await this.users.save(user);
    const token = await this.token.generate({
      id: user.id,
      email: user.email.email,
    });
    return token;
  }
}
