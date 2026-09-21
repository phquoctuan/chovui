import "dotenv/config";

import { db } from "../db";
import { listings } from "../db/schema";

const seedListings: Array<typeof listings.$inferInsert> = [
  {
    title: "iPhone 15 Pro Max",
    description: "iPhone 15 Pro Max chính hãng",
    price: 25000000,
    country: "VN",
    category: "Điện thoại",
    location: "Hồ Chí Minh",
  },
  {
    title: "iPhone 14 Pro",
    description: "iPhone 14 Pro còn đẹp",
    price: 18000000,
    country: "VN",
    category: "Điện thoại",
    location: "Hà Nội",
  },
  {
    title: "MacBook Air M3",
    description: "MacBook Air M3",
    price: 27000000,
    country: "VN",
    category: "Laptop",
    location: "Hồ Chí Minh",
  },
  {
    title: "Samsung Galaxy S25",
    description: "Samsung Galaxy S25 mới",
    price: 22000000,
    country: "VN",
    category: "Điện thoại",
    location: "Đà Nẵng",
  },
  {
    title: "MacBook Pro M4",
    description: "MacBook Pro M4",
    price: 45000000,
    country: "VN",
    category: "Laptop",
    location: "Hồ Chí Minh",
  },
  {
    title: "Toyota Camry",
    description: "Toyota Camry đã qua sử dụng",
    price: 850000000,
    country: "VN",
    category: "Ô tô",
    location: "Hà Nội",
  },
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