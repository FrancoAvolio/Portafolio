"use client";
import React from "react";
import SectionHeading from "./Section";
import { skillsData } from "@/lib/data";
import { animate, motion } from "framer-motion";

export const fadeInAnimations = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 2,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/10 rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimations}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
