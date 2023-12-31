import type { Config } from "drizzle-kit"

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "libsql",
  dbCredentials: {
    url: `${process.env.DATABASE_URL}?authToken=${process.env.DATABASE_TOKEN}`,
  },
} satisfies Config
