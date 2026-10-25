import { z } from "zod";

const phoneValue = z.string().trim().min(5, "Số điện thoại quá ngắn.").max(30, "Số điện thoại quá dài.");

export const phoneCreateSchema = z.object({
  phone: phoneValue,
  label: z.string().trim().max(40).default("Số phụ"),
});
export const phoneUpdateSchema = z.object({
  phone: phoneValue,
  label: z.string().trim().max(40),
});

export const addressSchema = z.object({
  label: z.string().trim().min(1).max(80),
  recipientName: z.string().trim().min(2).max(100),
  phone: z.string().trim().max(30),
  countryCode: z.string().length(2).regex(/^[A-Za-z]{2}$/).transform((v) => v.toUpperCase()),
  addressLine1: z.string().trim().min(1).max(200),
  addressLine2: z.string().trim().max(200),
  locality: z.string().trim().max(100),
  administrativeArea: z.string().trim().max(100),
  postalCode: z.string().trim().max(30),
  primary: z.boolean(),
});

export const contactMethodSchema = z.object({
  type: z.enum(["Zalo", "Messenger", "WhatsApp", "Telegram", "Other"]),
  value: z.string().trim().min(1).max(300),
  isPublic: z.boolean(),
  primary: z.boolean(),
});

export const phoneVerificationSchema = z.object({
  action: z.enum(["send", "confirm"]),
  code: z.string().regex(/^\d{6}$/).optional(),
});
