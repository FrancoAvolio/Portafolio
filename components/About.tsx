"use client";
import React from "react";
import SectionHeading from "./Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 2, y: 0 }}
      transition={{ delay: 0.9 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Skilled in
        <strong>React, TypeScript, Tailwind CSS, and Next.js </strong>, I bring
        expertise in developing, maintaining, and managing
        <strong>
          RESTful APIs using Node.js, Next.js, or FastAPI (Python)
        </strong>
        . Experienced in container management with <strong>Docker</strong>, and
        implementing security measures such as authentication and authorization
        using <strong>Next-Auth, OAuth, Clerk, and JWT</strong>. Adept at team
        collaboration with <strong>GIT</strong> for project versioning and
        capable of developing relational databases with
        <strong>MySQL or PostgreSQL</strong> and non-relational databases with
        <strong>MongoDB</strong>. Proficient in using <strong>ORMs</strong> like
        <strong>Prisma </strong> for <strong>PostgreSQL</strong> database
        creation. Additionally, I have experience with <strong>AWS</strong>
        services and <strong>Docker</strong> for containerization.
      </p>
      <p>
        I studied
        <strong>Full-Stack programming at Coderhouse from 2022 to 2024</strong>
        and am currently pursuing a
        <strong>
          Common Basic Cycle in Computer Engineering at the University of Buenos
          Aires
        </strong>
        . Always eager to learn new technologies to stay updated.
        <br /> When i'm not coding, i enjoy spending my free time having coffee
        with friends.
      </p>
    </motion.section>
  );
}
