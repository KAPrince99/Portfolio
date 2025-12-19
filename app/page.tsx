import About from "@/components/ui/About";
import Hero from "@/components/ui/Hero";
import NewHero from "@/components/ui/NewHero";
import NewRole from "@/components/ui/NewRole";
import Projects from "@/components/ui/Projects";
import Role from "@/components/ui/Role";

export default function page() {
  return (
    <main className="min-h-screen w-full py-20 mx-auto max-w-[1920px] relative">
      {/* <Hero /> */}
      <NewHero />
      <NewRole />
      {/* <About /> */}
      <Projects />
    </main>
  );
}
