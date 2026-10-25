CREATE TABLE "countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"name" text NOT NULL,
	"name_vi" text NOT NULL,
	"name_en" text NOT NULL,
	"native_name" text NOT NULL,
	"phone_code" text NOT NULL,
	"area" text,
	"flag_url" text,
	"currency_code" text,
	"currency_symbol" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "countries_code_unique" ON "countries" USING btree ("code");--> statement-breakpoint
CREATE INDEX "countries_active_sort_idx" ON "countries" USING btree ("is_active","sort_order");