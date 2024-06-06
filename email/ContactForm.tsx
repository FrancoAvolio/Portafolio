import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  message: string;
  email: string;
}

export default function ContactFormEmail({
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-black text-white">
          <Container>
            <Section className="border border-black/40 my-10 px-10 py-4 rounded-lg">
              <Heading className="leading-tight">You got a new message</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {email} </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
