import About from "@/components/ui/About";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Role from "@/components/ui/Role";

export default function page() {
  return (
    <main className="min-h-screen w-full mx-auto max-w-[1920px] relative">
      <Hero />
      <Role />
      <About />
      <Projects />
    </main>
  );
}
