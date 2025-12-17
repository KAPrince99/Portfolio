import { Press_Start_2P } from "next/font/google";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export default function PakLayer({ name }: { name: string }) {
  return (
    <section
      className={`${pixel.className} flex justify-between items-center tracking-tighter animate-fade-up animation-delay-200`}
    >
      <div>
        <h1 className={`  text-5xl text-orange-500`}>PAK.</h1>
        <span className="text-orange-500 font-bold">- - - - - -</span>
      </div>
      <div className="flex items-center gap-4 text-[10px]">
        <div className="flex items-center gap-2 border-2 border-black/30 px-2 py-1 rounded-sm  text-black/60 tracking-wide">
          <span className="text-[5px]">*</span>
          <p>{name.toUpperCase()}</p>
        </div>
        <div className="flex items-center gap-2 border-2 border-black/30 px-2 py-1 rounded-sm  text-black/60 tracking-wide">
          <span className="text-[5px]">*</span>
          <p>INFO</p>
        </div>
        <div className="w-8 h-8 bg-orange-500 rounded-md grid place-content-center  text-black/60 ">
          x
        </div>
      </div>
    </section>
  );
}
