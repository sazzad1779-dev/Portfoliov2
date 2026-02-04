"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.10);

  return (
    <section 
      ref={ref} 
      id="projects" 
      className="scroll-mt-28 mb-8 px-4"
      aria-label="Portfolio projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      
      <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl  mx-auto">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}