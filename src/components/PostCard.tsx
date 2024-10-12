"use client";

import { Dot, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

export default function PostCard() {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="flex flex-col max-w-[385px]">
      {/* icon, username dots */}
      <div className="flex justify-between px-1 my-3">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage className="" width={10} height={10}></AvatarImage>
            <AvatarFallback className="size-8">🥶</AvatarFallback>
          </Avatar>
          <p className="font-bold">username_69</p>
          <Dot className=" text-[#A8A8A8]" />
          <p className="text-[#A8A8A8]">17 h</p>
        </div>

        <div className="items-center flex">
          <Ellipsis />
        </div>
      </div>
      {/* media */}
      <div className="w-[385px] h-[500px] border rounded-sm"></div>

      {/* likes  bar */}
      <div className="flex justify-between my-2 ">
        <div className="flex items-center gap-3">
          <Heart />
          <MessageCircle />
        </div>
        <div>
          <Send />
        </div>
      </div>

      {/* caption */}

      <div>
        <div>
          <p className="">
            <span className="font-bold">{"username_69"}</span>
            {"  "}Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laborum quibusdam, accusantium assumenda optio dicta ut perferendis
            reprehenderit itaque quos voluptatibus, impedit repudiandae.
            Reprehenderit fuga et molestiae unde. Rerum, praesentium. Officia?
          </p>
        </div>
      </div>

      {/* seperating line */}
      <hr className="bg-[#262626] border-t-[1px] border-[#262626]" />
    </div>
  );
}
