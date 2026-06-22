export interface Architecture {
  frontend: string;
  backend: string;
  database: string;
  aiLayer: string;
  apis: string;
}

export interface MappedProject {
  id: string;
  title: string;
  subtitle: string;
  banner: string;
  desc: string;
  tech: string[];
  timeline: string;
  problem: string;
  solution: string;
  architecture: Architecture;
  workflow: string[];
  features: string[];
  challenges: string;
  impact: string;
  future: string[];
  github: string;
  demo: string;
  category: string;
  featured: boolean;
}

export const REPO_DETAILS_MAP: Record<string, Partial<MappedProject>> = {
  "multi-agent-ai-social-media-manager": {
    title: "Multi-Agent AI Social Media Manager",
    subtitle: "Automated Social Pillar Architectures",
    banner:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    timeline: "March 2025 – April 2025",
    problem:
      "Social media content planning requires repetitive copywriting, pillar layouts, and keyword research, creating operational bottlenecks.",
    solution:
      "Designed a collaborative four-agent scheduler bot (Planner, Writer, Hashtag, Scheduler) parsing brand guide templates and scheduling content streams automatically.",
    architecture: {
      frontend: "Telegram Bot API, Streamlit Web Interface",
      backend: "Python (asyncio)",
      database: "SQLite database",
      aiLayer: "Gemini API prompting with custom system directives",
      apis: "Telegram Webhooks, Google Calendar API",
    },
    workflow: [
      "User starts campaign template inside Telegram Chatbot Interface.",
      "Planner Agent compiles content themes and outlines 30-day pillars.",
      "Writer Agent generates customized caption drafts mapping to tone guides.",
      "Hashtag Agent appends trending keywords using semantic tags.",
      "Scheduler Agent publishes directly to webhooks and logs execution status.",
    ],
    features: [
      "Dynamic 4-agent campaign planner",
      "Interactive Telegram bot scheduler hooks",
      "Tone-of-voice alignment parsing",
      "Automatic trending hashtag generator",
    ],
    challenges:
      "Handling concurrent session logs and dialogue states for multiple chat groups. Solved by introducing context storage buffers and thread-safe lock pools.",
    impact:
      "Saved over 85% of content creation time and maintained strict weekly campaign delivery schedules.",
    future: ["Automated image generation using Imagen", "Direct meta integration hooks"],
    category: "genai",
    featured: true,
  },
  "rag-business-intelligence-assistant": {
    title: "RAG-Based BI Assistant",
    subtitle: "Local LLM Database Analyst",
    banner:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    timeline: "February 2025 – March 2025",
    problem:
      "Non-technical stakeholders require fast access to database insights without writing complex SQL queries manually or relying on custom data analyst queues.",
    solution:
      "Flask-based assistant using local LLMs (Ollama) to answer analytical business queries with structured database schema retrieval.",
    architecture: {
      frontend: "Flask responsive UI",
      backend: "Python, Flask framework",
      database: "SQLite database, ChromaDB vector store",
      aiLayer: "Ollama (Llama 3 / Mistral) local models",
      apis: "REST endpoints",
    },
    workflow: [
      "User submits natural language query (e.g. 'Show total sales for Q2').",
      "Vector retriever matches database schema mappings from local ChromaDB.",
      "System prompt embeds current schema context into Ollama models.",
      "Local model outputs validated SQL syntax matches.",
      "Executes SQL queries and conversationalizes results in Flask UI.",
    ],
    features: [
      "Natural language to SQL compilation",
      "On-device local LLM execution",
      "Schema-based vector embedding search",
      "Direct SQL sandbox execution safety checks",
    ],
    challenges:
      "Preventing hallucinations from creating tables that do not exist. Solved by writing an automated SQL syntax tree parser matching active schema profiles.",
    impact: "Turned complex manual report compile routines into immediate automated chat lookups.",
    future: ["Multi-database connector configurations", "Interactive data charts rendering"],
    category: "genai",
    featured: true,
  },
  "ekalvya-ai-mentor-demo": {
    title: "Ekalvya AI Career Mentor",
    subtitle: "Personalized Career Coaching System",
    banner:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    timeline: "January 2025 – February 2025",
    problem:
      "Students lack access to structured career mentoring, leading to misalignment in skill building and target job requirements.",
    solution:
      "Designed a personalized AI mentoring engine analyzing students' skills and recommending optimized learning roadmaps.",
    architecture: {
      frontend: "Streamlit responsive dashboard",
      backend: "FastAPI, Python",
      database: "PostgreSQL with SQLAlchemy ORM",
      aiLayer: "Gemini API with Scikit-learn cosine similarity models",
      apis: "Google Cloud APIs",
    },
    workflow: [
      "Student uploads resume or inputs current skillsets.",
      "Engine processes resume and extracts active skill vectors.",
      "Compares skill profile against market trends and job requirements.",
      "Generates optimized step-by-step roadmap milestones.",
      "Renders dynamic tracking dashboards with customized tasks.",
    ],
    features: [
      "Personalized learning roadmaps",
      "Semantic resume parser",
      "Skill gap analysis with comparative charting",
      "Actionable interview preparation modules",
    ],
    challenges:
      "Handling sparse skill matrices for early-stage students. Resolved by training a custom clustering classifier predicting baseline skill steps.",
    impact:
      "Won 1st Place in national AI Hackathon; highly praised for student guidance and roadmap planning.",
    future: ["Direct online course syllabus correlation", "Dynamic mentorship scheduling matches"],
    category: "ml",
    featured: true,
  },
  WealthGenie: {
    title: "WealthGenie AI Assistant",
    subtitle: "Smart Financial Chatbot & Planner",
    banner:
      "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&q=80",
    timeline: "March 2026",
    problem:
      "Personal wealth management is intimidating, and users need instant, personalized budgeting advice and risk profiling.",
    solution:
      "Built a smart financial assistant analyzing income/expenses to provide budgeting feedback and portfolio strategies.",
    architecture: {
      frontend: "HTML5, Tailwind CSS, Vanilla JS",
      backend: "Node.js (Express)",
      database: "MongoDB",
      aiLayer: "Financial rule-based heuristic classifier & Gemini API",
      apis: "Market Rate APIs, Plaid API mock",
    },
    workflow: [
      "User logs current monthly income, fixed costs, and target savings.",
      "Chatbot processes risk profile using standard questionnaires.",
      "AI model evaluates asset allocations based on risk rating.",
      "Suggestions on stock, bond, and deposit cuts are rendered.",
      "Visual charts update user asset progress logs.",
    ],
    features: [
      "Risk profile calculator",
      "Dynamic allocation advisor chat",
      "Income/Expense log analyzer",
      "Beautiful charts tracking goal targets",
    ],
    challenges:
      "Ensuring low latency computation of multi-variable compounding formulas. Resolved by using modular browser JS workers.",
    impact: "Created instant wealth simulation pathways, reducing advisory dependencies.",
    future: ["Real-time brokerage API syncs", "Taxation planning calculators"],
    category: "tools",
    featured: false,
  },
  "Question-Framer": {
    title: "Question-Framer & Evaluator",
    subtitle: "Active Recall Study Platform",
    banner:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    timeline: "November 2024 – December 2024",
    problem:
      "Rote reading is inefficient; active recall is required to verify deep understanding of educational materials.",
    solution:
      "Developed a concept-to-question generation tool extracting key vectors and creating custom study quizzes.",
    architecture: {
      frontend: "Next.js / TypeScript",
      backend: "Node.js / Serverless API",
      database: "Firestore",
      aiLayer: "Claude/GPT parser for question formulation",
      apis: "PDF text extraction API",
    },
    workflow: [
      "User uploads study text files or textbook PDF logs.",
      "Extraction script maps sentences into structured definition items.",
      "AI templates frame multi-choice conceptual questions.",
      "Student answers quiz items inside interactive test UI.",
      "Instant grading reports detail conceptual strength levels.",
    ],
    features: [
      "Automated MCQ framing",
      "Textbook PDF concept isolation",
      "Interactive progress score chart",
      "Active recall metrics logging",
    ],
    challenges:
      "Isolating headings and diagrams from text lines. Solved by text preprocessing libraries and structured segment filtering.",
    impact: "Users scored 25% higher on mock exams using active recall iterations.",
    future: [
      "Spaced repetition cards scheduling (Anki-like API)",
      "Support for multi-language note compilation",
    ],
    category: "tools",
    featured: true,
  },
  "EduStream-Online-Tutoring": {
    title: "EduStream Online Tutoring",
    subtitle: "AI-Powered Learning Platform",
    banner:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    timeline: "September 2024 – October 2024",
    problem:
      "E-learning sites lack personalized, real-time feedback loops, making remote tutoring feel distant and detached.",
    solution:
      "Built a full stack tutoring portal featuring dynamic whiteboard sessions and AI tutoring agents.",
    architecture: {
      frontend: "React, Tailwind CSS",
      backend: "Express, Socket.io",
      database: "MongoDB",
      aiLayer: "Automated learning dashboard analyzer",
      apis: "Zoom API, Socket WebSockets",
    },
    workflow: [
      "Student logs in and schedules a remote whiteboard tutoring class.",
      "Socket.io synchronizes student and tutor boards in real-time.",
      "AI analyzer tracks whiteboarding speed and matches help resources.",
      "Session recordings compile inside administrative student folders.",
      "Follow-up study roadmaps suggest targeted homework.",
    ],
    features: [
      "Real-time peer whiteboard sync",
      "Interactive tutoring dashboard scheduler",
      "AI companion suggesting materials",
      "Secure payment and class logging",
    ],
    challenges:
      "Whiteboard sync lag over low bandwidth. Solved by delta coordinate compression and message throttling.",
    impact: "Enabled high-quality peer learning sessions for multiple campus groups.",
    future: ["Handwritten math formula OCR", "In-browser group audio conferencing"],
    category: "fullstack",
    featured: false,
  },
  "Smart-Study": {
    title: "Smart-Study Planner",
    subtitle: "AI Syllabus Note Synthesizer",
    banner:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    timeline: "August 2024 – September 2024",
    problem:
      "Syllabus milestones are difficult to track, and students struggle to synthesize dense lecture notes into concise cheat sheets.",
    solution: "Created an AI study assistant compiling and organizing academic coursework notes.",
    architecture: {
      frontend: "React / Vite",
      backend: "Express.js",
      database: "SQLite",
      aiLayer: "Notes summarizer agent",
      apis: "Google Docs API integration",
    },
    workflow: [
      "User uploads class curriculum templates or exam dates.",
      "System maps dates to daily study milestone objectives.",
      "Summarizer processes lecture notes into modular cheat sheets.",
      "Renders calendar showing targeted coursework reviews.",
      "Daily flashcard checks test note recall.",
    ],
    features: [
      "Milestone syllabus calendar planner",
      "Automated summary notes extraction",
      "Recall flashcards builder",
      "Markdown study sheet exporter",
    ],
    challenges:
      "Compiling markdown notes cleanly into print-friendly styles. Solved by designing custom CSS page breaks.",
    impact: "Allowed automated guide compilation, reducing manual prep workloads.",
    future: ["Collaborative class group scheduling sync", "OCR audio lecture transcript parsing"],
    category: "academic",
    featured: false,
  },
  "PocketCrop-Plus": {
    title: "PocketCrop Plus",
    subtitle: "Smart Mobile Crop Classifier",
    banner:
      "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80",
    timeline: "June 2024 – July 2024",
    problem:
      "Farmers struggle to identify crop leaf diseases early, resulting in yield losses and excess pesticide application.",
    solution:
      "Designed a mobile-first classification pipeline predicting crop disease from uploaded leaf photos.",
    architecture: {
      frontend: "React Native framework",
      backend: "FastAPI, Python",
      database: "PostgreSQL",
      aiLayer: "MobileNetV2 leaf disease classifier (TF Lite)",
      apis: "OpenWeather API (weather correlation)",
    },
    workflow: [
      "Farmer takes crop leaf photo using mobile camera interface.",
      "App runs preprocessing scaling and submits frame to FastAPI.",
      "TensorFlow classifier predicts disease indices from image profiles.",
      "Returns corresponding diagnostic and targeted pesticide instructions.",
      "Stores history log on PostgreSQL matching local coordinates.",
    ],
    features: [
      "MobileNetV2 crop classifier model",
      "Off-line mobile inference framework support",
      "Localized weather pest threat forecast alerts",
      "Treatment guidelines administrator logs",
    ],
    challenges:
      "Compiling heavy TensorFlow inference layers on budget devices. Solved by weight quantization and edge FastAPI routing.",
    impact: "Helped diagnose common crop leaf diseases under 100ms.",
    future: ["Voice diagnostic assistance support", "Irrigation scheduling models correlation"],
    category: "ml",
    featured: false,
  },
};

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

export const getMappedProject = (repo: GitHubRepo): MappedProject => {
  const name = repo.name;
  const mapped = REPO_DETAILS_MAP[name];

  const cleanTitle = mapped?.title || name.replace(/-/g, " ");
  const desc = mapped?.desc || repo.description || "Open source project on GitHub.";
  const lang = repo.language || "JavaScript";

  return {
    id: name,
    title: cleanTitle,
    subtitle: mapped?.subtitle || `${lang} Repository`,
    banner:
      mapped?.banner ||
      "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=600&q=80",
    desc: desc,
    tech: mapped?.tech || [lang, ...(repo.topics || [])],
    timeline: mapped?.timeline || "Updated recently",
    problem:
      mapped?.problem ||
      `No detailed problem statement registered for ${cleanTitle}. Check the GitHub repository for documentation.`,
    solution: mapped?.solution || desc,
    architecture: mapped?.architecture || {
      frontend: `${lang} Interface`,
      backend: `${lang} Server`,
      database: "Configuration files",
      aiLayer: "Standard logic",
      apis: "Standard Web APIs",
    },
    workflow: mapped?.workflow || [
      "User interacts with application UI.",
      "System processes parameters.",
      "Outputs operational response.",
    ],
    features: mapped?.features || ["Full source code available", "Open-source collaboration ready"],
    challenges:
      mapped?.challenges || "Consult the README in the GitHub repository for development details.",
    impact: mapped?.impact || "Increases portfolio open-source engagement.",
    future: mapped?.future || ["Check repository active branches for updates"],
    github: repo.html_url,
    demo: mapped?.demo || repo.html_url,
    category: mapped?.category || (repo.language?.toLowerCase() === "python" ? "python" : "tools"),
    featured: mapped?.featured || false,
  };
};
