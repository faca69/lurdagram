"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEdgeStore } from "@/utils/edgestore";
import createPost from "@/app/actions/create-post.action";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CreatePostPage() {
  const { data: session } = useSession();
  const [file, setFile] = useState<File | null>(null);
  const { edgestore } = useEdgeStore();

  if (!session) {
    redirect("/login");
  }

  const handleSubmit = async (formData: FormData) => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      formData.set("image", res.url);
    }
    await createPost(formData);
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center justify-center min-h-screen mx-auto p-4"
    >
      <Input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <div className="grid gap-2 mb-4">
        <Label htmlFor="caption">Caption</Label>
        <Textarea
          id="caption"
          name="caption"
          placeholder="Write a caption..."
          className="border rounded-md p-2"
        />
        <input type="hidden" name="authorId" value={session?.user.id} />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
      >
        Share
      </Button>
    </form>
  );
}
