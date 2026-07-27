import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password must be at least 4 characters long"),
});

export const ChangePasswordSchema = z.object({
  lastPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(4, "New password must be at least 4 characters long"),
});
