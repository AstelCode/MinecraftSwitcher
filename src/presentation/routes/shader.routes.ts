import { FastifyInstance } from "fastify";
import { ShaderController } from "../controllers/shader.controller";

export async function shaderRoutes(app: FastifyInstance, opts: { shaderController: ShaderController }) {
  const { shaderController } = opts;
  app.post("/", (req, reply) => shaderController.create(req, reply));
  app.put("/:shaderId", (req, reply) => shaderController.update(req, reply));
  app.delete("/:shaderId", (req, reply) => shaderController.delete(req, reply));
  app.get("/:shaderId", (req, reply) => shaderController.get(req, reply));
  app.get("/", (req, reply) => shaderController.listAll(req, reply));
  app.get("/admin", (req, reply) => shaderController.listByAuthor(req, reply));
  app.get("/pack/:packId", (req, reply) => shaderController.listByPack(req, reply));
  app.get("/search", (req, reply) => shaderController.listByQuery(req, reply));
  
  // Multipart endpoints
  app.post("/:shaderId/images", (req, reply) => shaderController.addImage(req, reply));
  app.delete("/:shaderId/images/:imageId", (req, reply) => shaderController.deleteImage(req, reply));
  app.put("/:shaderId/principal-image", (req, reply) => shaderController.updatePrincipalImage(req, reply));
  app.put("/:shaderId/file", (req, reply) => shaderController.updateFile(req, reply));
}
