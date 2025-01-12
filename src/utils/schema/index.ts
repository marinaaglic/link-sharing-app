import { z } from "zod";

export const loginSchema = (type: "login" | "register") =>
  z
    .object({
      email: z
        .string()
        .min(1, "Can't be empty")
        .email("This is not a valid e-mail"),
      password: z.string().min(8, "Please check again"),
      confirmPassword:
        type === "register"
          ? z.string().min(8, "Please check again")
          : z.string().optional(),
    })
    .refine(
      (data) => type !== "register" || data.password === data.confirmPassword,
      {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      }
    );
