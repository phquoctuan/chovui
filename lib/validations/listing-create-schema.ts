import { z } from "zod";

export const listingCreateSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required.")
    .max(255, "Title must be at most 255 characters."),

  description: z
    .string()
    .trim()
    .max(5000, "Description must be at most 5000 characters.")
    .optional(),

  price: z
    .number()
    .int()
    .nonnegative("Price must be greater than or equal to 0."),

  country: z
    .string()
    .trim()
    .length(2, "Country must be a 2-letter code.")
    .toUpperCase(),

  category: z
    .string()
    .trim()
    .min(1, "Category is required.")
    .max(100),

  location: z
    .string()
    .trim()
    .min(1, "Location is required.")
    .max(255),
});

export type ListingCreateInput =
  z.infer<typeof listingCreateSchema>;