import { FastifyInstance } from "fastify";
import { CreateConflictUseCase } from "../application/usecases/conflict/CreateConflictUseCase";
import { DeleteConflictUseCase } from "../application/usecases/conflict/DeleteConflictUseCase";
import { ListConflictsUseCase } from "../application/usecases/conflict/ListConflictsUseCase";
import { ListConflictsByModUseCase } from "../application/usecases/conflict/ListConflictsByModUseCase";
import { ListConflictsByShaderUseCase } from "../application/usecases/conflict/ListConflictsByShaderUseCase";
import { GetConflictUseCase } from "../application/usecases/conflict/GetConflictUseCase";
import { ConflictController } from "../presentation/controllers/conflict.controller";
import { conflictRoutes } from "../presentation/routes/conflict.routes";
import { GlobalContext } from "../container.types";

export function setupConflictDependencies(app: FastifyInstance, globalContext: GlobalContext) {
  const createConflictUseCase = new CreateConflictUseCase(globalContext);
  const deleteConflictUseCase = new DeleteConflictUseCase(globalContext);
  const listConflictsUseCase = new ListConflictsUseCase(globalContext);
  const listConflictsByModUseCase = new ListConflictsByModUseCase(globalContext);
  const listConflictsByShaderUseCase = new ListConflictsByShaderUseCase(globalContext);
  const getConflictUseCase = new GetConflictUseCase(globalContext);

  const conflictController = new ConflictController(
    createConflictUseCase,
    deleteConflictUseCase,
    listConflictsUseCase,
    listConflictsByModUseCase,
    listConflictsByShaderUseCase,
    getConflictUseCase,
  );
  app.register(conflictRoutes, { prefix: "/api/conflicts", conflictController });
}
