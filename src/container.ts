import { FastifyInstance } from "fastify";
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
import { PostgresFavoriteRepository } from "./infrastructure/database/postgres/PostgresFavoriteRepository";

import { setupAuthDependencies } from "./containers/auth.container";
import { setupUserDependencies } from "./containers/user.container";
import { setupModDependencies } from "./containers/mod.container";
import { setupShaderDependencies } from "./containers/shader.container";
import { setupPackDependencies } from "./containers/pack.container";
import { setupConflictDependencies } from "./containers/conflict.container";
import { setupModDependencyDependencies } from "./containers/modDependency.container";
import { setupShaderDependencyDependencies } from "./containers/shaderDependency.container";
import { setupCommentDependencies } from "./containers/comment.container";
import { setupFavoriteDependencies } from "./containers/favorite.container";
import { SupabaseFileRepository } from "./infrastructure/database/supabase/SupabaseFileRespository";

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
  const fileRepository = new SupabaseFileRepository();
  const favoriteRepository = new PostgresFavoriteRepository();

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
    favoriteRepository,
  };

  setupAuthDependencies(app, globalContext);
  setupUserDependencies(app, globalContext);
  setupModDependencies(app, globalContext);
  setupShaderDependencies(app, globalContext);
  setupPackDependencies(app, globalContext);
  setupConflictDependencies(app, globalContext);
  setupModDependencyDependencies(app, globalContext);
  setupShaderDependencyDependencies(app, globalContext);
  setupCommentDependencies(app, globalContext);
  setupFavoriteDependencies(app, globalContext);
}
