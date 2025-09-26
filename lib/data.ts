import React from "react";
import { FaPhp,FaServer } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import StorePNG from "@/public/store.png"
import CrwnClothingPNG from "@/public/Crwn-Clothing.png"
import AdminCMSPNG from "@/public/Admin-CMS.png";
import EbankingPNG from "@/public/Ebanking.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Whiti Courtage, full-time",
    description:
  "I took part in launching the CRM project from the ground up at Whiti Courtage, contributing to its architecture design and development. The application, built for high performance, is used by multiple departments across the company. My role included both backend and frontend development, as well as deployment and server management.",

    icon: React.createElement(FaServer), // ou un autre icône pertinent (comme FaCogs ou MdEngineering)
    date: "2024 - Present",
  },
  {
    title: "Software Engineering Diploma",
    location: "Moroccan School of Engineering Sciences · Casablanca",
    description: "Earned my engineering diploma in software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Digimperial, internship",
    description:
      "I worked as a Front-End Developer, and I developed a platform for personnel, file, and client management for a law firm using Next.js, MUI, React, and TypeScript.",
    icon: React.createElement(TbBrandNextjs),
    date: "2023",
  },
  {
    title: "Back-End Developer",
    location: "WorkShore, internship",
    description:
      "Developed the Login and Client Management Modules for an integrated enterprise management web application using PHP and MySQL.",
    icon: React.createElement(FaPhp),
    date: "2022",
  },
] as const;


export const projectsData = [
  {
    title: "Dashboard Admin",
    description:
      "Developed an administrative dashboard for configuring an online store. This dashboard facilitates seamless management of multiple store pages, allowing users to easily customize and add various elements to enhance the functionality and appearance of their store.",
    tags: [
      "React",
      "Next.js",
      "Prisma",
      "Tailwind",
      "MySQL",
      "TypeScript",
      "Zustand",
    ],
    imageUrl: AdminCMSPNG,
    url:'https://admin-cms-one.vercel.app/' 
  },
  {
    title: "Loopple Store",
    description:
      "Creation  of an online store featuring a simple and professional user interface. Experience functionalities like online payment, product presentation categorized by type, and filters for easily viewing preferred products.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: StorePNG,
    url:'https://store-cms.vercel.app/'
  },
  {
    title: "Crwn Clothing",
    description:
      "Development of an e-commerce web application for managing clothing inventory. Users have the option to authenticate through a Google account or a personal account, in addition to enjoying an integrated payment service.",
    tags: ["React", "Firebase", "Sass", "Redux"],
    imageUrl: CrwnClothingPNG,
    url:'https://crwn-clothing.me/'
  },
  {
    title: "Ebanking",
    description:
      "I developed a web application for managing bank accounts that allows clients to have a detailed overview of their bank accounts and perform transactions.",
    tags: ["Angular", "Spring", "Tailwind", "TypeScript","MySQL"],
    imageUrl: EbankingPNG,
    url:'https://transcendent-basbousa-bf387e.netlify.app/'
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
"Tailwind",
"Scrum",

  "Git",
  "Linux",
  "Docker",
  "CI/CD Pipeline",
  "Script PHP",
  "Azure",
  "OVHCloud",
  "JAVA(Spring)",
  "PHP(Symfony)",
  "PostgreSQL",
  "MySql",
  "Api Platform",
  "Brevo mailing",
  "Framer Motion",
] as const;
