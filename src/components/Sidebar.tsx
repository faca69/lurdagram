"use client";

import {
  CirclePlus,
  Clapperboard,
  CompassIcon,
  HomeIcon,
  MessageCircle,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <ol className="flex flex-col gap-3 py-2 h-full px-2 ">
      <li className="my-7">
        <Link href={"#"} className="px-4 font-bold text-xl">
          LURDAGRAM
        </Link>
      </li>
      <li>
        <Link
          href={"#"}
          className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
        >
          <HomeIcon className="size-8" />
          Home
        </Link>
      </li>

      <li>
        <Link
          href={"#"}
          className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
        >
          <SearchIcon className="size-8" />
          Search
        </Link>
      </li>
      <li>
        <Link
          href={"#"}
          className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
        >
          <CompassIcon className="size-8" />
          Explore
        </Link>
      </li>
      <li>
        <Link
          href={"#"}
          className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
        >
          <Clapperboard className="size-8" />
          Reels
        </Link>
      </li>
      <li>
        <Link
          href={"#"}
          className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
        >
          <MessageCircle className="size-8" />
          Messages
        </Link>
      </li>
      <li>
        <Link
          href={"#"}
          className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
        >
          <CirclePlus className="size-8" />
          Create
        </Link>
      </li>
      <li>
        <Link
          href={"#"}
          className="flex items-center gap-1 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
        >
          <Avatar>
            <AvatarImage
              className="w-8 h-8 rounded-full"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>🥶</AvatarFallback>
          </Avatar>
          Profile
        </Link>
      </li>
    </ol>
  );
}
