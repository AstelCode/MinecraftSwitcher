import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserUseCase } from "../../application/usecases/user/CreateUserUseCase";
import { CreateAdminUseCase } from "../../application/usecases/user/CreateAdminUseCase";
import { CreateSuperAdminUseCase } from "../../application/usecases/user/CreateSuperAdminUseCase";
import { ChangePasswordUseCase } from "../../application/usecases/user/ChangePasswordUseCase";
import { DeleteUserUseCase } from "../../application/usecases/user/DeleteUserUseCase";
import { ListUsersUseCase } from "../../application/usecases/user/ListUsersUseCase";
import { ChangeImageUseCase } from "../../application/usecases/user/ChangeImageUseCase";
import { GetUserUseCase } from "../../application/usecases/user/GetUserUseCase";
import { DeleteUserByAdminUseCase } from "../../application/usecases/user/DeleteUserByAdminUseCase";
import { DeleteUserBySuperAdminUseCase } from "../../application/usecases/user/DeleteUserBySuperAdminUseCase";
import { CreateUserSchema, ChangePasswordSchema } from "../schemas/user.schema";
import { extractToken } from "../helpers/auth.helper";

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private createAdminUseCase: CreateAdminUseCase,
    private createSuperAdminUseCase: CreateSuperAdminUseCase,
    private changePasswordUseCase: ChangePasswordUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private listUsersUseCase: ListUsersUseCase,
    private changeImageUseCase: ChangeImageUseCase,
    private getUserUseCase: GetUserUseCase,
    private deleteUserByAdminUseCase: DeleteUserByAdminUseCase,
    private deleteUserBySuperAdminUseCase: DeleteUserBySuperAdminUseCase,
  ) {}

  async create(req: FastifyRequest, reply: FastifyReply) {
    const data = CreateUserSchema.parse(req.body);
    const token = await this.createUserUseCase.execute(
      data.email,
      data.password,
    );
    return reply.status(201).send({ token });
  }

  async createAdmin(req: FastifyRequest, reply: FastifyReply) {
    const data = CreateUserSchema.parse(req.body);
    const token = extractToken(req);
    await this.createAdminUseCase.execute(token, data.email, data.password);
    return reply.status(201).send({ token });
  }

  async createSuperAdmin(req: FastifyRequest, reply: FastifyReply) {
    const data = CreateUserSchema.parse(req.body);
    const token = await this.createSuperAdminUseCase.execute(
      data.email,
      data.password,
    );
    return reply.status(201).send({ token });
  }

  async changePassword(req: FastifyRequest, reply: FastifyReply) {
    const data = ChangePasswordSchema.parse(req.body);
    const token = extractToken(req);
    await this.changePasswordUseCase.execute(
      token,
      data.lastPassword,
      data.newPassword,
    );
    return reply.status(200).send({ message: "Password updated successfully" });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    await this.deleteUserUseCase.execute(token);
    return reply.status(200).send({ message: "User deleted successfully" });
  }

  async deleteByAdmin(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const { id } = req.params as { id: string };
    await this.deleteUserByAdminUseCase.execute(token, BigInt(id));
    return reply.status(200).send({ message: "User deleted successfully by admin" });
  }

  async deleteBySuperAdmin(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const { id } = req.params as { id: string };
    await this.deleteUserBySuperAdminUseCase.execute(token, BigInt(id));
    return reply.status(200).send({ message: "User deleted successfully by superadmin" });
  }

  async list(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const users = await this.listUsersUseCase.execute(token);
    return reply.status(200).send(users);
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const user = await this.getUserUseCase.execute(token);
    return reply.status(200).send(user);
  }

  async changeImage(req: FastifyRequest, reply: FastifyReply) {
    const token = extractToken(req);
    const data = await req.file();
    if (!data) return reply.status(400).send({ message: "No file provided" });

    const buffer = await data.toBuffer();
    const file = new File([new Uint8Array(buffer)], data.filename, {
      type: data.mimetype,
    });

    await this.changeImageUseCase.execute(token, file);
    return reply
      .status(200)
      .send({ message: "Profile image updated successfully" });
  }
}

