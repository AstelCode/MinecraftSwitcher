import { FastifyInstance } from "fastify";
import { PackController } from "../controllers/pack.controller";

export async function packRoutes(app: FastifyInstance, opts: { packController: PackController }) {
  const { packController } = opts;
  app.post("/", (req, reply) => packController.create(req, reply));
  app.put("/:packId", (req, reply) => packController.update(req, reply));
  app.delete("/:packId", (req, reply) => packController.delete(req, reply));
  app.get("/:packId", (req, reply) => packController.get(req, reply));
  app.get("/", (req, reply) => packController.list(req, reply));
  app.get("/admin", (req, reply) => packController.listByAdmin(req, reply));
  app.get("/search", (req, reply) => packController.listByName(req, reply));
  
  app.post("/:packId/mods", (req, reply) => packController.addMod(req, reply));
  app.delete("/:packId/mods/:modId", (req, reply) => packController.removeMod(req, reply));
  
  app.post("/:packId/shaders", (req, reply) => packController.addShader(req, reply));
  app.delete("/:packId/shaders/:shaderId", (req, reply) => packController.removeShader(req, reply));

  // Multipart endpoints
  app.post("/:packId/images", (req, reply) => packController.addImage(req, reply));
  app.delete("/:packId/images/:imageId", (req, reply) => packController.deleteImage(req, reply));
  app.put("/:packId/principal-image", (req, reply) => packController.updatePrincipalImage(req, reply));
  app.put("/:packId/assign", (req, reply) => packController.assign(req, reply));
}
