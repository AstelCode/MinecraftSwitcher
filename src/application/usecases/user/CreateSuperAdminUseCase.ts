import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";

export interface CreateSuperAdminUseCaseDependencies {
  userRepository: Pick<UserRepository, "save">;
  tokenService: Pick<TokenService, "generate">;
  hashService: Pick<HashService, "hashPassword">;
}

export class CreateSuperAdminUseCase {
  constructor(private readonly deps: CreateSuperAdminUseCaseDependencies) {}

  async execute(email: string, password: string): Promise<string> {
    const newAdmin = new User();
    newAdmin.create(email, password);
    const hashedPassword = await this.deps.hashService.hashPassword(password);
    newAdmin.setHashedPassword(hashedPassword);
    newAdmin.isAdmin = true;
    await this.deps.userRepository.save(newAdmin);
    return this.deps.tokenService.generate({
      id: newAdmin.id,
      email: newAdmin.email.email,
    });
  }
}
