import { FastifyReply, FastifyRequest } from "fastify";
import { extractToken } from "../helpers/auth.helper";
import { CreateModDependencyUseCase } from "../../application/usecases/mod-dependency/CreateModDependencyUseCase";
import { DeleteModDependencyUseCase } from "../../application/usecases/mod-dependency/DeleteModDependencyUseCase";
import { ListModDependenciesUseCase } from "../../application/usecases/mod-dependency/ListModDependenciesUseCase";
import { ListModDependenciesByModUseCase } from "../../application/usecases/mod-dependency/ListModDependenciesByModUseCase";
import { GetModDependencyUseCase } from "../../application/usecases/mod-dependency/GetModDependencyUseCase";
import { CreateModDependencySchema, ModDependencyParamsSchema, ModIdOnlyParamsSchema } from "../schemas/modDependency.schema";

export class ModDependencyController {
  constructor(
    private createModDependencyUseCase: CreateModDependencyUseCase,
    private deleteModDependencyUseCase: DeleteModDependencyUseCase,
    private listModDependenciesUseCase: ListModDependenciesUseCase,
    private listModDependenciesByModUseCase: ListModDependenciesByModUseCase,
    private getModDependencyUseCase: GetModDependencyUseCase,
  ) {}

  async create(req: FastifyRequest, reply: FastifyReply) {
    const data = CreateModDependencySchema.parse(req.body);
    const token = extractToken(req);
    await this.createModDependencyUseCase.execute(token, BigInt(data.modId), BigInt(data.dependencyId));
    return reply.status(201).send({ message: "Mod dependency created successfully" });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { modId, dependencyId } = ModDependencyParamsSchema.parse(req.params);
    const token = extractToken(req);
    await this.deleteModDependencyUseCase.execute(token, BigInt(modId), BigInt(dependencyId));
    return reply.status(200).send({ message: "Mod dependency deleted successfully" });
  }

  async list(req: FastifyRequest, reply: FastifyReply) {
    const data = await this.listModDependenciesUseCase.execute();
    return reply.status(200).send(data);
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const { modId, dependencyId } = ModDependencyParamsSchema.parse(req.params);
    const data = await this.getModDependencyUseCase.execute(modId, dependencyId);
    return reply.status(200).send(data);
  }

  async listByMod(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdOnlyParamsSchema.parse(req.params);
    const data = await this.listModDependenciesByModUseCase.execute(BigInt(modId));
    return reply.status(200).send(data);
  }
}

