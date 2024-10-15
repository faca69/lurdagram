import { PostCreateModel } from "@/db/schemas/post.schema";
import { create, find } from "@/repositories/posts.repository";

export const getPosts = async () => {
  const posts = await find();

  return posts;
};

export const createAPost = async (post: PostCreateModel) => {
  const createdPost = await create(post);

  return createdPost;
};
