import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Bot, Sparkles, Download, ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const KNOWLEDGE_BASE = {
  about:
    "Dhivyadharshini G is an AI / ML Engineer and GenAI Developer pursuing her B.E. in Computer Science (AI & ML) at Mahendra Institute of Technology (CGPA: 8.57). She specializes in building context-aware RAG pipelines, multi-agent systems, and production-ready machine learning models.",
  skills:
    "Her core technical skills include:\n• Languages: Python, Java, SQL\n• AI/ML: Naive Bayes, NLP, Recommendation Systems\n• GenAI: RAG, Multi-Agent Systems, LLM Integration, Gemini, Ollama, Prompt Engineering\n• Tools & Frameworks: Flask, Streamlit, LangChain, Git, REST APIs, Telegram Bot API",
  projects:
    "Some of Dhivyadharshini's notable AI projects:\n1. RAG-Based BI Assistant: Flask + local Ollama models for direct database query analytics.\n2. Multi-Agent Social Media Manager: A 4-agent campaign scheduler on Telegram.\n3. Ekalvya AI Career Mentor: Personalized learning roadmaps & resume parser (won TeraHack Hackathon).",
  experience:
    "She recently completed a 6-month AI / Agentic AI Internship at Cube AI Solutions (July - December 2025). During this internship, she engineered multi-agent manager systems, custom NLP classifiers, and built RAG business intelligence workflows.",
  certifications:
    "She holds an Internship Completion Certificate from Cube AI Solutions Pvt. Ltd. (2025) and has won multiple hackathons, including the 24-Hour AI TeraHack 2025 and JUST PROMPT IT Prompt Engineering competition.",
  contact:
    "You can reach Dhivyadharshini at:\n• Email: dhivyadharshinigopalakrishnan@gmail.com\n• Phone: +91 88708 70513\n• Location: Salem, Tamil Nadu, India\n• LinkedIn: Dhivyadharshini Gopalakrishnan",
  github:
    "Her official GitHub is @DhivyadharshiniGopalakrishnan, containing source code for her RAG assistant, Multi-Agent systems, and ML experiments.",
};

const SUGGESTED_QUESTIONS = [
  "Tell me about Dhivyadharshini",
  "Show AI Projects",
  "What technologies does she know?",
  "Show certifications",
  "Download Resume",
  "Contact Information",
  "GitHub Profile",
  "Experience Timeline",
];

export default function DhivyAIChatbot() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-greeting",
      sender: "bot",
      text: "Hello! I am Dhivy AI, your portfolio assistant. How can I help you explore Dhivyadharshini's profile today?",
      timestamp: new Date(),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen, isTyping]);

  const handleSmartActions = (cleanQuery: string) => {
    // 1. Resume Action
    if (
      cleanQuery.includes("resume") ||
      cleanQuery.includes("cv") ||
      cleanQuery.includes("download")
    ) {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "#";
        link.setAttribute("download", "Dhivyadharshini_G_Resume.pdf");
        document.body.appendChild(link);
        alert("Dhivyadharshini_G_Resume.pdf download simulation triggered!");
      }, 1000);
      return;
    }

    // 2. GitHub Action
    if (cleanQuery.includes("github") || cleanQuery.includes("git")) {
      setTimeout(() => {
        window.open(
          "https://github.com/DhivyadharshiniGopalakrishnan",
          "_blank",
          "noopener,noreferrer",
        );
      }, 1000);
      return;
    }

    // 3. Scroll to Contact
    if (
      cleanQuery.includes("contact") ||
      cleanQuery.includes("connect") ||
      cleanQuery.includes("email") ||
      cleanQuery.includes("linkedin")
    ) {
      setTimeout(() => {
        const id = isMobile ? "mobile-contact" : "contact";
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
      return;
    }

    // 4. Scroll to Projects
    if (
      cleanQuery.includes("project") ||
      cleanQuery.includes("work") ||
      cleanQuery.includes("built")
    ) {
      setTimeout(() => {
        const id = isMobile ? "mobile-work" : "work";
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
      return;
    }

    // 5. Scroll to Skills
    if (
      cleanQuery.includes("skill") ||
      cleanQuery.includes("tech") ||
      cleanQuery.includes("languages")
    ) {
      setTimeout(() => {
        const id = isMobile ? "mobile-skills" : "skills";
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
      return;
    }
  };

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (
      q.includes("about") ||
      q.includes("who is") ||
      q.includes("dhivyadharshini") ||
      q.includes("tell me about")
    ) {
      return KNOWLEDGE_BASE.about;
    }
    if (
      q.includes("skill") ||
      q.includes("tech") ||
      q.includes("know") ||
      q.includes("languages") ||
      q.includes("python") ||
      q.includes("java")
    ) {
      return KNOWLEDGE_BASE.skills;
    }
    if (
      q.includes("project") ||
      q.includes("built") ||
      q.includes("shipped") ||
      q.includes("work")
    ) {
      return KNOWLEDGE_BASE.projects;
    }
    if (
      q.includes("experience") ||
      q.includes("intern") ||
      q.includes("work") ||
      q.includes("cube ai")
    ) {
      return KNOWLEDGE_BASE.experience;
    }
    if (
      q.includes("certification") ||
      q.includes("certificate") ||
      q.includes("award") ||
      q.includes("hackathon")
    ) {
      return KNOWLEDGE_BASE.certifications;
    }
    if (
      q.includes("contact") ||
      q.includes("reach") ||
      q.includes("email") ||
      q.includes("linkedin") ||
      q.includes("phone")
    ) {
      return KNOWLEDGE_BASE.contact;
    }
    if (q.includes("github") || q.includes("git") || q.includes("profile")) {
      return KNOWLEDGE_BASE.github;
    }
    if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
      return "I've triggered the simulated PDF resume download for you. Check your browser downloads!";
    }
    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greetings")) {
      return "Hello! How can I help you explore Dhivyadharshini's AI/ML Engineer profile?";
    }

    return "I'm not fully sure about that query, but Dhivyadharshini has extensive experience in GenAI (RAG, Multi-Agents) and ML. Try asking about her skills, experience, or projects!";
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(
      () => {
        const botReply = getBotResponse(text);
        const botMsg: Message = {
          id: Math.random().toString(),
          sender: "bot",
          text: botReply,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        handleSmartActions(text.toLowerCase());
      },
      800 + Math.random() * 600,
    );
  };

  return (
    <>
      {/* Minimized Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed z-50 rounded-full bg-[rgba(15,15,15,0.85)] border border-[rgba(212,160,23,0.25)] hover:border-gold hover:shadow-[0_0_20px_rgba(212,160,23,0.45)] text-gold flex items-center justify-center p-4 transition-all duration-300 active:scale-95 cursor-pointer ${
          isMobile ? "bottom-24 right-4 h-12 w-12" : "bottom-8 right-8 h-14 w-14"
        }`}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
          </span>
        )}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-[rgba(15,15,15,0.92)] backdrop-blur-lg border border-[rgba(212,160,23,0.25)] shadow-[0_15px_40px_rgba(0,0,0,0.6)] rounded-3xl flex flex-col overflow-hidden animate-reveal transition-all duration-300 ${
            isMobile ? "bottom-20 left-4 right-4 h-[440px]" : "bottom-24 right-8 w-96 h-[520px]"
          }`}
        >
          {/* Chat Header */}
          <div className="bg-[rgba(20,20,20,0.6)] border-b border-border/40 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold/10 border border-gold/30 rounded-xl text-gold">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  Dhivy AI
                  <Sparkles className="h-3 w-3 text-gold animate-pulse" />
                </h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  AI Portfolio Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition cursor-pointer p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-none">
            {messages.map((m) => {
              const isBot = m.sender === "bot";
              return (
                <div
                  key={m.id}
                  className={`flex ${isBot ? "justify-start" : "justify-end"} items-end gap-2 animate-reveal`}
                >
                  {isBot && (
                    <div className="h-7 w-7 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-gold shrink-0">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed whitespace-pre-line ${
                      isBot
                        ? "bg-card/40 border border-border/30 text-foreground"
                        : "bg-gold text-primary-foreground font-medium"
                    }`}
                  >
                    {m.text}
                    <span
                      className={`block text-[8px] mt-1 text-right ${
                        isBot ? "text-muted-foreground/60" : "text-primary-foreground/60"
                      }`}
                    >
                      {m.timestamp.toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex justify-start items-end gap-2">
                <div className="h-7 w-7 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-gold shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-card/40 border border-border/30 rounded-2xl px-4 py-3 flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="px-5 py-2 border-t border-border/20 bg-black/45">
            <p className="text-[8px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
              Suggested Questions
            </p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none whitespace-nowrap">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendMessage(q)}
                  className="px-3 py-1.5 border border-gold/20 bg-gold/5 rounded-full text-[9px] text-gold hover:bg-gold hover:text-black font-semibold transition active:scale-95 cursor-pointer shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border/40 p-4 bg-[rgba(10,10,10,0.85)] flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage(inputVal);
              }}
              placeholder="Ask me about skills, projects, etc..."
              className="flex-1 bg-card/30 border border-border/50 rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300"
            />
            <button
              onClick={() => handleSendMessage(inputVal)}
              disabled={!inputVal.trim()}
              className="p-2.5 bg-gold text-primary-foreground rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
