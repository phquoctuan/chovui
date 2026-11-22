ALTER TYPE "public"."price_type" ADD VALUE 'free';--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "condition" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."listing_condition";--> statement-breakpoint
CREATE TYPE "public"."listing_condition" AS ENUM('new', 'used', 'refurbished');--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "condition" SET DATA TYPE "public"."listing_condition" USING "condition"::"public"."listing_condition";--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "group_id" integer;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "ward_id" integer;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "group_id" integer;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "paid_amount" numeric(25, 8) DEFAULT '0';--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_ward_id_wards_id_fk" FOREIGN KEY ("ward_id") REFERENCES "public"."wards"("id") ON DELETE restrict ON UPDATE cascade;