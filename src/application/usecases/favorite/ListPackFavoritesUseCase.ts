import { Favorite } from "@/domain/model/Favorite";
import { FavoriteRepository } from "@/domain/repositories/FavoriteRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface ListPackFavoritesDeps {
  favoriteRepository: Pick<FavoriteRepository, "listPackFavoritesByUser">;
  tokenService: Pick<TokenService, "verify">;
}

export class ListPackFavoritesUseCase {
  constructor(private readonly deps: ListPackFavoritesDeps) {}

  async execute(token: string): Promise<Favorite[]> {
    const payload = await this.deps.tokenService.verify(token);
    return this.deps.favoriteRepository.listPackFavoritesByUser(payload.id);
  }
}
