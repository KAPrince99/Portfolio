import Silk from "@/components/Silk";
import "./globals.css";
import { DockDemo } from "@/components/ui/dockComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative bg-[#f2a218]">
        <div className="fixed top-0 left-0 w-screen h-screen -z-10">
          <Silk
            speed={5}
            scale={1}
            color="#f2a218"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
