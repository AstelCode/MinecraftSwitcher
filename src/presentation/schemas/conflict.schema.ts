import { z } from "zod";

export const CreateConflictSchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
  conflictModId: z.string().regex(/^\d+$/, "Conflict Mod ID must be a number").optional(),
  conflictShaderId: z.string().regex(/^\d+$/, "Conflict Shader ID must be a number").optional(),
}).refine(data => data.conflictModId || data.conflictShaderId, {
  message: "Either conflictModId or conflictShaderId must be provided",
});

export const ConflictIdParamsSchema = z.object({
  conflictId: z.string().regex(/^\d+$/, "Conflict ID must be a number"),
});

export const ModIdParamsSchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
});

export const ShaderIdParamsSchema = z.object({
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
});
