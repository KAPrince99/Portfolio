import React from "react";

export default function PassageCard({ content }: { content: string }) {
  return (
    <div className="bg-black p-4 text-white  relative">
      <div className="absolute bg-orange-500 w-10 h-4 -right-4 -top-2 -rotate-10" />
      <p>{content}</p>
    </div>
  );
}
