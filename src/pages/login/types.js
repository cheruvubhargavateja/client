import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password cannot be less than 6 characters." })
    .max(10, { message: "Password cannot be greater than 20 characters." }),
});
