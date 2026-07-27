import { z } from "zod";

export const CreateModCommentSchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
  text: z.string().min(1, "Text is required"),
});

export const CreatePackCommentSchema = z.object({
  packId: z.string().regex(/^\d+$/, "Pack ID must be a number"),
  text: z.string().min(1, "Text is required"),
});

export const CreateShaderCommentSchema = z.object({
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
  text: z.string().min(1, "Text is required"),
});

export const UpdateCommentSchema = z.object({
  text: z.string().min(1, "Text is required"),
});

export const CommentIdParamsSchema = z.object({
  commentId: z.string().regex(/^\d+$/, "Comment ID must be a number"),
});

export const ModIdParamsSchema = z.object({
  modId: z.string().regex(/^\d+$/, "Mod ID must be a number"),
});

export const PackIdParamsSchema = z.object({
  packId: z.string().regex(/^\d+$/, "Pack ID must be a number"),
});

export const ShaderIdParamsSchema = z.object({
  shaderId: z.string().regex(/^\d+$/, "Shader ID must be a number"),
});
