"use client";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import SectionHeading from "./Section";
import { motion, useAnimation, useInView } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  return (
    <section
      className="text-center px-4 sm:px-0 scroll-mt-28 mb-28"
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col items-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} isEven={index % 2 === 0} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number] & { isEven: boolean };

function Project({
  title,
  description,
  tags,
  imageUrl,
  deployUrl,
  isEven,
}: ProjectProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:p-8 p-4 mt-12 hover:bg-gray-200 transition"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag, index) => (
          <li
            className="bg-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        width={700}
        height={500}
        className={`-mt-2 w-full object-cover rounded-t-lg shadow-2xl transition group-hover:scale-105 ${
          isEven
            ? "group-hover:translate-x-2 group-hover:-rotate-2"
            : "group-hover:-translate-x-2 group-hover:rotate-2"
        }`}
      />
      <Link
        href={deployUrl}
        target="_blank"
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none text-center mt-4"
      >
        See deploy <BsArrowRight className="opacity-70" />
      </Link>
    </motion.section>
  );
}
