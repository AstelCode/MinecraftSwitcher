import { FastifyInstance } from "fastify";
import { CreatePackUseCase } from "../application/usecases/pack/CreatePackUseCase";
import { UpdatePackUseCase } from "../application/usecases/pack/UpdatePackUseCase";
import { DeletePackUseCase } from "../application/usecases/pack/DeletePackUseCase";
import { ListPacksUseCase } from "../application/usecases/pack/ListPacksUseCase";
import { ListPacksByAdminUseCase } from "../application/usecases/pack/ListPacksByAdminUseCase";
import { ListPacksByNameUseCase } from "../application/usecases/pack/ListPacksByNameUseCase";
import { AddPackModUseCase } from "../application/usecases/pack/AddPackModUseCase";
import { AddPackShaderUseCase } from "../application/usecases/pack/AddPackShaderUseCase";
import { DeletePackModUseCase } from "../application/usecases/pack/DeletePackModUseCase";
import { DeletePackShaderUseCase } from "../application/usecases/pack/DeletePackShaderUseCase";
import { AddPackImageUseCase } from "../application/usecases/pack/AddPackImageUseCase";
import { UpdatePackPrincipalImageUseCase } from "../application/usecases/pack/UpdatePackPrincipalImageUseCase";
import { DeletePackImageUseCase } from "../application/usecases/pack/DeletePackImageUseCase";
import { GetPackUseCase } from "../application/usecases/pack/GetPackUseCase";
import { AssignPackToAdminUseCase } from "../application/usecases/pack/AssignPackToAdminUseCase";
import { PackController } from "../presentation/controllers/pack.controller";
import { packRoutes } from "../presentation/routes/pack.routes";
import { GlobalContext } from "../container.types";

export function setupPackDependencies(app: FastifyInstance, globalContext: GlobalContext) {
  const createPackUseCase = new CreatePackUseCase(globalContext);
  const updatePackUseCase = new UpdatePackUseCase(globalContext);
  const deletePackUseCase = new DeletePackUseCase(globalContext);
  const listPacksUseCase = new ListPacksUseCase(globalContext);
  const listPacksByAdminUseCase = new ListPacksByAdminUseCase(globalContext);
  const listPacksByNameUseCase = new ListPacksByNameUseCase(globalContext);
  const addPackModUseCase = new AddPackModUseCase(globalContext);
  const addPackShaderUseCase = new AddPackShaderUseCase(globalContext);
  const deletePackModUseCase = new DeletePackModUseCase(globalContext);
  const deletePackShaderUseCase = new DeletePackShaderUseCase(globalContext);
  const addPackImageUseCase = new AddPackImageUseCase(globalContext);
  const updatePackPrincipalImageUseCase = new UpdatePackPrincipalImageUseCase(globalContext);
  const deletePackImageUseCase = new DeletePackImageUseCase(globalContext);
  const getPackUseCase = new GetPackUseCase(globalContext);
  const assignPackToAdminUseCase = new AssignPackToAdminUseCase(globalContext);

  const packController = new PackController(
    createPackUseCase,
    updatePackUseCase,
    deletePackUseCase,
    listPacksUseCase,
    listPacksByAdminUseCase,
    listPacksByNameUseCase,
    addPackModUseCase,
    addPackShaderUseCase,
    deletePackModUseCase,
    deletePackShaderUseCase,
    addPackImageUseCase,
    updatePackPrincipalImageUseCase,
    deletePackImageUseCase,
    getPackUseCase,
    assignPackToAdminUseCase,
  );
  app.register(packRoutes, { prefix: "/api/packs", packController });
}
