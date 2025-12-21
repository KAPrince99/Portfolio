"use client";

const stacks = [
  { id: "1", name: "Nextjs" },
  { id: "2", name: "React" },
  { id: "3", name: "GSAP" },
  { id: "4", name: "Motion" },
  { id: "5", name: "Tailwind" },
  { id: "6", name: "Supabase" },
  { id: "7", name: "OpenAi" },
  { id: "8", name: "Clerk" },
];

export default function NewRole() {
  return (
    <main
      className="min-h-screen w-full flex flex-col justify-center items-center md:items-start relative  md:px-10 py-10 md:py-30 lg:py-50 
   space-y-15 md:space-y-25 lg:space-y-40"
    >
      <section
        className="relative flex flex-col space-y-5 lg:space-y-10 p-4 md:p-5 lg:p-10 md:-ml-2 lg:ml-4 xl:ml-2 bg-white
        text-[clamp(1.5rem,5.5vw,3.75rem)] 
           w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)] shadow-2xl shadow-personal-one "
      >
        <div className="flex justify-between items-center">
          <h1>Nextjs</h1>
          <h1>React</h1>
          <h1>Supabase</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1>Gsap</h1>
          <h1>Tailwind</h1>
          <h1>Motion</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1>Clerk</h1>
          <h1>Openai</h1>
        </div>
        <div className="absolute h-4 w-8 md:h-6 md:w-15 lg:h-8 lg:w-18 xl:h-10 xl:w-24 bg-orange-500 -right-3 md:-right-10 -top-2 rotate-40 md:rotate-40 lg:rotate-42 xl:rotate-40 shadow-2xl shadow-personal-one " />
        {/* <div className="absolute left-200 top-6/6 bottom-0">
          <InfiniteVerticalDots numDots={7} height="20" />
        </div> */}
      </section>

      <section
        className="relative flex flex-col md:ml-60 lg:ml-80 xl:ml-125 px-5 md:px-10 lg:px-20 py-5 md:py-10  bg-yellow-300 space-y-10 md:space-y-15 lg:space-y-20  font-satoshi font-medium  tracking-wide
          text-[clamp(1.5rem,5.5vw,3.75rem)]  
          w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)] shadow-2xl shadow-personal-one"
      >
        <div className="flex justify-between items-center">
          <h1>Github</h1>
          <h1>LinkedIn</h1>
        </div>
        <div className="flex items-center justify-center">Email</div>
        <div className="flex justify-between items-center">
          <h1>Twitter</h1>
          <h1>Instagram</h1>
        </div>
        <div className="absolute h-4 w-8 md:h-6 md:w-15 lg:h-8 lg:w-18 xl:h-10 xl:w-24 bg-orange-500 -right-3 md:-right-10 -top-2 rotate-40 md:rotate-40 lg:rotate-42 xl:rotate-40 shadow-2xl shadow-personal-one " />
      </section>
    </main>
  );
}
