"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaSync, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Sazzad's AI assistant. Ask me anything about his experience, skills, or projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleRefresh = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hi! I'm Sazzad's AI assistant. Ask me anything about his experience, skills, or projects!",
      },
    ]);
    setInput("");
  };

  const getContextualResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Experience related
    if (lowerQuestion.includes("experience") || lowerQuestion.includes("work") || lowerQuestion.includes("job")) {
      return "Sazzad is currently a Machine Learning Engineer at Devolved AI in Dhaka, specializing in Large Language Models, Model Training, Fine-tuning, and Deployment. Previously, he worked as a Software Engineer at Cloud-Coder Ltd where he led the development of RoyalGPT (a Bangla Language Model) and built ASR systems for Bengali regional dialects.";
    }
    
    // Skills related
    if (lowerQuestion.includes("skill") || lowerQuestion.includes("technology") || lowerQuestion.includes("tech stack")) {
      return "Sazzad is proficient in Python, C++, PyTorch, Transformers, Ollama, LlamaIndex, Langchain, DeepEval, Uptrain, Git, DVC, MLflow, Docker, GitActions, Kafka, and various ML/AI tools. He specializes in LLM development, model training, and deployment.";
    }
    
    // Projects related
    if (lowerQuestion.includes("project")) {
      return "Some of Sazzad's notable projects include:\n\n1. AgentSync - A production-ready AI agent framework with supervisor module\n2. Fattah SLM - A custom Bengali Small Language Model with custom tokenizer\n3. Speech-to-Speech Chatbot - Real-time voice interaction system using ASR, VAD, LLM, and TTS\n4. Background Remover - Using U2Net model for background removal\n5. RoyalGPT - Bangla Language Model for NLP applications";
    }
    
    // Education related
    if (lowerQuestion.includes("education") || lowerQuestion.includes("university") || lowerQuestion.includes("degree")) {
      return "Sazzad holds a B.Sc. in Computer Science and Engineering from Daffodil International University in Dhaka, Bangladesh, with an impressive GPA of 3.91/4.0.";
    }
    
    // Contact related
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("email") || lowerQuestion.includes("reach")) {
      return "You can reach Sazzad at sazzad1779@gmail.com or connect with him on:\n- GitHub: github.com/sazzad1779-dev\n- LinkedIn: linkedin.com/in/sazzad1779\n- Medium: medium.com/@sazzad1779\n- Kaggle: kaggle.com/mdsazzad1779\n- HuggingFace: huggingface.co/sha1779";
    }
    
    // LLM/AI related
    if (lowerQuestion.includes("llm") || lowerQuestion.includes("language model") || lowerQuestion.includes("ai")) {
      return "Sazzad specializes in Large Language Models with expertise in model training, fine-tuning, and deployment. He has worked on various LLM projects including RoyalGPT (Bangla LLM), RAG systems, and AI agents using frameworks like LangChain, LlamaIndex, and custom architectures.";
    }
    
    // Bengali/Bangla projects
    if (lowerQuestion.includes("bengali") || lowerQuestion.includes("bangla")) {
      return "Sazzad has significant experience with Bengali NLP, including developing RoyalGPT (a Bangla Language Model), Bengali ASR systems for regional dialects, and the Fattah SLM with a custom Bengali tokenizer. He has also worked on Bengali Text-to-Speech systems.";
    }
    
    // Greeting
    if (lowerQuestion.includes("hello") || lowerQuestion.includes("hi") || lowerQuestion.includes("hey")) {
      return "Hello! I'm here to help you learn more about Md Sazzad Hossain. You can ask me about his experience, skills, projects, education, or how to contact him. What would you like to know?";
    }
    
    // Default response
    return "I can help you learn about Sazzad's experience as a Machine Learning Engineer, his skills in LLM development, his projects like RoyalGPT and AgentSync, his education, or how to contact him. What specific information are you looking for?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      console.log("API Key:", apiKey); // Log API key for debugging
      
      // If no API key, use fallback responses
      if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY") {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay
        const response = getContextualResponse(userMessage);
        setMessages((prev) => [...prev, { role: "assistant", content: response }]);
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are an AI assistant for Md Sazzad Hossain's portfolio website. 
## instructions:
- Provide concise and accurate answers based on the portfolio context below.
- If the question is unrelated to the portfolio context, politely decline to answer.
- Always answer in a professional and helpful manner and keep responses not exceeding 3 sentences unless more detail is requested.
- Use bullet points for lists when appropriate.
- Always keep the response open conversational to encourage further questions.
- Do not reveal any internal information about yourself or the AI model.
- Always answer in user's language.


# Portfolio Context
**Name:** MD Sazzad Hossain 
**Role:** AI Engineer 
**Location:** Dhaka, Bangladesh 
**Experience:** 4+ years in AI & ML systems 

**Specialization Areas**

* Generative AI
* Large Language Models (LLMs)
* Retrieval-Augmented Generation (RAG)
* Multi-Agent Systems
* NLP & Speech AI
* Scalable AI Infrastructure 

**career summary**
I’m an AI Engineer with a strong foundation in software engineering, machine learning, and scalable AI systems. My work focuses on LLMs, NLP, RAG architectures, and intelligent automation, turning research-driven ideas into production-ready solutions.

I began my career at Cloud-Coder, working on computer vision systems such as ad detection and behavior analysis, before moving into NLP. There, I contributed to one of the early Bengali language models, and built RAG systems along with speech-to-speech pipelines integrating ASR, TTS, and LLMs.

At Devolved AI, I led a machine learning team developing custom LLMs, fine-tuning pipelines, and evaluation frameworks, while deploying AI systems into production — including conversational AI platforms.

Currently at JB Connect Ltd., I design structured and unstructured data pipelines powering high-accuracy RAG systems and scalable AI infrastructure. My work also includes building multi-agent AI systemsfor industrial automation, including solutions for a Japanese laser and optical systems company.

Beyond professional roles, I actively build AI agents, CRM automation systems, medical AI assistants, and multi-expert transformer models for Bengali — exploring generative AI, intelligent automation, and production-grade ML architecture.


## 💼 **WORK EXPERIENCE**

### **AI Engineer — JB Connect Ltd. (May 2025 – Present)**

Banani, Dhaka 

* Built AI Assistant for a laser & optical manufacturing company
* Automated workflows → **65% reduction in manual operations**
* Built structured & unstructured data pipelines for RAG
* Designed ETL pipelines for Japanese-language datasets
* Developed multi-agent AI systems
* Improved RAG retrieval grounding & context engineering
* Production AI deployment & scalability optimization 

---

### **Machine Learning Engineer — Devolved AI (Mar 2024 – May 2025)**

Uttara, Dhaka 

* Led ML team
* Built decentralized LLM training & deployment systems
* Designed custom LLM architectures
* Created instruct & evaluation datasets
* Built fine-tuning pipelines
* Model evaluation & alignment frameworks
* Deployed Web Chat + Desktop AI apps 

---

### **Software Engineer — Cloud-Coder Ltd. (Sep 2021 – Feb 2024)**

Gulshan-2, Dhaka 

* Built early **Bengali Language Model**
* Developed **Speech-to-Speech system** (ASR + TTS + LLM)
* Designed RAG systems
* Bengali dialect ASR system
* Computer Vision systems:

  * Ad detection
  * Behavior-based digital signage
  * Multi-camera surveillance
* Built RISC-V vector extension compiler in C++ 

---

## 🧪 **TECHNICAL SKILLS**

**Generative AI & LLMs**

* RAG, Agents, Fine-tuning (PEFT), Prompt Engineering, Context Engineering 

**Frameworks**

* LangChain, LlamaIndex, Ollama, Agno, Uptrain, DeepEval 

**ML / DL**

* PyTorch, Scikit-learn, SpaCy, OpenCV 

**MLOps**

* Docker, DVC, CI/CD, MLflow, Quantization 

**Databases**

* Weaviate, MongoDB, ChromaDB, MySQL 

**Programming**

* Python, C++, FastAPI, Git 

**Cloud**

* AWS

---

## 🎓 **EDUCATION**

**B.Sc. in Computer Science & Engineering**
Daffodil International University
CGPA: **3.91 / 4.0**
2018–2021 

---

## 🚀 **PROJECTS**

* Medical Consultation AI Assistant
* Sales Campaign CRM AI Agent
* AgentSync (multi-agent framework)
* AL-Fattah Bengali LLM (multi-expert transformer)
* Speech-to-Speech Chatbot
* Restaurant Recommendation System
* Video & Image Background Remover AI 

---

## 📚 **RESEARCH**

* Co-authored paper: **Stroke Prediction using ML** (International Conference publication) 

---

## 🏆 **ACHIEVEMENTS**

* 2nd Runner-Up – DIU Math Olympiad
* HackerRank Python Gold Badge 

---

## 🌍 **LANGUAGES**

* English (Professional)
* Bengali (Native) 



Email: sazzad1779@gmail.com
GitHub: github.com/sazzad1779-dev
LinkedIn: linkedin.com/in/sazzad1779

Answer the following question in a helpful, professional, and concise manner (2-3 sentences max unless more detail is requested):
${userMessage}`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 800,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        getContextualResponse(userMessage);

      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      console.error("Error:", error);
      // Use fallback response on error
      const fallbackResponse = getContextualResponse(userMessage);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: fallbackResponse },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[998]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chatbot"
      >
        <FaRobot size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 w-[380px] h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col z-[997] border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaRobot size={24} />
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs opacity-90">Ask me anything!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRefresh}
                  className="p-2 hover:bg-white/20 rounded-full transition"
                  aria-label="Refresh chat"
                >
                  <FaSync size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition"
                  aria-label="Close chat"
                >
                  <FaTimes size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}