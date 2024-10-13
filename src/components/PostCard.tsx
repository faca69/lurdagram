"use client";

import usePostStore from "@/store/post-store";
import { Dot, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function PostCard() {
  const { isHidden, toggleHidden, comment, setComment } = usePostStore();

  // const [isHidden, setIsHidden] = useState(true);
  // const [comment, setComment] = useState("");
  const caption =
    "Lorem ipsum dolor sit amet consectetur,damn son adipisicing elit. Laborum quibusdam, accusantium assumenda optio dicta ut perferendis reprehenderit itaque quos voluptatibus, impedit repudiandae. Reprehenderit fuga et molestiae unde. Rerum, praesentium. Officia?";

  const truncatedText = `${caption.slice(0, 100)}....`;

  return (
    <article className="flex flex-col max-w-[470px]">
      {/* icon, username dots */}
      <div className="flex justify-between px-1 my-3">
        <div className="flex items-center">
          <div className="bg-pink-300 rounded-full size-8 mr-[6px]"></div>
          <p className="font-bold">username_69</p>
          <Dot className=" text-[#A8A8A8]" />
          <p className="text-[#A8A8A8]">17 h</p>
        </div>

        <div className="items-center flex">
          <Ellipsis />
        </div>
      </div>
      {/* media */}
      <div className="w-[470px] h-[590px]  border-[#262626] border-[1px] rounded-sm"></div>

      {/* likes  bar */}
      <div className="flex justify-between my-3 ">
        <div className="flex items-center gap-3">
          <Heart className="hover:text-white/70 cursor-pointer" />
          <MessageCircle className="hover:text-white/70 cursor-pointer" />
        </div>
        <div>
          <Send className="hover:text-white/70 cursor-pointer" />
        </div>
      </div>

      {/* caption */}

      <div>
        <div className="max-w-[470px]">
          <span className="font-bold">{"username_69"}&nbsp;</span>
          <span className="leading-[1] whitespace-normal break-words">
            {isHidden ? truncatedText : caption}
          </span>
          <span
            className="text-[#a3a3a3] cursor-pointer"
            onClick={toggleHidden}
          >
            &nbsp;{isHidden ? "more" : "hide"}
          </span>
        </div>
      </div>

      {/* comment */}

      <p className="text-[#a3a3a3] my-2 cursor-pointer">View all 25 comments</p>

      <form action="" className="flex items-center gap-1">
        <input
          placeholder="Add a comment..."
          className="bg-transparent placeholder:text-[#a3a3a3] border-none focus:outline-none resize-none w-full p-0 mb-0 "
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {!comment ? null : (
          <button className="text-sky-400 w-10 font-medium">Post</button>
        )}
      </form>

      {/* separating line */}
      <hr className="bg-[#262626] border-t-[1px] border-[#262626] p-0 mb-20 mt-4" />
    </article>
  );
}
