import { FastifyReply, FastifyRequest } from "fastify";
import { extractToken } from "../helpers/auth.helper";
import { CreateShaderUseCase } from "../../application/usecases/shader/CreateShaderUseCase";
import { UpdateShaderUseCase } from "../../application/usecases/shader/UpdateShaderUseCase";
import { DeleteShaderUseCase } from "../../application/usecases/shader/DeleteShaderUseCase";
import { ListShadersUseCase } from "../../application/usecases/shader/ListShadersUseCase";
import { ListShadersByAuthorUseCase } from "../../application/usecases/shader/ListShadersByAuthorUseCase";
import { ListShadersByPackUseCase } from "../../application/usecases/shader/ListShadersByPackUseCase";
import { ListShadersByQueryUseCase } from "../../application/usecases/shader/ListShadersByQueryUseCase";
import { AddShaderImageUseCase } from "../../application/usecases/shader/AddShaderImageUseCase";
import { DeleteShaderImageUseCase } from "../../application/usecases/shader/DeleteShaderImageUseCase";
import { UpdateShaderPrincipalImageUseCase } from "../../application/usecases/shader/UpdateShaderPrincipalImageUseCase";
import { UpdateShaderFileUseCase } from "../../application/usecases/shader/UpdateShaderFileUseCase";
import { GetShaderUseCase } from "../../application/usecases/shader/GetShaderUseCase";
import { AssignShaderToAdminUseCase } from "../../application/usecases/shader/AssignShaderToAdminUseCase";
import {
  UpdateShaderSchema,
  ShaderIdParamsSchema,
  ShaderImageIdParamsSchema,
  ShaderAndImageIdParamsSchema,
} from "../schemas/shader.schema";
import { VersionType } from "../../domain/model/VersionType";

export class ShaderController {
  constructor(
    private createShaderUseCase: CreateShaderUseCase,
    private updateShaderUseCase: UpdateShaderUseCase,
    private deleteShaderUseCase: DeleteShaderUseCase,
    private listShadersUseCase: ListShadersUseCase,
    private listShadersByAuthorUseCase: ListShadersByAuthorUseCase,
    private listShadersByPackUseCase: ListShadersByPackUseCase,
    private listShadersByQueryUseCase: ListShadersByQueryUseCase,
    private addShaderImageUseCase: AddShaderImageUseCase,
    private deleteShaderImageUseCase: DeleteShaderImageUseCase,
    private updateShaderPrincipalImageUseCase: UpdateShaderPrincipalImageUseCase,
    private updateShaderFileUseCase: UpdateShaderFileUseCase,
    private getShaderUseCase: GetShaderUseCase,
    private assignShaderToAdminUseCase: AssignShaderToAdminUseCase,
  ) {}

  async create(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    // Extraer campos de texto enviados vÃ­a multipart
    const name = (data.fields.name as any)?.value;
    const description = (data.fields.description as any)?.value;
    const versionType = (data.fields.versionType as any)?.value as VersionType;

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    const shader = await this.createShaderUseCase.execute(token, {
      name,
      description,
      versionType,
      file,
    });
    return reply.status(201).send(shader);
  }

  async update(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdParamsSchema.parse(req.params);
    const data = UpdateShaderSchema.parse(req.body);
    const token = extractToken(req);
    await this.updateShaderUseCase.execute(token, BigInt(shaderId), data);
    return reply.status(200).send({ message: "Shader updated successfully" });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    await this.deleteShaderUseCase.execute(token, BigInt(shaderId));
    return reply.status(200).send({ message: "Shader deleted successfully" });
  }

  async listAll(req: FastifyRequest, reply: FastifyReply) {
    const shaders = await this.listShadersUseCase.execute();
    return reply.status(200).send(shaders);
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdParamsSchema.parse(req.params);
    const shader = await this.getShaderUseCase.execute(shaderId);
    return reply.status(200).send(shader);
  }

  async listByAuthor(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const shaders = await this.listShadersByAuthorUseCase.execute(token);
    return reply.status(200).send(shaders);
  }

  async listByPack(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = req.params as { packId: string };
    const shaders = await this.listShadersByPackUseCase.execute(BigInt(packId));
    return reply.status(200).send(shaders);
  }

  async listByQuery(req: FastifyRequest, reply: FastifyReply) {
    const { q } = req.query as { q: string };
    const shaders = await this.listShadersByQueryUseCase.execute(q);
    return reply.status(200).send(shaders);
  }

  // --- IMAGE AND FILE ENDPOINTS ---

  async addImage(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    await this.addShaderImageUseCase.execute(token, BigInt(shaderId), file);
    return reply.status(201).send({ message: "Image added to shader" });
  }

  async deleteImage(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId, imageId } = ShaderAndImageIdParamsSchema.parse(
      req.params,
    );
    const token = extractToken(req);
    await this.deleteShaderImageUseCase.execute(
      token,
      BigInt(shaderId),
      BigInt(imageId),
    );
    return reply.status(200).send({ message: "Image deleted from shader" });
  }

  async updatePrincipalImage(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    await this.updateShaderPrincipalImageUseCase.execute(
      token,
      BigInt(shaderId),
      file,
    );
    return reply.status(200).send({ message: "Principal image updated" });
  }

  async updateFile(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    await this.updateShaderFileUseCase.execute(token, BigInt(shaderId), file);
    return reply
      .status(200)
      .send({ message: "Shader file updated successfully" });
  }

  async assign(req: FastifyRequest, reply: FastifyReply) {
    const { shaderId } = ShaderIdParamsSchema.parse(req.params);
    const { adminId } = req.body as { adminId: string };
    const token = extractToken(req);
    await this.assignShaderToAdminUseCase.execute(
      token,
      BigInt(shaderId),
      BigInt(adminId),
    );
    return reply.status(200).send({ message: "Shader assigned successfully" });
  }
}
