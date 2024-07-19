import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(6, { message: "Username cannot be less than 6 characters." })
      .max(20, { message: "Username cannot be greater than 20 characters." }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password cannot be less than 6 characters." })
      .max(10, { message: "Password cannot be greater than 20 characters." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });
