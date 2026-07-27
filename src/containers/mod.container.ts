import { FastifyInstance } from "fastify";
import { CreateModUseCase } from "../application/usecases/mod/CreateModUseCase";
import { UpdateModUseCase } from "../application/usecases/mod/UpdateModUseCase";
import { DeleteModUseCase } from "../application/usecases/mod/DeleteModUseCase";
import { GetModByIdUseCase } from "../application/usecases/mod/GetModByIdUseCase";
import { ListAllModsUseCase } from "../application/usecases/mod/ListAllModsUseCase";
import { ListModsByAdminUseCase } from "../application/usecases/mod/ListModsByAdminUseCase";
import { ListModsByPackUseCase } from "../application/usecases/mod/ListModsByPackUseCase";
import { ListModsByQueryUseCase } from "../application/usecases/mod/ListModsByQueryUseCase";
import { AddModImageUseCase } from "../application/usecases/mod/AddModImageUseCase";
import { DeleteModImageUseCase } from "../application/usecases/mod/DeleteModImageUseCase";
import { UpdateModPrincipalImageUseCase } from "../application/usecases/mod/UpdateModPrincipalImageUseCase";
import { UpdateModFileUseCase } from "../application/usecases/mod/UpdateModFileUseCase";
import { GetModUseCase } from "../application/usecases/mod/GetModUseCase";
import { AssignModToAdminUseCase } from "../application/usecases/mod/AssignModToAdminUseCase";
import { ModController } from "../presentation/controllers/mod.controller";
import { modRoutes } from "../presentation/routes/mod.routes";
import { GlobalContext } from "../container.types";

export function setupModDependencies(app: FastifyInstance, globalContext: GlobalContext) {
  const createModUseCase = new CreateModUseCase(globalContext);
  const updateModUseCase = new UpdateModUseCase(globalContext);
  const deleteModUseCase = new DeleteModUseCase(globalContext);
  const getModByIdUseCase = new GetModByIdUseCase(globalContext);
  const listAllModsUseCase = new ListAllModsUseCase(globalContext);
  const listModsByAdminUseCase = new ListModsByAdminUseCase(globalContext);
  const listModsByPackUseCase = new ListModsByPackUseCase(globalContext);
  const listModsByQueryUseCase = new ListModsByQueryUseCase(globalContext);
  const addModImageUseCase = new AddModImageUseCase(globalContext);
  const deleteModImageUseCase = new DeleteModImageUseCase(globalContext);
  const updateModPrincipalImageUseCase = new UpdateModPrincipalImageUseCase(globalContext);
  const updateModFileUseCase = new UpdateModFileUseCase(globalContext);
  const getModUseCase = new GetModUseCase(globalContext);
  const assignModToAdminUseCase = new AssignModToAdminUseCase(globalContext);

  const modController = new ModController(
    createModUseCase,
    updateModUseCase,
    deleteModUseCase,
    getModByIdUseCase,
    listAllModsUseCase,
    listModsByAdminUseCase,
    listModsByPackUseCase,
    listModsByQueryUseCase,
    addModImageUseCase,
    deleteModImageUseCase,
    updateModPrincipalImageUseCase,
    updateModFileUseCase,
    getModUseCase,
    assignModToAdminUseCase,
  );
  app.register(modRoutes, { prefix: "/api/mods", modController });
}
