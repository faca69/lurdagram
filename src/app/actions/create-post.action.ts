"use server";

import { createAPost } from "@/services/posts.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createPost(image: string, caption: string) {
  const newPost = {
    image,
    caption,
  };

  await createAPost(newPost);
  revalidatePath("/");
  redirect("/");
}
