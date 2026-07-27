import { Favorite } from "@/domain/model/Favorite";
import { FavoriteRepository } from "@/domain/repositories/FavoriteRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface ListAllFavoritesDeps {
  favoriteRepository: Pick<FavoriteRepository, "listByUser">;
  tokenService: Pick<TokenService, "verify">;
}

export class ListAllFavoritesUseCase {
  constructor(private readonly deps: ListAllFavoritesDeps) {}

  async execute(token: string): Promise<Favorite[]> {
    const payload = await this.deps.tokenService.verify(token);
    return this.deps.favoriteRepository.listByUser(payload.id);
  }
}
