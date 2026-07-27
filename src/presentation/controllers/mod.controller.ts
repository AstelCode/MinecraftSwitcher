import { FastifyReply, FastifyRequest } from "fastify";
import { CreateModUseCase } from "../../application/usecases/mod/CreateModUseCase";
import { UpdateModUseCase } from "../../application/usecases/mod/UpdateModUseCase";
import { DeleteModUseCase } from "../../application/usecases/mod/DeleteModUseCase";
import { GetModByIdUseCase } from "../../application/usecases/mod/GetModByIdUseCase";
import { ListAllModsUseCase } from "../../application/usecases/mod/ListAllModsUseCase";
import { ListModsByAdminUseCase } from "../../application/usecases/mod/ListModsByAdminUseCase";
import { ListModsByPackUseCase } from "../../application/usecases/mod/ListModsByPackUseCase";
import { ListModsByQueryUseCase } from "../../application/usecases/mod/ListModsByQueryUseCase";
import { AddModImageUseCase } from "../../application/usecases/mod/AddModImageUseCase";
import { DeleteModImageUseCase } from "../../application/usecases/mod/DeleteModImageUseCase";
import { UpdateModPrincipalImageUseCase } from "../../application/usecases/mod/UpdateModPrincipalImageUseCase";
import { UpdateModFileUseCase } from "../../application/usecases/mod/UpdateModFileUseCase";
import { GetModUseCase } from "../../application/usecases/mod/GetModUseCase";
import { AssignModToAdminUseCase } from "../../application/usecases/mod/AssignModToAdminUseCase";
import {
  UpdateModSchema,
  ModIdParamsSchema,
  ImageIdParamsSchema,
  ModAndImageIdParamsSchema,
} from "../schemas/mod.schema";
import { VersionType } from "../../domain/model/VersionType";
import { extractToken } from "../helpers/auth.helper";

export class ModController {
  constructor(
    private createModUseCase: CreateModUseCase,
    private updateModUseCase: UpdateModUseCase,
    private deleteModUseCase: DeleteModUseCase,
    private getModByIdUseCase: GetModByIdUseCase,
    private listAllModsUseCase: ListAllModsUseCase,
    private listModsByAdminUseCase: ListModsByAdminUseCase,
    private listModsByPackUseCase: ListModsByPackUseCase,
    private listModsByQueryUseCase: ListModsByQueryUseCase,
    private addModImageUseCase: AddModImageUseCase,
    private deleteModImageUseCase: DeleteModImageUseCase,
    private updateModPrincipalImageUseCase: UpdateModPrincipalImageUseCase,
    private updateModFileUseCase: UpdateModFileUseCase,
    private getModUseCase: GetModUseCase,
    private assignModToAdminUseCase: AssignModToAdminUseCase,
  ) {}

  async create(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    // Extraer campos de texto enviados vÃ­a multipart
    const name = (data.fields.name as any)?.value;
    const description = (data.fields.description as any)?.value;
    const minVersion = Number((data.fields.minVersion as any)?.value);
    const maxVersion = Number((data.fields.maxVersion as any)?.value);
    const versionType = (data.fields.versionType as any)?.value as VersionType;

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    const modDTO = await this.createModUseCase.execute(token, {
      name,
      description,
      minVersion,
      maxVersion,
      versionType,
      file,
    });
    return reply.status(201).send(modDTO);
  }

  async update(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const data = UpdateModSchema.parse(req.body);
    const token = extractToken(req);
    await this.updateModUseCase.execute(token, BigInt(modId), data);
    return reply.status(200).send({ message: "Mod updated successfully" });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    await this.deleteModUseCase.execute(token, BigInt(modId));
    return reply.status(200).send({ message: "Mod deleted successfully" });
  }

  async getById(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const mod = await this.getModByIdUseCase.execute(BigInt(modId));
    return reply.status(200).send(mod);
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const mod = await this.getModUseCase.execute(modId);
    return reply.status(200).send(mod);
  }

  async listAll(req: FastifyRequest, reply: FastifyReply) {
    const mods = await this.listAllModsUseCase.execute();
    return reply.status(200).send(mods);
  }

  async listByAdmin(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const mods = await this.listModsByAdminUseCase.execute(token);
    return reply.status(200).send(mods);
  }

  async listByPack(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = req.params as { packId: string };
    const mods = await this.listModsByPackUseCase.execute(BigInt(packId));
    return reply.status(200).send(mods);
  }

  async listByQuery(req: FastifyRequest, reply: FastifyReply) {
    const { q } = req.query as { q: string };
    const mods = await this.listModsByQueryUseCase.execute(q);
    return reply.status(200).send(mods);
  }

  async addImage(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    await this.addModImageUseCase.execute(token, BigInt(modId), file);
    return reply.status(201).send({ message: "Image added to mod" });
  }

  async deleteImage(req: FastifyRequest, reply: FastifyReply) {
    const { modId, imageId } = ModAndImageIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    await this.deleteModImageUseCase.execute(
      token,
      BigInt(modId),
      BigInt(imageId),
    );
    return reply.status(200).send({ message: "Image deleted from mod" });
  }

  async updatePrincipalImage(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    await this.updateModPrincipalImageUseCase.execute(
      token,
      BigInt(modId),
      file,
    );
    return reply.status(200).send({ message: "Principal image updated" });
  }

  async updateFile(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const token = extractToken(req);
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    await this.updateModFileUseCase.execute(token, BigInt(modId), file);
    return reply.status(200).send({ message: "Mod file updated successfully" });
  }

  async assign(req: FastifyRequest, reply: FastifyReply) {
    const { modId } = ModIdParamsSchema.parse(req.params);
    const { adminId } = req.body as { adminId: string };
    const token = extractToken(req);
    await this.assignModToAdminUseCase.execute(token, BigInt(modId), BigInt(adminId));
    return reply.status(200).send({ message: "Mod assigned successfully" });
  }
}

