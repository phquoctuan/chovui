CREATE TABLE "seller_phones" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"phone" text NOT NULL,
	"label" text DEFAULT 'Số phụ' NOT NULL,
	"verified" boolean DEFAULT false NOT NULL,
	"verified_at" timestamp with time zone,
	"primary" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "seller_addresses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"label" text NOT NULL,
	"recipient_name" text NOT NULL,
	"phone" text DEFAULT '' NOT NULL,
	"country_code" text NOT NULL,
	"address_line1" text NOT NULL,
	"address_line2" text DEFAULT '' NOT NULL,
	"locality" text DEFAULT '' NOT NULL,
	"administrative_area" text DEFAULT '' NOT NULL,
	"postal_code" text DEFAULT '' NOT NULL,
	"primary" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "seller_contact_methods" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"type" text NOT NULL,
	"value" text NOT NULL,
	"is_public" boolean DEFAULT true NOT NULL,
	"primary" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "seller_phone_verifications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"phone_id" uuid NOT NULL,
	"code_hash" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"attempts" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "seller_phones" ADD CONSTRAINT "seller_phones_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seller_addresses" ADD CONSTRAINT "seller_addresses_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seller_contact_methods" ADD CONSTRAINT "seller_contact_methods_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seller_phone_verifications" ADD CONSTRAINT "seller_phone_verifications_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seller_phone_verifications" ADD CONSTRAINT "seller_phone_verifications_phone_id_seller_phones_id_fk" FOREIGN KEY ("phone_id") REFERENCES "public"."seller_phones"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "seller_phones_user_id_idx" ON "seller_phones" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "seller_phones_user_phone_idx" ON "seller_phones" USING btree ("user_id","phone");--> statement-breakpoint
CREATE INDEX "seller_addresses_user_id_idx" ON "seller_addresses" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "seller_contact_methods_user_id_idx" ON "seller_contact_methods" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "seller_phone_verifications_phone_id_idx" ON "seller_phone_verifications" USING btree ("phone_id");