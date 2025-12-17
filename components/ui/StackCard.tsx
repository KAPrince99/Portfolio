interface Props {
  name: string;
}

export default function StackCard({ name }: Props) {
  return (
    // Changed fixed w-40 to w-full
    <section className="relative bg-black w-full h-16 md:h-20 items-center grid place-content-center">
      <div className="absolute bg-orange-500 w-8 h-3 md:w-10 md:h-4 -right-2 -top-1 md:-right-4 md:-top-2 -rotate-10" />
      <h2 className="text-white text-xs md:text-sm">{name}</h2>
    </section>
  );
}
