import NewHero from "@/components/ui/NewHero";
import NewRole from "@/components/ui/NewRole";
import Projects from "@/components/ui/Projects";

export default function page() {
  return (
    <main className="min-h-screen w-full py-20 mx-auto max-w-[1920px] relative">
      <NewHero />
      <Projects />
      <NewRole />
    </main>
  );
}
