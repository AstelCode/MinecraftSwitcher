import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { HashService } from "@/domain/services/HashService";
import { TokenService } from "@/domain/services/TokenService";

export class CreateAdminUseCase {
  constructor(
    public readonly userRepository: UserRepository,
    public readonly tokenService: TokenService,
    public readonly hashService: HashService,
  ) {}
  async execute(token: string, email: string, password: string): Promise<void> {
    const payload = await this.tokenService.verify(token);
    const user = await this.userRepository.findById(payload.id);
    if (!user || !user.isAdmin) throw new Error("Admin not found.");
    const newAdmin = new User();
    newAdmin.create(email, password);
    const hashedPassword = await this.hashService.hashPassword(password);
    newAdmin.setHashedPassword(hashedPassword);
    newAdmin.isAdmin = true;
    await this.userRepository.save(newAdmin);
  }
}
