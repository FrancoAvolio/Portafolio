"use server";
import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!email || !message) {
    throw Error("Missing required fields");
  }

  try {
    await resend.emails.send({
      from: "Portfolio website <onboarding@resend.dev>",
      to: "avoliofranco0@gmail.com",
      subject: "New message from your portfolio",
      reply_to: email,
      react: React.createElement(ContactFormEmail, {
        message: message,
        email: email,
      }),
    });
  } catch (error) {
    throw new Error("Failed to send email. Please try again.");
  }
};
