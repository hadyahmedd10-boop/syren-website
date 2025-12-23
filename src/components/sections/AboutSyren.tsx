import Reveal from "../motion/Reveal";

export default function AboutSyren() {
  return (
    <section
      id="about"
      aria-labelledby="about-syren-title"
      className="bg-gradient-to-b from-[#f6f3ee] to-white dark:from-[#0b0b0b] dark:to-[#121212] border-t border-black/5 dark:border-white/10 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8 py-24 md:py-32">
        <Reveal>
          <h2
            id="about-syren-title"
            className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 text-center"
          >
            About Syren
          </h2>
          <div className="mt-5 h-px w-20 bg-[#D4AF37]/90 mx-auto" />
        </Reveal>
        <div className="mt-10 md:mt-12 space-y-6 md:space-y-7">
          <Reveal delay={0.2}>
            <p className="font-sans text-base md:text-lg leading-8 text-zinc-700 dark:text-zinc-300 text-center">
              Syren is a Cairo-based travel atelier, founded and run by those who call Egypt home.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-sans text-base md:text-lg leading-8 text-zinc-700 dark:text-zinc-300 text-center">
              We specialize in the intersection of luxury and local soul — from legendary parties to quiet, hidden escapes.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="font-sans text-base md:text-lg leading-8 text-zinc-700 dark:text-zinc-300 text-center">
              We look beyond the typical tourist paths to design personal, safe, and truly unforgettable Egyptian stories.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
