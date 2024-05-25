import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  migrations: {
    table: "migrations",
    schema: "public",
  },
  schema: "./db/schema.ts", // add this line to specify the schema file
  out: "./drizzle", // directory for generated files
});
