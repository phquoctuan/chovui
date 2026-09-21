import "dotenv/config";

import { db } from "@/db";
import { listings } from "@/db/schema";

async function main() {
  const result = await db.execute("select 1");

  console.log("Database connection OK");
  console.log(result);

  const rows = await db
    .select()
    .from(listings);

  console.log("Listings:", rows);
}

main()
  .catch((error) => {
    console.error("Database connection failed:");
    console.error(error);
    process.exit(1);
  });