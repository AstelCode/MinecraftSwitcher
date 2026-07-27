import { z } from "zod";

export const CreateModDependencySchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
  dependencyId: z.string().regex(/^\d+$/, "Dependency ID must be a number"),
});

export const ModDependencyParamsSchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
  dependencyId: z.string().regex(/^\d+$/, "Dependency ID must be a number"),
});

export const ModIdOnlyParamsSchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
});
