// "use server";

// import { PostExtendedModel } from "@/db/schemas/post.schema";
// import { createAPost } from "@/services/posts.service";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// export default async function createPost(
//   image: string,
//   caption: string,
//   authorId: string
// ) {
//   const newPost: PostExtendedModel = {
//     image,
//     caption,
//     authorId,
//   };

//   await createAPost(newPost);
//   revalidatePath("/");
//   redirect("/");
// }

"use server";

import { PostExtendedModel } from "@/db/schemas/post.schema";
import { createAPost } from "@/services/posts.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createPost(formData: FormData) {
  const image = formData.get("image") as string;
  const caption = formData.get("caption") as string;
  const authorId = formData.get("authorId") as string;

  if (!image || !caption || !authorId) {
    throw new Error("Missing required fields");
  }

  const newPost = {
    image,
    caption,
    authorId,
  };

  await createAPost(newPost);
  revalidatePath("/");
  redirect("/");
}
