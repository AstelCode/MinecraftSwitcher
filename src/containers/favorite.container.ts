import { FastifyInstance } from "fastify";
import { AddFavoriteUseCase } from "../application/usecases/favorite/AddFavoriteUseCase";
import { RemoveFavoriteUseCase } from "../application/usecases/favorite/RemoveFavoriteUseCase";
import { ListAllFavoritesUseCase } from "../application/usecases/favorite/ListAllFavoritesUseCase";
import { ListModFavoritesUseCase } from "../application/usecases/favorite/ListModFavoritesUseCase";
import { ListPackFavoritesUseCase } from "../application/usecases/favorite/ListPackFavoritesUseCase";
import { ListShaderFavoritesUseCase } from "../application/usecases/favorite/ListShaderFavoritesUseCase";
import { FavoriteController } from "../presentation/controllers/favorite.controller";
import { favoriteRoutes } from "../presentation/routes/favorite.routes";
import { GlobalContext } from "../container.types";

export function setupFavoriteDependencies(app: FastifyInstance, globalContext: GlobalContext) {
  const addFavoriteUseCase = new AddFavoriteUseCase(globalContext);
  const removeFavoriteUseCase = new RemoveFavoriteUseCase(globalContext);
  const listAllFavoritesUseCase = new ListAllFavoritesUseCase(globalContext);
  const listModFavoritesUseCase = new ListModFavoritesUseCase(globalContext);
  const listPackFavoritesUseCase = new ListPackFavoritesUseCase(globalContext);
  const listShaderFavoritesUseCase = new ListShaderFavoritesUseCase(globalContext);

  const favoriteController = new FavoriteController(
    addFavoriteUseCase,
    removeFavoriteUseCase,
    listAllFavoritesUseCase,
    listModFavoritesUseCase,
    listPackFavoritesUseCase,
    listShaderFavoritesUseCase,
  );

  app.register(favoriteRoutes, { prefix: "/api/favorites", favoriteController });
}
