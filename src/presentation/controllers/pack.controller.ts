import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePackUseCase } from "../../application/usecases/pack/CreatePackUseCase";
import { UpdatePackUseCase } from "../../application/usecases/pack/UpdatePackUseCase";
import { DeletePackUseCase } from "../../application/usecases/pack/DeletePackUseCase";
import { ListPacksUseCase } from "../../application/usecases/pack/ListPacksUseCase";
import { ListPacksByAdminUseCase } from "../../application/usecases/pack/ListPacksByAdminUseCase";
import { ListPacksByNameUseCase } from "../../application/usecases/pack/ListPacksByNameUseCase";
import { AddPackModUseCase } from "../../application/usecases/pack/AddPackModUseCase";
import { AddPackShaderUseCase } from "../../application/usecases/pack/AddPackShaderUseCase";
import { DeletePackModUseCase } from "../../application/usecases/pack/DeletePackModUseCase";
import { DeletePackShaderUseCase } from "../../application/usecases/pack/DeletePackShaderUseCase";
import { AddPackImageUseCase } from "../../application/usecases/pack/AddPackImageUseCase";
import { UpdatePackPrincipalImageUseCase } from "../../application/usecases/pack/UpdatePackPrincipalImageUseCase";
import { DeletePackImageUseCase } from "../../application/usecases/pack/DeletePackImageUseCase";
import { GetPackUseCase } from "../../application/usecases/pack/GetPackUseCase";
import { AssignPackToAdminUseCase } from "../../application/usecases/pack/AssignPackToAdminUseCase";
import {
  CreatePackSchema,
  UpdatePackSchema,
  PackIdParamsSchema,
  ModIdParamsSchema,
  ShaderIdParamsSchema,
  ImageIdParamsSchema,
  PackAndModIdParamsSchema,
  PackAndShaderIdParamsSchema,
  PackAndImageIdParamsSchema,
} from "../schemas/pack.schema";

export class PackController {
  constructor(
    private createPackUseCase: CreatePackUseCase,
    private updatePackUseCase: UpdatePackUseCase,
    private deletePackUseCase: DeletePackUseCase,
    private listPacksUseCase: ListPacksUseCase,
    private listPacksByAdminUseCase: ListPacksByAdminUseCase,
    private listPacksByNameUseCase: ListPacksByNameUseCase,
    private addPackModUseCase: AddPackModUseCase,
    private addPackShaderUseCase: AddPackShaderUseCase,
    private deletePackModUseCase: DeletePackModUseCase,
    private deletePackShaderUseCase: DeletePackShaderUseCase,
    private addPackImageUseCase: AddPackImageUseCase,
    private updatePackPrincipalImageUseCase: UpdatePackPrincipalImageUseCase,
    private deletePackImageUseCase: DeletePackImageUseCase,
    private getPackUseCase: GetPackUseCase,
    private assignPackToAdminUseCase: AssignPackToAdminUseCase,
  ) {}

  async create(req: FastifyRequest, reply: FastifyReply) {
    const data = CreatePackSchema.parse(req.body);
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.createPackUseCase.execute(token, data);
    return reply.status(201).send({ message: "Pack created successfully" });
  }

  async update(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = PackIdParamsSchema.parse(req.params);
    const data = UpdatePackSchema.parse(req.body);
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.updatePackUseCase.execute(token, BigInt(packId), data);
    return reply.status(200).send({ message: "Pack updated successfully" });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = PackIdParamsSchema.parse(req.params);
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.deletePackUseCase.execute(token, BigInt(packId));
    return reply.status(200).send({ message: "Pack deleted successfully" });
  }

  async list(req: FastifyRequest, reply: FastifyReply) {
    const packs = await this.listPacksUseCase.execute();
    return reply.status(200).send(packs);
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = PackIdParamsSchema.parse(req.params);
    const pack = await this.getPackUseCase.execute(packId);
    return reply.status(200).send(pack);
  }

  async listByAdmin(req: FastifyRequest, reply: FastifyReply) {
    const token = req.headers.authorization?.split(" ")[1] || "";
    const packs = await this.listPacksByAdminUseCase.execute(token);
    return reply.status(200).send(packs);
  }

  async listByName(req: FastifyRequest, reply: FastifyReply) {
    const { name } = req.query as { name: string };
    const packs = await this.listPacksByNameUseCase.execute(name);
    return reply.status(200).send(packs);
  }

  async addMod(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = PackIdParamsSchema.parse(req.params);
    const { modId } = ModIdParamsSchema.parse(req.body);
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.addPackModUseCase.execute(token, BigInt(packId), BigInt(modId));
    return reply.status(200).send({ message: "Mod added to pack" });
  }

  async removeMod(req: FastifyRequest, reply: FastifyReply) {
    const { packId, modId } = PackAndModIdParamsSchema.parse(req.params);
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.deletePackModUseCase.execute(
      token,
      BigInt(packId),
      BigInt(modId),
    );
    return reply.status(200).send({ message: "Mod removed from pack" });
  }

  async addShader(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = PackIdParamsSchema.parse(req.params);
    const { shaderId } = ShaderIdParamsSchema.parse(req.body);
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.addPackShaderUseCase.execute(
      token,
      BigInt(packId),
      BigInt(shaderId),
    );
    return reply.status(200).send({ message: "Shader added to pack" });
  }

  async removeShader(req: FastifyRequest, reply: FastifyReply) {
    const { packId, shaderId } = PackAndShaderIdParamsSchema.parse(req.params);
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.deletePackShaderUseCase.execute(
      token,
      BigInt(packId),
      BigInt(shaderId),
    );
    return reply.status(200).send({ message: "Shader removed from pack" });
  }

  async addImage(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = PackIdParamsSchema.parse(req.params);
    const token = req.headers.authorization?.split(" ")[1] || "";
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    await this.addPackImageUseCase.execute(token, BigInt(packId), file);
    return reply.status(201).send({ message: "Image added to pack" });
  }

  async updatePrincipalImage(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = PackIdParamsSchema.parse(req.params);
    const token = req.headers.authorization?.split(" ")[1] || "";
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    await this.updatePackPrincipalImageUseCase.execute(
      token,
      BigInt(packId),
      file,
    );
    return reply.status(200).send({ message: "Principal image updated" });
  }

  async deleteImage(req: FastifyRequest, reply: FastifyReply) {
    const { packId, imageId } = PackAndImageIdParamsSchema.parse(req.params);
    const token = req.headers.authorization?.split(" ")[1] || "";

    await this.deletePackImageUseCase.execute(
      token,
      BigInt(packId),
      BigInt(imageId),
    );
    return reply.status(200).send({ message: "Image deleted from pack" });
  }

  async assign(req: FastifyRequest, reply: FastifyReply) {
    const { packId } = PackIdParamsSchema.parse(req.params);
    const { adminId } = req.body as { adminId: string };
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.assignPackToAdminUseCase.execute(token, BigInt(packId), BigInt(adminId));
    return reply.status(200).send({ message: "Pack assigned successfully" });
  }
}
