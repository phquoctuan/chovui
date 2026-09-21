import { z } from "zod";
import {PAGE_SIZE_OPTIONS, DEFAULT_PAGE_SIZE} from "@/components/const";

const optionalText = z
  .string()
  .trim()
  .optional();

const optionalPrice = z
  .string()
  .trim()
  .regex(/^\d+$/, "Giá phải là số nguyên không âm")
  .optional();

export const listingQuerySchema = z
  .object({
    q: optionalText,
    country: optionalText,
    category: optionalText,
    location: optionalText,
    minPrice: optionalPrice,
    maxPrice: optionalPrice,
    page: z
      .string()
      .regex(/^\d+$/, "page phải là số nguyên dương")
      .optional()
      .default("1"),
    pageSize: z
      .string()
      .regex(/^\d+$/, "pageSize phải là số nguyên")
      .optional()
      .default(String(DEFAULT_PAGE_SIZE)),
  })
  .superRefine((data, context) => {
    const page = Number(data.page);
    const pageSize = Number(data.pageSize);

    if (page < 1) {
      context.addIssue({
        code: "custom",
        path: ["page"],
        message: "page phải lớn hơn hoặc bằng 1",
      });
    }

    if (
      !PAGE_SIZE_OPTIONS.includes(
        pageSize as (typeof PAGE_SIZE_OPTIONS)[number],
      )
    ) {
      context.addIssue({
        code: "custom",
        path: ["pageSize"],
        message: `pageSize phải thuộc: ${PAGE_SIZE_OPTIONS.join(", ")}`,
      });
    }

    if (
      data.minPrice !== undefined &&
      data.maxPrice !== undefined &&
      Number(data.minPrice) > Number(data.maxPrice)
    ) {
      context.addIssue({
        code: "custom",
        path: ["minPrice"],
        message: "minPrice không được lớn hơn maxPrice",
      });
    }
  });

export type ListingQueryInput = z.input<
  typeof listingQuerySchema
>;

export type ValidatedListingQuery = z.output<
  typeof listingQuerySchema
>;