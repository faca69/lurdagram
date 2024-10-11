import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
//After 125 characters, the caption is truncated with a "See More" link.

export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  image: varchar("image").notNull(),
  caption: varchar("caption", { length: 2200 }),
  createdAt: timestamp("created_at", { withTimezone: true }),
});

//types
