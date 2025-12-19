"use client";

export default function NewRole() {
  return (
    <main
      className="min-h-screen w-full flex flex-col justify-center items-center md:items-start relative  md:px-10 py-10 md:py-30 lg:py-50 
   space-y-15 md:space-y-25 lg:space-y-40"
    >
      <div
        className="md:-ml-2 lg:ml-4 xl:ml-2 bg-white flex 
           w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)]  "
      ></div>

      <div
        className="flex md:ml-60 lg:ml-80 xl:ml-125  bg-yellow-300
          w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)]"
      ></div>
    </main>
  );
}
