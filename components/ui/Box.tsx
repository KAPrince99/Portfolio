import { cn } from "@/lib/utils";

import { Press_Start_2P } from "next/font/google";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

interface BoxItem {
  id: string;
  name: string;
  main: boolean;
}

interface Props {
  className?: string;
  box?: BoxItem;
}

export default function Box({ className, box }: Props) {
  return (
    <div
      className={cn(
        `w-[110px] h-[75px] rounded-xl flex items-center justify-center text-[10px] ${pixel.className} tracking-tighter antialiased cursor-pointer font-sans  transition-all duration-200",
        "bg-black/60 text-gray-200 border border-white/50 hover:border-white/20 hover:text-white`,
        className
      )}
    >
      {box?.name}
    </div>
  );
}
