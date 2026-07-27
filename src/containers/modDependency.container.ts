import { FastifyInstance } from "fastify";
import { CreateModDependencyUseCase } from "../application/usecases/mod-dependency/CreateModDependencyUseCase";
import { DeleteModDependencyUseCase } from "../application/usecases/mod-dependency/DeleteModDependencyUseCase";
import { ListModDependenciesByModUseCase } from "../application/usecases/mod-dependency/ListModDependenciesByModUseCase";
import { ListModDependenciesUseCase } from "../application/usecases/mod-dependency/ListModDependenciesUseCase";
import { GetModDependencyUseCase } from "../application/usecases/mod-dependency/GetModDependencyUseCase";
import { ModDependencyController } from "../presentation/controllers/modDependency.controller";
import { modDependencyRoutes } from "../presentation/routes/modDependency.routes";
import { GlobalContext } from "../container.types";

export function setupModDependencyDependencies(app: FastifyInstance, globalContext: GlobalContext) {
  const createModDependencyUseCase = new CreateModDependencyUseCase(globalContext);
  const deleteModDependencyUseCase = new DeleteModDependencyUseCase(globalContext);
  const listModDependenciesByModUseCase = new ListModDependenciesByModUseCase(globalContext);
  const listModDependenciesUseCase = new ListModDependenciesUseCase(globalContext);
  const getModDependencyUseCase = new GetModDependencyUseCase(globalContext);

  const modDependencyController = new ModDependencyController(
    createModDependencyUseCase,
    deleteModDependencyUseCase,
    listModDependenciesUseCase,
    listModDependenciesByModUseCase,
    getModDependencyUseCase,
  );
  app.register(modDependencyRoutes, { prefix: "/api/mod-dependencies", modDependencyController });
}
