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
      className={`${pixel.className} flex flex-col md:flex-row justify-between items-start md:items-center gap-6 tracking-tighter w-full`}
    >
      <div className=" items-center gap-4">
        <h1 className="text-3xl md:text-5xl 2xl:text-7xl text-orange-500">
          PAK.
        </h1>
        <span className="text-orange-500 font-bold hidden lg:block text-xl 2xl:text-3xl">
          - - - - -
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3 md:gap-6 text-[8px] md:text-[10px] 2xl:text-base">
        <div className="flex items-center gap-2 border-2 border-black/30 px-3 py-2 rounded-sm text-black/60 bg-white/10">
          <span className="text-[6px] 2xl:text-[10px] animate-pulse">*</span>
          <p className="font-bold">{name.toUpperCase()}</p>
        </div>
        <div className="flex items-center gap-2 border-2 border-black/30 px-3 py-2 rounded-sm text-black/60 bg-white/10">
          <span className="text-[6px] 2xl:text-[10px] animate-pulse">*</span>
          <p className="font-bold">INFO</p>
        </div>
        <div className="w-8 h-8 md:w-10 md:h-10 2xl:w-14 2xl:h-14 bg-orange-500 rounded-md grid place-content-center text-black/80 font-bold hover:bg-orange-400 transition-colors cursor-pointer">
          X
        </div>
      </div>
    </section>
  );
}
