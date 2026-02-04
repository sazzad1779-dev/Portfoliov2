"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMedium, FaKaggle, FaRobot } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import imagedp from "@/public/sazzad.jpeg";

const socialLinks = [
  {
    href: "https://github.com/sazzad1779-dev",
    icon: FaGithub,
    label: "GitHub Profile",
    name: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sazzad1779/",
    icon: BsLinkedin,
    label: "LinkedIn Profile",
    name: "LinkedIn",
  },
  {
    href: "https://medium.com/@sazzad1779",
    icon: FaMedium,
    label: "Medium Blog",
    name: "Medium",
  },
  {
    href: "https://www.kaggle.com/mdsazzad1779",
    icon: FaKaggle,
    label: "Kaggle Profile",
    name: "Kaggle",
  },
  {
    href: "https://huggingface.co/sha1779",
    icon: FaRobot,
    label: "HuggingFace Profile",
    name: "HuggingFace",
  },
] as const;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-4 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
      aria-label="Introduction"
    >
      <ParticleContainer />
      
      {/* Profile Image */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={imagedp}
              alt="Md Sazzad Hossain - Machine Learning Engineer"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-25 w-25 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            aria-hidden="true"
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Main Heading */}
      <motion.h1
        className="mb-12 mt-8 px-2 sm:px-4 text-xl sm:text-2xl font-medium !leading-[1.5] text-white max-w-3xl lg:max-w-4xl xl:max-w-5xl  mx-auto"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
      >
        <span className="block mb-2 text-2xl sm:text-3xl font-bold">
          Hello, I'm Md Sazzad Hossain
        </span>
        <span className="block mb-2 text-lg sm:text-xl font-semibold text-white/90">
          AI Engineer at JB Connect Ltd.
        </span>
        <span className="block text-base sm:text-lg font-normal text-white/80">
          Specializing in Large Language Models, Model Training, Fine-tuning, and Deployment
        </span>
      </motion.h1>

      {/* Social Links */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              className="group bg-gray-950 text-white px-5 py-2.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition-all border-2 border-white border-opacity-40 hover:border-opacity-60 focus:ring-2 focus:ring-white focus:ring-opacity-50"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                {link.name}
              </span>
              <Icon className="opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}