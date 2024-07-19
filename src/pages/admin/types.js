import { z } from "zod";

export const locationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Username cannot be less than 2 characters." })
    .max(20, { message: "Username cannot be greater than 20 characters." }),
  imageUrl: z.string().url(),
  price: z
    .string()
    .min(3, { message: "Price cannot be less than 100 dollers" }),
  heading: z
    .string()
    .min(15, { message: "Description cannot be less than 15 characters." })
    .max(150, { message: "Description cannot be greater than 50 characters." }),
});
