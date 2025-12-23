import ExperienceCard from "./ExperienceCard";
import Reveal from "../motion/Reveal";
import desertImg from "../../../public/Images/hero.jpg";
import yachtImg from "../../../public/Images/luxury.jpg";
import cairoImg from "../../../public/Images/party.jpg";

export default function PopularExperiences() {
  const items = [
    {
      title: "Desert & Stars",
      description: "A private safari into the silent dunes for stargazing and authentic Bedouin hospitality.",
      image: desertImg,
      alt: "Private desert safari in Egypt under the stars",
    },
    {
      title: "Red Sea Yacht",
      description: "A refined celebration on the water. Private DJ sets, crystalline swim stops, and sunset horizons.",
      image: yachtImg,
      alt: "Luxury yacht party on the Red Sea at sunset",
    },
    {
      title: "Hidden Cairo",
      description: "The city’s best-kept secrets. Exclusive access to Cairo’s most sophisticated nightlife.",
      image: cairoImg,
      alt: "Exclusive nightlife and cocktail bars in downtown Cairo",
    },
  ] as const;

  return (
    <section
      id="experiences"
      aria-labelledby="popular-experiences-title"
      className="bg-gradient-to-b from-[#f6f3ee] to-white dark:from-[#0b0b0b] dark:to-[#121212] border-t border-black/5 dark:border-white/10 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <h2
              id="popular-experiences-title"
              className="font-serif text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Signature Experiences
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={0.1 * (index + 1)}>
              <ExperienceCard
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
