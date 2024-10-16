import { PostCreateModel, PostExtendedModel } from "@/db/schemas/post.schema";
import { create, find, findOneById } from "@/repositories/posts.repository";

export const getPostById = async (id: string) => {
  const post = findOneById(id);

  return post;
};

export const getPosts = async (): Promise<PostExtendedModel[]> => {
  const posts = await find();

  return posts as PostExtendedModel[];
};

export const createAPost = async (post: PostCreateModel) => {
  const createdPost = await create(post);

  return createdPost;
};
