import { User } from "@/domain/model/User";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export class CreateUserUseCase {
  constructor(
    public users: UserRepository,
    public token: TokenService,
  ) {}

  create(email: string, password: string) {
    const user = new User();
    user.email = email;
    user.password = password;
    this.users.save(user);
  }
}
