import { FastifyReply, FastifyRequest } from "fastify";
import { LoginUseCase } from "../../application/usecases/auth/LoginUseCase";
import { LoginSchema } from "../schemas/auth.schema";

export class AuthController {
  constructor(private loginUseCase: LoginUseCase) {}

  async login(req: FastifyRequest, reply: FastifyReply) {
    const data = LoginSchema.parse(req.body);
    const token = await this.loginUseCase.execute(data.email, data.password);
    return reply.status(200).send({ token });
  }
}
