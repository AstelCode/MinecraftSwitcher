import { FastifyReply, FastifyRequest } from "fastify";
import { extractToken } from "../helpers/auth.helper";
import { CreateShaderDependencyUseCase } from "../../application/usecases/shader-dependency/CreateShaderDependencyUseCase";
import { DeleteShaderDependencyUseCase } from "../../application/usecases/shader-dependency/DeleteShaderDependencyUseCase";
import { ListShaderDependenciesUseCase } from "../../application/usecases/shader-dependency/ListShaderDependenciesUseCase";
import { ListShaderDependenciesByShaderUseCase } from "../../application/usecases/shader-dependency/ListShaderDependenciesByShaderUseCase";
import { GetShaderDependencyUseCase } from "../../application/usecases/shader-dependency/GetShaderDependencyUseCase";
import { CreateShaderDependencySchema, ShaderDependencyParamsSchema, ShaderIdOnlyParamsSchema } from "../schemas/shaderDependency.schema";

export class ShaderDependencyController {
  constructor(
    private createShaderDependencyUseCase: CreateShaderDependencyUseCase,
    private deleteShaderDependencyUseCase: DeleteShaderDependencyUseCase,
    private listShaderDependenciesUseCase: ListShaderDependenciesUseCase,
    private listShaderDependenciesByShaderUseCase: ListShaderDependenciesByShaderUseCase,
    private getShaderDependencyUseCase: GetShaderDependencyUseCase,
  ) {}

  async create(req: FastifyRequest, reply: FastifyReply) {
    const data = CreateShaderDependencySchema.parse(req.body);
    const token = extractToken(req);
    await this.createShaderDependencyUseCase.execute(token, BigInt(data.shaderId), BigInt(data.modId));
    return reply.status(201).send({ message: "Shader dependency created successfully" });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId, modId } = ShaderDependencyParamsSchema.parse(req.params);
    const token = extractToken(req);
    await this.deleteShaderDependencyUseCase.execute(token, BigInt(shaderId), BigInt(modId));
    return reply.status(200).send({ message: "Shader dependency deleted successfully" });
  }

  async list(req: FastifyRequest, reply: FastifyReply) {
    const data = await this.listShaderDependenciesUseCase.execute();
    return reply.status(200).send(data);
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId, modId } = ShaderDependencyParamsSchema.parse(req.params);
    const data = await this.getShaderDependencyUseCase.execute(shaderId, modId);
    return reply.status(200).send(data);
  }

  async listByShader(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdOnlyParamsSchema.parse(req.params);
    const data = await this.listShaderDependenciesByShaderUseCase.execute(BigInt(shaderId));
    return reply.status(200).send(data);
  }
}

