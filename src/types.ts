export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface ProjectBeforeAfter {
  before: string;
  after: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'AI' | 'SEO' | 'Paid Ads' | 'Websites' | 'Automation' | 'Social Media';
  description: string;
  challenge: string;
  strategy: string;
  execution: string;
  tools: string[];
  results: string;
  metrics: ProjectMetric[];
  beforeAfter?: ProjectBeforeAfter;
  image: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'AI Marketing' | 'SEO' | 'Paid Ads' | 'Growth Marketing' | 'Automation' | 'Content Strategy';
  content: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string; // lucide icon name
  description: string;
  benefits: string[];
  deliverables: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
