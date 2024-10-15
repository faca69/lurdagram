import { PostCreateModel } from "@/db/schemas/post.schema";
import { create } from "@/repositories/posts.repository";

export const createAPost = async (post: PostCreateModel) => {
  const createdPost = await create(post);

  return createdPost;
};
