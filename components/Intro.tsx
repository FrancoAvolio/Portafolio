"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGit, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 2, scale: 1.3 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Image
              src="/cv.png"
              alt="cv image"
              width="192"
              height="192"
              className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl"
              quality={100}
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="font-medium italic text-xl leading-tight mb-10 mt-6 px-6 sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 2, y: 0 }}
      >
        <strong>Hello! I'm Franco Avolio </strong>, a passionate{" "}
        <strong>Full Stack Developer </strong> with a strong background in
        building robust and scalable web applications.
      </motion.p>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
        >
          Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a className="group cursor-pointer bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition" href="/CV.pdf" download={true}>
          Download CV <HiDownload className="opacity-60 group-hover:translate-x-1"/>
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full">
          <BsLinkedin />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full">
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
