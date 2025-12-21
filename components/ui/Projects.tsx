import { MoveRight } from "lucide-react";

export default function Projects() {
  return (
    <main
      className="min-h-screen w-full flex flex-col justify-center items-center md:items-start relative  md:px-10 py-10 md:py-30 lg:py-50 
   space-y-15 md:space-y-25 lg:space-y-40"
    >
      <section
        className="relative flex flex-col  p-4 md:p-5 lg:p-10 md:-ml-2 lg:ml-4 xl:ml-2 bg-white
        tracking-tight lg:tracking-tight leading-[2.1]
        md:leading-[1.1] font-satoshi font-meduim text-gray-800
        text-[clamp(1rem,4.5vw,3rem)]  
           w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)] shadow-2xl shadow-personal-one"
      >
        <p>
          AI-powered voice companion designed to help users improve
          communication skills by practicing real-time conversations with AI
          companions.
        </p>
        <div className="flex items-center justify-start gap-10 py-5 text-base lg:text-[24px] tracking-wide ">
          <div className=" flex items-center justify-around bg-personal-one px-2 py-1 ">
            <p>Production</p>
            <span>
              <MoveRight className="inline-block w-8 h-4 -rotate-25 -mt-1" />
            </span>
          </div>
          <div className=" flex items-center justify-around bg-personal-one px-2 py-1 ">
            <p>Github</p>
            <span>
              <MoveRight className="inline-block w-8 h-4 -rotate-25 -mt-1" />
            </span>
          </div>
        </div>
        <div className="absolute h-4 w-8 md:h-6 md:w-15 lg:h-8 lg:w-18 xl:h-10 xl:w-24 bg-orange-500 -right-3 md:-right-10 -top-2 rotate-40 md:rotate-40 lg:rotate-42 xl:rotate-40 shadow-2xl shadow-personal-one " />
        {/* <div className="absolute left-200 top-6/6 bottom-0">
          <InfiniteVerticalDots numDots={7} height="20" />
        </div> */}
      </section>

      <section
        className="relative flex  md:ml-60 lg:ml-80 xl:ml-125 px-5 md:px-10 lg:px-20 py-5 md:py-10  bg-yellow-300  font-satoshi font-medium  tracking-wide
          text-[clamp(1.5rem,5.5vw,3.75rem)]  
          w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)]"
      >
        <div className="absolute h-4 w-8 md:h-6 md:w-15 lg:h-8 lg:w-18 xl:h-10 xl:w-24 bg-orange-500 -right-3 md:-right-10 -top-2 rotate-40 md:rotate-40 lg:rotate-42 xl:rotate-40 shadow-2xl " />
        {/* <div className="absolute left-75 top-6/6 bottom-0">
          <InfiniteVerticalDots numDots={30} height="100" />
        </div> */}
      </section>
    </main>
  );
}
