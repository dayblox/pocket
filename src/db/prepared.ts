import { like, sql } from "drizzle-orm"
import { db } from "."
import { users } from "./schema"

export const getUser = db.query.users
  .findFirst({
    where: like(users.email, sql.placeholder("email")),
  })
  .prepare()

export const insertUser = db
  .insert(users)
  .values({ email: sql.placeholder("email") })
  .onConflictDoNothing()
  .returning()
  .prepare()
