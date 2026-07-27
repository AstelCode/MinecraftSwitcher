import { FastifyInstance } from "fastify";
import { LoginUseCase } from "../application/usecases/auth/LoginUseCase";
import { AuthController } from "../presentation/controllers/auth.controller";
import { authRoutes } from "../presentation/routes/auth.routes";

export function setupAuthDependencies(app: FastifyInstance, globalContext: any) {
  const loginUseCase = new LoginUseCase(globalContext);
  const authController = new AuthController(loginUseCase);
  app.register(authRoutes, { prefix: "/api/auth", authController });
}
