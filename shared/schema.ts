// Static portfolio website - no database schema needed
// All content is hardcoded in the frontend components

// Portfolio data types for type safety (if needed in the future)
export interface PortfolioData {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  experience: WorkExperience[];
  education: Education[];
  contact: ContactInfo;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  projects: Project[];
}

export interface Project {
  name: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  duration: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}
