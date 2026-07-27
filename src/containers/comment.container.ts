import { FastifyInstance } from "fastify";
import { CreateModCommentUseCase } from "../application/usecases/comment/CreateModCommentUseCase";
import { CreatePackCommentUseCase } from "../application/usecases/comment/CreatePackCommentUseCase";
import { CreateShaderCommentUseCase } from "../application/usecases/comment/CreateShaderCommentUseCase";
import { DeleteCommnetUseCase } from "../application/usecases/comment/DeleteCommentUseCase";
import { GetCommentUseCase } from "../application/usecases/comment/GetCommentUseCase";
import { ListCommentByAuthorCommentUseCase } from "../application/usecases/comment/ListCommentsByAuthorUseCase";
import { ListCommentByModCommentUseCase } from "../application/usecases/comment/ListCommentsByModUseCase";
import { ListCommentByPackCommentUseCase } from "../application/usecases/comment/ListCommentsByPackUseCase";
import { ListCommentByShaderCommentUseCase } from "../application/usecases/comment/ListCommentsByShaderUseCase";
import { UpdateCommentUseCase } from "../application/usecases/comment/UpdateCommentUseCase";
import { CommentController } from "../presentation/controllers/comment.controller";
import { commentRoutes } from "../presentation/routes/comment.routes";

export function setupCommentDependencies(app: FastifyInstance, globalContext: any) {
  const createModCommentUseCase = new CreateModCommentUseCase(globalContext);
  const createPackCommentUseCase = new CreatePackCommentUseCase(globalContext);
  const createShaderCommentUseCase = new CreateShaderCommentUseCase(globalContext);
  const deleteCommentUseCase = new DeleteCommnetUseCase(globalContext);
  const getCommentUseCase = new GetCommentUseCase(globalContext);
  const listCommentByAuthorCommentUseCase = new ListCommentByAuthorCommentUseCase(globalContext);
  const listCommentByModCommentUseCase = new ListCommentByModCommentUseCase(globalContext);
  const listCommentByPackCommentUseCase = new ListCommentByPackCommentUseCase(globalContext);
  const listCommentByShaderCommentUseCase = new ListCommentByShaderCommentUseCase(globalContext);
  const updateCommentUseCase = new UpdateCommentUseCase(globalContext);

  const commentController = new CommentController(
    createModCommentUseCase,
    createPackCommentUseCase,
    createShaderCommentUseCase,
    deleteCommentUseCase,
    getCommentUseCase,
    listCommentByAuthorCommentUseCase,
    listCommentByModCommentUseCase,
    listCommentByPackCommentUseCase,
    listCommentByShaderCommentUseCase,
    updateCommentUseCase,
  );
  app.register(commentRoutes, { prefix: "/api/comments", commentController });
}
