import { FastifyInstance } from "fastify";
import { ConflictController } from "../controllers/conflict.controller";

export async function conflictRoutes(app: FastifyInstance, opts: { conflictController: ConflictController }) {
  const { conflictController } = opts;
  app.post("/", (req, reply) => conflictController.create(req, reply));
  app.delete("/:conflictId", (req, reply) => conflictController.delete(req, reply));
  app.get("/:conflictId", (req, reply) => conflictController.get(req, reply));
  app.get("/", (req, reply) => conflictController.list(req, reply));
  app.get("/mod/:modId", (req, reply) => conflictController.listByMod(req, reply));
  app.get("/shader/:shaderId", (req, reply) => conflictController.listByShader(req, reply));
}
