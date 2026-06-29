export interface Profile {
  name: string;
  title: string;
  tagline: string;
  resumeUrl: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  githubDisplay: string;
  linkedin: string;
  linkedinDisplay: string;
}

export interface SummarySegment {
  type: "text" | "strong";
  content: string;
  color?: "primary" | "accent";
}

export interface Summary {
  segments: SummarySegment[];
}

export interface SkillCategory {
  title: string;
  icon: "code" | "settings" | "cloud" | "bot";
  color: "blue" | "green" | "purple";
  skills: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface ExperienceProject {
  name: string;
  description?: string;
  achievements: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  accentColor: "primary" | "accent";
  projects: ExperienceProject[];
}

export interface Experience {
  jobs: WorkExperience[];
}

export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  duration: string;
}

export interface Education {
  entries: EducationEntry[];
}
