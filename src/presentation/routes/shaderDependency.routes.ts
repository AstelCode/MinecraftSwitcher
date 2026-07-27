import { FastifyInstance } from "fastify";
import { ShaderDependencyController } from "../controllers/shaderDependency.controller";

export async function shaderDependencyRoutes(app: FastifyInstance, opts: { shaderDependencyController: ShaderDependencyController }) {
  const { shaderDependencyController } = opts;
  app.post("/", (req, reply) => shaderDependencyController.create(req, reply));
  app.delete("/:shaderId/:modId", (req, reply) => shaderDependencyController.delete(req, reply));
  app.get("/:shaderId/:modId", (req, reply) => shaderDependencyController.get(req, reply));
  app.get("/", (req, reply) => shaderDependencyController.list(req, reply));
  app.get("/shader/:shaderId", (req, reply) => shaderDependencyController.listByShader(req, reply));
}
