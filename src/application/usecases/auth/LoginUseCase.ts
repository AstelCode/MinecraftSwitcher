import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";

export interface LoginUseCaseDependencies {
  userRepository: Pick<UserRepository, "findByEmail">;
  tokenService: Pick<TokenService, "generate">;
  hashService: Pick<HashService, "verifyPassword">;
}

export class LoginUseCase {
  constructor(private readonly deps: LoginUseCaseDependencies) {}

  async execute(email: string, password: string): Promise<string> {
    const user = await this.deps.userRepository.findByEmail(email);
    if (!user) throw new Error("Invalid email or password");
    
    const valid = await this.deps.hashService.verifyPassword(
      user.password.password,
      password,
    );
    if (!valid) throw new Error("Invalid email or password");
    
    const token = this.deps.tokenService.generate({
      id: user.id,
      email: user.email.email,
    });
    
    return token;
  }
}
