import { FastifyInstance } from "fastify";
import { CreateUserUseCase } from "../application/usecases/user/CreateUserUseCase";
import { CreateAdminUseCase } from "../application/usecases/user/CreateAdminUseCase";
import { CreateSuperAdminUseCase } from "../application/usecases/user/CreateSuperAdminUseCase";
import { ChangePasswordUseCase } from "../application/usecases/user/ChangePasswordUseCase";
import { DeleteUserUseCase } from "../application/usecases/user/DeleteUserUseCase";
import { ListUsersUseCase } from "../application/usecases/user/ListUsersUseCase";
import { ChangeImageUseCase } from "../application/usecases/user/ChangeImageUseCase";
import { GetUserUseCase } from "../application/usecases/user/GetUserUseCase";
import { UserController } from "../presentation/controllers/user.controller";
import { userRoutes } from "../presentation/routes/user.routes";

export function setupUserDependencies(app: FastifyInstance, globalContext: any) {
  const createUserUseCase = new CreateUserUseCase(globalContext);
  const createAdminUseCase = new CreateAdminUseCase(globalContext);
  const createSuperAdminUseCase = new CreateSuperAdminUseCase(globalContext);
  const changePasswordUseCase = new ChangePasswordUseCase(globalContext);
  const deleteUserUseCase = new DeleteUserUseCase(globalContext);
  const listUsersUseCase = new ListUsersUseCase(globalContext);
  const changeImageUseCase = new ChangeImageUseCase(globalContext);
  const getUserUseCase = new GetUserUseCase(globalContext);

  const userController = new UserController(
    createUserUseCase,
    createAdminUseCase,
    createSuperAdminUseCase,
    changePasswordUseCase,
    deleteUserUseCase,
    listUsersUseCase,
    changeImageUseCase,
    getUserUseCase,
  );
  app.register(userRoutes, { prefix: "/api/users", userController });
}
