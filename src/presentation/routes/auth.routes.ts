import { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/auth.controller";

export async function authRoutes(app: FastifyInstance, opts: { authController: AuthController }) {
  const { authController } = opts;
  app.post("/login", (req, reply) => authController.login(req, reply));
}
