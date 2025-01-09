import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string()
      .min(1, "Can't be empty")
      .email("This is not a valid e-mail"),
    password: z.string().min(8, "Please check again"),
    confirmPassword: z.string().min(8, "Please check again"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
