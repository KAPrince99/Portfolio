"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        // 0.2 is much faster than 0.1. Increase to 0.25 if still too slow.
        lerp: 0.2,
        // Lower duration makes the animation finish faster
        duration: 1.0,
        smoothWheel: true,
        // Increase this if you want the wheel to move more distance per click
        wheelMultiplier: 1.2,
        // This ensures it doesn't feel laggy on trackpads
        touchMultiplier: 1.5,
      }}
    >
      {children as any}
    </ReactLenis>
  );
}
