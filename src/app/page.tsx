import Posts from "@/components/Posts";
import { PostModel } from "@/db/schemas/post.schema";
import { getPosts } from "@/services/posts.service";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <Posts posts={posts as PostModel[]} />
    </div>
  );
}
