CREATE TYPE "public"."price_type" AS ENUM('fixed', 'negotiable', 'contact');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('draft', 'payment', 'pending', 'publish', 'expired', 'rejected', 'archived');--> statement-breakpoint
CREATE TABLE "categories" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "categories_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(150) NOT NULL,
	"slug" varchar(150) NOT NULL,
	"parent_id" integer,
	"template" varchar(50) DEFAULT 'default' NOT NULL,
	"order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "category_translations" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" integer NOT NULL,
	"locale" varchar(10) NOT NULL,
	"name" varchar(150) NOT NULL,
	"slug" varchar(150) NOT NULL,
	CONSTRAINT "category_locale_slug_idx" UNIQUE("slug","locale")
);
--> statement-breakpoint
CREATE TABLE "currencies" (
	"code" varchar(3) PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"symbol" varchar(10) NOT NULL,
	"decimal_places" smallint DEFAULT 2 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
DROP INDEX "listings_country_idx";--> statement-breakpoint
DROP INDEX "listings_category_idx";--> statement-breakpoint
DROP INDEX "listings_location_idx";--> statement-breakpoint
ALTER TABLE "countries" ALTER COLUMN "currency_code" SET DATA TYPE varchar(3);--> statement-breakpoint
ALTER TABLE "countries" ALTER COLUMN "currency_code" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "price" SET DATA TYPE numeric(25, 7);--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "location" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "category_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "price_type" "price_type" DEFAULT 'fixed';--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "currency_code" varchar(3) NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "quantity" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "country_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "region" varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "postal_code" varchar(20);--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "latitude" double precision;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "longitude" double precision;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "attributes" jsonb DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "slug" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "is_disabled" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "paid" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "status" "status" DEFAULT 'draft';--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "view_count" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "published_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "expires_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "deleted_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "category_translations" ADD CONSTRAINT "category_translations_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "categories_parent_id_idx" ON "categories" USING btree ("parent_id");--> statement-breakpoint
CREATE INDEX "category_translations_locale_idx" ON "category_translations" USING btree ("locale");--> statement-breakpoint
CREATE INDEX "category_translations_category_id_idx" ON "category_translations" USING btree ("category_id");--> statement-breakpoint
ALTER TABLE "countries" ADD CONSTRAINT "countries_currency_code_currencies_code_fk" FOREIGN KEY ("currency_code") REFERENCES "public"."currencies"("code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_currency_code_currencies_code_fk" FOREIGN KEY ("currency_code") REFERENCES "public"."currencies"("code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_country_id_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "public"."countries"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX "listings_country_id_idx" ON "listings" USING btree ("country_id");--> statement-breakpoint
CREATE INDEX "listings_category_id_idx" ON "listings" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX "listings_slug_idx" ON "listings" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "listings_status_idx" ON "listings" USING btree ("status");--> statement-breakpoint
CREATE INDEX "listings_region_idx" ON "listings" USING btree ("region");--> statement-breakpoint
CREATE INDEX "listings_published_at_idx" ON "listings" USING btree ("published_at");--> statement-breakpoint
CREATE INDEX "listings_expires_at_idx" ON "listings" USING btree ("expires_at");--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "country";--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "category";--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_slug_unique" UNIQUE("slug");