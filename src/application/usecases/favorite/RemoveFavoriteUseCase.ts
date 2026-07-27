import { FavoriteRepository } from "@/domain/repositories/FavoriteRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface RemoveFavoriteDeps {
  favoriteRepository: Pick<FavoriteRepository, "delete" | "findById">;
  userRepository: Pick<UserRepository, "findById">;
  tokenService: Pick<TokenService, "verify">;
}

export class RemoveFavoriteUseCase {
  constructor(private readonly deps: RemoveFavoriteDeps) {}

  async execute(token: string, favoriteId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const favorite = await this.deps.favoriteRepository.findById(favoriteId);
    if (!favorite) throw new Error("Favorite not found.");
    if (favorite.userId !== payload.id) throw new Error("Unauthorized.");
    await this.deps.favoriteRepository.delete(favoriteId);
  }
}
