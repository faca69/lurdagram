import Posts from "@/components/Posts";
import { PostModel } from "@/db/schemas/post.schema";
import { getPosts } from "@/services/posts.service";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const posts = await getPosts();
  return (
    <div>
      <Posts posts={posts as PostModel[]} />
    </div>
  );
}
