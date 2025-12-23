"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import luxuryImg from "../../../public/Images/luxury.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const, // Custom cinematic ease
      },
    },
  };

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative min-h-[100svh] w-full">
      <Image
        src={luxuryImg}
        alt="Luxury yacht in the Red Sea - Syren Egypt Experiences"
        fill
        priority
        sizes="100vw"
        quality={85}
        placeholder="blur"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div 
          className="mx-auto w-full max-w-5xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            id="hero-title" 
            variants={itemVariants}
            className="font-serif text-white text-4xl md:text-6xl lg:text-7xl tracking-tight"
          >
            Experience Egypt Beyond the Expected
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-6 font-sans text-white/85 text-base md:text-lg lg:text-xl"
          >
            Luxury escapes, legendary parties, and hidden gems. Curated by locals, designed for the discerning.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="https://wa.me/201000000000?text=I%20want%20to%20plan%20my%20trip%20to%20Egypt%20with%20Syren"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Plan my trip via WhatsApp"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-base font-sans font-medium text-black shadow-sm transition-transform duration-300 ease-out hover:bg-[#C9A233] hover:scale-[1.02] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Plan my trip
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
