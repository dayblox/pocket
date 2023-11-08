import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  email: text("email").primaryKey(),
  isAdmin: int("isAdmin", { mode: "boolean" }).default(false).notNull(),
})
