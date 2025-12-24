import NewHero from "@/components/ui/NewHero";
import Projects from "@/components/ui/Projects";
import Essentials from "@/components/ui/Essentials";

export default function page() {
  return (
    <main className="min-h-screen w-full py-20 mx-auto max-w-[1920px] relative">
      <NewHero />
      <Projects />
      <Essentials />
    </main>
  );
}
