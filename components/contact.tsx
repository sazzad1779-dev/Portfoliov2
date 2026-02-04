"use client";

import React, { useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const socialLinks = [
  {
    href: "https://github.com/sazzad1779-dev",
    icon: FaGithub,
    label: "Visit my GitHub profile",
    hoverColor: "hover:text-gray-900 dark:hover:text-gray-300",
  },
  {
    href: "https://www.linkedin.com/in/sazzad1779/",
    icon: FaLinkedin,
    label: "Connect with me on LinkedIn",
    hoverColor: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    href: "https://twitter.com/sazzad1779",
    icon: FaTwitter,
    label: "Follow me on Twitter",
    hoverColor: "hover:text-sky-500 dark:hover:text-sky-400",
  },
] as const;

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      if (formRef.current) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );

        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 4000,
        });
        setFormData({ user_name: "", user_email: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try emailing me directly.", {
        duration: 4000,
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-8 sm:mb-12 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Toaster position="top-center" />
      
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 mb-8 dark:text-white/80 leading-relaxed text-center">
        Please contact me directly at{" "}
        <a
          className="underline hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
          href="mailto:sazzad1779@gmail.com"
          aria-label="Send email to sazzad1779@gmail.com"
        >
          sazzad1779@gmail.com
        </a>{" "}
        or through this form.
      </p>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        className="flex flex-col gap-4 mb-8"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Name Input */}
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Your name"
          required
          maxLength={100}
          className="h-10 px-4 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-white/10 focus:border-gray-500 dark:focus:border-white/20 outline-none transition-all placeholder:text-gray-500 dark:placeholder:text-white/50 text-gray-900 dark:text-white"
          aria-label="Your name"
        />

        {/* Email Input */}
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Your email"
          required
          maxLength={100}
          className="h-10 px-4 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-white/10 focus:border-gray-500 dark:focus:border-white/20 outline-none transition-all placeholder:text-gray-500 dark:placeholder:text-white/50 text-gray-900 dark:text-white"
          aria-label="Your email address"
        />

        {/* Message Textarea */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          required
          maxLength={5000}
          rows={5}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-white/10 focus:border-gray-500 dark:focus:border-white/20 outline-none transition-all placeholder:text-gray-500 dark:placeholder:text-white/50 text-gray-900 dark:text-white resize-none"
          aria-label="Your message"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex items-center justify-center gap-2 h-[3rem] w-full sm:w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-105 hover:bg-gray-950 active:scale-100 disabled:scale-100 disabled:bg-opacity-65 disabled:cursor-not-allowed focus:scale-105 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20"
          aria-label="Submit contact form"
        >
          {isSubmitting ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </motion.form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-gray-300 dark:bg-white/20" />
        <span className="text-sm text-gray-500 dark:text-white/50">or connect via</span>
        <div className="flex-1 h-px bg-gray-300 dark:bg-white/20" />
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 text-gray-700 dark:text-white/80">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.hoverColor} transition-all transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-white rounded-lg p-2`}
              aria-label={link.label}
            >
              <Icon size={32} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </motion.section>
  );
}