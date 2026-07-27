import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";

export interface CreateAdminUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById" | "save">;
  tokenService: Pick<TokenService, "verify" | "generate">;
  hashService: Pick<HashService, "hashPassword">;
}

export class CreateAdminUseCase {
  constructor(private readonly deps: CreateAdminUseCaseDependencies) {}

  async execute(
    token: string,
    email: string,
    password: string,
  ): Promise<string> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user || !user.isAdmin) throw new Error("Admin not found.");
    const newAdmin = new User();
    newAdmin.create(email, password);
    const hashedPassword = await this.deps.hashService.hashPassword(password);
    newAdmin.setHashedPassword(hashedPassword);
    newAdmin.isAdmin = true;
    await this.deps.userRepository.save(newAdmin);
    const admin_token = await this.deps.tokenService.generate({
      id: newAdmin.id,
      email: newAdmin.email.email,
    });
    return admin_token;
  }
}
