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
      className="bg-background border-t border-border scroll-mt-24 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-8 md:mb-12">
            <span className="block font-sans text-[9px] uppercase tracking-[0.4em] text-accent-gold mb-3">The Action</span>
            <h2
              id="popular-experiences-title"
              className="font-serif text-3xl md:text-4xl tracking-tight text-primary"
            >
              Curated Experiences
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-accent-gold/40" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={0.2 * (index + 1)}>
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
