"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();

  if (!email || !message) {
    throw Error("Missing required fields");
  }
  try {
    await resend.emails.send({
      from: "Tu futuro trabajo <onboarding@resend.dev>",
      to: "avoliofranco0@gmail.com",
      subject: "New message from your portfolio",
      html: `<strong>${message}</strong>`,
      reply_to: email,
    });
  } catch (error) {
    throw error;
  }
};
