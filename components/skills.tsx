"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-8 sm:mb-12 mt-12 scroll-mt-8 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl px-6 mx-auto"
      aria-label="Technical skills"
    >
      <SectionHeading>Technical skills</SectionHeading>
      
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col items-center justify-center p-2 bg-white dark:bg-white/10 rounded-lg hover:bg-gray-50 dark:hover:bg-white/20 transition-colors shadow-sm hover:shadow-md border border-gray-100 dark:border-white/10"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.1 }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {/* Skill Icon */}
            <div className="mb-1 flex items-center justify-center h-12 w-12">
              {skill?.icon?.startsWith("/") ? (
                <Image
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              ) : skill?.icon ? (
                <Icon 
                  icon={skill.icon} 
                  className="text-5xl" 
                  aria-hidden="true"
                />
              ) : null}
            </div>
            
            {/* Skill Name */}
            <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
              {skill?.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}