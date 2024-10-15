import { getUserByUsername } from "@/services/users.service";

type ProfileProps = {
  params: { username: string };
};

export default async function Profile({ params: { username } }: ProfileProps) {
  const user = await getUserByUsername(username);
  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      PROFILE <span>user:{user.username}</span>
    </div>
  );
}
