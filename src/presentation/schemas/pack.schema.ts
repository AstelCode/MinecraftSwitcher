import { z } from "zod";

export const CreatePackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable().optional(),
  minVersion: z.number(),
  maxVersion: z.number(),
  versionType: z.enum(["JAVA", "FORGE", "OPTIFINE"]),
});

export const UpdatePackSchema = CreatePackSchema;

export const PackIdParamsSchema = z.object({
  packId: z.string().regex(/^\d+$/, "Pack ID must be a number"),
});

export const ModIdParamsSchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
});

export const ShaderIdParamsSchema = z.object({
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
});

export const ImageIdParamsSchema = z.object({
  imageId: z.string().regex(/^\d+$/, "Image ID must be a number"),
});

export const PackAndModIdParamsSchema = z.object({
  packId: z.string().regex(/^\d+$/, "Pack ID must be a number"),
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
});

export const PackAndShaderIdParamsSchema = z.object({
  packId: z.string().regex(/^\d+$/, "Pack ID must be a number"),
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
});

export const PackAndImageIdParamsSchema = z.object({
  packId: z.string().regex(/^\d+$/, "Pack ID must be a number"),
  imageId: z.string().regex(/^\d+$/, "Image ID must be a number"),
});
