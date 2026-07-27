import { Favorite } from "@/domain/model/Favorite";
import { FavoriteRepository } from "@/domain/repositories/FavoriteRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface ListModFavoritesDeps {
  favoriteRepository: Pick<FavoriteRepository, "listModFavoritesByUser">;
  tokenService: Pick<TokenService, "verify">;
}

export class ListModFavoritesUseCase {
  constructor(private readonly deps: ListModFavoritesDeps) {}

  async execute(token: string): Promise<Favorite[]> {
    const payload = await this.deps.tokenService.verify(token);
    return this.deps.favoriteRepository.listModFavoritesByUser(payload.id);
  }
}
