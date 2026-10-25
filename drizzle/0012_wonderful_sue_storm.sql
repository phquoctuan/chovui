CREATE TYPE "public"."listing_condition" AS ENUM('{new', 'used', 'refurbished');--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "condition" "listing_condition";--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "user_cancel_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "sold_at" timestamp with time zone;