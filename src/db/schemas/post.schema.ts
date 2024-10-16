import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { UserModel, users } from "./user.schema";

export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  image: varchar("image").notNull(),
  caption: varchar("caption", { length: 2200 }),
  authorId: uuid("author_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
    relationName: "author",
  }),
}));

export type PostModel = InferSelectModel<typeof posts>;
export type PostCreateModel = InferInsertModel<typeof posts>;

export type PostExtendedModel = PostModel & {
  author: UserModel;
};
