import Reveal from "../motion/Reveal";

export default function HowItWorks() {
  const steps = [
    { number: 1, title: "Share your vision" },
    { number: 2, title: "We craft the detail" },
    { number: 3, title: "Experience the extraordinary" },
  ] as const;

  return (
    <section
      id="how"
      aria-labelledby="how-it-works-title"
      className="bg-gradient-to-b from-white to-[#f9f7f2] dark:from-[#121212] dark:to-[#0b0b0b] border-t border-black/5 dark:border-white/10 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <h2
              id="how-it-works-title"
              className="font-serif text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              The Syren Journey
            </h2>
          </div>
        </Reveal>
        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          {steps.map((s, index) => (
            <Reveal key={s.number} delay={0.1 * (index + 1)} className="flex-1">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-black font-sans text-lg font-semibold shadow-sm">
                  {s.number}
                </div>
                <h3 className="font-serif text-xl md:text-2xl tracking-tight text-zinc-900 dark:text-zinc-50">
                  {s.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
