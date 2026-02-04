"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMedium, FaKaggle, FaRobot } from "react-icons/fa";
// import { SiHuggingface } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import imagedp from "@/public/sazzad.jpeg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
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
              alt="Md Sazzad Hossain"
              width="192"
              height="192"
              quality="95"
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
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
      className="mb-12 mt-8 px-2 sm:px-4 text-xl sm:text-xl font-Georgia font-medium !leading-[1.4] text-white max-w-[50rem] mx-auto "
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
    >
      <span className="font-bold"> Hello, I'm Md Sazzad Hossain.</span>
      <span className="font-semibold"> Machine Learning Engineer at Devolved AI, Dhaka.</span>
      <span className="font-semibold"> Specializing in Large Language Models, Model Training, Finetuning, and Deployment.</span>
    </motion.h1>
      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-gray-950 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://github.com/sazzad1779-dev"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/sazzad1779/"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://medium.com/@sazzad1779"
          target="_blank"
        >
          <span className="opacity-70">Medium</span>
          <FaMedium className="opacity-70" />
        </a>
        
        <a
          className="group bg-gray-950 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.kaggle.com/mdsazzad1779"
          target="_blank"
        >
          <span className="opacity-70">Kaggle</span>
          <FaKaggle className="opacity-70" />
        </a>
        <a
          className="group bg-gray-950 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://huggingface.co/sha1779"
          target="_blank"
        >
          <span className="opacity-70">HuggingFace</span>
          <FaRobot className="opacity-70" />
        </a>




      </motion.div>
    </section>
  );
}
