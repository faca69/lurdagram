"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { ImagePlus, MapPin, ChevronDown } from "lucide-react";

export default function Component() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create New Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Create new post</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-64 object-cover rounded-md"
              />
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                <Label htmlFor="picture" className="cursor-pointer">
                  <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                  <span className="mt-2 block text-sm font-semibold text-gray-900">
                    Upload a photo
                  </span>
                </Label>
                <Input
                  id="picture"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleImageUpload}
                />
              </div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="caption">Caption</Label>
            <Textarea id="caption" placeholder="Write a caption..." />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Add location
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="w-full justify-between text-left font-normal"
            >
              Accessibility
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="w-full justify-between text-left font-normal"
            >
              Advanced settings
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button className="w-full">Share</Button>
      </DialogContent>
    </Dialog>
  );
}
