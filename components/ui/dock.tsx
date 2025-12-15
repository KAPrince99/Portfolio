import Box from "./Box";

import { Press_Start_2P } from "next/font/google";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const boxItems = [
  {
    id: "1",
    name: "Pak.",
    className: `bg-amber-400 text-white text-xl h-[85px] border-0  bg-black hover:text-white ${pixel.className} tracking-tighter  `,
    main: true,
  },
  {
    id: "2",
    name: "Role",
    main: true,
  },
  {
    id: "3",
    name: "About Me",
    main: true,
  },
  {
    id: "4",
    name: "Tech Stack",
    main: true,
  },
  {
    id: "5",
    name: "Projects",
    className: `bg-yellow-300/60 text-black text-[10px] h-[85px] border-0 hover:bg-amber-300 hover:text-black ${pixel.className} tracking-tighter antialiased`,
    main: true,
  },
];

export default function Dock() {
  return (
    <section
      className=" fixed
  bottom-6
  left-1/2
  -translate-x-1/2
  z-50
  animate-fade-up
  animation-delay-1000"
    >
      <div
        className="
    bg-black/30
    backdrop-blur-md
    border border-white/10
    shadow-lg
    w-[600px]
    h-[100px]
    rounded-2xl
    px-2
    flex
    items-center
  "
      >
        <div className="flex w-full items-center justify-between">
          {/* First box */}
          <Box box={boxItems[0]} className={boxItems[0].className} />

          {/* Middle boxes */}
          <div className="flex items-center gap-3 bg-black/60 h-[90px] mx-2 px-2 rounded-2xl">
            {boxItems.slice(1, -1).map((box) => (
              <Box key={box.id} box={box} />
            ))}
          </div>

          {/* Last box */}
          <Box
            box={boxItems[boxItems.length - 1]}
            className={boxItems[4].className}
          />
        </div>
      </div>
    </section>
  );
}
