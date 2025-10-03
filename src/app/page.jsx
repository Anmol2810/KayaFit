"use client"
import Hero from "@/app/sections/Hero"
import KnowUs from "./sections/KnowUs";
import Program from "./sections/program.jsx";
import Benefit from "./sections/Benefit";
import Stats from "./sections/stats";
import Testimonials from "./sections/Testimonials";
import Cta from "./sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <KnowUs />
      <Program />
      <Benefit />
      <Stats />
      <Testimonials />
      <Cta />
    </>
  );
};
