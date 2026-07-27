/**
 * Error de dominio/aplicacion con codigo HTTP asociado.
 * El error handler global lo captura y responde con el status correcto.
 */
export class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 500,
  ) {
    super(message);
    this.name = "AppError";
  }
}

/** Mapea mensajes de error de dominio a codigos HTTP apropiados. */
export function toHttpError(err: unknown): { statusCode: number; message: string } {
  if (err instanceof AppError) {
    return { statusCode: err.statusCode, message: err.message };
  }

  if (err instanceof Error) {
    const msg = err.message.toLowerCase();

    if (msg.includes("unauthorized") || msg.includes("invalid token") || msg.includes("jwt")) {
      return { statusCode: 401, message: err.message };
    }
    if (msg.includes("forbidden") || msg.includes("not allowed") || msg.includes("permission")) {
      return { statusCode: 403, message: err.message };
    }
    if (msg.includes("not found") || msg.includes("no encontrado")) {
      return { statusCode: 404, message: err.message };
    }
    if (msg.includes("already exists") || msg.includes("duplicate") || msg.includes("ya existe")) {
      return { statusCode: 409, message: err.message };
    }
    if (
      msg.includes("invalid") ||
      msg.includes("format") ||
      msg.includes("required") ||
      msg.includes("empty")
    ) {
      return { statusCode: 400, message: err.message };
    }

    return { statusCode: 500, message: "Internal Server Error" };
  }

  return { statusCode: 500, message: "Internal Server Error" };
}
