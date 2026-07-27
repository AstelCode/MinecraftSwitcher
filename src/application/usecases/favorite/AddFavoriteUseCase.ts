import { FavoriteRepository } from "@/domain/repositories/FavoriteRepository";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { TokenService } from "@/domain/services/TokenService";
import { Favorite, FavoriteType } from "@/domain/model/Favorite";

export interface AddFavoriteDeps {
  favoriteRepository: Pick<FavoriteRepository, "save" | "findByUserAndMod" | "findByUserAndPack" | "findByUserAndShader">;
  userRepository: Pick<UserRepository, "findById">;
  tokenService: Pick<TokenService, "verify">;
}

export class AddFavoriteUseCase {
  constructor(private readonly deps: AddFavoriteDeps) {}

  async execute(token: string, type: FavoriteType, targetId: bigint): Promise<void> {
    const payload = await this.deps.tokenService.verify(token);
    const user = await this.deps.userRepository.findById(payload.id);
    if (!user) throw new Error("User not found.");

    const favorite = new Favorite();

    if (type === "mod") {
      const existing = await this.deps.favoriteRepository.findByUserAndMod(user.id, targetId);
      if (existing) throw new Error("Mod already in favorites.");
      favorite.forMod(user.id, targetId);
    } else if (type === "pack") {
      const existing = await this.deps.favoriteRepository.findByUserAndPack(user.id, targetId);
      if (existing) throw new Error("Pack already in favorites.");
      favorite.forPack(user.id, targetId);
    } else {
      const existing = await this.deps.favoriteRepository.findByUserAndShader(user.id, targetId);
      if (existing) throw new Error("Shader already in favorites.");
      favorite.forShader(user.id, targetId);
    }

    await this.deps.favoriteRepository.save(favorite);
  }
}
