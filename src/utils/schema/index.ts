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

export const linkSchema = z.object({
  url: z
    .string()
    .min(1, { message: "Can't be empty" })
    .url({ message: "Please check the URL" }),
});

export const profileDetailsSchema = z.object({
  firstName: z.string().min(1, { message: "Can't be empty" }),
  lastName: z.string().min(1, { message: "Can't be empty" }),
  email: z.string().email().optional(),
});
