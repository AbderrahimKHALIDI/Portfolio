"use client";
import { useEffect } from "react";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Hotjar from "@hotjar/browser";

export default function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Hotjar.init(3809371, 6);
    }
  }, []);
  return (
    <main className=" flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
