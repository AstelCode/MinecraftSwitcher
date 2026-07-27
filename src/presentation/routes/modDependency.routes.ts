import { FastifyInstance } from "fastify";
import { ModDependencyController } from "../controllers/modDependency.controller";

export async function modDependencyRoutes(app: FastifyInstance, opts: { modDependencyController: ModDependencyController }) {
  const { modDependencyController } = opts;
  app.post("/", (req, reply) => modDependencyController.create(req, reply));
  app.delete("/:modId/:dependencyId", (req, reply) => modDependencyController.delete(req, reply));
  app.get("/:modId/:dependencyId", (req, reply) => modDependencyController.get(req, reply));
  app.get("/", (req, reply) => modDependencyController.list(req, reply));
  app.get("/mod/:modId", (req, reply) => modDependencyController.listByMod(req, reply));
}
