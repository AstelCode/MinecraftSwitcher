import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserUseCase } from "../../application/usecases/user/CreateUserUseCase";
import { CreateAdminUseCase } from "../../application/usecases/user/CreateAdminUseCase";
import { CreateSuperAdminUseCase } from "../../application/usecases/user/CreateSuperAdminUseCase";
import { ChangePasswordUseCase } from "../../application/usecases/user/ChangePasswordUseCase";
import { DeleteUserUseCase } from "../../application/usecases/user/DeleteUserUseCase";
import { ListUsersUseCase } from "../../application/usecases/user/ListUsersUseCase";
import { ChangeImageUseCase } from "../../application/usecases/user/ChangeImageUseCase";
import { GetUserUseCase } from "../../application/usecases/user/GetUserUseCase";
import { CreateUserSchema, ChangePasswordSchema } from "../schemas/user.schema";

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
    const token = req.headers.authorization?.split(" ")[1] || "";
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
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.changePasswordUseCase.execute(
      token,
      data.lastPassword,
      data.newPassword,
    );
    return reply.status(200).send({ message: "Password updated successfully" });
  }

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const token = req.headers.authorization?.split(" ")[1] || "";
    await this.deleteUserUseCase.executeByToken(token);
    return reply.status(200).send({ message: "User deleted successfully" });
  }

  async list(req: FastifyRequest, reply: FastifyReply) {
    const token = req.headers.authorization?.split(" ")[1] || "";
    const users = await this.listUsersUseCase.execute(token);
    return reply.status(200).send(users);
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const token = req.headers.authorization?.split(" ")[1] || "";
    const user = await this.getUserUseCase.execute(token);
    return reply.status(200).send(user);
  }

  async changeImage(req: FastifyRequest, reply: FastifyReply) {
    const token = req.headers.authorization?.split(" ")[1] || "";
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
