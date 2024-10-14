import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { EdgeStoreProvider } from "@/utils/edgestore";

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
        <EdgeStoreProvider>
          <main className="min-h-screen flex flex-col items-center">
            <article className="flex flex-row w-full h-screen ">
              <section className="w-[290px] border-r-[1px] border-[#262626] h-screen fixed ">
                <Sidebar />
              </section>
              <section className="w-full p-0 flex justify-center">
                {children}
              </section>
            </article>
          </main>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
