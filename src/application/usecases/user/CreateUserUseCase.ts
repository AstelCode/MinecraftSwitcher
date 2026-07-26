import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";
export class CreateUserUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly tokenService: TokenService,
    public readonly hashService: HashService,
  ) {}

  async execute(email: string, password: string): Promise<string> {
    const user = new User();
    user.create(email, password);
    const passwordHashed = await this.hashService.hashPassword(password);
    user.setHashedPassword(passwordHashed);
    await this.userRepository.save(user);
    const token = await this.tokenService.generate({
      id: user.id,
      email: user.email.email,
    });
    return token;
  }
}
