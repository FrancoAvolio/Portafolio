import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import etiquetalo from "@/public/etiquetalo.png";

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
    date: "2024 - present",
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
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["HTML", "Tailwind", "JavaScript", "Docker"],
    imageUrl: etiquetalo,
    deployUrl: "https://etiquetalo.com.ar",
  },
  {
    title: "Nehros",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer", "TypeScript"],
    imageUrl: etiquetalo,
    deployUrl: "https://etiquetalo.com.ar",
  },
  {
    title: "CarHub",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    imageUrl: etiquetalo,
    deployUrl: "https://etiquetalo.com.ar",
  },
  {
    title: "Dall-E",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [
      "React",
      "Node.js",
      "Tailwind",
      "TypeScript",
      "MongoDb",
      "Axios",
      "Cloudinary",
      "Express",
    ],
    imageUrl: etiquetalo,
    deployUrl: "https://etiquetalo.com.ar",
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
