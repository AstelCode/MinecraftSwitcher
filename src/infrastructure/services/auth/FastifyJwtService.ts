import { FastifyInstance } from "fastify";
import { TokenService } from "@/domain/services/TokenService";

export class FastifyJwtService implements TokenService {
  constructor(private readonly app: FastifyInstance) {}

  async generate(payload: { id: bigint; email: string }): Promise<string> {
    return this.app.jwt.sign(payload);
  }

  async verify(token: string): Promise<{
    id: bigint;
    email: string;
  }> {
    return this.app.jwt.verify(token);
  }
}
