import { z } from "zod";

export const CreateShaderSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable().optional(),
  versionType: z.enum(["JAVA", "FORGE", "OPTIFINE"]),
});

export const UpdateShaderSchema = CreateShaderSchema;

export const ShaderIdParamsSchema = z.object({
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
});

export const ShaderImageIdParamsSchema = z.object({
  imageId: z.string().regex(/^\d+$/, "Image ID must be a number"),
});

export const ShaderAndImageIdParamsSchema = z.object({
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
  imageId: z.string().regex(/^\d+$/, "Image ID must be a number"),
});
