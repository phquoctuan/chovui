import "dotenv/config";
import { db } from "../db";
import { listings } from "../db/schema";

const seedListings: Array<typeof listings.$inferInsert> = [
  
];

async function main() {
  await db.insert(listings).values(seedListings);

  console.log(
    `Inserted ${seedListings.length} listings.`,
  );
}

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);
    process.exit(1);
  });