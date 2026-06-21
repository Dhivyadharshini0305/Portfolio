import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
} from "lucide-react";
import profileImg from "@/assets/images/profile.jpg";
import projRag from "@/assets/proj-rag.jpg";
import projAgents from "@/assets/proj-agents.jpg";
import projNlp from "@/assets/proj-nlp.jpg";

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

const projects = [
  {
    id: "rag",
    year: "2025",
    title: "RAG-Based Business Intelligence Assistant",
    client: "Independent Project",
    role: "Lead GenAI Developer",
    img: projRag,
    tags: ["RAG", "Ollama", "Flask", "Prompt Eng.", "SQLite"],
    desc: "Flask-based assistant using local LLMs (Ollama) to answer analytical business queries with structured data retrieval and prompt engineering.",
    problemStatement:
      "Non-technical stakeholders require fast access to database insights without writing complex SQL queries manually or relying on custom data analyst queues.",
    architecture: [
      "Natural Language query is submitted via the custom Flask UI.",
      "LangChain parser structures the query and identifies relevant database schemas.",
      "Prompt Engine injects schema metadata into Ollama (Local Llama 3 model).",
      "Ollama generates a validated SQL query executed directly against SQLite.",
      "The result set is aggregated, reformatted into natural language, and returned.",
    ],
    results:
      "Reduced the time required to answer unstructured queries by 95% and achieved an 88% success rate in automatic SQL generation.",
    link: "https://github.com/DhivyadharshiniGopalakrishnan/rag-business-intelligence-assistant",
  },
  {
    id: "agents",
    year: "2025",
    title: "Multi-Agent AI Social Media Manager",
    client: "Cube AI Solutions",
    role: "AI / Agentic AI Intern",
    img: projAgents,
    tags: ["Gemini API", "Multi-Agent", "Telegram Bot", "Automation"],
    desc: "A four-agent system — Planner, Writer, Hashtag, Scheduler — that automates 30-day content planning through interactive Telegram workflows.",
    problemStatement:
      "Social media marketing requires repetitive planner templates, copywriting iterations, and SEO tag parsing, creating bottlenecks in regular scheduling workflows.",
    architecture: [
      "Telegram Bot triggers the multi-agent workflow with client branding rules.",
      "Planner Agent designs a structured 30-day campaign calendar and content pillars.",
      "Writer Agent drafts post copy, aligning tone and style to Planner frameworks.",
      "Hashtag & SEO Agent appends engaging trending keywords using semantic parsing.",
      "Scheduler Agent pushes ready-to-publish content to active platform hooks.",
    ],
    results:
      "Automated content calendar drafting down to a 5-minute operation, reducing weekly content generation workloads by 70%.",
    link: "https://github.com/DhivyadharshiniGopalakrishnan/multi-agent-ai-social-media-manager",
  },
  {
    id: "nlp",
    year: "2025",
    title: "NLP Spam Detection Engine",
    client: "Cube AI Solutions",
    role: "Machine Learning Intern",
    img: projNlp,
    tags: ["NLP", "Naive Bayes", "Python", "Scikit-Learn"],
    desc: "ML-based spam detection pipeline combining NLP preprocessing and Naive Bayes classification for high-precision message filtering.",
    problemStatement:
      "High volumes of spam and fraudulent SMS degrade communications, necessitating a parser able to categorize texts in sub-15ms windows.",
    architecture: [
      "Incoming text messages are received via REST API endpoints.",
      "NLP preprocessing executing tokenization, stop-word removal, and Porter stemming.",
      "Processed tokens are vectorized using TF-IDF feature extraction.",
      "Multinomial Naive Bayes classifier computes ham/spam probabilities.",
      "Flags fraudulent messages and routes clean text to recipient apps.",
    ],
    results:
      "Achieved a verified 98.6% classification accuracy on the SMS Spam Corpus with a sub-15ms inference latency.",
    link: "https://github.com/DhivyadharshiniGopalakrishnan",
  },
];

const techSkills = [
  { name: "Python", category: "lang", level: "Expert" },
  { name: "SQL", category: "lang", level: "Advanced" },
  { name: "Machine Learning", category: "ml", level: "Advanced" },
  { name: "NLP", category: "ml", level: "Advanced" },
  { name: "Naive Bayes", category: "ml", level: "Expert" },
  { name: "RAG", category: "genai", level: "Expert" },
  { name: "LangChain", category: "genai", level: "Advanced" },
  { name: "Gemini", category: "genai", level: "Expert" },
  { name: "Ollama", category: "genai", level: "Expert" },
  { name: "Flask", category: "tool", level: "Advanced" },
  { name: "Streamlit", category: "tool", level: "Expert" },
  { name: "Git", category: "tool", level: "Advanced" },
];

const certifications = [
  {
    title: "Generative AI Fundamentals",
    issuer: "Google Cloud",
    date: "2025",
    icon: Sparkles,
    desc: "Demonstrates core proficiency in large language models, image generation models, and application developer tools on GCP.",
  },
  {
    title: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI",
    date: "2025",
    icon: Cpu,
    desc: "Covers model interaction, prompt optimization, vector index integration, memory management, and agent pipelines.",
  },
  {
    title: "Machine Learning with Python",
    issuer: "Kaggle Course",
    date: "2024",
    icon: Code2,
    desc: "Hands-on experience in regression, classification models, unsupervised clustering, and statistical data pipelines.",
  },
  {
    title: "Natural Language Processing (NLP)",
    issuer: "Mahendra Course Academy",
    date: "2024",
    icon: Terminal,
    desc: "Deep dive into text preprocessing, word embeddings, LSTM network structures, and transformers.",
  },
];

const aiDomains = [
  {
    title: "Generative AI",
    desc: "Building wrappers and workflows utilizing LLMs (Gemini, Llama) with advanced context engineering.",
    icon: Sparkles,
    badge: "GenAI",
  },
  {
    title: "Agentic AI",
    desc: "Orchestrating multi-agent systems using planning frameworks, reflection loops, and automated tool calls.",
    icon: Network,
    badge: "Multi-Agent",
  },
  {
    title: "RAG Systems",
    desc: "Designing retrieval networks with semantic vector databases, chunking strategies, and hybrid search methods.",
    icon: Database,
    badge: "RAG",
  },
  {
    title: "Natural Language Processing",
    desc: "Implementing stemmers, tokenizers, custom classifiers, and intent parsing models for raw text analysis.",
    icon: Terminal,
    badge: "NLP",
  },
  {
    title: "Machine Learning",
    desc: "Developing predictive models, regression analytics pipelines, and classification algorithms in Python.",
    icon: Cpu,
    badge: "ML",
  },
  {
    title: "Prompt Engineering",
    desc: "Crafting structured few-shot prompts, chain-of-thought triggers, and guardrails to optimize LLM performance.",
    icon: Code2,
    badge: "Prompting",
  },
];

const awards = [
  {
    title: "Winner — 24 Hour AI TeraHack Hackathon",
    desc: "Developed a functional AI prototype resolving critical automation workflows under 24 hours.",
    year: "2025",
    icon: Trophy,
    stat: "1st / 120+ Teams",
  },
  {
    title: "Winner — JUST PROMPT IT (AI Prompt Engineering)",
    desc: "Achieved perfect prompt accuracy and structural parsing in a competitive speed-prompting format.",
    year: "2025",
    icon: Flame,
    stat: "Gold Medalist",
  },
  {
    title: "Best Paper Award — ISTE (OpinionLens)",
    desc: "Authored research paper on Sentiment Analysis & Opinion Mining (OpinionLens), recognized by ISTE.",
    year: "2025",
    icon: FileText,
    stat: "National Level",
  },
];

const timelineEvents = [
  {
    type: "internship",
    title: "AI / Agentic AI Intern",
    company: "Cube AI Solutions Pvt. Ltd.",
    location: "Bangalore, India (Remote)",
    date: "Jul 2025 — Dec 2025",
    desc: "Spearheaded research and engineering of multi-agent automation systems. Formulated NLP pipelines for high-precision text classification.",
    bulletPoints: [
      "Built a multi-agent social media calendar automator using Gemini API & Telegram hooks.",
      "Developed ML spam classifiers reducing fraudulent messaging volume by 98%.",
      "Created independent Flask BI retrieval interfaces deploying local Ollama (Llama 3).",
    ],
    icon: Briefcase,
  },
  {
    type: "hackathon",
    title: "Winner — JUST PROMPT IT",
    company: "AI Prompt Engineering Challenge",
    location: "National Level",
    date: "2025",
    desc: "Earned 1st place in speed meta-prompt formulation and parsing constraints, utilizing advanced prompt pattern paradigms.",
    bulletPoints: [],
    icon: Trophy,
  },
  {
    type: "hackathon",
    title: "Winner — 24 Hour AI TeraHack",
    company: "TeraHack Hackathon Series",
    location: "Regional Hack",
    date: "2025",
    desc: "Won overall first place among 100+ competing teams by assembling a functional RAG-driven knowledge crawler in 24 hours.",
    bulletPoints: [],
    icon: Trophy,
  },
  {
    type: "academic",
    title: "B.E. Computer Science & Engineering (AI & ML)",
    company: "Mahendra Institute of Technology",
    location: "Tamil Nadu, India",
    date: "2024 — 2028",
    desc: "Undergraduate majoring in Artificial Intelligence & Machine Learning. Maintaining a stellar CGPA and serving as AI student lead.",
    bulletPoints: [
      "Current CGPA: 8.57 / 10.00",
      "Student representative for MIT CSE AI & ML chapter.",
    ],
    icon: GraduationCap,
  },
];

function Portfolio() {
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
      <Certifications />
      <AwardsShowcase />
      <GitHubDashboard />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-xl">
          <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse" />
          Dhivyadharshini<span className="text-gold">.</span>G
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">
            About
          </a>
          <a href="#work" className="hover:text-foreground transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-foreground transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-foreground transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-foreground transition">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-4 py-1.5 text-sm text-gold hover:bg-gold hover:text-primary-foreground transition"
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
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="col-span-12 md:col-span-7 order-2 md:order-1 reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            AI / ML · GenAI · Agentic Systems
          </p>
          <h1 className="font-display text-[clamp(2.75rem,8.5vw,7.5rem)] leading-[0.95] tracking-tight">
            Engineering <em className="italic gold-gradient-text">intelligent</em>
            <br />
            systems that
            <br />
            <span className="italic">think with you.</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
            I'm <span className="text-foreground">Dhivyadharshini G</span> — an AI &amp; Machine
            Learning undergraduate building <span className="text-foreground">RAG assistants</span>,{" "}
            <span className="text-foreground">multi-agent workflows</span>, and production-ready
            GenAI applications.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              See selected work
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition underline underline-offset-4 decoration-gold/40"
            >
              Get in touch →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" /> Salem, Tamil Nadu, India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="h-3.5 w-3.5 text-gold" /> B.E. CSE (AI &amp; ML) · CGPA 8.57
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 order-1 md:order-2 relative mb-10 md:mb-0 flex justify-center md:justify-end">
          {/* Glassmorphism Dark Card */}
          <div className="relative w-full max-w-[420px] h-[460px] md:h-[530px] bg-[rgba(15,15,15,0.7)] backdrop-blur-[20px] border border-[rgba(212,160,23,0.2)] shadow-[0_20px_60px_rgba(212,160,23,0.15)] rounded-[24px] p-3 transition-all duration-400 ease-in-out hover:scale-[1.03] hover:shadow-[0_20px_70px_rgba(212,160,23,0.35)] hover:border-[rgba(212,160,23,0.35)] float-slow group">
            {/* Top-Right Badge */}
            <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 rounded-full bg-[rgba(15,15,15,0.8)] backdrop-blur-md border border-[rgba(212,160,23,0.3)] px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-gold shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017] animate-pulse shadow-[0_0_8px_rgba(212,160,23,0.8)]" />
              Available for Hire
            </div>

            {/* Inner Image Container with Gold Border and Soft Glow */}
            <div className="relative w-full h-full rounded-[24px] overflow-hidden border border-[#D4A017] shadow-[0_0_20px_rgba(212,160,23,0.15)] group-hover:shadow-[0_0_35px_rgba(212,160,23,0.4)] group-hover:border-[#D4A017]/80 transition-all duration-400">
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
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[85%] bg-[rgba(15,15,15,0.85)] backdrop-blur-md border border-[rgba(212,160,23,0.25)] px-4 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] text-center transition-all duration-400 group-hover:border-[rgba(212,160,23,0.4)] group-hover:shadow-[0_15px_40px_rgba(212,160,23,0.1)]">
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
          <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-2xl p-6 text-center hover:border-gold/40 transition-colors shadow-lg group">
            <GraduationCap className="h-6 w-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-3xl md:text-4xl font-display text-foreground font-bold">{cgpa}</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              MIT Scholar CGPA
            </p>
          </div>
          <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-2xl p-6 text-center hover:border-gold/40 transition-colors shadow-lg group">
            <Cpu className="h-6 w-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-3xl md:text-4xl font-display text-foreground font-bold">
              {projectsCount}+
            </p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              AI Projects Shipped
            </p>
          </div>
          <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-2xl p-6 text-center hover:border-gold/40 transition-colors shadow-lg group">
            <Briefcase className="h-6 w-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-3xl md:text-4xl font-display text-foreground font-bold">
              {internshipCount} Mo
            </p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              AI Intern Experience
            </p>
          </div>
          <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-2xl p-6 text-center hover:border-gold/40 transition-colors shadow-lg group">
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
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">About</p>
          <h2 className="font-display text-5xl md:text-6xl">Builder of agentic, applied AI.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
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
              className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-3xl p-6 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
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
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold shadow-[0_0_8px_rgba(212,160,23,0.8)]" />
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
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold shadow-[0_0_8px_rgba(212,160,23,0.8)]" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "rag" ? (
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Visual Flow diagram */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex flex-col gap-3">
                {ragSteps.map((step, idx) => (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-4 text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      activeStep === idx
                        ? "bg-[rgba(15,15,15,0.85)] border-gold shadow-[0_0_15px_rgba(212,160,23,0.2)] scale-[1.02]"
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
            <div className="md:col-span-5 bg-[rgba(15,15,15,0.8)] backdrop-blur-md border border-[rgba(212,160,23,0.2)] rounded-3xl p-8 shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full min-h-[350px] flex flex-col justify-between">
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
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Visual Agent Grid */}
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              {agentSystem.map((agent, idx) => (
                <button
                  key={agent.name}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-[160px] cursor-pointer ${
                    activeStep === idx
                      ? "bg-[rgba(15,15,15,0.85)] border-gold shadow-[0_0_20px_rgba(212,160,23,0.25)] scale-[1.03]"
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
            <div className="md:col-span-5 bg-[rgba(15,15,15,0.8)] backdrop-blur-md border border-[rgba(212,160,23,0.2)] rounded-3xl p-8 shadow-[0_15px_30px_rgba(0,0,0,0.4)] min-h-[350px] flex flex-col justify-between">
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
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

        <div className="space-y-10">
          {projects.map((p) => {
            const isExpanded = expandedId === p.id;
            return (
              <article
                key={p.title}
                className={`bg-[rgba(15,15,15,0.7)] backdrop-blur-md border rounded-[24px] overflow-hidden transition-all duration-500 ${
                  isExpanded
                    ? "border-gold shadow-[0_10px_40px_rgba(212,160,23,0.15)]"
                    : "border-[rgba(212,160,23,0.15)] hover:border-gold/40 hover:shadow-lg"
                }`}
              >
                {/* Header Grid */}
                <div className="grid md:grid-cols-12 gap-6 p-6 md:p-8 items-center">
                  <div className="md:col-span-5 relative aspect-[16/10] overflow-hidden rounded-xl">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="text-gold font-semibold">{p.year}</span>
                        <span className="h-px w-8 bg-border" />
                        <span>{p.client}</span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl mb-3 leading-tight text-foreground">
                        {p.title}
                      </h3>
                      <p className="text-sm text-gold font-medium mb-4">{p.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] border border-gold/20 bg-gold/5 rounded-full px-3 py-1 text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                        {p.tags.length > 3 && (
                          <span className="text-[10px] border border-border rounded-full px-2 py-1 text-muted-foreground">
                            +{p.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => toggleExpand(p.id)}
                        className="inline-flex items-center gap-1.5 text-xs text-gold uppercase tracking-wider font-semibold hover:opacity-80 transition-opacity cursor-pointer"
                      >
                        {isExpanded ? "Hide Architecture" : "View Architecture"}
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Pane */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-8 border-t border-border/40 bg-card/20 transition-all duration-500 overflow-hidden ${
                    isExpanded
                      ? "max-h-[800px] py-8 opacity-100"
                      : "max-h-0 py-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                        Problem Statement
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.problemStatement}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                        Quantifiable Results
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed bg-gold/5 border border-gold/10 p-4 rounded-xl font-medium text-foreground">
                        {p.results}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                        System Architecture
                      </h4>
                      <div className="relative pl-6 border-l border-gold/20 space-y-3">
                        {p.architecture.map((step, idx) => (
                          <div
                            key={idx}
                            className="relative text-xs text-muted-foreground leading-relaxed"
                          >
                            <span className="absolute -left-[31px] top-0 h-4.5 w-4.5 rounded-full bg-card border border-gold/40 flex items-center justify-center text-[9px] font-bold text-gold">
                              {idx + 1}
                            </span>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                      >
                        Source Code <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
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
                  ? "bg-gold text-primary-foreground border-gold shadow-[0_0_15px_rgba(212,160,23,0.3)]"
                  : "bg-card/40 text-muted-foreground border-border hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techSkills.map((s) => {
            const isHighlighted = activeFilter === "all" || s.category === activeFilter;
            return (
              <div
                key={s.name}
                className={`bg-[rgba(15,15,15,0.7)] backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden ${
                  isHighlighted
                    ? "border-[rgba(212,160,23,0.2)] shadow-md scale-100 opacity-100 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,160,23,0.15)]"
                    : "border-border/30 opacity-40 scale-95 pointer-events-none"
                }`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-gold/10 transition-colors" />
                <p className="text-xs text-gold uppercase tracking-wider mb-2 font-medium">
                  {s.level}
                </p>
                <h3 className="text-lg font-semibold text-foreground group-hover:translate-x-1 transition-transform">
                  {s.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section className="py-24 border-t border-border bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Journey</p>
        <h2 className="font-display text-5xl md:text-7xl mb-16">Timeline.</h2>

        {/* Timeline body */}
        <div className="relative border-l border-gold/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {timelineEvents.map((ev) => (
            <div key={ev.title} className="relative group">
              {/* Circular timeline node */}
              <span className="absolute -left-[45px] md:-left-[61px] top-1.5 h-6 w-6 rounded-full bg-background border-2 border-gold flex items-center justify-center shadow-[0_0_10px_rgba(212,160,23,0.3)] group-hover:shadow-[0_0_15px_rgba(212,160,23,0.6)] group-hover:scale-110 transition-all">
                <ev.icon className="h-3 w-3 text-gold" />
              </span>

              {/* Event card */}
              <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-2xl p-6 md:p-8 hover:border-gold/40 transition-colors shadow-lg max-w-3xl">
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

function Certifications() {
  return (
    <section className="py-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Credentials</p>
        <h2 className="font-display text-5xl md:text-7xl mb-16">Certifications.</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-2xl p-6 hover:border-gold/40 hover:shadow-[0_0_20px_rgba(212,160,23,0.1)] transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="p-3 bg-gold/5 rounded-xl border border-gold/20 text-gold group-hover:scale-110 transition-transform">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-foreground truncate">{c.title}</h3>
                  <span className="text-xs text-gold font-medium shrink-0">{c.date}</span>
                </div>
                <p className="text-xs text-gold font-medium mt-1">{c.issuer}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsShowcase() {
  return (
    <section className="py-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Recognition</p>
        <h2 className="font-display text-5xl md:text-6xl mb-16">Achievements.</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((a) => (
            <div
              key={a.title}
              className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-2xl p-8 hover:border-gold/40 hover:shadow-[0_10px_30px_rgba(212,160,23,0.1)] transition-all duration-300 relative group overflow-hidden"
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

function GitHubDashboard() {
  // Generate a grid of days. 35 columns * 7 days = 245 squares.
  const squares = Array.from({ length: 245 }, (_, i) => {
    const dayOfWeek = i % 7;
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    let seed = Math.random();
    if (isWeekend) seed *= 0.4;

    let level = 0;
    if (seed > 0.85) level = 4;
    else if (seed > 0.65) level = 3;
    else if (seed > 0.4) level = 2;
    else if (seed > 0.15) level = 1;

    return level;
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
        return "bg-[#d4a017] border-[#ecd365] shadow-[0_0_8px_rgba(212,160,23,0.5)] animate-pulse";
      default:
        return "bg-muted/10 border-border/10";
    }
  };

  return (
    <section className="py-24 border-t border-border bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Open Source</p>
        <h2 className="font-display text-5xl md:text-7xl mb-16">GitHub Analytics.</h2>

        <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-[24px] p-6 md:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  @DhivyadharshiniGopalakrishnan
                </h3>
                <p className="text-xs text-gold">AI / ML Engineer &amp; Open Source Contributor</p>
              </div>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              <div className="bg-card/40 border border-border/40 px-4 py-2.5 rounded-xl text-center">
                <span className="text-xs text-muted-foreground block font-semibold">
                  Total Commits
                </span>
                <span className="text-lg font-bold text-gold">1,420+</span>
              </div>
              <div className="bg-card/40 border border-border/40 px-4 py-2.5 rounded-xl text-center">
                <span className="text-xs text-muted-foreground block font-semibold">
                  PRs Merged
                </span>
                <span className="text-lg font-bold text-gold">86</span>
              </div>
              <div className="bg-card/40 border border-border/40 px-4 py-2.5 rounded-xl text-center">
                <span className="text-xs text-muted-foreground block font-semibold">
                  Repositories
                </span>
                <span className="text-lg font-bold text-gold">12</span>
              </div>
              <div className="bg-card/40 border border-border/40 px-4 py-2.5 rounded-xl text-center">
                <span className="text-xs text-muted-foreground block font-semibold">
                  Stars Gained
                </span>
                <span className="text-lg font-bold text-gold">48</span>
              </div>
            </div>
          </div>

          {/* Simulated Grid Calendar */}
          <div className="border-t border-border/40 pt-6">
            <p className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
              <GitCommit className="h-4 w-4 text-gold" />
              Contributions in the past year
            </p>
            <div className="overflow-x-auto pb-4">
              <div className="flex flex-col flex-wrap h-[100px] gap-[3px] w-fit">
                {squares.map((level, idx) => (
                  <div
                    key={idx}
                    className={`h-[11px] w-[11px] rounded-[2px] border ${getGoldColor(level)} transition-colors duration-300 hover:scale-125`}
                    title={`${level === 0 ? "No" : level * 2} contributions`}
                  />
                ))}
              </div>
            </div>

            {/* Graph Legend */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-muted-foreground mt-2 gap-2">
              <span>Learn more at github.com/DhivyadharshiniGopalakrishnan</span>
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
      // Simulate file download
      const link = document.createElement("a");
      link.href = "#"; // Placeholder for resume URL
      link.setAttribute("download", "Dhivyadharshini_G_Resume.pdf");
      document.body.appendChild(link);
      alert("Dhivyadharshini_G_Resume.pdf download simulation triggered!");
    }, 2000);
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
                className="p-3 border border-[rgba(212,160,23,0.2)] rounded-xl bg-card/40 text-gold hover:border-gold hover:shadow-[0_0_10px_rgba(212,160,23,0.3)] transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/DhivyadharshiniGopalakrishnan"
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-[rgba(212,160,23,0.2)] rounded-xl bg-card/40 text-gold hover:border-gold hover:shadow-[0_0_10px_rgba(212,160,23,0.3)] transition"
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
          <div className="lg:col-span-7 bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-3xl p-6 md:p-8 shadow-xl relative">
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
                  className={`w-full bg-card/30 border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_15px_rgba(212,160,23,0.25)] transition-all duration-300 ${
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
                  className={`w-full bg-card/30 border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_15px_rgba(212,160,23,0.25)] transition-all duration-300 ${
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
                  className={`w-full bg-card/30 border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_15px_rgba(212,160,23,0.25)] transition-all duration-300 resize-none ${
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
                className="w-full bg-gold hover:opacity-95 text-primary-foreground font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-[0_5px_15px_rgba(212,160,23,0.15)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
            rel="noreferrer"
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
