import { FastifyInstance } from "fastify";
import { CreateShaderDependencyUseCase } from "../application/usecases/shader-dependency/CreateShaderDependencyUseCase";
import { DeleteShaderDependencyUseCase } from "../application/usecases/shader-dependency/DeleteShaderDependencyUseCase";
import { ListShaderDependenciesByShaderUseCase } from "../application/usecases/shader-dependency/ListShaderDependenciesByShaderUseCase";
import { ListShaderDependenciesUseCase } from "../application/usecases/shader-dependency/ListShaderDependenciesUseCase";
import { GetShaderDependencyUseCase } from "../application/usecases/shader-dependency/GetShaderDependencyUseCase";
import { ShaderDependencyController } from "../presentation/controllers/shaderDependency.controller";
import { shaderDependencyRoutes } from "../presentation/routes/shaderDependency.routes";

export function setupShaderDependencyDependencies(app: FastifyInstance, globalContext: any) {
  const createShaderDependencyUseCase = new CreateShaderDependencyUseCase(globalContext);
  const deleteShaderDependencyUseCase = new DeleteShaderDependencyUseCase(globalContext);
  const listShaderDependenciesByShaderUseCase = new ListShaderDependenciesByShaderUseCase(globalContext);
  const listShaderDependenciesUseCase = new ListShaderDependenciesUseCase(globalContext);
  const getShaderDependencyUseCase = new GetShaderDependencyUseCase(globalContext);

  const shaderDependencyController = new ShaderDependencyController(
    createShaderDependencyUseCase,
    deleteShaderDependencyUseCase,
    listShaderDependenciesUseCase,
    listShaderDependenciesByShaderUseCase,
    getShaderDependencyUseCase,
  );
  app.register(shaderDependencyRoutes, { prefix: "/api/shader-dependencies", shaderDependencyController });
}
