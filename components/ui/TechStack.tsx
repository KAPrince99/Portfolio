import React from "react";
import StackCard from "@/components/ui/StackCard";

const stacks = [
  {
    id: "1",
    name: "Nextjs",
  },
  {
    id: "2",
    name: "React",
  },
  {
    id: "3",
    name: "GSAP",
  },
  {
    id: "4",
    name: "Motion",
  },
  {
    id: "5",
    name: "Tailwind",
  },
  {
    id: "6",
    name: "Supabase",
  },
  {
    id: "7",
    name: "OpenAi",
  },
  {
    id: "8",
    name: "Clerk",
  },
];

export default function TechStack() {
  return (
    <section className="my-10">
      <div className="flex items-center justify-center mb-6">
        <h1 className="bg-orange-500 p-1 text-sm md:text-base">TECH STACK</h1>
      </div>
      {/* Changed to 2 cols on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {stacks.map((card) => (
          <StackCard key={card.id} name={card.name} />
        ))}
      </div>
    </section>
  );
}
