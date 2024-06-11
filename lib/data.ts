import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import etiquetalo from "@/public/etiquetalo.png";
import nehros from "@/public/nehros.png";
import lokahi from "@/public/lokahi.png";
import carhub from "@/public/carhub.png";
import dalle from "@/public/dalle.png";

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
    title: "Graduated bootcamp - Coderhouse",
    location: "Buenos Aires, Argentina",
    description:
      "I graduated after 1 year and a half of studying. I immediately found a job as a Full stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Full Stack Developer at UPBRANDS",
    location: "Buenos Aires, Argentina",
    description:
      "I worked as a Full stack developer for 5 months. Using technologies such as PHP, Tailwind, TypeScript, HTML, Docker and Linux terminals with WSL and Ubuntu.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Co-Founder & Full Stack Developer at Nehros",
    location: "Buenos Aires, Argentina",
    description:
      "I'm now a Co-Founder & Full stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, MongoDB and more.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "UBA (University of Buenos Aires) - Systems Engineering",
    location: "Buenos Aires, Argentina",
    description: "Currently studying Systems Engineering at UBA",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2030",
  },
] as const;

export const projectsData = [
  {
    title: "Etiquetalo",
    description:
      "I worked as a Front End developer on this website. Developed with React.js and Vite, this application advertises the client's product. It includes a form powered by Email.js that connects potential clients with interested parties through an action call.",
    tags: ["React", "Vite", "Email.js", "Tailwind", "Material UI"],
    imageUrl: etiquetalo,
    deployUrl: "https://etiquetalo.com.ar",
  },
  {
    title: "Lokahi",
    description:
      "A web page for Australian clients created for a digital agency. It was my most challenging project as I completed it in just 8 hours.",
    tags: ["HTML", "Tailwind", "JavaScript", "Docker"],
    imageUrl: lokahi,
    deployUrl: "https://francoavolio.github.io/Lokahi/",
  },
  {
    title: "Nehros",
    description:
      "A web page for a digital agency where I am the Co-Founder and Full Stack Developer.",
    tags: ["React", "Next.js", "Tailwind", "Framer", "TypeScript"],
    imageUrl: nehros,
    deployUrl: "https://www.nehros.com/",
  },
  {
    title: "CarHub",
    description:
      "A car dealership website where you can filter by your favorite brand and see the rental prices for cars.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    imageUrl: carhub,
    deployUrl: "https://car-mcaxhejwh-francoavolio.vercel.app/",
  },
  {
    title: "Dall-E",
    description:
      "A web app, currently not live, that serves as a SaaS platform where, using a prompt, DALL-E generates the image you request. DALL-E is made by OpenAI.",
    tags: [
      "React",
      "Node.js",
      "Tailwind",
      "TypeScript",
      "MongoDB",
      "Axios",
      "Cloudinary",
      "Express",
    ],
    imageUrl: dalle,
    deployUrl: "https://github.com/FrancoAvolio/Dall-E-Clone",
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
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Jira",
  "Selenium",
  "Aws",
  "Python",
  "Fast Api",
  "PHP",
  "Docker",
] as const;
