import React, { useState } from "react";
import {
  X,
  ArrowUpRight,
  Github,
  FileText,
  Calendar,
  Code2,
  Award,
  CheckCircle,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getMappedProject, MappedProject } from "@/lib/github-sync";
import { ProjectImage } from "@/components/ProjectImage";

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

const fetchGitHubRepos = async () => {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
    headers: getHeaders(),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch GitHub repositories: ${res.statusText}`);
  }
  return res.json();
};

export function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<MappedProject | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const reposQuery = useQuery({
    queryKey: ["githubRepos", GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const repos = reposQuery.data || [];
  // Sort by updated_at desc, and map to Case Studies
  const studies: MappedProject[] = [...repos]
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .map(getMappedProject);

  const displayStudies = studies.filter((p) => {
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
    { id: "all", label: "All Cases" },
    { id: "ml", label: "AI & Machine Learning" },
    { id: "genai", label: "GenAI & Agents" },
    { id: "fullstack", label: "Full Stack Development" },
    { id: "python", label: "Python Projects" },
    { id: "tools", label: "Tools & Utilities" },
    { id: "academic", label: "Academic Projects" },
  ];

  return (
    <section id="case-studies" className="py-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Engineering Showcase
            </p>
            <h2 className="font-display text-5xl md:text-7xl">Case Studies.</h2>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl leading-relaxed">
              Real-world AI and Full Stack solutions with detailed architecture breakdowns,
              engineering challenges, implementation pipelines, and business impact.
            </p>
          </div>
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

        {reposQuery.isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-[rgba(15,15,15,0.7)] border border-border/10 rounded-[24px] h-[350px] animate-pulse"
              />
            ))}
          </div>
        ) : reposQuery.isError ? (
          <p className="text-sm text-muted-foreground text-center py-10">
            Failed to load Case Studies from GitHub. Please try again later.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayStudies.map((study) => (
              <article
                key={study.id}
                className="bg-[rgba(15,15,15,0.7)] backdrop-blur-md border border-[rgba(212,160,23,0.15)] rounded-[24px] overflow-hidden transition-all duration-300 hover:border-gold/40 hover:shadow-[0_10px_30px_rgba(212,160,23,0.1)] flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ProjectImage
                      src={study.banner}
                      alt={study.title}
                      category={study.category}
                      title={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.9)] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-[rgba(15,15,15,0.85)] border border-[rgba(212,160,23,0.3)] px-3.5 py-1 rounded-full text-[9px] uppercase font-bold text-gold">
                      {study.timeline.split(" – ").pop()}
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                      {study.title}
                    </h3>
                    <p className="text-xs text-gold font-medium mb-4">{study.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {study.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] border border-gold/15 bg-gold/5 rounded-full px-3 py-1 text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <button
                    onClick={() => setActiveStudy(study)}
                    className="w-full text-center bg-gold/10 border border-gold/30 text-gold font-bold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-gold hover:text-black transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    View Case Study <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {activeStudy && <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />}
    </section>
  );
}

export function MobileCaseStudies() {
  const [activeStudy, setActiveStudy] = useState<MappedProject | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const reposQuery = useQuery({
    queryKey: ["githubRepos", GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  const repos = reposQuery.data || [];
  const studies: MappedProject[] = [...repos]
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .map(getMappedProject);

  const displayStudies = studies.filter((p) => {
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

  return (
    <section id="mobile-case-studies" className="scroll-mt-16 space-y-6">
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
          Engineering Showcase
        </p>
        <h2 className="font-display text-3xl font-bold mt-1">Case Studies.</h2>
        <p className="text-xs text-muted-foreground leading-relaxed mt-2">
          Real-world AI and Full Stack solutions with architecture, challenges, implementation, and
          impact.
        </p>
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

      {reposQuery.isLoading ? (
        <div className="grid gap-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[rgba(15,15,15,0.7)] border border-border/10 rounded-3xl h-[250px] animate-pulse"
            />
          ))}
        </div>
      ) : reposQuery.isError ? (
        <p className="text-xs text-muted-foreground text-center py-6">
          Failed to load Case Studies.
        </p>
      ) : (
        <div className="grid gap-6">
          {displayStudies.map((study) => (
            <article
              key={study.id}
              className="bg-[rgba(15,15,15,0.7)] border border-[rgba(212,160,23,0.12)] rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ProjectImage
                    src={study.banner}
                    alt={study.title}
                    category={study.category}
                    title={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.9)] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[rgba(15,15,15,0.85)] border border-[rgba(212,160,23,0.3)] px-2.5 py-0.5 rounded-full text-[8px] uppercase font-bold text-gold">
                    {study.timeline.split(" – ").pop()}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-1">{study.title}</h3>
                  <p className="text-[10px] text-gold font-semibold mb-3">{study.subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{study.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {study.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] border border-gold/15 bg-gold/5 rounded-full px-2 py-0.5 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5">
                <button
                  onClick={() => setActiveStudy(study)}
                  className="w-full text-center bg-gold/10 border border-gold/30 text-gold font-bold py-2.5 rounded-xl text-[10px] uppercase tracking-wider hover:bg-gold hover:text-black transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  View Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {activeStudy && <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />}
    </section>
  );
}

interface ModalProps {
  study: MappedProject;
  onClose: () => void;
}

export function CaseStudyModal({ study, onClose }: ModalProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      const link = document.createElement("a");
      link.href = "/resume/Dhivyadharshini_G_Resume.pdf";
      link.setAttribute("download", `${study.id}_case_study.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[rgba(15,15,15,0.96)] border border-[rgba(212,160,23,0.25)] rounded-[28px] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-reveal flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 bg-[rgba(15,15,15,0.98)] border-b border-border/40 p-6 flex items-center justify-between z-10">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground">{study.title}</h3>
            <p className="text-xs text-gold font-medium mt-1">Technical Case Study</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-gold flex items-center gap-1.5 transition text-xs font-semibold uppercase tracking-wider cursor-pointer mr-4"
            >
              ← Back to Projects
            </button>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition cursor-pointer p-2 hover:bg-gold/10 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8 flex-1">
          {/* Banner */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-border/30">
            <ProjectImage
              src={study.banner}
              alt={study.title}
              category={study.category}
              title={study.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] to-transparent" />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 items-center text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 bg-gold/10 border border-gold/30 px-2.5 py-1 rounded text-gold font-semibold">
                <Calendar className="h-3 w-3" /> {study.timeline}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column (Content) */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                  Project Overview
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {study.desc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                  Problem Statement
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {study.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                  Solution
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {study.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-xs md:text-sm text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                  Technical Challenges &amp; Workarounds
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed bg-red-950/10 border border-red-500/20 p-4 rounded-xl">
                  {study.challenges}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">
                  Future Enhancements
                </h4>
                <ul className="space-y-2">
                  {study.future.map((f, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-xs md:text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="h-1.5 w-1.5 bg-gold rounded-full mt-2 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column (Architecture & Stats) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[rgba(20,20,20,0.5)] border border-[rgba(212,160,23,0.15)] rounded-2xl p-5 space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
                  <Code2 className="h-4 w-4" /> Architecture
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase block font-semibold">
                      Frontend
                    </span>
                    <span className="text-foreground font-medium">
                      {study.architecture.frontend}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase block font-semibold">
                      Backend
                    </span>
                    <span className="text-foreground font-medium">
                      {study.architecture.backend}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase block font-semibold">
                      Database
                    </span>
                    <span className="text-foreground font-medium">
                      {study.architecture.database}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase block font-semibold">
                      AI / ML Layer
                    </span>
                    <span className="text-foreground font-medium">
                      {study.architecture.aiLayer}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase block font-semibold">
                      APIs Integrated
                    </span>
                    <span className="text-foreground font-medium">{study.architecture.apis}</span>
                  </div>
                </div>
              </div>

              {/* Workflow Flowchart */}
              <div className="bg-[rgba(20,20,20,0.5)] border border-[rgba(212,160,23,0.15)] rounded-2xl p-5 space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
                  Workflow Stream
                </h4>
                <div className="space-y-1 font-mono text-[9px] text-center">
                  <div className="p-1.5 rounded border border-gold/25 bg-gold/5 text-foreground">
                    User Interface
                  </div>
                  <div className="text-gold text-[10px]">↓</div>
                  <div className="p-1.5 rounded border border-gold/25 bg-gold/5 text-foreground">
                    Frontend Handler
                  </div>
                  <div className="text-gold text-[10px]">↓</div>
                  <div className="p-1.5 rounded border border-gold/25 bg-gold/5 text-foreground">
                    FastAPI / Node Server
                  </div>
                  <div className="text-gold text-[10px]">↓</div>
                  <div className="p-1.5 rounded border border-gold/25 bg-gold/5 text-foreground">
                    Database &amp; AI Embeds
                  </div>
                  <div className="text-gold text-[10px]">↓</div>
                  <div className="p-1.5 rounded border border-gold/25 bg-gold/5 text-foreground">
                    Decoded JSON Response
                  </div>
                </div>
              </div>

              {/* Results & Impact */}
              <div className="bg-gold/5 border border-gold/20 rounded-2xl p-5 space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
                  <Award className="h-4 w-4" /> Results &amp; Impact
                </h4>
                <p className="text-xs text-foreground font-medium leading-relaxed">
                  {study.impact}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="w-full text-center bg-gold text-primary-foreground font-bold py-2.5 rounded-xl text-[10px] uppercase tracking-wider hover:opacity-90 transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <FileText className="h-4 w-4" />{" "}
                  {downloading ? "Generating PDF..." : "Summary PDF"}
                </button>

                <div className="flex gap-2">
                  <a
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-card/50 border border-border/60 hover:border-gold/40 text-foreground hover:text-gold font-bold py-2.5 rounded-xl text-[10px] uppercase tracking-wider transition active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <Github className="h-3.5 w-3.5" /> Source
                  </a>
                  <a
                    href={study.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-card/50 border border-border/60 hover:border-gold/40 text-foreground hover:text-gold font-bold py-2.5 rounded-xl text-[10px] uppercase tracking-wider transition active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
