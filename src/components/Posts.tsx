import { db } from "@/db";
import PostCard from "./PostCard";
import { PostModel } from "@/db/schemas/post.schema";

type PostsProps = {
  posts: PostModel[];
};

export default function Posts({ posts }: PostsProps) {
  return (
    <div>
      {posts.map((post: PostModel) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
