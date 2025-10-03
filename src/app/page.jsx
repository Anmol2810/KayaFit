"use client"
import Hero from "@/app/sections/Hero"
import KnowUs from "./sections/KnowUs";
import Program from "./sections/program.jsx";
import Benefit from "./sections/Benefit";
import Stats from "./sections/stats";
import Testimonials from "./sections/Testimonials";
import Cta from "./sections/Cta";
import { ReactLenis, useLenis } from 'lenis/react'

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <KnowUs />
      <Program />
      <Benefit />
      <Stats />
      <Testimonials />
      <Cta />
    </ReactLenis>
  );
};
