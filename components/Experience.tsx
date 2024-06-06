"use client";
import React from "react";
import SectionHeading from "./Section";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { fadeInAnimations } from "./Skills";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

export default function Experience() {
  return (
    <motion.section
      className="sm:mb-40 scroll-mt-28"
      id="experience"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      variants={fadeInAnimations}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{ background: "#f6f6f6", color: "#000" }}
              visible={true}
              date={experience.date}
              icon={experience.icon}
            >
              {/* Modify the h3 tag to be a link */}
              <h3
                className="font-semibold capitalize"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                {experience.title ===
                "Co-Founder & Full Stack Developer at Nehros" ? (
                  <a
                    className="font-semibold capitalize"
                    href="https://nehros.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    Co-Founder & Full Stack Developer at{" "}
                    <strong style={{ marginLeft: "4px" }}>Nehros</strong>{" "}
                    <FaLink style={{ marginLeft: "1px" }} />
                  </a>
                ) : (
                  experience.title
                )}
              </h3>
              <p className="font-normal !mt-0 text-gray-600">
                {experience.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-500">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
