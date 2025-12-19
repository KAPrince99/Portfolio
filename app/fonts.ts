import localFont from "next/font/local";
import { Press_Start_2P } from "next/font/google";

export const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

export const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});
