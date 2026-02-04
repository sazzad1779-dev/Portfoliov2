"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function CareerSummary() {
  // const { ref } = useSectionInView("Summary");

  return (
    <motion.section
      id="summary"
      // ref={ref}
      className="mb-8 sm:mb-12 mt-12 scroll-mt-8 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl px-6 mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      aria-label="Career Summary"
    >
      <SectionHeading>Career Summary</SectionHeading>

      <div className="mt-4 border border-black/5 rounded-lg pt-6 pb-8 px-6 md:p-10 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 transition-colors shadow-sm hover:shadow-md">
        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-5">
          I’m an <span className="font-semibold">AI Engineer</span> with a strong foundation in 
          software engineering, machine learning, and scalable AI systems. My work focuses on 
          <span className="font-semibold"> LLMs, NLP, RAG architectures, and intelligent automation</span>, 
          turning research-driven ideas into production-ready solutions.
        </p>

        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-5">
          I began my career at <span className="font-semibold">Cloud-Coder</span>, working on 
          computer vision systems such as ad detection and behavior analysis, before moving into NLP. 
          There, I contributed to one of the early <span className="font-semibold">Bengali language models</span>, 
          and built RAG systems along with speech-to-speech pipelines integrating ASR, TTS, and LLMs.
        </p>

        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-5">
          At <span className="font-semibold">Devolved AI</span>, I led a machine learning team developing 
          custom LLMs, fine-tuning pipelines, and evaluation frameworks, while deploying AI systems 
          into production — including conversational AI platforms.
        </p>

        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-5">
          Currently at <span className="font-semibold">JB Connect Ltd.</span>, I design structured and 
          unstructured data pipelines powering high-accuracy RAG systems and scalable AI infrastructure. 
          My work also includes building <span className="font-semibold">multi-agent AI systems</span> 
          for industrial automation, including solutions for a Japanese laser and optical systems company.
        </p>

        <p className="text-gray-700 dark:text-white/80 leading-relaxed">
          Beyond professional roles, I actively build AI agents, CRM automation systems, medical AI assistants, 
          and multi-expert transformer models for Bengali — exploring generative AI, intelligent automation, 
          and production-grade ML architecture.
        </p>
      </div>
    </motion.section>
  );
}
