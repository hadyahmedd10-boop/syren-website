import Reveal from "../motion/Reveal";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative border-t border-black/5 dark:border-white/10 bg-gradient-to-b from-[#141414] via-[#101010] to-[#0b0b0b]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8 min-h-[65svh] py-24 md:py-40 flex items-center justify-center">
        <div className="text-center">
          <Reveal>
            <h2
              id="final-cta-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white"
            >
              Your Egyptian Story Starts Here
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-sans text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto">
              Connect with our curators to begin designing a journey tailored to you.
            </p>
          </Reveal>
          <Reveal delay={0.4} y={20}>
            <a
              href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Plan my trip via WhatsApp"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-10 py-4.5 text-base md:text-lg font-sans font-medium text-black shadow-[0_4px_16px_rgba(212,175,55,0.28)] transition-transform duration-300 ease-out hover:bg-[#C9A233] hover:scale-[1.02] hover:shadow-[0_6px_24px_rgba(212,175,55,0.36)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
            >
              Plan My Trip
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
