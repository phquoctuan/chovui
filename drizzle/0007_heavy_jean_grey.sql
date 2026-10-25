ALTER TABLE "seller_profiles" ADD COLUMN "nationality_code" text;--> statement-breakpoint
ALTER TABLE "seller_profiles" ADD COLUMN "default_country_code" text DEFAULT 'VN' NOT NULL;