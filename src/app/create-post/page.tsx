"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { ImagePlus } from "lucide-react";
import { useEdgeStore } from "@/utils/edgestore";
import createPost from "../actions/create-post.action";

export default function CreatePostPage() {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const { edgestore } = useEdgeStore();

  return (
    <>
      <form className="flex flex-col items-center justify-center min-h-screen mx-auto p-4">
        <Input
          type="file"
          onChange={(e) => {
            setFile(e.target.files?.[0] || null);
          }}
        />

        <div className="grid gap-2 mb-4">
          <Label htmlFor="caption">Caption</Label>
          <Textarea
            id="caption"
            placeholder="Write a caption..."
            className="border rounded-md p-2"
            name="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>

        <Button
          className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          onClick={async (e) => {
            e.preventDefault();
            console.log("Button clicked");
            if (file && caption) {
              console.log("File and caption are set");
              const res = await edgestore.publicFiles.upload({
                file,
              });
              console.log("Upload response:", res);
              await createPost(res.url, caption);
            } else {
              console.log("Please fill all fields and select an image");
            }
          }}
        >
          Share
        </Button>
      </form>
    </>
  );
}
