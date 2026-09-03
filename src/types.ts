export type FilterCategory = 'ALL' | 'PRODUCTS' | 'CLIENT WORK' | 'WEB APPS' | 'EXPERIMENTS';

export interface CaseStudySection {
  number: string;
  title: string;
  content: string;
  highlights?: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface CaseStudyData {
  overview: string;
  problem: string;
  productVision: string;
  userExperience: string;
  design: string;
  technicalArchitecture: string;
  authentication: string;
  database: string;
  deployment: string;
  challenges: string;
  lessonsLearned: string;
  architectureDiagram?: {
    title: string;
    nodes: { label: string; sub: string; type: 'client' | 'server' | 'db' | 'auth' | 'deploy' }[];
  };
  metrics?: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  filterCategories: FilterCategory[];
  year: string;
  liveUrl: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  role: string;
  isFeatured: boolean;
  isClientWork?: boolean;
  caseStudy?: CaseStudyData;
  previewImage: string;
  previewType: 'app' | 'website' | 'dashboard' | 'mobile';
  mockupDetails?: {
    badge: string;
    stats?: { label: string; value: string }[];
    features: string[];
  };
}

export interface ClientBusinessWork {
  id: string;
  name: string;
  category: string;
  contribution: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  googleProfileUrl?: string;
  previewImage: string;
}

export interface Capability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
}

export interface HowIBuildStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}
