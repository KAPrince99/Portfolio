import About from "@/components/ui/About";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Role from "@/components/ui/Role";
import Stack from "@/components/ui/Stack";
import React from "react";

export default function page() {
  return (
    <main className="min-h-screen overflow-hidden overflow-y-auto">
      <Hero />
      <Role />
      <About />
      <Stack />
      <Projects />
    </main>
  );
}
