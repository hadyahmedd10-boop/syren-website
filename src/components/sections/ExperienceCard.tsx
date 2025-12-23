import Image, { type StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  image: StaticImageData | string;
  alt?: string;
};

export default function ExperienceCard({ title, description, image, alt }: Props) {
  const isStatic = typeof image !== "string";
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white/90 shadow-sm ring-1 ring-black/5 transition-all duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] hover:scale-[1.02] hover:shadow-xl">
      <div className={`overflow-hidden ${isStatic ? "relative w-full" : "relative aspect-[4/3] w-full"}`}>
        {isStatic ? (
          <Image
            src={image}
            alt={alt ?? title}
            width={(image as StaticImageData).width}
            height={(image as StaticImageData).height}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="w-full h-auto object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-110"
            priority={false}
            quality={80}
            placeholder="blur"
          />
        ) : (
          <Image
            src={image}
            alt={alt ?? title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-110"
            priority={false}
            quality={80}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-serif text-xl md:text-2xl tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
        <p className="font-sans text-sm md:text-base text-zinc-700 dark:text-zinc-300">
          {description}
        </p>
      </div>
    </article>
  );
}
