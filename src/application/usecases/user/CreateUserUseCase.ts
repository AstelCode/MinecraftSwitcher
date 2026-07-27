import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";

export interface CreateUserUseCaseDependencies {
  userRepository: Pick<UserRepository, "save">;
  tokenService: Pick<TokenService, "generate">;
  hashService: Pick<HashService, "hashPassword">;
}

export class CreateUserUseCase {
  constructor(private readonly deps: CreateUserUseCaseDependencies) {}

  async execute(email: string, password: string): Promise<string> {
    const user = new User();
    user.create(email, password);
    const passwordHashed = await this.deps.hashService.hashPassword(password);
    user.setHashedPassword(passwordHashed);
    await this.deps.userRepository.save(user);
    const token = await this.deps.tokenService.generate({
      id: user.id,
      email: user.email.email,
    });
    return token;
  }
}
