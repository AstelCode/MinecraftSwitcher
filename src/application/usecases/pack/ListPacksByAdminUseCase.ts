import { PackRepository } from "@/domain/repositories/PackRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { PackDTO } from "../dto/PackDTO";

export interface ListPacksByAdminUseCaseDependencies {
  userRepository: Pick<UserRepository, "findById">;
  packRepository: Pick<PackRepository, "listByAdmin">;
  tokenService: Pick<TokenService, "verify">;
}

export class ListPacksByAdminUseCase {
  constructor(private readonly deps: ListPacksByAdminUseCaseDependencies) {}

  async execute(token: string): Promise<PackDTO[]> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");
    
    const data = await this.deps.packRepository.listByAdmin(user.id);
    return data.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      imageUrl: item.principalImage?.src,
    }));
  }
}
