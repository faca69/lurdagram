"use server";

import { PostExtendedModel } from "@/db/schemas/post.schema";
import { createAPost } from "@/services/posts.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createPost(
  image: string,
  caption: string,
  authorId: string
) {
  const newPost: PostExtendedModel = {
    image,
    caption,
    authorId,
  };

  await createAPost(newPost);
  revalidatePath("/");
  redirect("/");
}
