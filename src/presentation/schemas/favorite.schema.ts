import { z } from "zod";

export const AddFavoriteSchema = z.object({
  type: z.enum(["mod", "pack", "shader"]),
  targetId: z.string().min(1, "targetId is required"),
});

export const FavoriteIdParamsSchema = z.object({
  favoriteId: z.string().min(1),
});
