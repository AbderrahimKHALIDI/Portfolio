"use client";

import Link from "next/link";
import Image from "next/image";

import { useActiveSectionContext } from "@/context/active-section-context";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://i.ibb.co/4MSt4GN/5x5-copy3.jpg"
              alt="Abdo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Abderrahim,</span> a software engineer specialized in full-stack development with <span className="font-bold">PHP</span> (<span className="underline">Symfony</span>), <span className="font-bold">Java</span> (<span className="underline">Spring</span>), and <span className="font-bold">JavaScript</span> (<span className="underline">Angular</span> & <span className="underline">React</span>).
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group relative inline-flex items-center justify-between overflow-hidden rounded-full border border-black/10 bg-white/5 py-3 pl-6 pr-3 backdrop-blur-sm transition-all"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="z-10 text-black transition-colors duration-300 group-hover:text-white relative">
            Let's Connect
          </span>
          <div className="absolute right-3 w-8 h-8 rounded-full bg-black transition-all duration-300 ease-out group-hover:w-[101%] group-hover:h-full group-hover:right-0">
          </div>
          <div className="relative z-10 ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-black overflow-hidden">
            <BsArrowRight 
              className="text-white absolute transition-all duration-300 translate-x-0 group-hover:translate-x-[150%] group-hover:opacity-0" 
              size={20} 
            />
            <BsArrowRight 
              className="text-white absolute -translate-x-[150%] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" 
              size={20} 
            />
          </div>
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://drive.google.com/file/d/1Ou8nnv_Jc1aheEZoxr2k8JnPX83n7UZ7/view?usp=sharing"
          target="_blank"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full  hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/abderrahim-khalidi-819556243/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/AbderrahimKHALIDI"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
