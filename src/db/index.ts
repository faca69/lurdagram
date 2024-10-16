import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { posts, postsRelations } from "./schemas/post.schema";
import { users } from "./schemas/user.schema";

const client = postgres({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "lurdagram",
  port: 5432,
});

export const db = drizzle<{
  posts: typeof posts;
  users: typeof users;
  postsRelations: typeof postsRelations;
}>(client, {
  schema: {
    posts,
    users,
    postsRelations,
  },
  logger: true,
});

export type Db = typeof db;
