const fs = require('fs');
const path = require('path');

const domains = [
  {
    name: 'auth',
    prefix: '/api/auth',
    usecases: ['LoginUseCase'],
    controller: 'AuthController',
    routes: 'authRoutes',
    routesPrefix: '/api/auth',
    routesControllerName: 'authController',
    controllerArgs: ['loginUseCase']
  },
  {
    name: 'user',
    prefix: '/api/users',
    usecases: ['CreateUserUseCase', 'CreateAdminUseCase', 'CreateSuperAdminUseCase', 'ChangePasswordUseCase', 'DeleteUserUseCase', 'ListUsersUseCase', 'ChangeImageUseCase', 'GetUserUseCase'],
    controller: 'UserController',
    routes: 'userRoutes',
    routesPrefix: '/api/users',
    routesControllerName: 'userController',
    controllerArgs: ['createUserUseCase', 'createAdminUseCase', 'createSuperAdminUseCase', 'changePasswordUseCase', 'deleteUserUseCase', 'listUsersUseCase', 'changeImageUseCase', 'getUserUseCase']
  },
  {
    name: 'mod',
    prefix: '/api/mods',
    usecases: ['CreateModUseCase', 'UpdateModUseCase', 'DeleteModUseCase', 'GetModByIdUseCase', 'ListAllModsUseCase', 'ListModsByAdminUseCase', 'ListModsByPackUseCase', 'ListModsByQueryUseCase', 'AddModImageUseCase', 'DeleteModImageUseCase', 'UpdateModPrincipalImageUseCase', 'UpdateModFileUseCase', 'GetModUseCase'],
    controller: 'ModController',
    routes: 'modRoutes',
    routesPrefix: '/api/mods',
    routesControllerName: 'modController',
    controllerArgs: ['createModUseCase', 'updateModUseCase', 'deleteModUseCase', 'getModByIdUseCase', 'listAllModsUseCase', 'listModsByAdminUseCase', 'listModsByPackUseCase', 'listModsByQueryUseCase', 'addModImageUseCase', 'deleteModImageUseCase', 'updateModPrincipalImageUseCase', 'updateModFileUseCase', 'getModUseCase']
  },
  {
    name: 'shader',
    prefix: '/api/shaders',
    usecases: ['CreateShaderUseCase', 'UpdateShaderUseCase', 'DeleteShaderUseCase', 'ListShadersUseCase', 'ListShadersByAuthorUseCase', 'ListShadersByPackUseCase', 'ListShadersByQueryUseCase', 'AddShaderImageUseCase', 'DeleteShaderImageUseCase', 'UpdateShaderPrincipalImageUseCase', 'UpdateShaderFileUseCase', 'GetShaderUseCase'],
    controller: 'ShaderController',
    routes: 'shaderRoutes',
    routesPrefix: '/api/shaders',
    routesControllerName: 'shaderController',
    controllerArgs: ['createShaderUseCase', 'updateShaderUseCase', 'deleteShaderUseCase', 'listShadersUseCase', 'listShadersByAuthorUseCase', 'listShadersByPackUseCase', 'listShadersByQueryUseCase', 'addShaderImageUseCase', 'deleteShaderImageUseCase', 'updateShaderPrincipalImageUseCase', 'updateShaderFileUseCase', 'getShaderUseCase']
  },
  {
    name: 'pack',
    prefix: '/api/packs',
    usecases: ['CreatePackUseCase', 'UpdatePackUseCase', 'DeletePackUseCase', 'ListPacksUseCase', 'ListPacksByAdminUseCase', 'ListPacksByNameUseCase', 'AddPackModUseCase', 'AddPackShaderUseCase', 'DeletePackModUseCase', 'DeletePackShaderUseCase', 'AddPackImageUseCase', 'UpdatePackPrincipalImageUseCase', 'DeletePackImageUseCase', 'GetPackUseCase'],
    controller: 'PackController',
    routes: 'packRoutes',
    routesPrefix: '/api/packs',
    routesControllerName: 'packController',
    controllerArgs: ['createPackUseCase', 'updatePackUseCase', 'deletePackUseCase', 'listPacksUseCase', 'listPacksByAdminUseCase', 'listPacksByNameUseCase', 'addPackModUseCase', 'addPackShaderUseCase', 'deletePackModUseCase', 'deletePackShaderUseCase', 'addPackImageUseCase', 'updatePackPrincipalImageUseCase', 'deletePackImageUseCase', 'getPackUseCase']
  },
  {
    name: 'conflict',
    prefix: '/api/conflicts',
    usecases: ['CreateConflictUseCase', 'DeleteConflictUseCase', 'ListConflictsUseCase', 'ListConflictsByModUseCase', 'ListConflictsByShaderUseCase', 'GetConflictUseCase'],
    controller: 'ConflictController',
    routes: 'conflictRoutes',
    routesPrefix: '/api/conflicts',
    routesControllerName: 'conflictController',
    controllerArgs: ['createConflictUseCase', 'deleteConflictUseCase', 'listConflictsUseCase', 'listConflictsByModUseCase', 'listConflictsByShaderUseCase', 'getConflictUseCase']
  },
  {
    name: 'modDependency',
    folderName: 'mod-dependency',
    prefix: '/api/mod-dependencies',
    usecases: ['CreateModDependencyUseCase', 'DeleteModDependencyUseCase', 'ListModDependenciesByModUseCase', 'ListModDependenciesUseCase', 'GetModDependencyUseCase'],
    controller: 'ModDependencyController',
    routes: 'modDependencyRoutes',
    routesPrefix: '/api/mod-dependencies',
    routesControllerName: 'modDependencyController',
    controllerArgs: ['createModDependencyUseCase', 'deleteModDependencyUseCase', 'listModDependenciesUseCase', 'listModDependenciesByModUseCase', 'getModDependencyUseCase']
  },
  {
    name: 'shaderDependency',
    folderName: 'shader-dependency',
    prefix: '/api/shader-dependencies',
    usecases: ['CreateShaderDependencyUseCase', 'DeleteShaderDependencyUseCase', 'ListShaderDependenciesByShaderUseCase', 'ListShaderDependenciesUseCase', 'GetShaderDependencyUseCase'],
    controller: 'ShaderDependencyController',
    routes: 'shaderDependencyRoutes',
    routesPrefix: '/api/shader-dependencies',
    routesControllerName: 'shaderDependencyController',
    controllerArgs: ['createShaderDependencyUseCase', 'deleteShaderDependencyUseCase', 'listShaderDependenciesUseCase', 'listShaderDependenciesByShaderUseCase', 'getShaderDependencyUseCase']
  },
  {
    name: 'comment',
    prefix: '/api/comments',
    usecases: ['CreateModCommentUseCase', 'CreatePackCommentUseCase', 'CreateShaderCommentUseCase', 'DeleteCommnetUseCase', 'GetCommentUseCase', 'ListCommentByAuthorCommentUseCase', 'ListCommentByModCommentUseCase', 'ListCommentByPackCommentUseCase', 'ListCommentByShaderCommentUseCase', 'UpdateCommentUseCase'],
    controller: 'CommentController',
    routes: 'commentRoutes',
    routesPrefix: '/api/comments',
    routesControllerName: 'commentController',
    controllerArgs: ['createModCommentUseCase', 'createPackCommentUseCase', 'createShaderCommentUseCase', 'deleteCommentUseCase', 'getCommentUseCase', 'listCommentByAuthorCommentUseCase', 'listCommentByModCommentUseCase', 'listCommentByPackCommentUseCase', 'listCommentByShaderCommentUseCase', 'updateCommentUseCase']
  }
];

if (!fs.existsSync('src/containers')) {
  fs.mkdirSync('src/containers');
}

let containerImports = '';
let containerCalls = '';

for (const d of domains) {
  const folder = d.folderName || d.name;
  let code = `import { FastifyInstance } from "fastify";\n`;
  for (const uc of d.usecases) {
    code += `import { ${uc} } from "../application/usecases/${folder}/${uc}";\n`;
  }
  
  // Custom case handling since filenames use camelCase or just lowercase without .controller?
  // Let's look at container.ts to see exact import paths for controllers/routes.
  code += `import { ${d.controller} } from "../presentation/controllers/${d.name}.controller";\n`;
  code += `import { ${d.routes} } from "../presentation/routes/${d.name}.routes";\n\n`;

  const setupFuncName = `setup${d.name.charAt(0).toUpperCase() + d.name.slice(1)}Dependencies`;
  containerImports += `import { ${setupFuncName} } from "./containers/${d.name}.container";\n`;
  containerCalls += `  ${setupFuncName}(app, globalContext);\n`;

  code += `export function ${setupFuncName}(app: FastifyInstance, globalContext: any) {\n`;
  for (const uc of d.usecases) {
    let varName = uc.charAt(0).toLowerCase() + uc.slice(1);
    code += `  const ${varName} = new ${uc}(globalContext);\n`;
  }

  code += `\n  const ${d.routesControllerName} = new ${d.controller}(\n`;
  for (const arg of d.controllerArgs) {
    code += `    ${arg},\n`;
  }
  code += `  );\n\n`;
  
  code += `  app.register(${d.routes}, { prefix: "${d.routesPrefix}", ${d.routesControllerName} });\n`;
  code += `}\n`;

  fs.writeFileSync(`src/containers/${d.name}.container.ts`, code);
}

// Now generate the new container.ts
const mainContainer = `import { FastifyInstance } from "fastify";
import { PostgresUserRepository } from "./infrastructure/database/postgres/PostgresUserRepository";
import { PostgresModRepository } from "./infrastructure/database/postgres/PostgresModRepository";
import { PostgresShaderRepository } from "./infrastructure/database/postgres/PostgresShaderRespository";
import { PostgresPackRepository } from "./infrastructure/database/postgres/PostgresPackRepository";
import { PostgresConflictRepository } from "./infrastructure/database/postgres/PostgresConflictRepository";
import { PostgresModDependencyRepository } from "./infrastructure/database/postgres/PostgresModDependencyRepository";
import { PostgresShaderDependencyRepository } from "./infrastructure/database/postgres/PostgresShaderDependencyRepository";
import { PostgresImageRepository } from "./infrastructure/database/postgres/PostgresImageRepository";
import { PostgresCommentRepository } from "./infrastructure/database/postgres/PostgresCommentRepository";
import { LocalFileRepository } from "./infrastructure/database/local/LocalFileRespository";
import { ArgonHashService } from "./infrastructure/services/hash/ArgonHashService";
import { FastifyJwtService } from "./infrastructure/services/auth/FastifyJwtService";
import { NodeUuidService } from "./infrastructure/services/random/RandomService";

${containerImports}

export async function setupDependencies(app: FastifyInstance) {
  // --- Infrastructure ---
  const userRepository = new PostgresUserRepository();
  const modRepository = new PostgresModRepository();
  const shaderRepository = new PostgresShaderRepository();
  const packRepository = new PostgresPackRepository();
  const conflictRepository = new PostgresConflictRepository();
  const modDependencyRepository = new PostgresModDependencyRepository();
  const shaderDependencyRepository = new PostgresShaderDependencyRepository();
  const imageRepository = new PostgresImageRepository();
  const commentRepository = new PostgresCommentRepository();
  const uuidService = new NodeUuidService();
  const fileRepository = new LocalFileRepository();

  const hashService = new ArgonHashService();
  const tokenService = new FastifyJwtService(app);

  const globalContext = {
    userRepository,
    modRepository,
    shaderRepository,
    packRepository,
    conflictRepository,
    modDependencyRepository,
    shaderDependencyRepository,
    imageRepository,
    commentRepository,
    uuidService,
    fileRepository,
    hashService,
    tokenService,
  };

${containerCalls}
}
`;

fs.writeFileSync('src/container.ts', mainContainer);
console.log("Done generating domain containers!");
