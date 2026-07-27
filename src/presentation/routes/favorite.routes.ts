import { FastifyInstance } from "fastify";
import { FavoriteController } from "../controllers/favorite.controller";

export async function favoriteRoutes(
  app: FastifyInstance,
  opts: { favoriteController: FavoriteController },
) {
  const { favoriteController } = opts;

  // Agrega un favorito (body: { type: "mod"|"pack"|"shader", targetId: string })
  app.post("/", (req, reply) => favoriteController.add(req, reply));

  // Quita un favorito por su ID
  app.delete("/:favoriteId", (req, reply) => favoriteController.remove(req, reply));

  // Lista todos los favoritos del usuario autenticado
  app.get("/", (req, reply) => favoriteController.listAll(req, reply));

  // Lista favoritos filtrados por tipo
  app.get("/mods", (req, reply) => favoriteController.listMods(req, reply));
  app.get("/packs", (req, reply) => favoriteController.listPacks(req, reply));
  app.get("/shaders", (req, reply) => favoriteController.listShaders(req, reply));
}
