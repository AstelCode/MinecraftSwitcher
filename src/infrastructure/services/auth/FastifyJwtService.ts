import { FastifyInstance } from "fastify";
import { TokenService } from "@/domain/services/TokenService";

export class FastifyJwtService implements TokenService {
  constructor(private readonly app: FastifyInstance) {}

  async generate(payload: { id: bigint; email: string }): Promise<string> {
    return this.app.jwt.sign({
      ...payload,
      id: payload.id.toString(),
    });
  }

  async verify(token: string): Promise<{
    id: bigint;
    email: string;
  }> {
    const data = (await this.app.jwt.verify(token)) as any;
    data.id = BigInt(data.id);
    return data as any;
  }
}
