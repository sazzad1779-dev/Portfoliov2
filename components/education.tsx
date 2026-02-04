"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import diuLogo from "@/public/diu.png";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-8 sm:mb-12 scroll-mt-8 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl px-6 mx-auto"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      aria-label="Education"
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex flex-col sm:flex-row gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 transition-colors shadow-sm hover:shadow-md">
        <div className="flex-shrink-0 flex justify-center sm:justify-start">
          <Image 
            src={diuLogo} 
            alt="Daffodil International University Logo" 
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            B.Sc. in Computer Science and Engineering
          </h3>
          <p className="text-base font-medium text-gray-700 dark:text-white/80 mb-3">
            Daffodil International University
          </p>
          <p className="text-sm text-gray-600 dark:text-white/70 mb-2">
            Savar, Dhaka, Bangladesh
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center sm:justify-start mt-3">
            <p className="text-sm font-medium text-gray-700 dark:text-white/80">
              <span className="font-semibold">Major:</span> Computer Science
            </p>
            <p className="text-sm font-medium text-gray-700 dark:text-white/80">
              <span className="font-semibold">GPA:</span> 3.91 / 4.0
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}