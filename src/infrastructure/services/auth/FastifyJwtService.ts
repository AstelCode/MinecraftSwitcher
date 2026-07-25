import { FastifyInstance } from "fastify";
import { TokenService } from "@/domain/services/TokenService";

export class FastifyJwtService implements TokenService {
  constructor(private readonly app: FastifyInstance) {}

  async generate(payload: { id: bigint; nickname: string }): Promise<string> {
    return this.app.jwt.sign(payload);
  }

  async verify(token: string): Promise<{
    id: bigint;
    nickname: string;
  }> {
    return this.app.jwt.verify(token);
  }
}
