import { FastifyReply, FastifyRequest } from "fastify";
import { CreateConflictUseCase } from "../../application/usecases/conflict/CreateConflictUseCase";
import { DeleteConflictUseCase } from "../../application/usecases/conflict/DeleteConflictUseCase";
import { ListConflictsUseCase } from "../../application/usecases/conflict/ListConflictsUseCase";
import { ListConflictsByModUseCase } from "../../application/usecases/conflict/ListConflictsByModUseCase";
import { ListConflictsByShaderUseCase } from "../../application/usecases/conflict/ListConflictsByShaderUseCase";
import { GetConflictUseCase } from "../../application/usecases/conflict/GetConflictUseCase";
import { CreateConflictSchema, ConflictIdParamsSchema, ModIdParamsSchema, ShaderIdParamsSchema } from "../schemas/conflict.schema";

export class ConflictController {
  constructor(
    private createConflictUseCase: CreateConflictUseCase,
    private deleteConflictUseCase: DeleteConflictUseCase,
    private listConflictsUseCase: ListConflictsUseCase,
    private listConflictsByModUseCase: ListConflictsByModUseCase,
    private listConflictsByShaderUseCase: ListConflictsByShaderUseCase,
    private getConflictUseCase: GetConflictUseCase,
  ) {}

  async create(req: FastifyRequest, reply: FastifyReply) {
    const data = CreateConflictSchema.parse(req.body);
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.createConflictUseCase.execute(token, {
      modId: BigInt(data.modId),
      conflictModId: data.conflictModId ? BigInt(data.conflictModId) : undefined,
      conflictShaderId: data.conflictShaderId ? BigInt(data.conflictShaderId) : undefined,
    });
    return reply.status(201).send({ message: "Conflict created successfully" });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { conflictId } = ConflictIdParamsSchema.parse(req.params);
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.deleteConflictUseCase.execute(token, BigInt(conflictId));
    return reply.status(200).send({ message: "Conflict deleted successfully" });
  }

  async list(req: FastifyRequest, reply: FastifyReply) {
    const conflicts = await this.listConflictsUseCase.execute();
    return reply.status(200).send(conflicts);
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const { conflictId } = ConflictIdParamsSchema.parse(req.params);
    const conflict = await this.getConflictUseCase.execute(conflictId);
    return reply.status(200).send(conflict);
  }

  async listByMod(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const conflicts = await this.listConflictsByModUseCase.execute(BigInt(modId));
    return reply.status(200).send(conflicts);
  }

  async listByShader(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdParamsSchema.parse(req.params);
    const conflicts = await this.listConflictsByShaderUseCase.execute(BigInt(shaderId));
    return reply.status(200).send(conflicts);
  }
}
