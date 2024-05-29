"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
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
      <p className="font-medium italic text-xl leading-tight mb-10 mt-6 px-4 sm:text-2xl">
        <strong>Hello! I'm Franco Avolio </strong>, a passionate{" "}
        <strong>Full Stack Developer </strong> with a strong background in
        building robust and scalable web applications.
      </p>
    </section>
  );
}
