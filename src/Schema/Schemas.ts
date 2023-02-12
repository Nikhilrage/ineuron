import { z } from "zod";

export const movieCardSchema = z.object({
  poster: z.string(),
  title: z.string(),
  genres: z.string().array(),
  id: z.string(),
  liked: z.number(),
  certificate: z.string(),
});

export const movieDetailsSchema = z.object({
  poster: z.string(),
  title: z.string(),
  languages: z.string().array(),
  description: z.string(),
  runtime: z.string(),
});

export const formSchema = z.object({
  name: z.string().min(1, "Username is required").max(100),
  email: z.string().email("Invalid email").min(4, "Email is required"),
  number: z
    .string()
    .min(10, "Please provide valid number")
    .max(10, "Please provide valid number"),
  card: z
    .string()
    .min(16, "Please provide 16 digit card number")
    .max(16, "Please provide 16 digit card number"),
  cvv: z
    .string()
    .min(3, "Please provide 3 digit card number")
    .max(3, "Please provide 3 digit card number"),
  validThru: z
    .string()
    .min(4, "Please provide month/year in 1323(mmyy) format")
    .max(4, "Please provide month/year in 1323(mmyy) format"),
});
