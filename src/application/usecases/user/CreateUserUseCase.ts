import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import argon2 from "argon2";
export class CreateUserUseCase {
  constructor(public users: UserRepository, public token: TokenService) {}

  async create(email: string, password: string): Promise<string> {
    const passwordHashed = await argon2.hash(password);
    const user = new User();
    user.fromCredentials(email, passwordHashed);
    this.users.save(user);
    const token = this.token.generate({ id: user.id, nickname: user.nickname });
    return token;
  }
}
