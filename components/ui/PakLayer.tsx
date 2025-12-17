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
      className={`${pixel.className} flex flex-col md:flex-row justify-between items-start md:items-center gap-4 tracking-tighter`}
    >
      <div>
        <h1 className="text-3xl md:text-5xl text-orange-500">PAK.</h1>
        <span className="text-orange-500 font-bold hidden md:block">
          - - - - - -
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[8px] md:text-[10px]">
        <div className="flex items-center gap-2 border-2 border-black/30 px-2 py-1 rounded-sm text-black/60">
          <span className="text-[5px]">*</span>
          <p>{name.toUpperCase()}</p>
        </div>
        <div className="flex items-center gap-2 border-2 border-black/30 px-2 py-1 rounded-sm text-black/60">
          <span className="text-[5px]">*</span>
          <p>INFO</p>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-md grid place-content-center text-black/60">
          x
        </div>
      </div>
    </section>
  );
}
