export type Category =
  | 'Brand Storytelling'
  | 'Corporate Content'
  | 'Educational Programs'
  | 'Creator Development'
  | 'Public Sector Projects'
  | 'Documentary Production';

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: Category;
  snippet: string;
  coverImage: string;
  duration: string;
  impactMetric: string;
  challenge: string;
  solution: string;
  execution: string;
  results: string[];
  videoUrl?: string; // Mock local/youtube container
  galleryImages: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: { step: number; title: string; desc: string }[];
  deliverables: string[];
  priceRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  projectType: string;
  budgetRange: string;
  projectDetails: string;
}

export interface StrategyResponse {
  projectName: string;
  coreHook: string;
  creativeConcept: string;
  suggestedServices: string[];
  campaignRoadmap: { phase: string; details: string }[];
  strategicAdvice: string;
}
