declare module "@studio-freight/react-lenis" {
  import { ReactNode, FC } from "react";

  interface LenisOptions {
    lerp?: number;
    duration?: number;
    smoothWheel?: boolean;
    wheelMultiplier?: number;
    orientation?: "vertical" | "horizontal";
    gestureOrientation?: "vertical" | "horizontal";
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
  }

  interface ReactLenisProps {
    root?: boolean;
    options?: LenisOptions;
    // Using any here fixes the React 18 vs 19 ReactNode conflict
    children?: any;
    className?: string;
  }

  export const ReactLenis: FC<ReactLenisProps>;
  export function useLenis(callback?: (lenis: any) => void, deps?: any[]): any;
}
