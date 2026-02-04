"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Icon } from "@iconify/react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icons: readonly string[];
  imageUrl: StaticImageData;
  githubLink?: string;
  demoLink?: string;
  urlLink?: string;
};

export default function Project({
  title,
  description,
  tags,
  icons,
  imageUrl,
  githubLink,
  demoLink,
  urlLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="bg-gray-100 max-w-3xl lg:max-w-4xl xl:max-w-5xl border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition-all duration-300 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-sm hover:shadow-lg">
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            {title}
          </h3>
          
          {/* Tech Stack Icons */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-gray-600 dark:text-white/70">
              Built with:
            </span>
            <div className="flex flex-wrap gap-2">
              {icons.map((icon, iconIndex) =>
                icon.startsWith("/") ? (
                  <img
                    key={iconIndex}
                    src={icon}
                    alt={`Technology icon ${iconIndex + 1}`}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <Icon
                    key={iconIndex}
                    icon={icon}
                    className="text-2xl"
                    aria-hidden="true"
                  />
                )
              )}
            </div>
          </div>

          {/* Description */}
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-4 text-justify">
            {description}
          </p>

          {/* Project Image - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block absolute top-[60px] right-2 w-[25.25rem] rounded-t-lg shadow-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${title} project preview`}
              quality={95}
              className="rounded-t-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-auto">
            {urlLink && (
              <a
                href={urlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-gray-800 focus:bg-gray-800 transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                aria-label={`View live demo of ${title}`}
              >
                <BiLinkExternal className="mr-1" aria-hidden="true" /> Live
              </a>
            )}

            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-gray-800 focus:bg-gray-800 transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                aria-label={`Watch demo video of ${title}`}
              >
                <AiFillYoutube className="mr-1" aria-hidden="true" /> Demo
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-gray-900 py-2 px-4 rounded-full text-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:focus:bg-white dark:focus:text-gray-900"
                aria-label={`View source code of ${title} on GitHub`}
              >
                <AiFillGithub className="mr-1" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Mobile Image - Shown at bottom on mobile */}
        <div className="lg:hidden px-5 pb-5">
          <Image
            src={imageUrl}
            alt={`${title} project preview`}
            quality={95}
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </article>
    </motion.div>
  );
}