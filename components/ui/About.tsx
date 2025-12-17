"use client";
import PakLayer from "@/components/ui/PakLayer";
import { Press_Start_2P } from "next/font/google";
import PassageCard from "@/components/ui/PassageCard";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const passages = [
  {
    id: "1",
    content: ` I started my journey into web development about six months ago,
              driven by a desire to build real, usable products. Before
              transitioning into web development, I explored machine learning
              and deep learning using PyTorch.`,
  },
  {
    id: "2",
    content: ` While working with machine learning, I realized that most of my
              ideas required a strong frontend to truly come to life. That led
              me to focus on web development, where I could be more creative and
              user-focused.`,
  },
  {
    id: "3",
    content: `  Today, I build applications using React and Next.js, with Supabase
              for backend services, Tailwind CSS for styling, and Clerk for
              authentication. I especially enjoy integrating AI features into
              web applications to create meaningful user experiences.`,
  },
  {
    id: "4",
    content: `  I’m currently focused on improving my skills by building real
              projects and writing clean, maintainable code.`,
  },
  {
    id: "5",
    content: `  While I don’t have formal industry experience yet, I’ve focused on
              building real projects that reflect how production applications
              work. My approach is to learn by building, shipping, and improving
              based on feedback.`,
  },
];

export default function About() {
  return (
    <main
      id="about"
      className={`py-10 flex min-h-screen overflow-x-hidden ${pixel.className} animate-fade-up animation-delay-200`}
    >
      {/* Outer Section: mx-2 on mobile, mx-10 on desktop */}
      <section className="mx-2 md:mx-10 py-5 md:py-10 bg-black/60 flex-1 flex flex-col text-white rounded-2xl">
        {/* Inner Section: p-4 on mobile, p-10 on desktop */}
        <section className="mx-2 md:mx-10 p-4 md:p-10 bg-yellow-300/60 rounded-xl">
          <PakLayer name="about" />

          {/* Passage Container: max-width and centering */}
          <section className="flex flex-col items-center justify-center space-y-8 md:space-y-10 max-w-4xl mx-auto text-black/60 my-10 px-2">
            {passages.map((passage) => (
              <PassageCard key={passage.id} content={passage.content} />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}
