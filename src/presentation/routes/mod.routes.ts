import { FastifyInstance } from "fastify";
import { ModController } from "../controllers/mod.controller";

export async function modRoutes(app: FastifyInstance, opts: { modController: ModController }) {
  const { modController } = opts;
  app.post("/", (req, reply) => modController.create(req, reply));
  app.put("/:modId", (req, reply) => modController.update(req, reply));
  app.delete("/:modId", (req, reply) => modController.delete(req, reply));
  app.get("/:modId", (req, reply) => modController.getById(req, reply));
  app.get("/", (req, reply) => modController.listAll(req, reply));
  app.get("/admin", (req, reply) => modController.listByAdmin(req, reply));
  app.get("/pack/:packId", (req, reply) => modController.listByPack(req, reply));
  app.get("/search", (req, reply) => modController.listByQuery(req, reply));
  
  // Multipart endpoints
  app.post("/:modId/images", (req, reply) => modController.addImage(req, reply));
  app.delete("/:modId/images/:imageId", (req, reply) => modController.deleteImage(req, reply));
  app.put("/:modId/principal-image", (req, reply) => modController.updatePrincipalImage(req, reply));
  app.put("/:modId/file", (req, reply) => modController.updateFile(req, reply));
}
