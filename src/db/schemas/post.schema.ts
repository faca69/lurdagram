import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  image: varchar("image").notNull(),
  caption: varchar("caption", { length: 2200 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type PostModel = InferSelectModel<typeof posts>;
export type PostCreateModel = InferInsertModel<typeof posts>;
