import React from "react";
import StackCard from "@/components/ui/StackCard";

const stacks = [
  { id: "1", name: "Nextjs" },
  { id: "2", name: "React" },
  { id: "3", name: "GSAP" },
  { id: "4", name: "Motion" },
  { id: "5", name: "Tailwind" },
  { id: "6", name: "Supabase" },
  { id: "7", name: "OpenAi" },
  { id: "8", name: "Clerk" },
];

export default function TechStack() {
  return (
    <section className="my-10 md:my-16 2xl:my-24">
      <div className="flex items-center justify-start mb-8 2xl:mb-12">
        <h1 className="bg-orange-500 px-3 py-1 text-xs md:text-base 2xl:text-xl font-bold text-black uppercase tracking-widest">
          TECH STACK
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 2xl:gap-12">
        {stacks.map((card) => (
          <StackCard key={card.id} name={card.name} />
        ))}
      </div>
    </section>
  );
}
