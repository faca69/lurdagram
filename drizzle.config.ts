import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: ["./src/db/schemas/post.schema.ts"],
  out: "",
  dialect: "postgresql",
  dbCredentials: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "lurdagram",
    port: 5432,
  },
  verbose: true,
});
