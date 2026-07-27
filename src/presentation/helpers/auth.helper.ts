import { FastifyRequest } from "fastify";

/**
 * Extrae el Bearer token del header Authorization.
 * Retorna string vacio si no esta presente (el use case lanzara Unauthorized).
 */
export function extractToken(req: FastifyRequest): string {
  return req.headers.authorization?.split(" ")[1] ?? "";
}
