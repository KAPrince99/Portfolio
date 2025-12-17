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
      <div className="flex items-center justify-center my-10">
        <h1 className=" bg-orange-500 p-1">TECH STACK</h1>
      </div>
      <div className="grid grid-cols-3 gap-2 space-y-5">
        {stacks.map((card) => (
          <StackCard key={card.id} name={card.name} />
        ))}
      </div>
    </section>
  );
}
