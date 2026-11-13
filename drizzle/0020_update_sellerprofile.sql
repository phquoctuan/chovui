CREATE TABLE "counties" (
	"id" serial PRIMARY KEY NOT NULL,
	"region_id" integer NOT NULL,
	"name" text NOT NULL,
	"code" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "country_id";--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "country_code" varchar(2);--> statement-breakpoint
ALTER TABLE "seller_addresses" RENAME COLUMN "locality" TO "location";--> statement-breakpoint
ALTER TABLE "listings" DROP CONSTRAINT "listings_country_id_countries_id_fk";
--> statement-breakpoint
DROP INDEX "listings_country_id_idx";--> statement-breakpoint
DROP INDEX "listings_region_idx";--> statement-breakpoint
ALTER TABLE "countries" ALTER COLUMN "code" SET DATA TYPE varchar(2);--> statement-breakpoint
ALTER TABLE "seller_addresses" ALTER COLUMN "label" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "seller_addresses" ALTER COLUMN "label" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "seller_addresses" ALTER COLUMN "recipient_name" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "seller_addresses" ALTER COLUMN "recipient_name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "seller_addresses" ALTER COLUMN "phone" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "seller_addresses" ALTER COLUMN "country_code" SET DATA TYPE varchar(2);--> statement-breakpoint
ALTER TABLE "seller_addresses" ALTER COLUMN "postal_code" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "seller_addresses" ALTER COLUMN "postal_code" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "county_id" integer;--> statement-breakpoint
ALTER TABLE "seller_addresses" ADD COLUMN "region_id" integer;--> statement-breakpoint
ALTER TABLE "seller_addresses" ADD COLUMN "county_id" integer;--> statement-breakpoint
ALTER TABLE "regions" ADD COLUMN "has_county" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "counties" ADD CONSTRAINT "counties_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_country_code_countries_code_fk" FOREIGN KEY ("country_code") REFERENCES "public"."countries"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_county_id_counties_id_fk" FOREIGN KEY ("county_id") REFERENCES "public"."counties"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "seller_addresses" ADD CONSTRAINT "seller_addresses_country_code_countries_code_fk" FOREIGN KEY ("country_code") REFERENCES "public"."countries"("code") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "seller_addresses" ADD CONSTRAINT "seller_addresses_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "seller_addresses" ADD CONSTRAINT "seller_addresses_county_id_counties_id_fk" FOREIGN KEY ("county_id") REFERENCES "public"."counties"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX "listings_country_code_idx" ON "listings" USING btree ("country_code");--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN "region";--> statement-breakpoint
ALTER TABLE "seller_addresses" DROP COLUMN "address_line1";--> statement-breakpoint
ALTER TABLE "seller_addresses" DROP COLUMN "address_line2";--> statement-breakpoint
ALTER TABLE "seller_addresses" DROP COLUMN "administrative_area";