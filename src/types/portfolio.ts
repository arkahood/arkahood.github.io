export interface Personal {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
  bio: string;
  leetcode: string
}

export interface Skills {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

export interface PortfolioData {
  personal: Personal;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
}