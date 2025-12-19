import Dock from "@/components/ui/Dock";

export default function NewHero() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center lg:justify-start  ">
      <div className="flex justify-center items-center px-5">
        <section
          className="
      bg-white 
      w-[clamp(350px,98vw,1000px)] 
      md:w-[clamp(350px,80vw,1000px)] 
      h-[clamp(240px,50vw,500px)] 
      p-[clamp(0.75rem,3vw,2.5rem)] 
      relative overflow-hidden border border-black/10
    "
        >
          <div
            className="
        text-[clamp(1.5rem,5.5vw,3.75rem)] 
        font-satoshi font-medium 
        tracking-tighter lg:tracking-tight 
        relative z-10 
        leading-[1.1]
        space-y-2
      "
          >
            <h1 className="">Prince Amanor Kabutey</h1>
            <h1 className="ml-[clamp(1rem,4vw,2.5rem)]">is a Ghanaian</h1>
            <h1>frontend creative</h1>
            <h1 className="ml-[clamp(1rem,4vw,2.5rem)]">
              mastering react & nextjs
            </h1>
            <h1>Backend with supabase</h1>
            <h1 className="ml-[clamp(1rem,4vw,2.5rem)]">Infusing AI magic</h1>
          </div>

          <div
            className="
        absolute 
        right-0 top-0
     
        w-[clamp(240px,50vw,500px)] 
        h-[clamp(240px,50vw,500px)] 
        rounded-full bg-yellow-300/70 z-0
      "
          />
        </section>
      </div>

      <div className="pb-20 md:pb-10 w-full flex justify-center items-center">
        <Dock />
      </div>
    </main>
  );
}
