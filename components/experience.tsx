"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section 
      id="experience" 
      ref={ref} 
      className="scroll-mt-12 mb-12 mt-12 sm:mb-12"
      aria-label="Work experience"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              date={item.date}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "0.5rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#1d2432",
                fontSize: "1.5rem",
                boxShadow: theme === "light" 
                  ? "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"
                  : "0 0 0 4px #1d2432, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
            >
              <h3 className="font-semibold capitalize text-lg mb-1">
                {item.title}
              </h3>
              <p className="font-medium !mt-0 text-gray-600 dark:text-white/60">
                {item.location}
              </p>
              <div className="!mt-3 !font-normal text-gray-700 dark:text-white/75">
                <p className="font-semibold mb-2 text-gray-800 dark:text-white/90">
                  Key Responsibilities:
                </p>
                <ul className="list-none space-y-2 ml-0">
                  {item.description.split('\n').filter(line => line.trim()).map((line, i) => {
                    // Remove the numbering and "Responsibilities:" text
                    const cleanLine = line.replace(/^\s*\d+\.\s*/, '').replace('Responsibilities:', '').trim();
                    if (!cleanLine) return null;
                    
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-400 dark:text-white/40 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="flex-1">{cleanLine}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}