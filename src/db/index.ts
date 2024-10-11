import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { posts } from "./schemas/post.schema";

const client = postgres({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "lurdagram",
  port: 5432,
});

export const db = drizzle(client, {
  schema: {
    posts,
  },
  logger: true,
});

export type Db = typeof db;
