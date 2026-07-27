import Fastify from "fastify";
import dotenv from "dotenv";
import jwt from "@fastify/jwt";
import multipart from "@fastify/multipart";
import { setupDependencies } from "./container";
dotenv.config();

const port = Number(process.env.PORT) || 3000;
async function main() {
  const app = Fastify({ logger: true });

  await app.register(jwt, {
    secret: process.env.JWT_SECRET!,
  });

  await app.register(multipart, {
    limits: {
      fileSize: 100 * 1024 * 1024,
    },
  });

  // Dependency Injection & Routes
  await setupDependencies(app);

  await app.ready();

  try {
    await app.listen({ port, host: "0.0.0.0" });
    console.log(`Server listening on http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main().catch(console.error);
