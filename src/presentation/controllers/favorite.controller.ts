import { FastifyReply, FastifyRequest } from "fastify";
import { extractToken } from "../helpers/auth.helper";
import { AddFavoriteUseCase } from "../../application/usecases/favorite/AddFavoriteUseCase";
import { RemoveFavoriteUseCase } from "../../application/usecases/favorite/RemoveFavoriteUseCase";
import { ListAllFavoritesUseCase } from "../../application/usecases/favorite/ListAllFavoritesUseCase";
import { ListModFavoritesUseCase } from "../../application/usecases/favorite/ListModFavoritesUseCase";
import { ListPackFavoritesUseCase } from "../../application/usecases/favorite/ListPackFavoritesUseCase";
import { ListShaderFavoritesUseCase } from "../../application/usecases/favorite/ListShaderFavoritesUseCase";
import { AddFavoriteSchema, FavoriteIdParamsSchema } from "../schemas/favorite.schema";

export class FavoriteController {
  constructor(
    private readonly addFavoriteUseCase: AddFavoriteUseCase,
    private readonly removeFavoriteUseCase: RemoveFavoriteUseCase,
    private readonly listAllFavoritesUseCase: ListAllFavoritesUseCase,
    private readonly listModFavoritesUseCase: ListModFavoritesUseCase,
    private readonly listPackFavoritesUseCase: ListPackFavoritesUseCase,
    private readonly listShaderFavoritesUseCase: ListShaderFavoritesUseCase,
  ) {}

  /** POST /api/favorites — Agrega un mod, pack o shader a favoritos */
  async add(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const { type, targetId } = AddFavoriteSchema.parse(req.body);
    await this.addFavoriteUseCase.execute(token, type, BigInt(targetId));
    return reply.status(201).send({ message: `${type} added to favorites` });
  }

  /** DELETE /api/favorites/:favoriteId — Quita un favorito por ID */
  async remove(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const { favoriteId } = FavoriteIdParamsSchema.parse(req.params);
    await this.removeFavoriteUseCase.execute(token, BigInt(favoriteId));
    return reply.status(200).send({ message: "Removed from favorites" });
  }

  /** GET /api/favorites — Lista todos los favoritos del usuario */
  async listAll(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const favorites = await this.listAllFavoritesUseCase.execute(token);
    return reply.status(200).send(favorites);
  }

  /** GET /api/favorites/mods — Solo favoritos de tipo mod */
  async listMods(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const favorites = await this.listModFavoritesUseCase.execute(token);
    return reply.status(200).send(favorites);
  }

  /** GET /api/favorites/packs — Solo favoritos de tipo pack */
  async listPacks(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const favorites = await this.listPackFavoritesUseCase.execute(token);
    return reply.status(200).send(favorites);
  }

  /** GET /api/favorites/shaders — Solo favoritos de tipo shader */
  async listShaders(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const favorites = await this.listShaderFavoritesUseCase.execute(token);
    return reply.status(200).send(favorites);
  }
}
