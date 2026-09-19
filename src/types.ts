export type ProjectCategory = 'all' | 'dotnet' | 'crypto' | 'desktop' | 'web' | 'tools';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  importanceRank: number;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  hasInteractiveDemo?: boolean;
  cipherType?: string;
  keyFeatures: string[];
  academicContext?: string;
  isFeatured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  department?: string;
  location: string;
  period: string;
  startDate: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  faculty: string;
  group?: string;
  period: string;
  status: 'In Progress' | 'Completed';
  thesis?: {
    title: string;
    description: string;
    technologies: string[];
  };
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  year: number | string;
  organizer: string;
  rank: string;
  badgeType: 'gold' | 'silver' | 'bronze' | 'special';
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  focusArea: string;
  venueOrContext: string;
  year: string;
  authors: string[];
  summary: string;
  keywords: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Familiar';
  isPrimary?: boolean;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface HardwareItem {
  component: string;
  specification: string;
  details: string;
  iconName: string;
}

export interface LanguageSkill {
  name: string;
  nativeName: string;
  code: 'ro' | 'ru' | 'en';
  level: string;
  cefr: 'C2' | 'C1' | 'B1';
  percentage: number;
  role: string;
}

export type SupportedLanguage = 'en' | 'ro' | 'ru';
