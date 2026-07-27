import { FastifyReply, FastifyRequest } from "fastify";
import { extractToken } from "../helpers/auth.helper";
import { CreateModCommentUseCase } from "../../application/usecases/comment/CreateModCommentUseCase";
import { CreatePackCommentUseCase } from "../../application/usecases/comment/CreatePackCommentUseCase";
import { CreateShaderCommentUseCase } from "../../application/usecases/comment/CreateShaderCommentUseCase";
import { DeleteCommnetUseCase } from "../../application/usecases/comment/DeleteCommentUseCase";
import { GetCommentUseCase } from "../../application/usecases/comment/GetCommentUseCase";
import { ListCommentByAuthorCommentUseCase } from "../../application/usecases/comment/ListCommentsByAuthorUseCase";
import { ListCommentByModCommentUseCase } from "../../application/usecases/comment/ListCommentsByModUseCase";
import { ListCommentByPackCommentUseCase } from "../../application/usecases/comment/ListCommentsByPackUseCase";
import { ListCommentByShaderCommentUseCase } from "../../application/usecases/comment/ListCommentsByShaderUseCase";
import { UpdateCommentUseCase } from "../../application/usecases/comment/UpdateCommentUseCase";
import {
  CreateModCommentSchema,
  CreatePackCommentSchema,
  CreateShaderCommentSchema,
  UpdateCommentSchema,
  CommentIdParamsSchema,
  ModIdParamsSchema,
  PackIdParamsSchema,
  ShaderIdParamsSchema,
} from "../schemas/comment.schema";

export class CommentController {
  constructor(
    private createModCommentUseCase: CreateModCommentUseCase,
    private createPackCommentUseCase: CreatePackCommentUseCase,
    private createShaderCommentUseCase: CreateShaderCommentUseCase,
    private deleteCommentUseCase: DeleteCommnetUseCase,
    private getCommentUseCase: GetCommentUseCase,
    private listCommentByAuthorCommentUseCase: ListCommentByAuthorCommentUseCase,
    private listCommentByModCommentUseCase: ListCommentByModCommentUseCase,
    private listCommentByPackCommentUseCase: ListCommentByPackCommentUseCase,
    private listCommentByShaderCommentUseCase: ListCommentByShaderCommentUseCase,
    private updateCommentUseCase: UpdateCommentUseCase,
  ) {}

  async createModComment(req: FastifyRequest, reply: FastifyReply) {
    const data = CreateModCommentSchema.parse(req.body);
    const token = extractToken(req);
    await this.createModCommentUseCase.execute(token, data.text, BigInt(data.modId));
    return reply.status(201).send({ message: "Mod comment created successfully" });
  }

  async createPackComment(req: FastifyRequest, reply: FastifyReply) {
    const data = CreatePackCommentSchema.parse(req.body);
    const token = extractToken(req);
    await this.createPackCommentUseCase.execute(token, data.text, BigInt(data.packId));
    return reply.status(201).send({ message: "Pack comment created successfully" });
  }

  async createShaderComment(req: FastifyRequest, reply: FastifyReply) {
    const data = CreateShaderCommentSchema.parse(req.body);
    const token = extractToken(req);
    await this.createShaderCommentUseCase.execute(token, data.text, BigInt(data.shaderId));
    return reply.status(201).send({ message: "Shader comment created successfully" });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { commentId } = CommentIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    await this.deleteCommentUseCase.execute(token, BigInt(commentId));
    return reply.status(200).send({ message: "Comment deleted successfully" });
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const { commentId } = CommentIdParamsSchema.parse(req.params);
    const comment = await this.getCommentUseCase.execute(commentId);
    return reply.status(200).send(comment);
  }

  async listByAuthor(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const comments = await this.listCommentByAuthorCommentUseCase.execute(token);
    return reply.status(200).send(comments);
  }

  async listByMod(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const comments = await this.listCommentByModCommentUseCase.execute(BigInt(modId));
    return reply.status(200).send(comments);
  }

  async listByPack(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = PackIdParamsSchema.parse(req.params);
    const comments = await this.listCommentByPackCommentUseCase.execute(BigInt(packId));
    return reply.status(200).send(comments);
  }

  async listByShader(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdParamsSchema.parse(req.params);
    const comments = await this.listCommentByShaderCommentUseCase.execute(BigInt(shaderId));
    return reply.status(200).send(comments);
  }

  async update(req: FastifyRequest, reply: FastifyReply) {
    const { commentId } = CommentIdParamsSchema.parse(req.params);
    const data = UpdateCommentSchema.parse(req.body);
    const token = extractToken(req);
    await this.updateCommentUseCase.execute(token, data.text, BigInt(commentId));
    return reply.status(200).send({ message: "Comment updated successfully" });
  }
}

