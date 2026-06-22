import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { useIsMobile } from "@/hooks/use-mobile";
import DhivyAIChatbot from "@/components/DhivyAIChatbot";
import { CaseStudyModal } from "@/components/CaseStudies";
import { getMappedProject, MappedProject } from "@/lib/github-sync";
import { ProjectImage } from "@/components/ProjectImage";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  Award,
  GraduationCap,
  Briefcase,
  Cpu,
  Code2,
  Network,
  FileText,
  Terminal,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Database,
  Trophy,
  Flame,
  CheckCircle,
  GitCommit,
  Home,
  User,
  Zap,
  X,
  Download,
} from "lucide-react";
import profileImg from "@/assets/images/profile.jpg";
import projRag from "@/assets/proj-rag.jpg";
import projAgents from "@/assets/proj-agents.jpg";
import projNlp from "@/assets/proj-nlp.jpg";
import certInternship from "@/assets/internship-certificate.png";
import certJustPromptIt from "@/assets/just-prompt-it-certificate.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhivyadharshini G | AI / ML Engineer Portfolio" },
      {
        name: "description",
        content:
          "Professional AI / ML Engineer Portfolio showcasing Machine Learning, Generative AI, Agentic AI Systems, RAG Applications, and Production-Ready AI Projects.",
      },
      { property: "og:title", content: "Dhivyadharshini G | AI / ML Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Professional AI / ML Engineer Portfolio showcasing Machine Learning, Generative AI, Agentic AI Systems, RAG Applications, and Production-Ready AI Projects.",
      },
    ],
  }),
  component: Portfolio,
});

// Custom Hooks for counting animation
function useCountUp(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;
    const totalMilliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMilliseconds / end), 15);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

function useCountUpDecimal(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0.0);
  useEffect(() => {
    let start = 0;
    const end = Math.floor(target * 100);
    const totalMilliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMilliseconds / end), 10);
    const timer = setInterval(() => {
      start += 1;
      setCount(Number((start / 100).toFixed(2)));
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count.toFixed(2);
}

// Projects are synchronized and loaded dynamically from the GitHub API

const techSkills = [
  // Programming
  { name: "Python", category: "lang", level: "Expert" },
  { name: "SQL", category: "lang", level: "Advanced" },
  { name: "Java", category: "lang", level: "Advanced" },
  // AI / ML
  { name: "Machine Learning", category: "ml", level: "Advanced" },
  { name: "NLP", category: "ml", level: "Advanced" },
  { name: "Naive Bayes", category: "ml", level: "Expert" },
  { name: "Recommendation Systems", category: "ml", level: "Intermediate" },
  // GenAI / Agentic AI
  { name: "RAG", category: "genai", level: "Expert" },
  { name: "Multi-Agent Systems", category: "genai", level: "Expert" },
  { name: "LLM Integration", category: "genai", level: "Advanced" },
  { name: "Gemini", category: "genai", level: "Expert" },
  { name: "Ollama", category: "genai", level: "Expert" },
  { name: "Prompt Engineering", category: "genai", level: "Expert" },
  // Frameworks & Tools
  { name: "Flask", category: "tool", level: "Advanced" },
  { name: "Streamlit", category: "tool", level: "Expert" },
  { name: "LangChain", category: "tool", level: "Advanced" },
  { name: "Git", category: "tool", level: "Advanced" },
  // APIs
  { name: "REST APIs", category: "tool", level: "Advanced" },
  { name: "Telegram Bot API", category: "tool", level: "Expert" },
  { name: "Google Calendar API", category: "tool", level: "Intermediate" },
];

const aiDomains = [
  {
    title: "Generative AI",
    desc: "Building wrappers and workflows utilizing LLMs (Gemini, Ollama) with context engineering.",
    icon: Sparkles,
    badge: "GenAI",
  },
  {
    title: "Agentic AI Systems",
    desc: "Orchestrating multi-agent systems using planner and scheduler agent constructs.",
    icon: Network,
    badge: "Agentic AI",
  },
  {
    title: "RAG Applications",
    desc: "Designing retrieval-augmented generation systems with structured data retrieval.",
    icon: Database,
    badge: "RAG",
  },
  {
    title: "Natural Language Processing",
    desc: "Implementing text classification and spam filtering using NLP and Naive Bayes.",
    icon: Terminal,
    badge: "NLP",
  },
  {
    title: "Machine Learning",
    desc: "Developing predictive algorithms and analyzing retail datasets for sales insights.",
    icon: Cpu,
    badge: "ML",
  },
];

const awards = [
  {
    title: "Winner — 24 Hour AI TeraHack Hackathon 2025",
    desc: "Developed a functional AI prototype resolving critical automation workflows.",
    year: "2025",
    icon: Trophy,
    stat: "1st Place",
  },
  {
    title: "Winner — JUST PROMPT IT",
    desc: "AI Prompt Engineering Competition Winner.",
    year: "2025",
    icon: Flame,
    stat: "1st Place",
  },
  {
    title: "Best Paper Award — ISTE OpinionLens",
    desc: "Authored research paper on Sentiment Analysis & Opinion Mining (OpinionLens).",
    year: "2025",
    icon: FileText,
    stat: "National Level",
  },
];

const certificates = [
  {
    name: "Internship Completion Certificate",
    issuer: "CubeAISolutions Tech Pvt. Ltd.",
    year: "2025",
    fileUrl: certInternship,
    image: certInternship,
    category: "Internship",
    achievement: "Internship Completion",
  },
  {
    name: "Just Prompt It",
    issuer: "Mahendra Institute of Technology",
    year: "2025",
    fileUrl: certJustPromptIt,
    image: certJustPromptIt,
    category: "Prompt Engineering",
    achievement: 'Participated / Won in "Just Prompt It"',
  },
];

const timelineEvents = [
  {
    type: "experience",
    title: "AI / Agentic AI Intern",
    company: "Cube AI Solutions Pvt. Ltd.",
    location: "Bangalore, India",
    date: "July 2025 – December 2025",
    desc: "Built AI and Agentic AI systems for automation and decision support. Developed ML-based spam detection, implemented multi-agent manager systems, and built RAG assistants.",
    bulletPoints: [
      "Built AI and Agentic AI systems for automation and decision support",
      "Developed ML-based spam detection using NLP and Naive Bayes",
      "Implemented multi-agent AI social media manager using Gemini and Telegram",
      "Built Flask-based RAG assistant using local LLMs (Ollama)",
      "Analyzed multi-year retail data to generate sales insights",
    ],
    icon: Briefcase,
  },
  {
    type: "education",
    title: "B.E Computer Science & Engineering (AI & ML)",
    company: "Mahendra Institute of Technology",
    location: "Tamil Nadu, India",
    date: "2024 – 2028",
    desc: "Undergraduate majoring in Computer Science & Engineering (AI & ML). Current CGPA: 8.57.",
    bulletPoints: ["Current CGPA: 8.57"],
    icon: GraduationCap,
  },
];

function Portfolio() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <MobileAppLayout /> : <DesktopLayout />}
      <DhivyAIChatbot />
    </>
  );
}

function DesktopLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <AIDomains />
      <ArchitectureShowcase />
      <FeaturedProjects />
      <TechStackGrid />
      <ExperienceTimeline />
      <Certificates />
      <AwardsShowcase />
      <GitHubDashboard />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = ["top", "about", "work", "experience", "skills", "certificates", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25, rootMargin: "-20% 0px -60% 0px" },
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", id === "top" ? "/" : `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => scrollToSection("top", e)}
          className="flex items-center gap-2 font-display text-xl cursor-pointer"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse" />
          Dhivyadharshini<span className="text-gold">.</span>G
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="/"
            onClick={(e) => scrollToSection("top", e)}
            className={`transition-colors duration-300 ${
              activeSection === "top"
                ? "text-gold font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection("about", e)}
            className={`transition-colors duration-300 ${
              activeSection === "about"
                ? "text-gold font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            About
          </a>
          <a
            href="#work"
            onClick={(e) => scrollToSection("work", e)}
            className={`transition-colors duration-300 ${
              activeSection === "work"
                ? "text-gold font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection("experience", e)}
            className={`transition-colors duration-300 ${
              activeSection === "experience"
                ? "text-gold font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection("skills", e)}
            className={`transition-colors duration-300 ${
              activeSection === "skills"
                ? "text-gold font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Skills
          </a>
          <a
            href="#certificates"
            onClick={(e) => scrollToSection("certificates", e)}
            className={`transition-colors duration-300 ${
              activeSection === "certificates"
                ? "text-gold font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Certificates
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection("contact", e)}
            className={`transition-colors duration-300 ${
              activeSection === "contact"
                ? "text-gold font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          onClick={(e) => scrollToSection("contact", e)}
          className="group inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-4 py-1.5 text-sm text-gold hover:bg-gold hover:text-primary-foreground transition cursor-pointer"
        >
          Available for hire
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold group-hover:bg-primary-foreground" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, oklch(0.78 0.13 82 / 0.25), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            AI / ML • GENAI • AGENTIC AI SYSTEMS
          </p>
          <h1 className="font-display text-[clamp(2.75rem,8.5vw,7.5rem)] leading-[0.95] tracking-tight">
            Architecting
            <br />
            <span className="gold-gradient-text">intelligent AI</span>
            <br />
            systems for
            <br />
            <em className="italic">real-world impact.</em>
          </h1>
          <p className="mt-6 text-xs md:text-sm font-semibold text-gold uppercase tracking-wider">
            AI Engineer • Prompt Engineer • GenAI Developer • Agentic AI Systems Builder
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
            Building scalable AI applications, RAG pipelines, intelligent agents, and machine
            learning solutions that transform data into actionable intelligence.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition underline underline-offset-4 decoration-gold/40"
            >
              Get In Touch →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-sm">📍</span> Salem, Tamil Nadu, India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-sm">🎓</span> B.E. CSE (AI &amp; ML) • CGPA 8.57
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 relative mb-10 lg:mb-0 flex justify-center lg:justify-end">
          {/* Glassmorphism Dark Card */}
          <div className="relative w-full max-w-[420px] h-[460px] md:h-[530px] bg-[rgba(15,15,15,0.7)] backdrop-blur-[20px] border border-[rgba(212, 160, 23,0.2)] shadow-[0_20px_60px_rgba(212, 160, 23,0.15)] rounded-[24px] p-3 transition-all duration-400 ease-in-out hover:scale-[1.03] hover:shadow-[0_20px_70px_rgba(212, 160, 23,0.35)] hover:border-[rgba(212, 160, 23,0.35)] float-slow group">
            {/* Top-Right Badge */}
            <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 rounded-full bg-[rgba(15,15,15,0.8)] backdrop-blur-md border border-[rgba(212, 160, 23,0.3)] px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-gold shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017] animate-pulse shadow-[0_0_8px_rgba(212, 160, 23,0.8)]" />
              Available for Hire
            </div>

            {/* Inner Image Container with Gold Border and Soft Glow */}
            <div className="relative w-full h-full rounded-[24px] overflow-hidden border border-[#D4A017] shadow-[0_0_20px_rgba(212, 160, 23,0.15)] group-hover:shadow-[0_0_35px_rgba(212, 160, 23,0.4)] group-hover:border-[#D4A017]/80 transition-all duration-400">
              <img
                src={profileImg}
                alt="Dhivyadharshini G"
                width={807}
                height={1024}
                className="w-full h-full object-cover rounded-3xl"
                loading="lazy"
              />
            </div>

            {/* Floating Bottom Status Card */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[85%] bg-[rgba(15,15,15,0.85)] backdrop-blur-md border border-[rgba(212, 160, 23,0.25)] px-4 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] text-center transition-all duration-400 group-hover:border-[rgba(212, 160, 23,0.4)] group-hover:shadow-[0_15px_40px_rgba(212, 160, 23,0.1)]">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#D4A017] font-semibold mb-0.5">
                Currently
              </p>
              <p className="text-xs text-foreground font-medium whitespace-nowrap">
                Open to AI / ML Roles • 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const cgpa = useCountUpDecimal(8.57);
  const projectsCount = useCountUp(6);
  const internshipCount = useCountUp(6);
  const hackathonsCount = useCountUp(2);

  return (
    <section className="py-12 border-t border-border bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-6 text-center hover:border-gold/40 transition-colors shadow-lg group">
            <GraduationCap className="h-6 w-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-3xl md:text-4xl font-display text-foreground font-bold">{cgpa}</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              MIT Scholar CGPA
            </p>
          </div>
          <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-6 text-center hover:border-gold/40 transition-colors shadow-lg group">
            <Cpu className="h-6 w-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-3xl md:text-4xl font-display text-foreground font-bold">
              {projectsCount}+
            </p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              AI Projects Shipped
            </p>
          </div>
          <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-6 text-center hover:border-gold/40 transition-colors shadow-lg group">
            <Briefcase className="h-6 w-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-3xl md:text-4xl font-display text-foreground font-bold">
              {internshipCount} Mo
            </p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              AI Intern Experience
            </p>
          </div>
          <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-6 text-center hover:border-gold/40 transition-colors shadow-lg group">
            <Trophy className="h-6 w-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-3xl md:text-4xl font-display text-foreground font-bold">
              {hackathonsCount}+ Major
            </p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              Hackathon Wins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "GenAI",
    "Agentic AI",
    "RAG",
    "LangChain",
    "Gemini",
    "Ollama",
    "Python",
    "Multi-Agent Systems",
    "NLP",
    "Flask",
  ];
  const loop = [...items, ...items];
  return (
    <section className="border-y border-border py-6 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl px-8 flex items-center gap-8 text-muted-foreground"
          >
            {t}
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">About</p>
          <h2 className="font-display text-5xl md:text-6xl">Builder of agentic, applied AI.</h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm an AI &amp; Machine Learning undergraduate specializing in{" "}
            <span className="text-foreground">GenAI and Agentic AI systems</span>, with hands-on
            experience building RAG-based assistants, multi-agent workflows, and production-ready AI
            applications.
          </p>
          <p>
            My foundation spans ML, NLP, and secure API-driven system design — with a proven ability
            to ship real-world, scalable AI solutions from prototype to deployment.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <Stat n="3+" label="Production projects" />
            <Stat n="6 mo" label="AI internship" />
            <Stat n="4" label="Awards & wins" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl md:text-5xl text-foreground">{n}</p>
      <p className="text-xs uppercase tracking-widest mt-2">{label}</p>
    </div>
  );
}

function AIDomains() {
  return (
    <section className="py-24 border-t border-border bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Core Competencies</p>
        <h2 className="font-display text-5xl md:text-7xl mb-16">AI Focus Areas.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiDomains.map((dom) => (
            <div
              key={dom.title}
              className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-3xl p-6 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gold/5 rounded-xl border border-gold/20 text-gold group-hover:scale-110 transition-transform">
                  <dom.icon className="h-6 w-6" />
                </div>
                <span className="text-[10px] tracking-wider uppercase bg-gold/5 border border-gold/15 px-2 py-0.5 rounded text-gold font-medium">
                  {dom.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{dom.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{dom.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState("rag");
  const [activeStep, setActiveStep] = useState(0);

  const ragSteps = [
    {
      title: "User Query",
      desc: "User enters a natural language query (e.g. 'Generate financial breakdown for Q3').",
      tech: "Flask REST API",
    },
    {
      title: "Query Embedding",
      desc: "Converts text query into a high-dimensional vector representation representing semantic intent.",
      tech: "Sentence-Transformers / Ollama",
    },
    {
      title: "Vector Retrieval",
      desc: "Queries the local vector space to retrieve matches representing factual database schemas.",
      tech: "ChromaDB / SQLite indexing",
    },
    {
      title: "Context Assembly",
      desc: "Fuses retrieved schema info and instructions into a metadata-rich context prompt template.",
      tech: "LangChain / Prompt Templates",
    },
    {
      title: "Local LLM Inference",
      desc: "Processes constructed prompts on-device to output structured SQL matching the client queries.",
      tech: "Ollama (Llama 3 / Mistral)",
    },
    {
      title: "Output Delivery",
      desc: "Executes SQL query, fetches DB response, and returns parsed answers conversationalized in UI.",
      tech: "JSON Response / Streamlit",
    },
  ];

  const agentSystem = [
    {
      name: "Planner Agent",
      role: "Campaign Strategy",
      desc: "Builds a structured content pipeline, establishing topics, target hashtags, and visual guides.",
      inputs: "Core brand values, target audience, duration (30 days)",
      outputs: "Content pillars, daily theme schedule",
    },
    {
      name: "Writer Agent",
      role: "Copywriting & Tone",
      desc: "Drafts daily posts aligning copy precisely to Planner parameters and client tone guidelines.",
      inputs: "Daily theme, content pillars, tone restrictions",
      outputs: "Formatted post copy, call-to-actions",
    },
    {
      name: "Hashtag Agent",
      role: "NLP & SEO Optimization",
      desc: "Appends highly engaging trending hashtags and SEO keywords using semantic parsing rules.",
      inputs: "Drafted copy, platform metadata rules",
      outputs: "Optimized keywords list, matching hashtags",
    },
    {
      name: "Scheduler Agent",
      role: "Auto-Posting & Logs",
      desc: "Queues ready posts, triggers scheduler cron, and shoots posting confirmation logs.",
      inputs: "Final post draft, publication date/time",
      outputs: "Telegram webhook, database schedule entry",
    },
  ];

  return (
    <section className="py-24 border-t border-border bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, oklch(0.78 0.13 82 / 0.1), transparent 45%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Interactive System Showcase
        </p>
        <h2 className="font-display text-5xl md:text-7xl mb-8">AI Architecture.</h2>

        {/* Tab Controls */}
        <div className="flex border-b border-border/60 mb-12">
          <button
            onClick={() => {
              setActiveTab("rag");
              setActiveStep(0);
            }}
            className={`pb-4 px-6 text-sm font-medium transition-colors relative cursor-pointer ${
              activeTab === "rag" ? "text-gold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Retrieval-Augmented Generation (RAG)
            {activeTab === "rag" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold shadow-[0_0_8px_rgba(212, 160, 23,0.8)]" />
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab("agents");
              setActiveStep(0);
            }}
            className={`pb-4 px-6 text-sm font-medium transition-colors relative cursor-pointer ${
              activeTab === "agents" ? "text-gold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Multi-Agent Orchestration
            {activeTab === "agents" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold shadow-[0_0_8px_rgba(212, 160, 23,0.8)]" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "rag" ? (
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Visual Flow diagram */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-col gap-3">
                {ragSteps.map((step, idx) => (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-4 text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      activeStep === idx
                        ? "bg-[rgba(15,15,15,0.85)] border-gold shadow-[0_0_15px_rgba(212, 160, 23,0.2)] scale-[1.02]"
                        : "bg-[rgba(15,15,15,0.4)] border-border/40 hover:border-gold/40 hover:bg-[rgba(15,15,15,0.6)]"
                    }`}
                  >
                    <span
                      className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        activeStep === idx
                          ? "bg-gold text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={`font-semibold ${activeStep === idx ? "text-gold" : "text-foreground"}`}
                      >
                        {step.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{step.tech}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Explanation Pane */}
            <div className="lg:col-span-5 bg-[rgba(15,15,15,0.8)] backdrop-blur-md border border-[rgba(212, 160, 23,0.2)] rounded-3xl p-8 shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full min-h-[350px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                  Step Details 0{activeStep + 1}
                </span>
                <h3 className="font-display text-4xl text-foreground mt-2 mb-4">
                  {ragSteps[activeStep].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {ragSteps[activeStep].desc}
                </p>
              </div>
              <div className="border-t border-border/60 pt-4 mt-auto">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
                  Technology Stack
                </span>
                <span className="text-sm text-gold font-semibold">{ragSteps[activeStep].tech}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Visual Agent Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {agentSystem.map((agent, idx) => (
                <button
                  key={agent.name}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-[160px] cursor-pointer ${
                    activeStep === idx
                      ? "bg-[rgba(15,15,15,0.85)] border-gold shadow-[0_0_20px_rgba(212, 160, 23,0.25)] scale-[1.03]"
                      : "bg-[rgba(15,15,15,0.4)] border-border/40 hover:border-gold/40 hover:bg-[rgba(15,15,15,0.6)]"
                  }`}
                >
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-gold font-medium">
                      Agent 0{idx + 1}
                    </span>
                    <h3
                      className={`text-xl font-bold mt-1 ${activeStep === idx ? "text-gold" : "text-foreground"}`}
                    >
                      {agent.name}
                    </h3>
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5 mt-auto">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {agent.role}
                  </div>
                </button>
              ))}
            </div>

            {/* Agent Explanation Pane */}
            <div className="lg:col-span-5 bg-[rgba(15,15,15,0.8)] backdrop-blur-md border border-[rgba(212, 160, 23,0.2)] rounded-3xl p-8 shadow-[0_15px_30px_rgba(0,0,0,0.4)] min-h-[350px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                  Active Agent Specs
                </span>
                <h3 className="font-display text-4xl text-foreground mt-2 mb-1">
                  {agentSystem[activeStep].name}
                </h3>
                <p className="text-xs text-gold uppercase tracking-wider mb-4 font-semibold">
                  {agentSystem[activeStep].role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {agentSystem[activeStep].desc}
                </p>
              </div>
              <div className="space-y-3 border-t border-border/60 pt-4 mt-auto">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-semibold">
                    Inputs
                  </span>
                  <span className="text-xs text-foreground font-medium">
                    {agentSystem[activeStep].inputs}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-semibold">
                    Outputs
                  </span>
                  <span className="text-xs text-gold font-semibold">
                    {agentSystem[activeStep].outputs}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const [activeStudy, setActiveStudy] = useState<MappedProject | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const reposQuery = useQuery({
    queryKey: ["githubRepos", GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  if (reposQuery.isLoading) {
    return (
      <section id="work" className="py-24 border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Selected Work</p>
              <h2 className="font-display text-5xl md:text-7xl">Things I&apos;ve built.</h2>
            </div>
          </div>
          <div className="space-y-10">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-[rgba(15,15,15,0.7)] border border-border/10 rounded-[24px] h-[300px] animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (reposQuery.isError) {
    return null;
  }

  const repos = reposQuery.data || [];
  const list = repos.map(getMappedProject).sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const displayList = list.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "ml") return p.category === "ml";
    if (activeCategory === "genai") return p.category === "genai";
    if (activeCategory === "fullstack") return p.category === "fullstack";
    if (activeCategory === "tools") return p.category === "tools";
    if (activeCategory === "academic") return p.category === "academic";
    if (activeCategory === "python") {
      return p.category === "python" || p.tech.some((t) => t.toLowerCase() === "python");
    }
    return false;
  });

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ml", label: "AI & Machine Learning" },
    { id: "genai", label: "GenAI & Agents" },
    { id: "fullstack", label: "Full Stack Development" },
    { id: "python", label: "Python Projects" },
    { id: "tools", label: "Tools & Utilities" },
    { id: "academic", label: "Academic Projects" },
  ];

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "ml":
        return "AI & Machine Learning";
      case "genai":
        return "GenAI & Agents";
      case "fullstack":
        return "Full Stack Development";
      case "python":
        return "Python Projects";
      case "tools":
        return "Tools & Utilities";
      case "academic":
        return "Academic Projects";
      default:
        return cat.toUpperCase();
    }
  };

  return (
    <section id="work" className="py-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Selected Work</p>
            <h2 className="font-display text-5xl md:text-7xl">Things I&apos;ve built.</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A curated list of core AI systems shipped during my internship and independent research.
            Click any project to inspect its architecture.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveCategory(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 cursor-pointer ${
                activeCategory === f.id
                  ? "bg-gold text-primary-foreground border-gold shadow-[0_0_15px_rgba(212, 160, 23,0.3)]"
                  : "bg-card/40 text-muted-foreground border-border hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {displayList.map((p) => {
            const yearStr = p.timeline.split(" – ").pop() || "2025";
            return (
              <article
                key={p.id}
                className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border rounded-[24px] overflow-hidden transition-all duration-500 border-[rgba(212, 160, 23,0.15)] hover:border-gold/40 hover:shadow-lg"
              >
                {/* Header Grid */}
                <div className="grid lg:grid-cols-12 gap-6 p-6 lg:p-8 items-center">
                  <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden rounded-xl">
                    <ProjectImage
                      src={p.banner}
                      alt={p.title}
                      category={p.category}
                      title={p.title}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="text-gold font-semibold">{yearStr}</span>
                        <span className="h-px w-8 bg-border" />
                        <span className="text-gold font-semibold uppercase tracking-wider text-[10px]">
                          {getCategoryLabel(p.category)}
                        </span>
                        {p.featured && (
                          <>
                            <span className="h-px w-8 bg-border" />
                            <span className="bg-gold/10 border border-gold/30 px-2 py-0.5 rounded text-gold font-bold text-[9px] uppercase tracking-widest flex items-center gap-1">
                              ★ Featured
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl mb-3 leading-tight text-foreground">
                        {p.title}
                      </h3>
                      <p className="text-sm text-gold font-medium mb-4">{p.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2 h-10">
                        {p.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {p.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] border border-gold/20 bg-gold/5 rounded-full px-3 py-1 text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                        {p.tech.length > 3 && (
                          <span className="text-[10px] border border-border rounded-full px-2 py-1 text-muted-foreground">
                            +{p.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setActiveStudy(p)}
                        className="inline-flex items-center gap-1.5 text-xs text-gold uppercase tracking-wider font-semibold hover:opacity-85 transition-opacity cursor-pointer border border-gold/30 rounded-xl px-4 py-2 hover:bg-gold hover:text-black transition"
                      >
                        View Case Study
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {activeStudy && <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />}
    </section>
  );
}

function TechStackGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all" ? techSkills : techSkills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Technical Stack</p>
        <h2 className="font-display text-5xl md:text-7xl mb-8">What I work with.</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { id: "all", label: "All Skills" },
            { id: "genai", label: "GenAI & Agents" },
            { id: "ml", label: "AI & ML" },
            { id: "lang", label: "Languages" },
            { id: "tool", label: "Frameworks & Tools" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 cursor-pointer ${
                activeFilter === f.id
                  ? "bg-gold text-primary-foreground border-gold shadow-[0_0_15px_rgba(212, 160, 23,0.3)]"
                  : "bg-card/40 text-muted-foreground border-border hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((s) => (
            <div
              key={s.name}
              className="bg-[rgba(15,15,15,0.7)] backdrop-blur-sm border border-[rgba(212, 160, 23,0.2)] rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden shadow-md scale-100 opacity-100 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212, 160, 23,0.15)]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-gold/10 transition-colors" />
              <p className="text-xs text-gold uppercase tracking-wider mb-2 font-medium">
                {s.level}
              </p>
              <h3 className="text-lg font-semibold text-foreground group-hover:translate-x-1 transition-transform">
                {s.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-24 border-t border-border bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Journey</p>
        <h2 className="font-display text-5xl md:text-7xl mb-16">Timeline.</h2>

        {/* Timeline body */}
        <div className="relative border-l border-gold/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {timelineEvents.map((ev) => (
            <div key={ev.title} className="relative group">
              {/* Circular timeline node */}
              <span className="absolute -left-[45px] md:-left-[61px] top-1.5 h-6 w-6 rounded-full bg-background border-2 border-gold flex items-center justify-center shadow-[0_0_10px_rgba(212, 160, 23,0.3)] group-hover:shadow-[0_0_15px_rgba(212, 160, 23,0.6)] group-hover:scale-110 transition-all">
                <ev.icon className="h-3 w-3 text-gold" />
              </span>

              {/* Event card */}
              <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-6 md:p-8 hover:border-gold/40 transition-colors shadow-lg max-w-3xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold bg-gold/5 border border-gold/20 px-2 py-0.5 rounded">
                      {ev.type}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mt-2">{ev.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground sm:text-right font-medium">
                    {ev.date} · {ev.location}
                  </p>
                </div>
                <p className="text-sm text-gold font-semibold mb-3">{ev.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ev.desc}</p>
                {ev.bulletPoints.length > 0 && (
                  <ul className="space-y-2 mt-4 border-t border-border/40 pt-4">
                    {ev.bulletPoints.map((bp) => (
                      <li
                        key={bp}
                        className="flex gap-3 text-xs text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 inline-block h-1 w-2 bg-gold shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  const [activeCert, setActiveCert] = useState<(typeof certificates)[0] | null>(null);

  return (
    <section id="certificates" className="py-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Credentials</p>
        <h2 className="font-display text-5xl md:text-7xl mb-16">Certificates.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c) => {
            const hasPreview = !!c.image;

            return (
              <div
                key={c.name}
                className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-3xl p-6 hover:border-gold/40 hover:shadow-[0_0_20px_rgba(212, 160, 23,0.1)] transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div className="space-y-4">
                  {/* Preview Area */}
                  <div className="aspect-[4/3] rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center relative overflow-hidden group-hover:border-gold/30 transition-colors">
                    {hasPreview ? (
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center p-4">
                        <Award className="h-10 w-10 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          Preview Pending
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                      🏆 {c.category || "Certification"}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-2 line-clamp-1">
                      {c.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Issued: {c.year}</p>
                  </div>
                </div>

                <div className="flex gap-2.5 mt-6 border-t border-border/40 pt-4">
                  <button
                    onClick={() => setActiveCert(c)}
                    className="flex-1 text-center bg-gold/10 border border-gold/30 text-gold font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider hover:bg-gold hover:text-black transition active:scale-95 cursor-pointer"
                  >
                    View Certificate
                  </button>
                  <a
                    href={c.fileUrl}
                    download={`${c.name.replace(/\s+/g, "_")}_Certificate`}
                    className="flex-1 text-center border border-gold/30 text-gold font-bold py-2 rounded-xl text-[10px] uppercase tracking-wider hover:bg-gold hover:text-black transition active:scale-95 cursor-pointer"
                  >
                    Download
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeCert && (
        <CertificateModal certificate={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </section>
  );
}

function AwardsShowcase() {
  return (
    <section className="py-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Recognition</p>
        <h2 className="font-display text-5xl md:text-6xl mb-16">Achievements.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((a) => (
            <div
              key={a.title}
              className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-8 hover:border-gold/40 hover:shadow-[0_10px_30px_rgba(212, 160, 23,0.1)] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full pointer-events-none" />
              <div className="p-4 bg-gold/5 border border-gold/20 text-gold rounded-full w-fit mb-6 group-hover:scale-110 transition-transform">
                <a.icon className="h-8 w-8" />
              </div>
              <span className="text-[10px] tracking-widest uppercase text-gold block font-semibold mb-2">
                {a.stat}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{a.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
              <p className="text-xs text-gold/60 mt-4 uppercase tracking-widest font-semibold">
                {a.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface GitHubProfile {
  login: string;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  name: string | null;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubContributions {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  payload: {
    commits?: Array<{
      message: string;
    }>;
    action?: string;
    ref?: string;
  };
  created_at: string;
}

const GITHUB_USERNAME =
  import.meta.env.VITE_GITHUB_USERNAME ||
  import.meta.env.GITHUB_USERNAME ||
  "DhivyadharshiniGopalakrishnan";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || import.meta.env.GITHUB_TOKEN || "";

const getHeaders = () => {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
  }
  return headers;
};

const fetchGitHubProfile = async (): Promise<GitHubProfile> => {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
    headers: getHeaders(),
  });
  if (!res.ok) {
    if (res.status === 403 && res.headers.get("x-ratelimit-remaining") === "0") {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }
    throw new Error(`Failed to fetch GitHub profile: ${res.statusText}`);
  }
  return res.json();
};

const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
    headers: getHeaders(),
  });
  if (!res.ok) {
    if (res.status === 403 && res.headers.get("x-ratelimit-remaining") === "0") {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }
    throw new Error(`Failed to fetch GitHub repositories: ${res.statusText}`);
  }
  return res.json();
};

const fetchGitHubPRsCount = async (): Promise<number> => {
  const res = await fetch(
    `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr+is:merged`,
    {
      headers: getHeaders(),
    },
  );
  if (!res.ok) {
    if (res.status === 403 && res.headers.get("x-ratelimit-remaining") === "0") {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }
    throw new Error(`Failed to fetch PRs count: ${res.statusText}`);
  }
  const json = await res.json();
  return json.total_count || 0;
};

const fetchGitHubIssuesCount = async (): Promise<number> => {
  const res = await fetch(
    `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:issue`,
    {
      headers: getHeaders(),
    },
  );
  if (!res.ok) {
    if (res.status === 403 && res.headers.get("x-ratelimit-remaining") === "0") {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }
    throw new Error(`Failed to fetch issues count: ${res.statusText}`);
  }
  const json = await res.json();
  return json.total_count || 0;
};

const fetchGitHubContributions = async (): Promise<GitHubContributions> => {
  if (GITHUB_TOKEN) {
    try {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          ...getHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: { username: GITHUB_USERNAME },
        }),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.data?.user?.contributionsCollection?.contributionCalendar) {
          const calendar = json.data.user.contributionsCollection.contributionCalendar;
          const contributions: ContributionDay[] = [];
          calendar.weeks.forEach(
            (week: {
              contributionDays: Array<{
                date: string;
                contributionCount: number;
                contributionLevel: string;
              }>;
            }) => {
              week.contributionDays.forEach(
                (day: { date: string; contributionCount: number; contributionLevel: string }) => {
                  let level = 0;
                  if (day.contributionLevel === "FIRST_QUARTILE") level = 1;
                  else if (day.contributionLevel === "SECOND_QUARTILE") level = 2;
                  else if (day.contributionLevel === "THIRD_QUARTILE") level = 3;
                  else if (day.contributionLevel === "FOURTH_QUARTILE") level = 4;
                  else if (day.contributionLevel === "NONE") level = 0;

                  contributions.push({
                    date: day.date,
                    count: day.contributionCount,
                    level,
                  });
                },
              );
            },
          );
          return {
            total: {
              year: calendar.totalContributions,
            },
            contributions,
          };
        }
      }
    } catch (e) {
      console.warn("GraphQL contributions fetch failed, falling back to community API:", e);
    }
  }

  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch contribution calendar: ${res.statusText}`);
  }
  return res.json();
};

const fetchGitHubEvents = async (): Promise<GitHubEvent[]> => {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`, {
    headers: getHeaders(),
  });
  if (!res.ok) {
    if (res.status === 403 && res.headers.get("x-ratelimit-remaining") === "0") {
      throw new Error("GitHub API rate limit exceeded. Please try again later.");
    }
    throw new Error(`Failed to fetch GitHub events: ${res.statusText}`);
  }
  return res.json();
};

const calculateStreak = (contributions: ContributionDay[]) => {
  const sorted = [...contributions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  let currentStreak = 0;
  let longestStreak = 0;
  let runningStreak = 0;

  const todayStr = new Date().toISOString().split("T")[0];
  const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  const activeDays = sorted.filter((c) => c.date <= todayStr);

  activeDays.forEach((day) => {
    if (day.count > 0) {
      runningStreak++;
      if (runningStreak > longestStreak) {
        longestStreak = runningStreak;
      }
    } else {
      runningStreak = 0;
    }
  });

  const todayContribution = activeDays.find((d) => d.date === todayStr);
  const yesterdayContribution = activeDays.find((d) => d.date === yesterdayStr);

  if (todayContribution && todayContribution.count > 0) {
    currentStreak = runningStreak;
  } else if (yesterdayContribution && yesterdayContribution.count > 0) {
    let tempStreak = 0;
    for (let i = activeDays.length - 2; i >= 0; i--) {
      if (activeDays[i].count > 0) {
        tempStreak++;
      } else {
        break;
      }
    }
    currentStreak = tempStreak + 1;
  } else {
    currentStreak = 0;
  }

  return { currentStreak, longestStreak };
};

const getTopLanguages = (repos: GitHubRepo[]) => {
  const counts: Record<string, number> = {};
  repos.forEach((repo) => {
    if (repo.language) {
      counts[repo.language] = (counts[repo.language] || 0) + 1;
    }
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([lang]) => lang);
};

const formatGitHubEvent = (event: GitHubEvent) => {
  const dateStr = new Date(event.created_at).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const repoName = event.repo.name.replace(`${GITHUB_USERNAME}/`, "");
  switch (event.type) {
    case "PushEvent": {
      const commitCount = event.payload.commits?.length || 0;
      const commitMsg = event.payload.commits?.[0]?.message || "";
      const commitDetails = commitMsg ? ` ("${commitMsg.split("\n")[0]}")` : "";
      return `Pushed ${commitCount} commit${commitCount === 1 ? "" : "s"} to ${repoName}${commitDetails} on ${dateStr}`;
    }
    case "PullRequestEvent": {
      const prAction = event.payload.action || "interacted with";
      return `${prAction.charAt(0).toUpperCase() + prAction.slice(1)} PR in ${repoName} on ${dateStr}`;
    }
    case "IssuesEvent": {
      const issueAction = event.payload.action || "interacted with";
      return `${issueAction.charAt(0).toUpperCase() + issueAction.slice(1)} issue in ${repoName} on ${dateStr}`;
    }
    case "CreateEvent":
      return `Created repo/branch ${repoName} on ${dateStr}`;
    case "WatchEvent":
      return `Starred ${repoName} on ${dateStr}`;
    default:
      return `Activity in ${repoName} on ${dateStr}`;
  }
};

function GitHubDashboard() {
  const profileQuery = useQuery({
    queryKey: ["githubProfile", GITHUB_USERNAME],
    queryFn: fetchGitHubProfile,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const reposQuery = useQuery({
    queryKey: ["githubRepos", GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const prsQuery = useQuery({
    queryKey: ["githubPRsCount", GITHUB_USERNAME],
    queryFn: fetchGitHubPRsCount,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const issuesQuery = useQuery({
    queryKey: ["githubIssuesCount", GITHUB_USERNAME],
    queryFn: fetchGitHubIssuesCount,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const contributionsQuery = useQuery({
    queryKey: ["githubContributions", GITHUB_USERNAME],
    queryFn: fetchGitHubContributions,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const eventsQuery = useQuery({
    queryKey: ["githubEvents", GITHUB_USERNAME],
    queryFn: fetchGitHubEvents,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const getGoldColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#35250a] border-[#553b10]";
      case 2:
        return "bg-[#6c4d14] border-[#92681c]";
      case 3:
        return "bg-[#a37620] border-[#c58f2a]";
      case 4:
        return "bg-[#d4a017] border-[#ecd365] shadow-[0_0_8px_rgba(212, 160, 23,0.5)] animate-pulse";
      default:
        return "bg-muted/10 border-border/10";
    }
  };

  const refetchAll = () => {
    profileQuery.refetch();
    reposQuery.refetch();
    prsQuery.refetch();
    issuesQuery.refetch();
    contributionsQuery.refetch();
    eventsQuery.refetch();
  };

  const isError =
    profileQuery.isError ||
    reposQuery.isError ||
    prsQuery.isError ||
    issuesQuery.isError ||
    contributionsQuery.isError;
  const errorMsg =
    (profileQuery.error as Error)?.message ||
    (reposQuery.error as Error)?.message ||
    (prsQuery.error as Error)?.message ||
    (issuesQuery.error as Error)?.message ||
    (contributionsQuery.error as Error)?.message ||
    "An error occurred while fetching GitHub data.";

  const isLoading =
    profileQuery.isLoading ||
    reposQuery.isLoading ||
    prsQuery.isLoading ||
    issuesQuery.isLoading ||
    contributionsQuery.isLoading;

  const profile = profileQuery.data;
  const repos = reposQuery.data || [];
  const contributions = contributionsQuery.data;
  const events = eventsQuery.data || [];
  const prsMerged = prsQuery.data || 0;
  const issuesCreated = issuesQuery.data || 0;

  const totalRepos = profile?.public_repos || 0;
  const followers = profile?.followers || 0;
  const following = profile?.following || 0;
  const avatarUrl = profile?.avatar_url || "";
  const bioText = profile?.bio || "AI / ML Engineer & Open Source Contributor";

  const starsGained = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  let totalCommits = 0;
  if (contributions?.total) {
    totalCommits = Object.values(contributions.total).reduce((sum, val) => sum + val, 0);
  }
  if (totalCommits === 0 && contributions?.contributions) {
    totalCommits = contributions.contributions.reduce((sum, day) => sum + day.count, 0);
  }

  const streak = contributions?.contributions
    ? calculateStreak(contributions.contributions)
    : { currentStreak: 0, longestStreak: 0 };

  const topLanguages = getTopLanguages(repos);
  const recentEvents = events.map(formatGitHubEvent).filter(Boolean);

  // Generate a grid of days. 35 columns * 7 days = 245 squares.
  const contributionsList = contributions?.contributions
    ? [...contributions.contributions].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
    : [];

  const calendarSquares = contributionsList.slice(-245);
  const paddedSquares = [...calendarSquares];
  while (paddedSquares.length < 245) {
    paddedSquares.unshift({
      date: new Date(new Date(paddedSquares[0]?.date || Date.now()).getTime() - 86400000)
        .toISOString()
        .split("T")[0],
      count: 0,
      level: 0,
    });
  }

  return (
    <section className="py-24 border-t border-border bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Open Source</p>
        <h2 className="font-display text-5xl md:text-7xl mb-16">GitHub Analytics.</h2>

        <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-[24px] p-6 md:p-8 shadow-xl">
          {isLoading ? (
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4 w-full lg:w-auto">
                  <div className="h-12 w-12 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold animate-pulse">
                    <Github className="h-6 w-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-48 bg-muted/20 rounded animate-pulse" />
                    <div className="h-3.5 w-64 bg-muted/15 rounded animate-pulse" />
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-card/40 border border-border/40 px-4 py-2.5 rounded-xl text-center min-w-[100px]"
                    >
                      <div className="h-3 w-16 bg-muted/20 rounded mx-auto mb-2 animate-pulse" />
                      <div className="h-5 w-8 bg-gold/20 rounded mx-auto animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-border/40 pt-6">
                <div className="h-3.5 w-48 bg-muted/20 rounded mb-4 animate-pulse" />
                <div className="overflow-x-auto pb-4">
                  <div className="flex flex-col flex-wrap h-[100px] gap-[3px] w-fit">
                    {Array.from({ length: 245 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="h-[11px] w-[11px] rounded-[2px] border border-border/10 bg-muted/5 animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="h-12 w-12 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </span>
              <h4 className="text-sm font-bold text-foreground">GitHub Data Unavailable</h4>
              <p className="text-xs text-muted-foreground mt-1 max-w-sm">{errorMsg}</p>
              <button
                onClick={refetchAll}
                className="mt-4 px-5 py-2 border border-gold/30 rounded-xl text-xs font-semibold text-gold hover:bg-gold hover:text-black transition cursor-pointer"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
                <div
                  className="flex items-center gap-4"
                  title={`GitHub Profile: @${profile?.login || GITHUB_USERNAME}\nBio: ${bioText}\nFollowers: ${followers} | Following: ${following}`}
                >
                  <div className="h-12 w-12 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold overflow-hidden shrink-0">
                    {avatarUrl ? (
                      <img
                        src={avatarUrl}
                        alt="Profile Avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Github className="h-6 w-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      @{profile?.login || GITHUB_USERNAME}
                    </h3>
                    <p className="text-xs text-gold">{bioText}</p>
                  </div>
                </div>

                {/* Quick stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                  <div
                    className="bg-card/40 border border-border/40 px-4 py-2.5 rounded-xl text-center cursor-help"
                    title={`Current Streak: ${streak.currentStreak} day(s)\nLongest Streak: ${streak.longestStreak} day(s)`}
                  >
                    <span className="text-xs text-muted-foreground block font-semibold">
                      Total Commits
                    </span>
                    <span className="text-lg font-bold text-gold">{totalCommits}</span>
                  </div>
                  <div
                    className="bg-card/40 border border-border/40 px-4 py-2.5 rounded-xl text-center cursor-help"
                    title={`Recent Activity:\n${recentEvents.slice(0, 3).join("\n") || "No recent public events"}\n\nIssues Created: ${issuesCreated}`}
                  >
                    <span className="text-xs text-muted-foreground block font-semibold">
                      PRs Merged
                    </span>
                    <span className="text-lg font-bold text-gold">{prsMerged}</span>
                  </div>
                  <div
                    className="bg-card/40 border border-border/40 px-4 py-2.5 rounded-xl text-center cursor-help"
                    title={`Top Languages: ${topLanguages.join(", ") || "None"}`}
                  >
                    <span className="text-xs text-muted-foreground block font-semibold">
                      Repositories
                    </span>
                    <span className="text-lg font-bold text-gold">{totalRepos}</span>
                  </div>
                  <div
                    className="bg-card/40 border border-border/40 px-4 py-2.5 rounded-xl text-center cursor-help"
                    title={`Followers: ${followers}\nFollowing: ${following}`}
                  >
                    <span className="text-xs text-muted-foreground block font-semibold">
                      Stars Gained
                    </span>
                    <span className="text-lg font-bold text-gold">{starsGained}</span>
                  </div>
                </div>
              </div>

              {/* Grid Calendar */}
              <div className="border-t border-border/40 pt-6">
                <p className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
                  <GitCommit className="h-4 w-4 text-gold" />
                  Contributions in the past year
                </p>
                <div className="overflow-x-auto pb-4">
                  <div className="flex flex-col flex-wrap h-[100px] gap-[3px] w-fit">
                    {paddedSquares.map((day, idx) => (
                      <div
                        key={idx}
                        className={`h-[11px] w-[11px] rounded-[2px] border ${getGoldColor(day.level)} transition-colors duration-300 hover:scale-125`}
                        title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${new Date(day.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Graph Legend */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-muted-foreground mt-2 gap-2">
                  <span>Learn more at github.com/{profile?.login || GITHUB_USERNAME}</span>
                  <div className="flex items-center gap-1">
                    <span>Less</span>
                    <div className="h-[9px] w-[9px] bg-muted/10 border border-border/10 rounded-[1px]" />
                    <div className="h-[9px] w-[9px] bg-[#35250a] border-[#553b10] rounded-[1px]" />
                    <div className="h-[9px] w-[9px] bg-[#6c4d14] border-[#92681c] rounded-[1px]" />
                    <div className="h-[9px] w-[9px] bg-[#a37620] border-[#c58f2a] rounded-[1px]" />
                    <div className="h-[9px] w-[9px] bg-[#d4a017] border-[#ecd365] rounded-[1px]" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [downloading, setDownloading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = (field?: "name" | "email" | "message") => {
    const newErrors = { ...errors };

    if (!field || field === "name") {
      if (!formData.name) {
        newErrors.name = "Name is required.";
      } else if (formData.name.trim().length < 3) {
        newErrors.name = "Name must be at least 3 characters.";
      } else {
        newErrors.name = "";
      }
    }

    if (!field || field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) {
        newErrors.email = "Email is required.";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      } else {
        newErrors.email = "";
      }
    }

    if (!field || field === "message") {
      if (!formData.message) {
        newErrors.message = "Message is required.";
      } else if (formData.message.trim().length < 20) {
        newErrors.message = "Message must be at least 20 characters.";
      } else {
        newErrors.message = "";
      }
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      const link = document.createElement("a");
      link.href = "/resume/Dhivyadharshini_G_Resume.pdf";
      link.setAttribute("download", "Dhivyadharshini_G_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched to trigger any blank field validation errors
    setTouched({ name: true, email: true, message: true });

    const isValid = validate();
    if (!isValid) {
      return;
    }

    setStatus("sending");

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.EMAILJS_SERVICE_ID || "";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.EMAILJS_TEMPLATE_ID || "";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.EMAILJS_PUBLIC_KEY || "";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });

      // Auto dismiss success status
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (err) {
      console.error("EmailJS sending error:", err);
      setStatus("error");
      // Auto dismiss error status
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-border bg-background relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.78 0.13 82 / 0.25), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-gold">Collaboration</p>
            <h2 className="font-display text-5xl md:text-7xl">Let&apos;s build.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Have an AI/ML concept or a Multi-Agent automation idea you want implemented? Drop a
              message, schedule a call, or download my resume below.
            </p>

            <div className="pt-6 space-y-4 text-sm text-muted-foreground">
              <a
                href="tel:+918870870513"
                className="flex items-center gap-3 hover:text-gold transition"
              >
                <Phone className="h-5 w-5 text-gold" /> +91 88708 70513
              </a>
              <a
                href="mailto:dhivyadharshinigopalakrishnan@gmail.com"
                className="flex items-center gap-3 hover:text-gold transition break-all"
              >
                <Mail className="h-5 w-5 text-gold" /> dhivyadharshinigopalakrishnan@gmail.com
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" /> Salem, Tamil Nadu, India
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/dhivyadharshini-gopalakrishnan-992495326/"
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-[rgba(212, 160, 23,0.2)] rounded-xl bg-card/40 text-gold hover:border-gold hover:shadow-[0_0_10px_rgba(212, 160, 23,0.3)] transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/DhivyadharshiniGopalakrishnan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[rgba(212, 160, 23,0.2)] rounded-xl bg-card/40 text-gold hover:border-gold hover:shadow-[0_0_10px_rgba(212, 160, 23,0.3)] transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-2.5 text-xs font-semibold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                {downloading ? "Preparing PDF..." : "Download Resume"}
              </button>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-3xl p-6 md:p-8 shadow-xl relative">
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-2 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, name: e.target.value }));
                    if (touched.name || e.target.value.length > 2) {
                      setErrors((prev) => ({
                        ...prev,
                        name:
                          e.target.value.trim().length < 3
                            ? "Name must be at least 3 characters."
                            : "",
                      }));
                    }
                  }}
                  className={`w-full bg-card/30 border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_15px_rgba(212, 160, 23,0.25)] transition-all duration-300 ${
                    touched.name && errors.name ? "border-red-500/50" : "border-border/60"
                  }`}
                  placeholder="John Doe"
                />
                {touched.name && errors.name && (
                  <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                    if (touched.email) {
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      setErrors((prev) => ({
                        ...prev,
                        email: !emailRegex.test(e.target.value)
                          ? "Please enter a valid email address."
                          : "",
                      }));
                    }
                  }}
                  className={`w-full bg-card/30 border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_15px_rgba(212, 160, 23,0.25)] transition-all duration-300 ${
                    touched.email && errors.email ? "border-red-500/50" : "border-border/60"
                  }`}
                  placeholder="john@example.com"
                />
                {touched.email && errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, message: e.target.value }));
                    if (touched.message || e.target.value.length > 10) {
                      setErrors((prev) => ({
                        ...prev,
                        message:
                          e.target.value.trim().length < 20
                            ? "Message must be at least 20 characters."
                            : "",
                      }));
                    }
                  }}
                  className={`w-full bg-card/30 border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_15px_rgba(212, 160, 23,0.25)] transition-all duration-300 resize-none ${
                    touched.message && errors.message ? "border-red-500/50" : "border-border/60"
                  }`}
                  placeholder="Hello, I would love to discuss an AI system idea..."
                />
                {touched.message && errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 font-medium">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gold hover:opacity-95 text-primary-foreground font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-[0_5px_15px_rgba(212, 160, 23,0.15)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {status === "success" && (
        <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 rounded-2xl bg-[rgba(15,15,15,0.9)] backdrop-blur-md border border-emerald-500/30 px-5 py-4 text-sm text-foreground shadow-[0_10px_30px_rgba(16,185,129,0.15)] transition-all duration-300 animate-reveal max-w-sm">
          <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5 animate-pulse" />
          <div>
            <p className="font-semibold text-emerald-400">✓ Message sent successfully.</p>
            <p className="text-xs text-muted-foreground mt-0.5">I will get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {status === "error" && (
        <div className="fixed bottom-6 right-6 z-50 flex items-start gap-3 rounded-2xl bg-[rgba(15,15,15,0.9)] backdrop-blur-md border border-red-500/30 px-5 py-4 text-sm text-foreground shadow-[0_10px_30px_rgba(239,68,68,0.15)] transition-all duration-300 animate-reveal max-w-sm">
          <span className="h-5 w-5 rounded-full border border-red-500 flex items-center justify-center text-red-500 font-bold text-xs shrink-0 mt-0.5 animate-bounce">
            ✕
          </span>
          <div>
            <p className="font-semibold text-red-400">✕ Failed to send message.</p>
            <p className="text-xs text-muted-foreground mt-0.5">Please try again.</p>
          </div>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col items-center justify-between gap-6 text-center">
        <div className="space-y-2">
          <p className="text-sm font-display text-gold tracking-wide">Dhivyadharshini G</p>
          <p className="text-xs text-muted-foreground uppercase tracking-[0.15em]">
            AI / ML Engineer | GenAI Developer | Agentic AI Enthusiast
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a
            href="https://github.com/DhivyadharshiniGopalakrishnan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors duration-300"
          >
            GitHub
          </a>
          <span className="text-border">|</span>
          <a
            href="https://www.linkedin.com/in/dhivyadharshini-gopalakrishnan-992495326/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors duration-300"
          >
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a
            href="mailto:dhivyadharshinigopalakrishnan@gmail.com"
            className="hover:text-gold transition-colors duration-300"
          >
            Email
          </a>
        </div>

        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-2">
          © 2026 Dhivyadharshini G. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

// ====================================================
// MOBILE APP LAYOUT & SUBCOMPONENTS
// ====================================================

function MobileAppLayout() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = ["top", "about", "skills", "work", "certificates", "achievements", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(`mobile-${id}`);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.15, rootMargin: "-10% 0px -70% 0px" },
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground pb-20 overflow-x-hidden antialiased">
      <MobileHeader />
      <div className="px-4 space-y-16">
        <MobileHero />
        <MobileStats />
        <MobileAbout />
        <MobileDomains />
        <MobileProjects />
        <MobileSkills />
        <MobileTimeline />
        <MobileCertificates />
        <MobileAchievements />
        <MobileGitHub />
        <MobileContact />
      </div>
      <MobileFooter />
      <MobileBottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-[rgba(212, 160, 23,0.15)] flex items-center justify-between px-4">
      <a
        href="#mobile-top"
        className="flex items-center gap-1.5 font-display text-base font-semibold"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
        Dhivyadharshini<span className="text-gold">.</span>G
      </a>
      <span className="text-[9px] uppercase tracking-wider bg-gold/5 border border-gold/25 px-2.5 py-1 rounded-full text-gold font-bold">
        Available for hire
      </span>
    </header>
  );
}

function MobileHero() {
  return (
    <section id="mobile-top" className="pt-24 pb-4 flex flex-col items-center text-center">
      {/* 1. Profile Photo */}
      <div className="relative w-[200px] h-[200px] bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.2)] rounded-3xl p-1.5 shadow-[0_10px_35px_rgba(212, 160, 23,0.15)] mb-6">
        <div className="w-full h-full rounded-2xl overflow-hidden border border-[#D4A017] shadow-[0_0_15px_rgba(212, 160, 23,0.1)]">
          <img src={profileImg} alt="Dhivyadharshini G" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 2. Name */}
      <h1 className="font-display text-4xl font-extrabold tracking-tight mb-2">
        Dhivyadharshini G
      </h1>

      {/* 3. Role */}
      <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-4 px-4">
        AI Engineer • Prompt Engineer • GenAI Developer • Agentic AI Systems Builder
      </p>

      {/* 4. Skills Badges */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-6 max-w-sm">
        {["AI / ML", "GenAI", "Agentic AI Systems"].map((badge) => (
          <span
            key={badge}
            className="text-[9px] uppercase tracking-wider bg-gold/5 border border-gold/15 px-2.5 py-1 rounded-full text-gold/80"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* 5. Description */}
      <p className="text-xs text-muted-foreground leading-relaxed max-w-xs px-2 mb-6">
        Building scalable AI applications, RAG pipelines, intelligent agents, and machine learning
        solutions that transform data into actionable intelligence.
      </p>

      {/* 6. Action Buttons */}
      <div className="flex flex-col w-full max-w-[260px] gap-3 mb-8">
        <a
          href="#mobile-work"
          className="w-full text-center bg-gold text-primary-foreground font-semibold py-3 rounded-full text-xs uppercase tracking-wider shadow-[0_5px_12px_rgba(212, 160, 23,0.2)] active:scale-95 transition-transform"
        >
          View Projects
        </a>
        <a
          href="#mobile-contact"
          className="w-full text-center border border-gold/40 text-gold font-semibold py-3 rounded-full text-xs uppercase tracking-wider bg-gold/5 active:scale-95 transition-transform"
        >
          Get In Touch
        </a>
      </div>

      {/* 7. AI Visualization */}
      <div className="w-full border-t border-border/40 pt-8 mt-4">
        <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-4">
          Core AI Architecture
        </p>
        <MobileInteractiveFlow />
      </div>
    </section>
  );
}

function MobileInteractiveFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: "Query", desc: "User inputs natural language query via Flask API", tech: "REST API" },
    {
      title: "Retrieval",
      desc: "Retrieves matches representing database schemas from ChromaDB",
      tech: "Vector Space",
    },
    {
      title: "Inference",
      desc: "Processes prompt on-device to output structured SQL",
      tech: "Ollama / Llama 3",
    },
    {
      title: "Response",
      desc: "Executes SQL and returns conversational answer in UI",
      tech: "JSON / SQLite",
    },
  ];

  return (
    <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-5 text-left">
      <div className="flex justify-between border-b border-border/40 pb-3 mb-4">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`text-xs font-bold pb-1 cursor-pointer transition ${
              activeStep === idx ? "text-gold border-b-2 border-gold" : "text-muted-foreground"
            }`}
          >
            0{idx + 1}
          </button>
        ))}
      </div>
      <div>
        <h4 className="text-sm font-bold text-foreground mb-1">{steps[activeStep].title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          {steps[activeStep].desc}
        </p>
        <div className="text-[10px] text-gold font-semibold uppercase tracking-wider">
          Tech: {steps[activeStep].tech}
        </div>
      </div>
    </div>
  );
}

function MobileStats() {
  const cgpa = useCountUpDecimal(8.57);
  const projectsCount = useCountUp(6);
  const internshipCount = useCountUp(6);
  const hackathonsCount = useCountUp(2);

  return (
    <section className="grid grid-cols-2 gap-3">
      <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-4 text-center">
        <GraduationCap className="h-5 w-5 text-gold mx-auto mb-2" />
        <p className="text-2xl font-bold text-foreground">{cgpa}</p>
        <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">CGPA</p>
      </div>
      <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-4 text-center">
        <Cpu className="h-5 w-5 text-gold mx-auto mb-2" />
        <p className="text-2xl font-bold text-foreground">{projectsCount}+</p>
        <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">
          AI Projects
        </p>
      </div>
      <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-4 text-center">
        <Briefcase className="h-5 w-5 text-gold mx-auto mb-2" />
        <p className="text-2xl font-bold text-foreground">{internshipCount} Mo</p>
        <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Internship</p>
      </div>
      <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-4 text-center">
        <Trophy className="h-5 w-5 text-gold mx-auto mb-2" />
        <p className="text-2xl font-bold text-foreground">{hackathonsCount}+ Wins</p>
        <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">Hackathons</p>
      </div>
    </section>
  );
}

function MobileAbout() {
  return (
    <section id="mobile-about" className="scroll-mt-16 space-y-4">
      <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">About</p>
      <h2 className="font-display text-3xl font-bold leading-tight">Builder of Applied AI.</h2>
      <p className="text-xs text-muted-foreground leading-relaxed">
        I am a Computer Science undergraduate majoring in Artificial Intelligence &amp; Machine
        Learning. I specialize in building agentic systems, context-aware RAG assistants, and
        scalable classifiers.
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed">
        My experience includes a 6-month AI internship where I designed multi-agent content
        schedulers and spam filter pipelines.
      </p>
    </section>
  );
}

function MobileDomains() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
          Core Competencies
        </p>
        <h2 className="font-display text-3xl font-bold mt-1">AI Focus Areas.</h2>
      </div>
      <div className="grid gap-3">
        {aiDomains.map((dom) => (
          <div
            key={dom.title}
            className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212, 160, 23,0.12)] rounded-2xl p-4 flex items-start gap-4"
          >
            <div className="p-2.5 bg-gold/5 rounded-xl border border-gold/15 text-gold shrink-0">
              <dom.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-bold text-foreground">{dom.title}</h3>
                <span className="text-[8px] tracking-wider uppercase bg-gold/5 border border-gold/15 px-1.5 py-0.5 rounded text-gold font-medium">
                  {dom.badge}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{dom.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileProjects() {
  const [activeStudy, setActiveStudy] = useState<MappedProject | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const reposQuery = useQuery({
    queryKey: ["githubRepos", GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  if (reposQuery.isLoading) {
    return (
      <section id="mobile-work" className="scroll-mt-16 space-y-6">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
            Selected Work
          </p>
          <h2 className="font-display text-3xl font-bold mt-1">Things I've Built.</h2>
        </div>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[rgba(15,15,15,0.7)] border border-border/10 rounded-3xl h-[200px] animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  if (reposQuery.isError) {
    return null;
  }

  const repos = reposQuery.data || [];
  const list = repos.map(getMappedProject).sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const displayList = list.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "ml") return p.category === "ml";
    if (activeCategory === "genai") return p.category === "genai";
    if (activeCategory === "fullstack") return p.category === "fullstack";
    if (activeCategory === "tools") return p.category === "tools";
    if (activeCategory === "academic") return p.category === "academic";
    if (activeCategory === "python") {
      return p.category === "python" || p.tech.some((t) => t.toLowerCase() === "python");
    }
    return false;
  });

  const categories = [
    { id: "all", label: "All" },
    { id: "ml", label: "AI & ML" },
    { id: "genai", label: "GenAI" },
    { id: "fullstack", label: "Full Stack" },
    { id: "python", label: "Python" },
    { id: "tools", label: "Tools" },
    { id: "academic", label: "Academic" },
  ];

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "ml":
        return "AI & ML";
      case "genai":
        return "GenAI";
      case "fullstack":
        return "Full Stack";
      case "python":
        return "Python";
      case "tools":
        return "Tools";
      case "academic":
        return "Academic";
      default:
        return cat.toUpperCase();
    }
  };

  return (
    <section id="mobile-work" className="scroll-mt-16 space-y-6">
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Selected Work</p>
        <h2 className="font-display text-3xl font-bold mt-1">Things I've Built.</h2>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveCategory(f.id)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-semibold border shrink-0 cursor-pointer transition ${
              activeCategory === f.id
                ? "bg-gold text-primary-foreground border-gold shadow-[0_0_10px_rgba(212, 160, 23,0.3)]"
                : "bg-card/40 text-muted-foreground border-border"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {displayList.map((p) => {
          const yearStr = p.timeline.split(" – ").pop() || "2025";
          return (
            <article
              key={p.id}
              className="bg-[rgba(15,15,15,0.75)] backdrop-blur-lg border rounded-3xl overflow-hidden transition-all duration-400 border-[rgba(212, 160, 23,0.15)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectImage
                  src={p.banner}
                  alt={p.title}
                  category={p.category}
                  title={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.95)] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[rgba(15,15,15,0.85)] border border-[rgba(212, 160, 23,0.3)] px-3 py-1 rounded-full text-[9px] uppercase font-bold text-gold">
                  {yearStr}
                </div>
                {p.featured && (
                  <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-md border border-gold px-2.5 py-1 rounded-full text-[8px] uppercase font-extrabold text-primary-foreground shadow-[0_0_8px_rgba(212,160,23,0.8)]">
                    ★ Featured
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] text-gold font-semibold uppercase tracking-wider">
                    {getCategoryLabel(p.category)}
                  </span>
                  <span className="text-muted-foreground text-xs font-semibold">·</span>
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">
                    {p.subtitle}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2 h-10">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] border border-gold/15 bg-gold/5 rounded-full px-2.5 py-0.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="text-[9px] border border-border rounded-full px-2 py-0.5 text-muted-foreground">
                      +{p.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="text-[10px] text-muted-foreground font-semibold">{yearStr}</span>

                  <button
                    onClick={() => setActiveStudy(p)}
                    className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-gold tracking-wider cursor-pointer border border-gold/30 rounded-lg px-3 py-1.5 hover:bg-gold hover:text-black transition"
                  >
                    View Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {activeStudy && <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />}
    </section>
  );
}

function MobileSkills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all" ? techSkills : techSkills.filter((s) => s.category === activeFilter);

  return (
    <section id="mobile-skills" className="scroll-mt-16 space-y-6">
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Skills</p>
        <h2 className="font-display text-3xl font-bold mt-1">Tech Stack.</h2>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: "all", label: "All" },
          { id: "genai", label: "GenAI" },
          { id: "ml", label: "ML" },
          { id: "lang", label: "Languages" },
          { id: "tool", label: "Tools" },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-semibold border shrink-0 cursor-pointer transition ${
              activeFilter === f.id
                ? "bg-gold text-primary-foreground border-gold shadow-[0_0_10px_rgba(212, 160, 23,0.3)]"
                : "bg-card/40 text-muted-foreground border-border"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {filteredSkills.map((s) => (
          <div
            key={s.name}
            className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212, 160, 23,0.2)] rounded-xl p-4 transition-all duration-300 relative opacity-100 scale-100"
          >
            <p className="text-[8px] text-gold uppercase tracking-wider mb-1">{s.level}</p>
            <h3 className="text-sm font-semibold text-foreground">{s.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileTimeline() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Journey</p>
        <h2 className="font-display text-3xl font-bold mt-1">Timeline.</h2>
      </div>

      <div className="relative border-l border-gold/30 ml-3 pl-6 space-y-8">
        {timelineEvents.map((ev) => (
          <div key={ev.title} className="relative">
            <span className="absolute -left-[37px] top-1 h-5 w-5 rounded-full bg-background border-2 border-gold flex items-center justify-center shadow-[0_0_8px_rgba(212, 160, 23,0.3)]">
              <ev.icon className="h-2.5 w-2.5 text-gold" />
            </span>
            <div className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[8px] uppercase tracking-wider text-gold font-semibold bg-gold/5 border border-gold/25 px-1.5 py-0.5 rounded">
                  {ev.type}
                </span>
                <span className="text-[9px] text-muted-foreground font-medium">{ev.date}</span>
              </div>
              <h3 className="text-base font-bold text-foreground">{ev.title}</h3>
              <p className="text-xs text-gold/80 font-medium mb-2">{ev.company}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{ev.desc}</p>
              {ev.bulletPoints.length > 0 && (
                <ul className="space-y-1.5 mt-3 border-t border-border/40 pt-3">
                  {ev.bulletPoints.map((bp) => (
                    <li
                      key={bp}
                      className="flex gap-2 text-[10px] text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 inline-block h-1 w-1.5 bg-gold shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileCertificates() {
  const [activeCert, setActiveCert] = useState<(typeof certificates)[0] | null>(null);

  return (
    <section id="mobile-certificates" className="scroll-mt-16 space-y-6">
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Credentials</p>
        <h2 className="font-display text-3xl font-bold mt-1">Certificates.</h2>
      </div>

      <div className="grid gap-3.5">
        {certificates.map((c) => {
          const hasPreview = !!c.image;

          return (
            <div
              key={c.name}
              className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-5 relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Preview Area */}
                <div className="aspect-[4/3] rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center relative overflow-hidden">
                  {hasPreview ? (
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center p-4">
                      <Award className="h-8 w-8 text-gold mx-auto mb-1" />
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
                        Preview Pending
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gold font-semibold">
                    🏆 {c.category || "Certification"}
                  </span>
                  <h3 className="text-base font-bold text-foreground mt-1.5">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Issued: {c.year}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4 border-t border-border/40 pt-4">
                <button
                  onClick={() => setActiveCert(c)}
                  className="flex-1 text-center bg-gold/10 border border-gold/30 text-gold font-bold py-2 rounded-xl text-[9px] uppercase tracking-wider hover:bg-gold hover:text-black transition active:scale-95 cursor-pointer"
                >
                  View
                </button>
                <a
                  href={c.fileUrl}
                  download={`${c.name.replace(/\s+/g, "_")}_Certificate`}
                  className="flex-1 text-center border border-gold/30 text-gold font-bold py-2 rounded-xl text-[9px] uppercase tracking-wider hover:bg-gold hover:text-black transition active:scale-95 cursor-pointer"
                >
                  Download
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {activeCert && (
        <CertificateModal certificate={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </section>
  );
}

function MobileAchievements() {
  return (
    <section id="mobile-achievements" className="scroll-mt-16 space-y-6">
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Recognition</p>
        <h2 className="font-display text-3xl font-bold mt-1">Achievements.</h2>
      </div>

      <div className="grid gap-3">
        {awards.map((a) => (
          <div
            key={a.title}
            className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212, 160, 23,0.15)] rounded-2xl p-5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold/5 border border-gold/20 text-gold rounded-full shrink-0">
                <a.icon className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[8px] tracking-wider uppercase text-gold block font-semibold mb-1">
                  {a.stat}
                </span>
                <h3 className="text-base font-bold text-foreground mb-1 leading-snug">{a.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
                <p className="text-[9px] text-gold/60 mt-2 uppercase tracking-widest font-semibold">
                  {a.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileGitHub() {
  const profileQuery = useQuery({
    queryKey: ["githubProfile", GITHUB_USERNAME],
    queryFn: fetchGitHubProfile,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const reposQuery = useQuery({
    queryKey: ["githubRepos", GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const prsQuery = useQuery({
    queryKey: ["githubPRsCount", GITHUB_USERNAME],
    queryFn: fetchGitHubPRsCount,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const issuesQuery = useQuery({
    queryKey: ["githubIssuesCount", GITHUB_USERNAME],
    queryFn: fetchGitHubIssuesCount,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const contributionsQuery = useQuery({
    queryKey: ["githubContributions", GITHUB_USERNAME],
    queryFn: fetchGitHubContributions,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const eventsQuery = useQuery({
    queryKey: ["githubEvents", GITHUB_USERNAME],
    queryFn: fetchGitHubEvents,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const refetchAll = () => {
    profileQuery.refetch();
    reposQuery.refetch();
    prsQuery.refetch();
    issuesQuery.refetch();
    contributionsQuery.refetch();
    eventsQuery.refetch();
  };

  if (
    profileQuery.isLoading ||
    reposQuery.isLoading ||
    prsQuery.isLoading ||
    issuesQuery.isLoading ||
    contributionsQuery.isLoading
  ) {
    return (
      <section className="space-y-6">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Analytics</p>
          <h2 className="font-display text-3xl font-bold mt-1">GitHub Activity.</h2>
        </div>
        <div className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212, 160, 23,0.15)] rounded-3xl p-5">
          <div className="flex items-center gap-3 mb-5 animate-pulse">
            <div className="h-10 w-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold">
              <Github className="h-5 w-5" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="h-4 w-24 bg-muted/20 rounded" />
              <div className="h-3 w-32 bg-muted/15 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-card/30 border border-border/30 px-3 py-2 rounded-xl text-center"
              >
                <div className="h-3 w-12 bg-muted/20 rounded mx-auto mb-1.5 animate-pulse" />
                <div className="h-5 w-8 bg-gold/20 rounded mx-auto animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (
    profileQuery.isError ||
    reposQuery.isError ||
    prsQuery.isError ||
    issuesQuery.isError ||
    contributionsQuery.isError
  ) {
    const errorMsg =
      (profileQuery.error as Error)?.message ||
      (reposQuery.error as Error)?.message ||
      (prsQuery.error as Error)?.message ||
      (issuesQuery.error as Error)?.message ||
      (contributionsQuery.error as Error)?.message ||
      "Failed to load mobile GitHub analytics.";

    return (
      <section className="space-y-6">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Analytics</p>
          <h2 className="font-display text-3xl font-bold mt-1">GitHub Activity.</h2>
        </div>
        <div className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212, 160, 23,0.15)] rounded-3xl p-5 text-center flex flex-col items-center justify-center py-8">
          <span className="h-8 w-8 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </span>
          <h4 className="text-xs font-bold text-foreground">GitHub Data Unavailable</h4>
          <p className="text-[10px] text-muted-foreground mt-1 max-w-[200px]">{errorMsg}</p>
          <button
            onClick={refetchAll}
            className="mt-3 px-4 py-1.5 border border-gold/30 rounded-xl text-[10px] font-bold text-gold hover:bg-gold hover:text-black transition cursor-pointer"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  const profile = profileQuery.data;
  const repos = reposQuery.data || [];
  const contributions = contributionsQuery.data;
  const events = eventsQuery.data || [];
  const prsMerged = prsQuery.data || 0;
  const issuesCreated = issuesQuery.data || 0;

  const totalRepos = profile?.public_repos || 0;
  const followers = profile?.followers || 0;
  const following = profile?.following || 0;
  const avatarUrl = profile?.avatar_url || "";
  const bioText = profile?.bio || "AI / ML Engineer & Open Source Contributor";

  const starsGained = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  let totalCommits = 0;
  if (contributions?.total) {
    totalCommits = Object.values(contributions.total).reduce((sum, val) => sum + val, 0);
  }
  if (totalCommits === 0 && contributions?.contributions) {
    totalCommits = contributions.contributions.reduce((sum, day) => sum + day.count, 0);
  }

  const streak = contributions?.contributions
    ? calculateStreak(contributions.contributions)
    : { currentStreak: 0, longestStreak: 0 };

  const topLanguages = getTopLanguages(repos);
  const recentEvents = events.map(formatGitHubEvent).filter(Boolean);

  return (
    <section className="space-y-6">
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Analytics</p>
        <h2 className="font-display text-3xl font-bold mt-1">GitHub Activity.</h2>
      </div>

      <div className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212, 160, 23,0.15)] rounded-3xl p-5">
        <div
          className="flex items-center gap-3 mb-5"
          title={`GitHub Profile: @${profile?.login || GITHUB_USERNAME}\nBio: ${bioText}\nFollowers: ${followers} | Following: ${following}`}
        >
          <div className="h-10 w-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold overflow-hidden shrink-0">
            {avatarUrl ? (
              <img src={avatarUrl} alt="Profile Avatar" className="w-full h-full object-cover" />
            ) : (
              <Github className="h-5 w-5" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">
              @{profile?.login || GITHUB_USERNAME}
            </h3>
            <p className="text-[10px] text-gold">{bioText}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div
            className="bg-card/30 border border-border/30 px-3 py-2 rounded-xl text-center"
            title={`Current Streak: ${streak.currentStreak} day(s)\nLongest Streak: ${streak.longestStreak} day(s)`}
          >
            <span className="text-[9px] text-muted-foreground block font-bold">Commits</span>
            <span className="text-sm font-bold text-gold">{totalCommits}</span>
          </div>
          <div
            className="bg-card/30 border border-border/30 px-3 py-2 rounded-xl text-center"
            title={`Recent Activity:\n${recentEvents.slice(0, 3).join("\n") || "No recent public events"}\n\nIssues Created: ${issuesCreated}`}
          >
            <span className="text-[9px] text-muted-foreground block font-bold">PRs Merged</span>
            <span className="text-sm font-bold text-gold">{prsMerged}</span>
          </div>
          <div
            className="bg-card/30 border border-border/30 px-3 py-2 rounded-xl text-center"
            title={`Top Languages: ${topLanguages.join(", ") || "None"}`}
          >
            <span className="text-[9px] text-muted-foreground block font-bold">Repos</span>
            <span className="text-sm font-bold text-gold">{totalRepos}</span>
          </div>
          <div
            className="bg-card/30 border border-border/30 px-3 py-2 rounded-xl text-center"
            title={`Followers: ${followers}\nFollowing: ${following}`}
          >
            <span className="text-[9px] text-muted-foreground block font-bold">Stars</span>
            <span className="text-sm font-bold text-gold">{starsGained}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileContact() {
  const [downloading, setDownloading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = (field?: "name" | "email" | "message") => {
    const newErrors = { ...errors };
    if (!field || field === "name") {
      if (!formData.name) newErrors.name = "Name is required.";
      else if (formData.name.trim().length < 3)
        newErrors.name = "Name must be at least 3 characters.";
      else newErrors.name = "";
    }
    if (!field || field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) newErrors.email = "Email is required.";
      else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email.";
      else newErrors.email = "";
    }
    if (!field || field === "message") {
      if (!formData.message) newErrors.message = "Message is required.";
      else if (formData.message.trim().length < 20)
        newErrors.message = "Message must be at least 20 characters.";
      else newErrors.message = "";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      const link = document.createElement("a");
      link.href = "/resume/Dhivyadharshini_G_Resume.pdf";
      link.setAttribute("download", "Dhivyadharshini_G_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!validate()) return;
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="mobile-contact" className="scroll-mt-16 space-y-6 pb-6">
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Contact</p>
        <h2 className="font-display text-3xl font-bold mt-1">Let's Connect.</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212, 160, 23,0.15)] rounded-3xl p-5 space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Have an AI/ML concept or a Multi-Agent automation idea you want implemented? Drop a
            message or download my resume below.
          </p>
          <div className="space-y-3 text-xs text-muted-foreground">
            <a
              href="tel:+918870870513"
              className="flex items-center gap-3.5 hover:text-gold transition"
            >
              <Phone className="h-4.5 w-4.5 text-gold shrink-0" /> +91 88708 70513
            </a>
            <a
              href="mailto:dhivyadharshinigopalakrishnan@gmail.com"
              className="flex items-center gap-3.5 hover:text-gold transition break-all"
            >
              <Mail className="h-4.5 w-4.5 text-gold shrink-0" />{" "}
              dhivyadharshinigopalakrishnan@gmail.com
            </a>
            <span className="flex items-center gap-3.5">
              <MapPin className="h-4.5 w-4.5 text-gold shrink-0" /> Salem, Tamil Nadu, India
            </span>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/dhivyadharshini-gopalakrishnan-992495326/"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-[rgba(212, 160, 23,0.15)] rounded-2xl bg-card/20 text-gold flex-1 flex justify-center active:scale-95 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://github.com/DhivyadharshiniGopalakrishnan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[rgba(212, 160, 23,0.15)] rounded-2xl bg-card/20 text-gold flex-1 flex justify-center active:scale-95 transition-transform"
              aria-label="GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <button
              onClick={handleDownload}
              className="px-5 border border-gold/30 rounded-2xl text-[10px] font-bold text-gold flex-[2] flex justify-center items-center gap-1.5 bg-gold/5 active:scale-95 transition-transform cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5" />
              {downloading ? "PDF..." : "Resume"}
            </button>
          </div>
        </div>

        <div className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212, 160, 23,0.15)] rounded-3xl p-5">
          <h3 className="text-sm font-bold text-foreground mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[8px] uppercase tracking-wider text-muted-foreground block mb-1 font-bold">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                  if (touched.name || e.target.value.length > 2) validate("name");
                }}
                className={`w-full bg-card/20 border rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold transition ${
                  touched.name && errors.name ? "border-red-500/50" : "border-border/60"
                }`}
                placeholder="John Doe"
              />
              {touched.name && errors.name && (
                <p className="text-red-400 text-[10px] mt-1 font-medium">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-[8px] uppercase tracking-wider text-muted-foreground block mb-1 font-bold">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                  if (touched.email) validate("email");
                }}
                className={`w-full bg-card/20 border rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold transition ${
                  touched.email && errors.email ? "border-red-500/50" : "border-border/60"
                }`}
                placeholder="john@example.com"
              />
              {touched.email && errors.email && (
                <p className="text-red-400 text-[10px] mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-[8px] uppercase tracking-wider text-muted-foreground block mb-1 font-bold">
                Message
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, message: e.target.value }));
                  if (touched.message || e.target.value.length > 10) validate("message");
                }}
                className={`w-full bg-card/20 border rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-gold transition resize-none ${
                  touched.message && errors.message ? "border-red-500/50" : "border-border/60"
                }`}
                placeholder="Hello, let's talk about..."
              />
              {touched.message && errors.message && (
                <p className="text-red-400 text-[10px] mt-1 font-medium">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gold text-primary-foreground font-bold text-[10px] uppercase tracking-wider py-3.5 rounded-xl transition active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {status === "success" && (
        <div className="fixed bottom-20 left-4 right-4 z-50 flex items-start gap-3 rounded-xl bg-[rgba(15,15,15,0.95)] backdrop-blur-md border border-emerald-500/30 p-4 text-xs text-foreground shadow-lg animate-reveal">
          <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-400">✓ Message sent successfully.</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">I will get back to you soon.</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="fixed bottom-20 left-4 right-4 z-50 flex items-start gap-3 rounded-xl bg-[rgba(15,15,15,0.95)] backdrop-blur-md border border-red-500/30 p-4 text-xs text-foreground shadow-lg animate-reveal">
          <span className="h-4.5 w-4.5 rounded-full border border-red-500 flex items-center justify-center text-red-500 font-bold text-[9px] shrink-0 mt-0.5">
            ✕
          </span>
          <div>
            <p className="font-semibold text-red-400">✕ Failed to send message.</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Please try again.</p>
          </div>
        </div>
      )}
    </section>
  );
}

function MobileFooter() {
  return (
    <footer className="border-t border-border py-8 bg-background relative overflow-hidden text-center pb-24">
      <div className="space-y-2">
        <p className="text-sm font-display text-gold tracking-wide">Dhivyadharshini G</p>
        <p className="text-[9px] text-muted-foreground uppercase tracking-[0.15em] px-4">
          AI / ML Engineer | GenAI Developer
        </p>
      </div>

      <div className="flex justify-center items-center gap-6 text-[10px] text-muted-foreground mt-4">
        <a
          href="https://github.com/DhivyadharshiniGopalakrishnan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold transition"
        >
          GitHub
        </a>
        <span className="text-border">|</span>
        <a
          href="https://www.linkedin.com/in/dhivyadharshini-gopalakrishnan-992495326/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gold transition"
        >
          LinkedIn
        </a>
        <span className="text-border">|</span>
        <a
          href="mailto:dhivyadharshinigopalakrishnan@gmail.com"
          className="hover:text-gold transition"
        >
          Email
        </a>
      </div>

      <p className="text-[8px] text-muted-foreground uppercase tracking-[0.2em] mt-4">
        © 2026 Dhivyadharshini G. All Rights Reserved.
      </p>
    </footer>
  );
}

function MobileBottomNav({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}) {
  const tabs = [
    { id: "top", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "work", label: "Projects", icon: Briefcase },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-[rgba(10,10,10,0.85)] backdrop-blur-lg border-t border-[rgba(212, 160, 23,0.18)] flex justify-around items-center px-2 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeSection === tab.id;
        return (
          <a
            key={tab.id}
            href={`#mobile-${tab.id}`}
            onClick={() => setActiveSection(tab.id)}
            className="flex flex-col items-center justify-center flex-1 h-full py-1.5 relative transition active:scale-90"
          >
            <Icon
              className={`h-5 w-5 transition-transform duration-300 ${
                isActive ? "text-gold scale-110" : "text-muted-foreground"
              }`}
            />
            <span
              className={`text-[8px] mt-1 tracking-wider font-semibold transition-colors duration-300 ${
                isActive ? "text-gold" : "text-muted-foreground"
              }`}
            >
              {tab.label}
            </span>
            {isActive && (
              <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212, 160, 23,0.8)] animate-pulse" />
            )}
          </a>
        );
      })}
    </nav>
  );
}

interface CertificateModalProps {
  certificate: (typeof certificates)[0];
  onClose: () => void;
}

function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-[rgba(15,15,15,0.96)] border border-[rgba(212,160,23,0.25)] rounded-[28px] max-w-3xl w-full overflow-hidden relative shadow-2xl animate-reveal flex flex-col">
        {/* Header */}
        <div className="border-b border-border/40 p-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
              {certificate.category || "Certification"}
            </span>
            <h3 className="font-display text-xl md:text-2xl text-foreground mt-1">
              {certificate.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition cursor-pointer p-2 hover:bg-gold/10 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Image Viewer */}
        <div className="p-6 flex justify-center bg-black/40 border-b border-border/40 max-h-[60vh] overflow-auto">
          <img
            src={certificate.image}
            alt={certificate.name}
            className="max-h-[50vh] object-contain rounded-lg border border-border/30"
          />
        </div>

        {/* Footer Info & Actions */}
        <div className="p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Issued by:</strong> {certificate.issuer}
              </p>
              {certificate.achievement && (
                <p className="text-muted-foreground mt-1">
                  <strong className="text-foreground">Achievement:</strong>{" "}
                  {certificate.achievement}
                </p>
              )}
            </div>
            <div className="text-gold font-semibold shrink-0">Year: {certificate.year}</div>
          </div>

          <div className="flex flex-wrap gap-3 justify-end pt-2">
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border/60 hover:border-gold/40 text-foreground hover:text-gold font-bold rounded-xl text-[10px] uppercase tracking-wider transition flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              View Full Size <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={certificate.fileUrl}
              download={`${certificate.name.replace(/\s+/g, "_")}_Certificate`}
              className="px-4 py-2 bg-gold text-primary-foreground font-bold rounded-xl text-[10px] uppercase tracking-wider hover:opacity-90 transition flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" /> Download Certificate
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-card/60 border border-border/60 hover:bg-gold/10 hover:text-gold text-foreground font-bold rounded-xl text-[10px] uppercase tracking-wider transition active:scale-95 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
