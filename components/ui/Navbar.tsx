import { Press_Start_2P } from "next/font/google";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export default function Navbar() {
  return (
    <main className="bg-personal-two h-[80px]  flex justify-center items-center">
      <section className="w-full md:w-[700px] flex justify-around items-center">
        <div
          className={`${pixel.className} tracking-tighter text-[10px] underline cursor-pointer`}
        >
          LinkedIn
        </div>
        <div
          className={`${pixel.className} tracking-tighter text-[10px] underline cursor-pointer`}
        >
          GitHub
        </div>
      </section>
    </main>
  );
}
