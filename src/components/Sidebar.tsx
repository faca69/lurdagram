"use client";

import {
  CirclePlus,
  Clapperboard,
  CompassIcon,
  HomeIcon,
  LogOutIcon,
  MessageCircle,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

export default function Sidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <ol className="flex flex-col gap-3 py-2 h-full px-2 ">
      {session ? (
        <>
          <li className="my-7">
            <Link href={"/"} className="px-4 font-bold text-xl">
              LURDAGRAM
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
            >
              <HomeIcon className="size-8" />
              Home
            </Link>
          </li>

          <li>
            <Link
              href={"/"}
              className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
            >
              <SearchIcon className="size-8" />
              Search
            </Link>
          </li>
          <li>
            <Link
              href={"/explore"}
              className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
            >
              <CompassIcon className="size-8" />
              Explore
            </Link>
          </li>
          <li>
            <Link
              href={"/lurdies"}
              className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
            >
              <Clapperboard className="size-8" />
              Lurdies
            </Link>
          </li>
          <li>
            <Link
              href={"/messages"}
              className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
            >
              <MessageCircle className="size-8" />
              Messages
            </Link>
          </li>
          <li>
            <Link
              href={"create-post"}
              className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
            >
              <CirclePlus className="size-8" />
              Create
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex items-center gap-1 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
            >
              <div className="bg-pink-300 rounded-full size-8 mr-[6px]"></div>
              Profile
            </Link>
          </li>
          <li>
            <div
              onClick={() => signOut()}
              className="flex items-center gap-1 hover:bg-white/10 px-4 py-2 rounded-md font-medium text-red-500 cursor-pointer"
            >
              <LogOutIcon className="size-8" />
              Log Out
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              href={"/login"}
              className="flex items-center gap-3 hover:bg-white/10 px-4 py-2 rounded-md font-medium"
            >
              Log In
            </Link>
          </li>
        </>
      )}
    </ol>
  );
}
