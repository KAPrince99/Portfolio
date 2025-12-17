import React from "react";

export default function PassageCard({ content }: { content: string }) {
  return (
    <div className="bg-black p-4 md:p-6 text-white relative w-full">
      {/* Reduced size on mobile (w-6) to prevent horizontal scroll */}
      <div className="absolute bg-orange-500 w-6 h-3 md:w-10 md:h-4 -right-2 md:-right-4 -top-1 md:-top-2 -rotate-10" />
      <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed">
        {content}
      </p>
    </div>
  );
}
