import { Favorite } from "@/domain/model/Favorite";
import { FavoriteRepository } from "@/domain/repositories/FavoriteRepository";
import { TokenService } from "@/domain/services/TokenService";

export interface ListShaderFavoritesDeps {
  favoriteRepository: Pick<FavoriteRepository, "listShaderFavoritesByUser">;
  tokenService: Pick<TokenService, "verify">;
}

export class ListShaderFavoritesUseCase {
  constructor(private readonly deps: ListShaderFavoritesDeps) {}

  async execute(token: string): Promise<Favorite[]> {
    const payload = await this.deps.tokenService.verify(token);
    return this.deps.favoriteRepository.listShaderFavoritesByUser(payload.id);
  }
}
