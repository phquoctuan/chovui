CREATE TABLE "wards" (
	"id" serial PRIMARY KEY NOT NULL,
	"county_id" integer NOT NULL,
	"name" text NOT NULL,
	"code" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "regions" DROP CONSTRAINT "regions_country_id_countries_id_fk";
--> statement-breakpoint
ALTER TABLE "counties" ADD COLUMN "has_ward" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "seller_addresses" ADD COLUMN "ward_id" integer;--> statement-breakpoint
ALTER TABLE "regions" ADD COLUMN "country_code" varchar(2) NOT NULL;--> statement-breakpoint
ALTER TABLE "wards" ADD CONSTRAINT "wards_county_id_counties_id_fk" FOREIGN KEY ("county_id") REFERENCES "public"."counties"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seller_addresses" ADD CONSTRAINT "seller_addresses_ward_id_wards_id_fk" FOREIGN KEY ("ward_id") REFERENCES "public"."wards"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "regions" ADD CONSTRAINT "regions_country_code_countries_code_fk" FOREIGN KEY ("country_code") REFERENCES "public"."countries"("code") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX "region_country_code_idx" ON "regions" USING btree ("country_code");--> statement-breakpoint
ALTER TABLE "regions" DROP COLUMN "country_id";