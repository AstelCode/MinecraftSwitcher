import Fastify from "fastify";
import dotenv from "dotenv";
import jwt from "@fastify/jwt";
import { PostgresUserRepository } from "./infrastructure/database/postgres/PostgresUserRepository";
import { ArgonHashService } from "./infrastructure/services/hash/ArgonHashService";
import { FastifyJwtService } from "./infrastructure/services/auth/FastifyJwtService";
import { CreateUserUseCase } from "./application/usecases/user/CreateUserUseCase";
import { LoginUseCase } from "./application/usecases/user/LoginUseCase";
dotenv.config();

const app = Fastify({
  logger: true,
});

app.register(jwt, {
  secret: process.env.JWT_SECRET!,
});
async function main() {
  const app = Fastify({ logger: true });

  await app.register(jwt, {
    secret: process.env.JWT_SECRET!,
  });

  await app.ready();

  const repository = new PostgresUserRepository();
  const hashService = new ArgonHashService();
  const tokenService = new FastifyJwtService(app);

  const loginUseCase = new LoginUseCase(repository, tokenService, hashService);

  //const token = await createUser.create("frankparedesalpi@gmail.com", "123456");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMiLCJlbWFpbCI6ImZyYW5rcGFyZWRlc2FscGlAZ21haWwuY29tIiwiaWF0IjoxNzg1MDM4ODMwfQ.nV1FtoS-Lj1F1aZjpakdQ8_OZHGa63R0lvYBmt8fzmI";

  console.log(await tokenService.verify(token));
  //await  loginUseCase.login("")
}

main().catch(console.error);
