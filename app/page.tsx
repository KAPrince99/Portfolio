import { DockDemo } from "@/components/ui/dockComponent";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex items-center justify-center mt-10 sm:mt-30 mx-5 sm:mx-120  p-4 rounded-md">
        <p className="text-[22px] sm:text-3xl text-white">
          Prince, Amanor. creating cool software that makes cool people&apos;s
          life easier. Junior Fullstack Engineer, unsatisfiably curious about
          beautiful interfaces and relentlessly devoted to fine, detailed
          polished functionalities.
        </p>
      </section>

      <section className="fixed bottom-4 left-1/4 sm:left-[800px]">
        <DockDemo />
      </section>
    </main>
  );
}
