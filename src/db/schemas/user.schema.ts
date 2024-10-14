import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 30 }).notNull(),
  username: varchar("username", { length: 30 }).notNull().unique(),
  password: varchar("password").notNull(),
  joinDate: timestamp("join_date", { withTimezone: true })
    .notNull()
    .defaultNow(),
  location: varchar("location"),
  description: varchar("description"),
  profilePicture: varchar("profile_picture"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type UserModel = InferSelectModel<typeof users>;
export type UserCreateModel = InferInsertModel<typeof users>;
