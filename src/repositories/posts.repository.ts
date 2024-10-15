import { eq } from "drizzle-orm";
import { db } from "../db";
import { PostCreateModel, PostModel, posts } from "@/db/schemas/post.schema";

// const find = ()

export const findOneById = (id: string) => {
  try {
    return db.query.posts.findFirst({
      where: eq(posts.id, id),
    });
  } catch (error) {
    console.error(error);
  }
};

export const create = (post: PostCreateModel): Promise<PostModel> => {
  return db
    .insert(posts)
    .values(post)
    .returning()
    .then((res) => res?.[0]);
};
