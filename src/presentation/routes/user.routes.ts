import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/user.controller";

export async function userRoutes(app: FastifyInstance, opts: { userController: UserController }) {
  const { userController } = opts;
  app.post("/", (req, reply) => userController.create(req, reply));
  app.post("/admin", (req, reply) => userController.createAdmin(req, reply));
  app.post("/superadmin", (req, reply) => userController.createSuperAdmin(req, reply));
  app.patch("/password", (req, reply) => userController.changePassword(req, reply));
  app.patch("/image", (req, reply) => userController.changeImage(req, reply));
  app.delete("/", (req, reply) => userController.delete(req, reply));
  app.get("/", (req, reply) => userController.list(req, reply));
  app.get("/profile", (req, reply) => userController.get(req, reply));
}
