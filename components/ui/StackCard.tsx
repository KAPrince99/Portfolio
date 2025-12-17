import Image from "next/image";

interface Props {
  name: string;
}

export default function StackCard({ name }: Props) {
  return (
    <section className="relative bg-black w-40 h-20 items-center grid place-content-center">
      <div className="absolute bg-orange-500 w-10 h-4 -right-4 -top-2 -rotate-10" />
      <h2 className="text-white">{name}</h2>
    </section>
  );
}
