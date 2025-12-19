"use client";

export default function NewRole() {
  return (
    <main
      className="min-h-screen w-full flex flex-col justify-center items-center md:items-start relative  md:px-10 py-10 md:py-30 lg:py-50 
   space-y-15 md:space-y-25 lg:space-y-40"
    >
      <section
        className="md:-ml-2 lg:ml-4 xl:ml-2 bg-white flex 
           w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)]  "
      ></section>

      <section
        className="flex flex-col md:ml-60 lg:ml-80 xl:ml-125 px-5 md:px-10 lg:px-20 py-5 md:py-10  bg-yellow-300 space-y-10 md:space-y-15 lg:space-y-20  font-satoshi font-medium  tracking-wide
          text-[clamp(1.5rem,5.5vw,3.75rem)] 
          w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)]"
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
      </section>
    </main>
  );
}
