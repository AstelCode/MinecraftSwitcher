import { z } from "zod";

export const CreateModSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable().optional(),
  minVersion: z.number(),
  maxVersion: z.number(),
  versionType: z.enum(["JAVA", "FORGE", "OPTIFINE"]),
});

export const UpdateModSchema = CreateModSchema;

export const ModIdParamsSchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
});

export const ImageIdParamsSchema = z.object({
  imageId: z.string().regex(/^\d+$/, "Image ID must be a number"),
});

export const ModAndImageIdParamsSchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
  imageId: z.string().regex(/^\d+$/, "Image ID must be a number"),
});
