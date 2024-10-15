// import PostCard from "@/components/PostCard";

// export default function Home() {
//   return (
//     <div>
//       <PostCard />
//     </div>
//   );
// }

import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/feed/following");
}
