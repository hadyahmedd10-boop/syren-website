import Hero from "@/components/sections/Hero";
import PopularExperiences from "@/components/sections/PopularExperiences";
import Testimonials from "@/components/sections/Testimonials";
import Destinations from "@/components/sections/Destinations";
import OurVision from "@/components/sections/OurVision";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syren | Experience Egypt Beyond the Expected",
  description: "Ultra-private, expertly curated Egyptian journeys. From desert expeditions to private yacht charters, discover the soul of Egypt through local eyes.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <OurVision />
      <PopularExperiences />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
