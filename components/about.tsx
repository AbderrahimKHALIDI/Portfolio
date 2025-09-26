"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Abderrahim Khalidi, a{" "}
      
        <span className="font-medium">software engineer</span> graduated from an <span className="font-medium">engineering school</span>, passionate about crafting professional experiences. I currently {" "} <span className="font-medium">work</span> as a <span className="font-medium">Systems Engineer</span> at a company while also continuing <span className="font-medium"> freelance work </span> on various platforms.
      </p>

      <p className="mb-3">
        <span className="italic">
          {" "}
          I firmly believe in the power of collaboration,
        </span>
        favoring collaboration with teams that share my values of curiosity,
        humility, and joy. With a{" "}
        <span className="font-medium">strong technical expertise </span> and a
        commitment to creating a positive impact, I dedicate myself to
        delivering outstanding software solutions that exceed expectations and
        provide real value to users. Presently, I am actively seeking
        opportunities to{" "}
        <span className="font-medium">
          collaborate with like-minded individuals,
        </span>{" "}
        eager to share{" "}
        <span className="font-medium">
        professional experiences and contribute
        </span>{" "}
        to generating a significant impact on society and people's lives.
      </p>
    </motion.section>
  );
}
