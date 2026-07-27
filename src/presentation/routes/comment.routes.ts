import { FastifyInstance } from "fastify";
import { CommentController } from "../controllers/comment.controller";

export async function commentRoutes(app: FastifyInstance, opts: { commentController: CommentController }) {
  const { commentController } = opts;
  app.post("/mod", (req, reply) => commentController.createModComment(req, reply));
  app.post("/pack", (req, reply) => commentController.createPackComment(req, reply));
  app.post("/shader", (req, reply) => commentController.createShaderComment(req, reply));
  app.put("/:commentId", (req, reply) => commentController.update(req, reply));
  app.delete("/:commentId", (req, reply) => commentController.delete(req, reply));
  app.get("/:commentId", (req, reply) => commentController.get(req, reply));
  app.get("/author", (req, reply) => commentController.listByAuthor(req, reply));
  app.get("/mod/:modId", (req, reply) => commentController.listByMod(req, reply));
  app.get("/pack/:packId", (req, reply) => commentController.listByPack(req, reply));
  app.get("/shader/:shaderId", (req, reply) => commentController.listByShader(req, reply));
}
