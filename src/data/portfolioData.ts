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
  whatsappNumber: "+2348051842700",
  whatsappUrl: "https://wa.me/2348051842700",
  instagram: "@namacotechnology",
  instagramUrl: "https://www.instagram.com/namacotechnology",
  linkedin: "Abdulsatar Hassan",
  linkedinUrl: "https://www.linkedin.com/in/abdulsatar-hassan-31778535a/",
  location: "Ijebu Ode, Ogun State, Nigeria",
  year: "2026",
};

export const POSITIONING_COPY = {
  headline: "From idea to interface to product.",
  body: "I work across product thinking, interface design, frontend development, backend systems, and deployment — bringing ideas from concept to something people can actually use.",
};

export const ABOUT_COPY = {
  headline: "building from ijebu odeee thinking globally",
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
  {
    id: "bookkeepa",
    number: "05",
    name: "BOOK KEEPA",
    category: "PRODUCT · STARTUP · WHATSAPP",
    filterCategories: ["PRODUCTS", "WEB APPS"],
    year: "2025",
    liveUrl: "https://bookkeepa.netlify.app/",
    description: "Book Keepa is a smart WhatsApp-based business assistant helping Nigerian entrepreneurs track sales and expenses easily — without spreadsheets or complicated software.",
    longDescription: "Book Keepa removes the friction of financial record-keeping for small business owners in Nigeria by meeting them where they already are — WhatsApp. Entrepreneurs can log sales, record expenses, and get business summaries through simple conversational messages.",
    technologies: ["HTML5", "CSS3", "JavaScript", "WhatsApp API", "Netlify"],
    role: "Founder & Product Builder",
    isFeatured: true,
    previewType: "app",
    previewImage: "/bookkeepa-preview.png",
    mockupDetails: {
      badge: "LIVE PRODUCT · WHATSAPP ASSISTANT",
      stats: [
        { label: "Platform", value: "WhatsApp-Native" },
        { label: "Target", value: "Nigerian Entrepreneurs" },
        { label: "Hosting", value: "Netlify" },
      ],
      features: [
        "WhatsApp-based sales & expense logging",
        "Conversational business finance tracking",
        "No spreadsheets or complex software needed",
        "Built specifically for Nigerian SME owners",
      ],
    },
    caseStudy: {
      overview: "Book Keepa was built to simplify business finance tracking for Nigerian small business owners who operate primarily via WhatsApp.",
      problem: "Most Nigerian entrepreneurs — market traders, service providers, and shop owners — have no practical way to track their daily sales and expenses. Spreadsheets are complex, accounting software is expensive, and most solutions require a desktop computer.",
      productVision: "To build a business finance tool that requires zero onboarding: just send a WhatsApp message and your books are updated instantly.",
      userExperience: "Conversational and frictionless — users interact naturally in WhatsApp without needing to install any app or learn any software.",
      design: "A clean landing page focused on communicating simplicity and trust, with a direct WhatsApp CTA as the primary conversion point.",
      technicalArchitecture: "Lightweight HTML/CSS/JS landing page with WhatsApp Business API integration for the conversational backend.",
      authentication: "WhatsApp number-based identity — no separate login required.",
      database: "Structured message parsing engine tracking sales, expenses, and business summaries per user session.",
      deployment: "Deployed on Netlify with continuous deployment.",
      challenges: "Designing a natural language interface that reliably captures financial data from informal WhatsApp messages with varied phrasing.",
      lessonsLearned: "Meeting users on platforms they already use daily is the strongest distribution strategy for SME-focused products in Nigeria.",
      metrics: "Live product deployed on Netlify and actively marketed to Nigerian entrepreneurs.",
    },
  },
  {
    id: "oluwadamilare-electrical",
    number: "06",
    name: "OLUWAMILARE ELECTRICAL & SOLAR",
    category: "CLIENT WORK · ELECTRICAL & SOLAR · WEB EXPERIENCE",
    filterCategories: ["CLIENT WORK"],
    year: "2025",
    liveUrl: "https://oluwadamilareeletrical.com/",
    description: "Professional commercial web presence built for an electrical, solar panel installation, inverter systems, and CCTV security business in Nigeria.",
    longDescription: "Oluwamilare Electrical & Solar Services required an authoritative web portal to showcase their energy installation projects, emergency support channels, CCTV security services, and direct quote requests for residential and commercial clients.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    role: "Web Designer & Developer",
    isFeatured: true,
    isClientWork: true,
    previewType: "website",
    previewImage: "/client-oluwadamilare.png",
    mockupDetails: {
      badge: "CLIENT WORK · ELECTRICAL & SOLAR",
      stats: [
        { label: "Category", value: "Electrical & Solar Services" },
        { label: "Responsiveness", value: "100% Mobile & Desktop" },
        { label: "Coverage", value: "Lagos, Ogun & Regional" },
      ],
      features: [
        "Interactive service showcase (Solar, Inverters, CCTV)",
        "24/7 emergency electrical call & WhatsApp integration",
        "Recent project installation photo gallery",
        "Direct quote request & inquiry form workflow",
      ],
    },
    caseStudy: {
      overview: "Custom commercial website designed and built for Oluwamilare Electrical & Solar Services to establish a trusted digital footprint.",
      problem: "The client needed a fast, high-converting digital showcase to capture incoming leads for solar installations, inverter setups, and electrical wiring in Ogun State and Lagos.",
      productVision: "Deliver a clean, authoritative web platform that highlights technical expertise, recent project installations, and enables quick customer inquiries via call or WhatsApp.",
      userExperience: "Designed with emergency call bars, service highlights, trust indicators, and quick action buttons for instant client communication.",
      design: "Clean, high-contrast industrial aesthetic featuring clear typography, trust badges, and rich project gallery layouts.",
      technicalArchitecture: "Semantic HTML5 structure paired with responsive CSS styling, smooth scrolling, and modular JavaScript for interactive elements.",
      authentication: "N/A — Commercial client showcase and lead generation portal.",
      database: "Flat content structure optimized for fast rendering and high mobile reliability.",
      deployment: "Deployed on production hosting infrastructure with custom domain integration.",
      challenges: "Presenting a broad range of technical services (Solar, Inverters, CCTV, Wiring) clearly while keeping mobile navigation frictionless.",
      lessonsLearned: "Clear phone and WhatsApp call-to-actions are the highest-converting elements for local engineering and installation services.",
      metrics: "Live production website serving clients across Lagos and Ogun State.",
    },
  },
    {
        id: "stream-eta-kohl",
        number: "07",
        name: "STREAM ETA KOH L",
        category: "WEB APP · PRODUCT",
        filterCategories: ["WEB APPS", "EXPERIMENTS"],
        year: "2026",
        liveUrl: "https://stream-eta-kohl.vercel.app/",
        description: "A modern streaming platform offering curated video content and live streams.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
        role: "Full-Stack Developer",
        isFeatured: false,
        previewType: "app",
        previewImage: "/stream-eta-kohl-preview.png",
        mockupDetails: {
            badge: "STREAMING PLATFORM",
            stats: [
                { label: "Focus", value: "Video Streaming" },
                { label: "Architecture", value: "Serverless SPA" },
                { label: "Deployment", value: "Vercel Edge" },
            ],
            features: [
                "Live streaming integration",
                "Responsive video player UI",
                "User authentication with OAuth",
                "Content discovery and categorization",
            ],
        },
    },
];

export const CLIENT_BUSINESS_WORK: ClientBusinessWork[] = [
  {
    id: "quafix-plugs",
    name: "QUAFIX PLUGS",
    category: "Google Business Profile Setup",
    contribution: "Google Business Profile Setup, Website & Digital Catalog",
    description: "Helped establish the digital presence for an electrical hardware, power fixtures, and accessories business in Nigeria — including Google Business Profile setup and a modern catalog website.",
    tech: ["Google Business Profile", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://quafixplugs.netlify.app",
    googleProfileUrl: "https://www.google.com/maps/search/?api=1&query=Quafix+Plugs+Nigeria",
    previewImage: "/client-quafix.png",
  },
  {
    id: "adeshina-gadget",
    name: "ADESHINA GADGET",
    category: "Google Business Profile Setup",
    contribution: "Google Business Profile Setup & Digital Product Showcase",
    description: "Set up Google Business Profile and built a sleek web showcase for a smartphone and consumer tech gadget retailer to present device inventories and reach local customers online.",
    tech: ["Google Business Profile", "React", "Tailwind CSS"],
    googleProfileUrl: "https://www.google.com/maps/search/?api=1&query=Adeshina+Gadget+Nigeria",
    previewImage: "/client-adeshina.png",
  },
  {
    id: "k-tech",
    name: "K-TECH",
    category: "Google Business Profile Setup",
    contribution: "Google Business Profile Setup & Service Portfolio Directory",
    description: "Configured Google Business Profile and built a professional digital service directory for a technology repair, maintenance, and hardware hub.",
    tech: ["Google Business Profile", "HTML5", "Tailwind CSS", "JavaScript"],
    googleProfileUrl: "https://www.google.com/maps/search/?api=1&query=K-TECH+Technology+Nigeria",
    previewImage: "/client-ktech.png",
  },
  {
    id: "aby-gadgets",
    name: "ABY GADGETS",
    category: "Google Business Profile Setup",
    contribution: "Google Business Profile Setup & E-Catalog Web Interface",
    description: "Set up Google Business Profile and built a clean mobile-first web interface presenting mobile electronics, accessories, and direct order channels for a local gadget retailer.",
    tech: ["Google Business Profile", "React", "Vite", "Tailwind CSS"],
    googleProfileUrl: "https://www.google.com/maps/search/?api=1&query=Aby+Gadgets+Nigeria",
    previewImage: "/client-aby.png",
  },
  {
    id: "softy-gadgets",
    name: "SOFTY GADGETS",
    category: "Google Business Profile Setup",
    contribution: "Google Business Profile Setup & Frontend Product Showcase",
    description: "Established Google Business Profile and built a modern retail product showcase to elevate customer trust and streamline device inquiry workflows for a gadget retailer.",
    tech: ["Google Business Profile", "JavaScript", "Tailwind CSS", "Netlify"],
    googleProfileUrl: "https://www.google.com/maps/search/?api=1&query=Softy+Gadgets+Nigeria",
    previewImage: "/client-softy.png",
  },
  {
    id: "hibee-computer",
    name: "HIBEE COMPUTER TECHNOLOGY",
    category: "Google Business Profile Setup",
    contribution: "Google Business Profile Setup & Web Service Catalog",
    description: "Set up Google Business Profile and built a web presence detailing computer sales, software troubleshooting, and hardware engineering services for this technology business.",
    tech: ["Google Business Profile", "HTML5", "CSS3", "Responsive Architecture"],
    googleProfileUrl: "https://www.google.com/maps/search/?api=1&query=Hibee+Computer+Technology+Nigeria",
    previewImage: "/client-hibee.png",
  },
  {
    id: "oluwadamilare-electrical",
    name: "OLUWAMILARE ELECTRICAL & SOLAR",
    category: "Client Work · Website Development",
    contribution: "Full Website Design, Development & Deployment",
    description: "Professional website built for an electrical, solar panel installation, inverter systems, and CCTV security business based in Ijebu Ode, Ogun State, Nigeria. Includes service showcase, project gallery, and direct contact/quote flow.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://oluwadamilareeletrical.com/",
    previewImage: "/client-oluwadamilare.png",
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
