import { getPostById } from "@/services/posts.service";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params: { id } }: { params: { id: string } }
) {
  const post = await getPostById(id);
  return NextResponse.json(post);
}
