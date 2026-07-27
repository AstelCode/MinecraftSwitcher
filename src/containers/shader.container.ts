import { FastifyInstance } from "fastify";
import { CreateShaderUseCase } from "../application/usecases/shader/CreateShaderUseCase";
import { UpdateShaderUseCase } from "../application/usecases/shader/UpdateShaderUseCase";
import { DeleteShaderUseCase } from "../application/usecases/shader/DeleteShaderUseCase";
import { ListShadersUseCase } from "../application/usecases/shader/ListShadersUseCase";
import { ListShadersByAuthorUseCase } from "../application/usecases/shader/ListShadersByAuthorUseCase";
import { ListShadersByPackUseCase } from "../application/usecases/shader/ListShadersByPackUseCase";
import { ListShadersByQueryUseCase } from "../application/usecases/shader/ListShadersByQueryUseCase";
import { AddShaderImageUseCase } from "../application/usecases/shader/AddShaderImageUseCase";
import { DeleteShaderImageUseCase } from "../application/usecases/shader/DeleteShaderImageUseCase";
import { UpdateShaderPrincipalImageUseCase } from "../application/usecases/shader/UpdateShaderPrincipalImageUseCase";
import { UpdateShaderFileUseCase } from "../application/usecases/shader/UpdateShaderFileUseCase";
import { GetShaderUseCase } from "../application/usecases/shader/GetShaderUseCase";
import { AssignShaderToAdminUseCase } from "../application/usecases/shader/AssignShaderToAdminUseCase";
import { ShaderController } from "../presentation/controllers/shader.controller";
import { shaderRoutes } from "../presentation/routes/shader.routes";
import { GlobalContext } from "../container.types";

export function setupShaderDependencies(app: FastifyInstance, globalContext: GlobalContext) {
  const createShaderUseCase = new CreateShaderUseCase(globalContext);
  const updateShaderUseCase = new UpdateShaderUseCase(globalContext);
  const deleteShaderUseCase = new DeleteShaderUseCase(globalContext);
  const listShadersUseCase = new ListShadersUseCase(globalContext);
  const listShadersByAuthorUseCase = new ListShadersByAuthorUseCase(globalContext);
  const listShadersByPackUseCase = new ListShadersByPackUseCase(globalContext);
  const listShadersByQueryUseCase = new ListShadersByQueryUseCase(globalContext);
  const addShaderImageUseCase = new AddShaderImageUseCase(globalContext);
  const deleteShaderImageUseCase = new DeleteShaderImageUseCase(globalContext);
  const updateShaderPrincipalImageUseCase = new UpdateShaderPrincipalImageUseCase(globalContext);
  const updateShaderFileUseCase = new UpdateShaderFileUseCase(globalContext);
  const getShaderUseCase = new GetShaderUseCase(globalContext);
  const assignShaderToAdminUseCase = new AssignShaderToAdminUseCase(globalContext);

  const shaderController = new ShaderController(
    createShaderUseCase,
    updateShaderUseCase,
    deleteShaderUseCase,
    listShadersUseCase,
    listShadersByAuthorUseCase,
    listShadersByPackUseCase,
    listShadersByQueryUseCase,
    addShaderImageUseCase,
    deleteShaderImageUseCase,
    updateShaderPrincipalImageUseCase,
    updateShaderFileUseCase,
    getShaderUseCase,
    assignShaderToAdminUseCase,
  );
  app.register(shaderRoutes, { prefix: "/api/shaders", shaderController });
}
