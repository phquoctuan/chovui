ALTER TABLE "listings" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "listings_user_id_idx" ON "listings" USING btree ("user_id");