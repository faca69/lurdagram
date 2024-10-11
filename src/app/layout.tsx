import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import "./globals.css";

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
        className={cn(GeistSans.className, "antialiased bg-black text-white")}
      >
        {children}
      </body>
    </html>
  );
}
