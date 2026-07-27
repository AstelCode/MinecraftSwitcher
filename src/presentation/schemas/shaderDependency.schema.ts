import { z } from "zod";

export const CreateShaderDependencySchema = z.object({
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
});

export const ShaderDependencyParamsSchema = z.object({
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
});

export const ShaderIdOnlyParamsSchema = z.object({
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
});
