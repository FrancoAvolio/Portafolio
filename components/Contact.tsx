"use client";
import React from "react";
import SectionHeading from "./Section";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import Submit from "./Submit";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:avoliofranco0@gmail.com">
          avoliofranco0@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 rounded-lg border border-black/10 px-4"
          type="email"
          placeholder="Your email"
          name="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          maxLength={50}
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
          name="message"
          required
          maxLength={800}
        />
        <Submit />
      </form>
    </motion.section>
  );
}
