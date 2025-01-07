import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Can't be empty"),
  password: z.string().min(8, "Please check again"),
});
