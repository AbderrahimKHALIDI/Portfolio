import React from "react";
import { FaPhp } from "react-icons/fa6";
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
    title: "Moroccan School of Engineering Sciences ·",
    location: "Casablanca",
    description: "Software Engineering Diploma",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Digimperial, internship",
    description:
      "I work as a Front-End Developer, and I developed a platform for personnel, file, and client management for a law firm using Next.js, MUI, React, and TypeScript.",
    icon: React.createElement(TbBrandNextjs),
    date: "2023",
  },
  {
    title: "Back-End Developer",
    location: "WorkShore, internship",
    description:
      "Developed the Login and Client Management Modules for an integrated enterprise management web application using PHP and MySQL",
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "REST API",
  "JAVA",
  "Spring",
  "PostgreSQL",
  "PHP",
  "Python",
  "Django",
  "Material UI",
  "Framer Motion",
] as const;
