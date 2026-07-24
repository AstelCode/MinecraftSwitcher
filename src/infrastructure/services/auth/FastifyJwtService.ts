import { FastifyInstance } from "fastify";
import { TokenService } from "@/domain/services/TokenService";

export class FastifyJwtService implements TokenService {
  constructor(private readonly app: FastifyInstance) {}

  async generate(payload: { id: number; nickname: string }): Promise<string> {
    return this.app.jwt.sign(payload);
  }

  async verify(token: string): Promise<{
    id: number;
    nickname: string;
  }> {
    return this.app.jwt.verify(token);
  }
}
