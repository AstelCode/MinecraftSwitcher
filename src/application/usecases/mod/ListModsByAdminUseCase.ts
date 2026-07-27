import { ModRepository } from "@/domain/repositories/ModRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { ModDTO } from "../dto/ModDTO";

export interface ListModsByAdminUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  modRepository: Pick<ModRepository, "listByAdmin">;
  tokenService: Pick<TokenService, "verify">;
}

export class ListModsByAdminUseCase {
  constructor(private readonly deps: ListModsByAdminUseCaseDependencies) {}

  async execute(token: string): Promise<ModDTO[]> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);

    if (!user) throw new Error("User not found.");

    const data = await this.deps.modRepository.listByAdmin(user.id);

    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
