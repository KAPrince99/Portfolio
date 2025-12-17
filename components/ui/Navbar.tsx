import { Press_Start_2P } from "next/font/google";
import Link from "next/link";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export default function Navbar() {
  return (
    <nav className="bg-personal-two h-[60px] md:h-[60px] flex justify-center items-center px-4 ">
      <section className="w-full max-w-[700px] flex justify-around items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/prince-amanor-103368177/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${pixel.className} tracking-tighter text-[8px] sm:text-[10px] md:text-[12px] underline cursor-pointer hover:opacity-80 transition-opacity`}
        >
          LinkedIn
        </Link>
        <a
          href="https://github.com/KAPrince99"
          target="_blank"
          rel="noopener noreferrer"
          className={`${pixel.className} tracking-tighter text-[8px] sm:text-[10px] md:text-[12px] underline cursor-pointer hover:opacity-80 transition-opacity`}
        >
          GitHub
        </a>
      </section>
    </nav>
  );
}
