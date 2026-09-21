// import "dotenv/config"; -> url: process.env.DATABASE_URL!,
import { env } from "@/env.mjs";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",

  schema: "./db/schema/**/*.ts",

  dialect: "postgresql",

  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});
