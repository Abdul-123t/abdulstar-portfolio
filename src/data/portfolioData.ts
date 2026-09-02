import { Project, ClientBusinessWork, Capability, HowIBuildStep } from '../types';

export const PERSONAL_INFO = {
  fullName: "HASSAN ABDULSATAR OLAMIDE",
  displayName: "Hassan Abdulsatar Olamide",
  role: "Product Builder · Full-Stack Developer · Founder",
  headline: "I build digital products that move ideas forward.",
  alternativeHeadline: "I turn ambitious ideas into real digital products.",
  supportingCopy: "I'm Hassan Abdulsatar Olamide — a product builder, full-stack developer, and founder focused on turning ideas into useful digital experiences, platforms, and products.",
  brandAffiliation: "Building under NAMACO",
  fullBrandName: "NAMACO TECHNOLOGY NIGERIA LIMITED",
  brandStatement: "Building with a long-term technology company mindset under NAMACO TECHNOLOGY NIGERIA LIMITED.",
  email: "olamideh825@gmail.com",
  phone: "08051842700",
  instagram: "@namacotechnology",
  instagramUrl: "https://www.instagram.com/namacotechnology",
  location: "Nigeria",
  year: "2026",
};

export const POSITIONING_COPY = {
  headline: "From idea to interface to product.",
  body: "I work across product thinking, interface design, frontend development, backend systems, and deployment — bringing ideas from concept to something people can actually use.",
};

export const ABOUT_COPY = {
  headline: "Building from Africa, thinking globally.",
  paragraphs: [
    "I'm Hassan Abdulsatar Olamide, a Nigerian product builder, full-stack developer, and founder interested in building technology that solves real problems.",
    "I enjoy working across the entire product lifecycle — from figuring out what should be built, to designing the experience, writing the software, connecting the systems, and getting the product into people's hands.",
    "My long-term ambition is to build technology companies from Africa that can compete on a global stage.",
  ],
};

export const SELECTED_PROJECTS: Project[] = [
  {
    id: "veyra",
    number: "01",
    name: "VEYRA",
    category: "PRODUCT · PLATFORM · FULL-STACK",
    filterCategories: ["PRODUCTS", "WEB APPS"],
    year: "2026",
    liveUrl: "https://vetra-waitlist-azure.vercel.app/",
    description: "Veyra is a platform concept focused on helping ambitious young builders find the right people to build with and turn ideas into collaborative projects.",
    longDescription: "Veyra addresses a fundamental friction in the early product lifecycle: finding compatible co-builders with complementary skills. Rather than browsing static resumes, Veyra connects creators, engineers, and designers around shared product visions, skill matching, and structured team formation.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Supabase", "REST APIs", "Vercel"],
    role: "Founder & Full-Stack Builder",
    isFeatured: true,
    previewType: "app",
    previewImage: "/veyra-preview.png",
    mockupDetails: {
      badge: "LIVE WAITLIST & PLATFORM",
      stats: [
        { label: "Focus", value: "Team Formation" },
        { label: "Architecture", value: "Full-Stack Web App" },
        { label: "Stage", value: "Active Development" },
      ],
      features: [
        "Builder profile & skill taxonomy mapping",
        "Project idea submission & team matching",
        "Interactive interest & waitlist pipeline",
        "Real-time team composition preview",
      ],
    },
    caseStudy: {
      overview: "Veyra was conceived to solve the early-stage collaboration gap for ambitious young builders across Nigeria, Africa, and global tech ecosystems.",
      problem: "Talented designers, developers, and product thinkers often work in isolation. Traditional job boards focus on employment, while social networks create noise. There was no dedicated space built specifically for team formation around early-stage ideas.",
      productVision: "To create an intuitive platform where an idea owner can define required project competencies (e.g., Full-Stack + UI/UX) and discover matched collaborators ready to execute.",
      userExperience: "Designed with an ultra-clean, low-friction onboarding flow. Users can submit project concepts or express interest as co-builders in under two minutes.",
      design: "A sleek, dark-mode technical aesthetic built with high-density typography, subtle grid borders, and clear call-to-action hierarchies.",
      technicalArchitecture: "Component-driven React frontend initialized via Vite, backed by Supabase database schemas and edge functions deployed seamlessly on Vercel.",
      authentication: "Configured secure email/password and OAuth sign-in schemas with token-based session persistence.",
      database: "Relational tables for Users, Projects, Builder Skills, and Waitlist Submissions with foreign-key constraints and row-level safety.",
      deployment: "Automated CI/CD workflow connected to GitHub repository and deployed to Vercel global edge network.",
      challenges: "Balancing simplicity in early user intake with structured taxonomy for builder skills without overwhelming first-time visitors.",
      lessonsLearned: "Product validation begins with clear copy and immediate value proposition. Early-stage projects succeed when user intent is captured instantly.",
      metrics: "Early-stage project focused primarily on product validation and technical execution.",
      architectureDiagram: {
        title: "Veyra System Architecture",
        nodes: [
          { label: "React + Tailwind SPA", sub: "Client Interface", type: "client" },
          { label: "Vercel Edge Network", sub: "Global Hosting & CDN", type: "deploy" },
          { label: "Supabase Backend", sub: "Database & Auth", type: "db" },
          { label: "REST & PostgREST API", sub: "Real-time Data Querying", type: "server" },
        ],
      },
    },
  },
  {
    id: "doerly",
    number: "02",
    name: "DOERLY",
    category: "STARTUP · PLATFORM · PRODUCT",
    filterCategories: ["PRODUCTS", "WEB APPS"],
    year: "2026",
    liveUrl: "https://doerlyai.vercel.app/",
    description: "Doerly is a platform built around helping creative people connect, collaborate, and turn ideas into completed work.",
    longDescription: "Doerly shifts the focus from brainstorming to execution. It provides structured workflows and collaboration touchpoints tailored for makers, writers, designers, and developers to push projects across the finish line.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "Vercel"],
    role: "Product Builder & Lead Developer",
    isFeatured: true,
    previewType: "dashboard",
    previewImage: "/doerly-preview.png",
    mockupDetails: {
      badge: "CREATIVE WORKFLOW PLATFORM",
      stats: [
        { label: "Focus", value: "Creative Execution" },
        { label: "UX", value: "Action-Oriented Workflows" },
        { label: "Deployment", value: "Vercel Cloud" },
      ],
      features: [
        "Milestone-based project progress tracking",
        "Collaborator workspace & activity feed",
        "Clean task assignment and status updates",
        "Minimalist aesthetic built for creative flow",
      ],
    },
    caseStudy: {
      overview: "Doerly was built to bridge the gap between initial creative excitement and actual project completion.",
      problem: "Many creative projects stall after initial concept creation due to lack of structure, clear accountability, and lightweight collaboration channels.",
      productVision: "A clean, distraction-free platform where creative collaborators can define scope, track milestones, and maintain velocity together.",
      userExperience: "Focused on clarity: visual kanban/milestone cards, progress bars, and zero unnecessary visual clutter.",
      design: "High-contrast monochrome theme with sharp 1px grid borders, subtle hover transitions, and readable typographic hierarchy.",
      technicalArchitecture: "Single-page React application utilizing stateful context containers and API integrations.",
      authentication: "Lightweight session handler designed for fast onboarding.",
      database: "Structured JSON and stateful storage schema tracking project milestones, task items, and team assignments.",
      deployment: "Deployed on Vercel with instant preview builds per commit.",
      challenges: "Designing a project management interface that feels inspiring for creatives rather than rigid or corporate.",
      lessonsLearned: "Workflow tools must adapt to how people naturally work rather than forcing complex methodologies.",
      metrics: "Product prototype and execution framework active on Vercel.",
      architectureDiagram: {
        title: "Doerly Workflow Engine Architecture",
        nodes: [
          { label: "Vite + React Frontend", sub: "Interactive Workspace UI", type: "client" },
          { label: "Express API Layer", sub: "Route Controllers", type: "server" },
          { label: "State Engine", sub: "Project Context Store", type: "db" },
          { label: "Vercel Hosting", sub: "Production CDN", type: "deploy" },
        ],
      },
    },
  },
  {
    id: "tahab-hotel",
    number: "03",
    name: "TAHAB HOTEL & SUITES",
    category: "CLIENT WORK · HOSPITALITY · WEB EXPERIENCE",
    filterCategories: ["CLIENT WORK"],
    year: "2025",
    liveUrl: "https://tahab-hotel-demo.netlify.app/",
    description: "A modern digital experience created for a hospitality brand, focused on presenting the property, experience, and services through a polished web presence.",
    longDescription: "Tahab Hotel & Suites required an elevated web presence to showcase luxury room accommodations, dining facilities, conference suites, and direct guest inquiry booking channels.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Netlify"],
    role: "Web Designer & Frontend Developer",
    isFeatured: true,
    isClientWork: true,
    previewType: "website",
    previewImage: "/tahab-preview.png",
    mockupDetails: {
      badge: "CLIENT WORK · HOSPITALITY",
      stats: [
        { label: "Category", value: "Hospitality Business" },
        { label: "Responsiveness", value: "100% Mobile & Desktop" },
        { label: "Platform", value: "Netlify Production" },
      ],
      features: [
        "Interactive room suite gallery & amenities showcase",
        "Direct guest reservation & inquiry workflow",
        "Optimized image loading & luxury editorial layout",
        "Fully responsive typography and layout scale",
      ],
    },
    caseStudy: {
      overview: "Custom commercial website engineered for Tahab Hotel & Suites to establish a premium digital brand identity.",
      problem: "The hospitality client needed a fast, elegant digital showcase accessible seamlessly on mobile smartphones used by prospective guests.",
      productVision: "To deliver a high-end web presence reflecting the physical elegance of the hotel property with fast page load times.",
      userExperience: "Guest-centric information hierarchy with quick access to Room Types, Dining Menu, Event Spaces, and Location details.",
      design: "Sophisticated neutral palette featuring rich typography, full-bleed imagery grids, and elegant micro-interactions.",
      technicalArchitecture: "Semantic HTML5 structure paired with modern CSS custom properties and lightweight modular JavaScript.",
      authentication: "N/A — Public brand showcase and guest inquiry portal.",
      database: "Flat content architecture optimized for static site delivery and sub-second rendering.",
      deployment: "Deployed and hosted on Netlify with automated continuous deployment.",
      challenges: "Ensuring high-resolution hotel imagery loaded blazingly fast on low-bandwidth mobile networks without quality loss.",
      lessonsLearned: "Performance and visual polish are equally critical in luxury hospitality web design.",
      metrics: "Commercial deployment delivered according to client specifications.",
    },
  },
  {
    id: "split-and-settle",
    number: "04",
    name: "SPLIT & SETTLE",
    category: "WEB APP · PRODUCT EXPERIMENT",
    filterCategories: ["WEB APPS", "EXPERIMENTS"],
    year: "2025",
    liveUrl: "https://v0-problem-solving-ideas.vercel.app/",
    description: "A web application exploring a simple way for groups to record shared expenses and understand who owes what.",
    longDescription: "Split & Settle strips away complex accounting jargon to provide an instant, frictionless expense calculation tool for group trips, housemates, and shared events.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    role: "Product Developer",
    isFeatured: true,
    previewType: "app",
    previewImage: "/split-settle-preview.png",
    mockupDetails: {
      badge: "PRODUCT EXPERIMENT · UTILITY",
      stats: [
        { label: "Concept", value: "Expense Balancing" },
        { label: "Speed", value: "Instant Local Calculation" },
        { label: "Hosting", value: "Vercel Edge" },
      ],
      features: [
        "Dynamic group participant management",
        "Itemized expense log with payer assignment",
        "Automated debt minimization algorithm",
        "Clear step-by-step settlement summary",
      ],
    },
    caseStudy: {
      overview: "Product experiment focused on solving multi-person group expense math with minimal taps.",
      problem: "Calculating who owes whom after group events is frequently confusing and prone to human calculation errors.",
      productVision: "To build a single-screen utility where users enter expenses and instantly get simplified settlement instructions.",
      userExperience: "Instant calculation engine updating calculations in real-time as line items are added or edited.",
      design: "Clean, functional utility UI with high legibility numbers, clear color-coded balances, and clean inputs.",
      technicalArchitecture: "Client-side React application with localized calculation algorithms.",
      authentication: "N/A — Instant client session utility.",
      database: "In-memory and local session persistence for quick group calculations.",
      deployment: "Deployed on Vercel.",
      challenges: "Implementing a graph settlement minimization logic that keeps settlement transactions to the minimum count possible.",
      lessonsLearned: "Utility apps shine when they remove cognitive load immediately without requiring sign-up barriers.",
      metrics: "Functional utility prototype active on Vercel.",
    },
  },
];

export const CLIENT_BUSINESS_WORK: ClientBusinessWork[] = [
  {
    id: "quafix-plugs",
    name: "QUAFIX PLUGS",
    category: "Website Development & Digital Setup",
    contribution: "Full Website Development, Catalog Setup & Brand Presentation",
    description: "Digital setup and modern catalog website for an electrical hardware, power fixtures, and accessories business in Nigeria.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://quafixplugs.netlify.app",
    previewImage: "/client-quafix.png",
  },
  {
    id: "adeshina-gadget",
    name: "ADESHINA GADGET",
    category: "Web Experience & Digital Catalog",
    contribution: "Digital Product Showcase & Mobile Inventory Interface",
    description: "Sleek web showcase created for a smartphone and consumer tech gadget retailer to present device inventories.",
    tech: ["React", "Tailwind CSS", "Web Setup"],
    previewImage: "/client-adeshina.png",
  },
  {
    id: "k-tech",
    name: "K-TECH",
    category: "Technology Support & Digital Presence",
    contribution: "Website Engineering & Service Portfolio Directory",
    description: "Professional digital service directory and website for a technology repair, maintenance, and hardware hub.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    previewImage: "/client-ktech.png",
  },
  {
    id: "aby-gadgets",
    name: "ABY GADGETS",
    category: "Business Website & Digital Catalog",
    contribution: "E-Catalog Web Interface & Contact Integration",
    description: "Clean mobile-first web interface presenting mobile electronics, accessories, and direct order channels.",
    tech: ["React", "Vite", "Tailwind CSS"],
    previewImage: "/client-aby.png",
  },
  {
    id: "softy-gadgets",
    name: "SOFTY GADGETS",
    category: "E-Catalog & Web Experience",
    contribution: "Frontend Design, Product Grid & Customer Inquiry Flow",
    description: "Modern retail product showcase built to elevate customer trust and streamline device inquiry workflows.",
    tech: ["JavaScript", "Tailwind CSS", "Netlify"],
    previewImage: "/client-softy.png",
  },
  {
    id: "hibee-computer",
    name: "HIBEE COMPUTER TECHNOLOGY",
    category: "Business Website & Service Directory",
    contribution: "Web Portal Development & Technical Service Catalog",
    description: "Business web presence detailing computer sales, software troubleshooting, and hardware engineering services.",
    tech: ["HTML5", "CSS3", "Responsive Architecture"],
    previewImage: "/client-hibee.png",
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "product",
    title: "PRODUCT",
    tagline: "Product Thinking & Vision",
    description: "Turning ideas into structured digital products with defined user journeys, problem validation, and clear functional scope.",
    skills: ["Product Vision", "Scope Definition", "User Flow Mapping", "Information Architecture", "Feature Prioritization"],
  },
  {
    id: "frontend",
    title: "FRONTEND",
    tagline: "Interface Engineering",
    description: "Responsive, polished interfaces and modern web applications with refined typography, micro-interactions, and fast load times.",
    skills: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design", "Accessibility (a11y)"],
  },
  {
    id: "backend",
    title: "BACKEND",
    tagline: "Systems & Data Logic",
    description: "APIs, authentication, databases, business logic, and server infrastructure built for stability and clean separation of concerns.",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Supabase", "Authentication"],
  },
  {
    id: "fullstack",
    title: "FULL-STACK",
    tagline: "End-to-End Delivery",
    description: "Connecting product thinking, frontend design, backend logic, database persistence, and continuous cloud deployment.",
    skills: ["Full-Stack Architecture", "Vercel", "Netlify", "Git & GitHub", "CI/CD Workflows", "Environment Config"],
  },
  {
    id: "experiments",
    title: "EXPERIMENTS",
    tagline: "Rapid Prototyping",
    description: "Rapidly testing concepts, validating hypotheses, and building working prototypes to discover what works in the real world.",
    skills: ["Rapid Prototyping", "Utility Web Apps", "Proof of Concept", "Agile Iteration", "MVP Validation"],
  },
];

export const HOW_I_BUILD_STEPS: HowIBuildStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Understand the problem, user, business, and desired outcome before touching a line of code.",
    deliverables: ["Problem statement", "Target user identification", "Core value definition"],
  },
  {
    number: "02",
    title: "STRUCTURE",
    description: "Define the product, information architecture, user workflows, and technical requirements.",
    deliverables: ["System schema", "User journey map", "Data model outline"],
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Create a clear, usable interface and interaction system grounded in strong typographic hierarchy.",
    deliverables: ["Interface layouts", "Component hierarchy", "Design tokens"],
  },
  {
    number: "04",
    title: "BUILD",
    description: "Implement the frontend, backend, database, authentication, and integrations with clean code.",
    deliverables: ["Frontend SPA/SSR", "API controllers", "Database tables"],
  },
  {
    number: "05",
    title: "SHIP",
    description: "Deploy, test, refine, and make the product usable in the real world on global cloud infrastructure.",
    deliverables: ["Cloud deployment", "Domain configuration", "Live production link"],
  },
];

export const TECH_STACK = [
  { name: "HTML", category: "Core" },
  { name: "CSS", category: "Core" },
  { name: "JAVASCRIPT", category: "Core" },
  { name: "REACT", category: "Frontend" },
  { name: "VITE", category: "Build Tool" },
  { name: "TAILWIND CSS", category: "Styling" },
  { name: "NODE.JS", category: "Backend" },
  { name: "EXPRESS", category: "Backend" },
  { name: "POSTGRESQL", category: "Database" },
  { name: "SUPABASE", category: "Database & Auth" },
  { name: "REST APIs", category: "Architecture" },
  { name: "AUTHENTICATION", category: "Security" },
  { name: "GIT", category: "Version Control" },
  { name: "GITHUB", category: "Collaboration" },
  { name: "VERCEL", category: "Deployment" },
  { name: "NETLIFY", category: "Deployment" },
];

export const PROOF_OF_WORK_ITEMS = [
  {
    id: "veyra-code",
    title: "Veyra Waitlist & Team Formation Architecture",
    type: "Code Architecture",
    description: "Clean TypeScript interface and Supabase controller handling builder profile submission and team matching.",
    snippet: {
      language: "typescript",
      filename: "src/lib/veyraEngine.ts",
      code: `export interface BuilderProfile {
  id: string;
  fullName: string;
  primaryRole: 'ENGINEER' | 'DESIGNER' | 'PRODUCT' | 'FOUNDER';
  skills: string[];
  projectInterest: string[];
}

export async function submitBuilderInterest(profile: Omit<BuilderProfile, 'id'>) {
  const { data, error } = await supabase
    .from('veyra_waitlist')
    .insert([{ ...profile, created_at: new Date().toISOString() }])
    .select();

  if (error) throw new Error(error.message);
  return data[0];
}`,
    },
  },
  {
    id: "split-settle-math",
    title: "Split & Settle Debt Minimization Engine",
    type: "Algorithm",
    description: "Calculates optimal debt transfers to reduce the total transaction count required to balance group expenses.",
    snippet: {
      language: "javascript",
      filename: "src/utils/debtMinimizer.js",
      code: `export function minimizeDebts(balances) {
  const debtors = [], creditors = [];
  Object.entries(balances).forEach(([person, amount]) => {
    if (amount < -0.01) debtors.push({ person, amount: -amount });
    if (amount > 0.01) creditors.push({ person, amount });
  });

  const settlements = [];
  let i = 0, j = 0;
  while (i < debtors.length && j < creditors.length) {
    const minAmount = Math.min(debtors[i].amount, creditors[j].amount);
    settlements.push({
      from: debtors[i].person,
      to: creditors[j].person,
      amount: Number(minAmount.toFixed(2))
    });
    debtors[i].amount -= minAmount;
    creditors[j].amount -= minAmount;
    if (debtors[i].amount < 0.01) i++;
    if (creditors[j].amount < 0.01) j++;
  }
  return settlements;
}`,
    },
  },
];
