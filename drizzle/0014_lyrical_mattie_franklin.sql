ALTER TABLE "listings" ALTER COLUMN "price" SET DATA TYPE numeric(25, 8);--> statement-breakpoint
ALTER TABLE "listings" ALTER COLUMN "price" DROP NOT NULL;