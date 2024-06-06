"use client";
import React, { useState } from "react";
import SectionHeading from "./Section";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import Submit from "./Submit";

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    const formData = new FormData(event.target as HTMLFormElement);
    try {
      await sendEmail(formData);
      setStatusMessage("Mensaje enviado exitosamente.");
      setStatusColor("text-green-500");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setStatusMessage("No se pudo enviar el mensaje. Inténtalo de nuevo.");
      setStatusColor("text-red-500");
    } finally {
      setIsPending(false);
      setTimeout(() => {
        setStatusMessage("");
        setStatusColor("");
      }, 3000);
    }
  };

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

      <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
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
        <Submit isPending={isPending} />
      </form>

      {statusMessage && (
        <p className={`mt-4 ${statusColor}`}>{statusMessage}</p>
      )}
    </motion.section>
  );
}
