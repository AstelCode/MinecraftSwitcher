import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export class LoginUseCase {
  constructor(public users: UserRepository, public token: TokenService) {}
  async login(email: string, password: string): Promise<string> {
    const user = await this.users.findByEmail(email);
    if (!user) throw new Error("User don't exits");
    if (user.password != password) throw new Error("The password is incorrect");
    const token = this.token.generate({ id: user.id, nickname: user.nickname });
    return token;
  }
}
