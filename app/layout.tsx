// app/layout.tsx
import type { Metadata } from "next";
import { satoshi, pixel } from "./fonts";

import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${pixel.variable}`}>
      <body className=" antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
