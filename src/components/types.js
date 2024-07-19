import { z } from "zod";

export const reviewSchema = z.object({
  description: z
    .string()
    .min(10, { message: "Description cannot be less than 10 characters." })
    .max(100, {
      message: "Description cannot be greater than 100 characters.",
    }),
});

