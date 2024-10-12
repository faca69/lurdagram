import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Lurdagram",
  description: "Share your journey and celebrate the moments that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.className,
          "antialiased bg-black text-white min-h-screen"
        )}
      >
        <main className="min-h-screen flex flex-col items-center">
          <article className="flex flex-row w-full h-screen ">
            <section className="w-[290px] border-r-[1px] border-[#262626] ">
              <Sidebar />
            </section>
            <section className="w-full p-0 ">{children}</section>
          </article>
        </main>
      </body>
    </html>
  );
}
