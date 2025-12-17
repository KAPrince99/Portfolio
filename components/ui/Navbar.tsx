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
    <nav className="w-full bg-personal-two h-[70px] md:h-[90px] flex justify-center items-center px-6 sticky top-0 z-50">
      <section className="w-full max-w-[1440px] flex justify-between items-center">
        {/* Optional Logo/Home placeholder */}
        <div
          className={`${pixel.className} text-[10px] hidden sm:block opacity-50`}
        >
          PORTFOLIO./25
        </div>

        <div className="flex gap-8 md:gap-12">
          <Link
            href="https://www.linkedin.com/in/prince-amanor-103368177/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${pixel.className} tracking-tighter text-[8px] sm:text-[10px] md:text-[14px] 2xl:text-lg underline hover:text-orange-500 transition-colors`}
          >
            LinkedIn
          </Link>
          <a
            href="https://github.com/KAPrince99"
            target="_blank"
            rel="noopener noreferrer"
            className={`${pixel.className} tracking-tighter text-[8px] sm:text-[10px] md:text-[14px] 2xl:text-lg underline hover:text-orange-500 transition-colors`}
          >
            GitHub
          </a>
        </div>
      </section>
    </nav>
  );
}
