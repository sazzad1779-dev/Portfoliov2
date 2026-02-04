import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import AgentSyncImg from "@/public/AgentSync.png";
import FattahArcImg from "@/public/fattah_architecture.png";
import speechtospeech_archImg from "@/public/speechtospeech_architecture.png";
import backgroundRemvImg from "@/public/background_remover.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "AI Engineer",
    location: "JB Connect Ltd. - Banani, Dhaka-BD",
    description: `Responsibilities:
                  1. Built and deployed an AI Assistant for a manufacturing firm specializing in laser and optical systems, automating key workflows and reducing manual operations by 65%.
                  2. Developed and optimized ETL pipelines for ingesting, cleaning, and transforming heterogeneous Japanese-language datasets for downstream AI model training and evaluation.
                  3. Designed and optimized multi-agent AI systems enabling coordinated and autonomous task execution.
                  4. Enhanced Retrieval-Augmented Generation (RAG) architecture for improved contextual retrieval and grounded responses.
                  5. Applied advanced context engineering techniques to structure prompts and retrieval context, increasing LLM accuracy and response relevance.
                  6. Contributed to end-to-end AI solution deployment, ensuring production-grade performance, scalability, and reliability.
                  7. Collaborated with cross-functional teams to identify automation opportunities and integrate AI systems into real-world industrial workflows.
                  8. Optimized AI pipelines and system performance for efficiency in data processing and inference workloads.`,
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - Present",
  },
  {
    title: "Machine Learning Engineer",
    location: "Devolved AI - Uttara, Dhaka-BD",
    description: `Responsibilities:
                  1. Develop, deploy, and optimize advanced machine learning models and algorithms tailored for AI-driven applications.
                  2. Collaborate with data science teams to analyze and preprocess large-scale datasets for training and inference.
                  3. Design and implement scalable machine learning pipelines to support efficient training and production-grade inference.
                  4. Fine-tune and enhance models to maximize performance, accuracy, and robustness.
                  5. Work closely with software engineering teams to seamlessly integrate AI models into production systems.
                  6. Conduct rigorous experiments, evaluate model performance, and iterate to achieve continuous improvements.
                  7. Stay informed on cutting-edge advancements in AI, including decentralized and federated learning techniques.
                  8. Ensure AI solutions are scalable, reliable, and optimized for efficiency.
                  9. Partner with cross-functional teams to identify, define, and prioritize AI-driven requirements and opportunities.`,
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - Current",
  },
  {
    title: "Software Engineer",
    location: "Cloud-Coder Ltd. - Gulshan-2,Dhaka,BD",
    description:`Responsibilities:  
                  1. Led the development of "RoyalGPT," a Bangla Language Model, advancing NLP for regional languages and contributing to open-source projects.
                  2. Developed the "SpeechToSpeech" project utilizing Bengali ASR and TTS models, integrated with the RoyalGPT Bangla Language Model.
                  3. Designed and implemented a Retrieval-Augmented Generation (RAG) system for RoyalGPT, enhancing its ability to retrieve and generate contextually relevant information.
                  4. Designed and built an ASR system for Bengali regional dialects.
                  5. Engineered a real-time television ad and channel detection system using detection models, optimizing performance with advanced hashing techniques for faster processing.
                  6. Designed and deployed a dynamic digital signage system in shopping malls, leveraging human behavior analysis to deliver personalized product information and promotions.
                  7. Developed a multi-camera security surveillance system for real-time tracking of human and vehicle movements, enhancing security and operational efficiency.
                  8. Designed a RISC-V vector extension compiler in C, optimizing performance and extending functionality for RISC-V architecture in embedded systems.` , 
    icon: React.createElement(CgWorkAlt),
    date: "January 2022 - February 2024",
  },
 
] as const;

export const projectsData = [
  {
    title: "AgentSync",
    description:
    "AgentSync is a production-ready AI agent framework designed to manage and automate complex tasks efficiently. With its Supervisor Agent module, it acts like an AI-powered manager—orchestrating multiple agents, handling workflows, and integrating with various tools like Gmail, Google Sheets, and web search utilities.",
    tags: ["Python", "LangGraph", "Large Language Modle", "AI Agents"],
    icons: [
      "logos:python",
      "logos:LangGraph",
      "logos:llm",
    ],
    imageUrl: AgentSyncImg,
    githubLink: "https://github.com/sazzad1779-dev/AgentSync",
    // demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "Fattah SLM: A Bengali Small Language Model.",
    description:
    "This is a custom Transformers architecture designed specifically as a compact Bengali language model. For this project, I developed a custom tokenizer optimized exclusively for processing Bengali text, ensuring efficient and accurate representation of the language.",
    tags: ["Python", "Transformers"],
    icons: [
      "logos:transformer",
      "logos:python",
    ],
    imageUrl: FattahArcImg,
    githubLink: "https://github.com/sazzad1779-dev/Fattah_SLM",
  },
  {
    title: "Speech-to-Speech Chatbot",
    description:
    "This project is a real-time speech-to-speech chatbot that enables seamless voice-based interactions. It utilizes Automatic Speech Recognition (ASR), Voice Activity Detection (VAD), a Large Language Model (LLM), and Text-to-Speech (TTS) for a complete conversational experience.",
    tags: ["Python", "Transformers"],
    icons: [
      "logos:python",
      "/icons/huggingface-color.svg",
      "/icons/flask.png",
    ],
    imageUrl: speechtospeech_archImg,
    githubLink: "https://github.com/sazzad1779-dev/SpeechToSpeechChatBot",
  },
  {
    title: "Background Remover Module Using U2Net.",
    description:
    "This repository is an easy example of background removal. I'm using U2Net model for creating musk and add some custom background. The main repo of this code is https://github.com/axinc-ai/ailia-models-tflite.",
    tags: ["Python", "Transformers"],
    icons: [
      "logos:transformer",
      "logos:python",
    ],
    imageUrl: backgroundRemvImg,
    githubLink: "https://github.com/sazzad1779-dev/Background_remover_using_u2net_",
  },
] as const;

export const skillsData = [
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "C++",
    icon: "/icons/cpp.png",
  },
  {
    name: "Pytorch",
    icon: "logos:pytorch-icon",
  },
  {
    name: "Transformers",
    icon:"/icons/huggingface-color.svg",
  },
  {
    name: "Ollama",
    icon: "/icons/ollama.svg",
  },
  {
    name: "LlamaIndex",
    icon: "/icons/llamaindex.jpeg",
  },
  {
    name: "Langchain",
    icon: "/icons/langchain_logo.png",
  },
  {
    name: "DeepEval",
    icon: "/icons/deepeval.png",
  },
  {
    name: "Uptrain",
    icon: "/icons/uptrain.jpeg",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "DVC",
    icon: "/icons/dvc.svg",
  },
  {
    name: "MlFlow",
    icon: "/icons/mlflow.webp",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "GitActions",
    icon: "/icons/gitactions.png",
  },
  {
    name: "Kafka",
    icon: "/icons/kafka.png",
  },
  {
    name: "Pandas",
    icon: "logos:pandas-icon",
  },
  {
    name: "Dask",
    icon: "/icons/dask_icon.webp",
  },
  {
    name: "SciPy",
    icon: "/icons/scipy.png",
  },
  {
    name: "Chroma DB",
    icon: "/icons/chroma-seeklogo.png",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
] as const;
