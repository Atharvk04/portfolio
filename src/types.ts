export interface Project {
  id: string;
  name: string;
  status?: string;
  isFeatured?: boolean;
  category: ('Java' | 'Spring Boot' | 'Full Stack' | 'Web' | 'Other')[];
  shortDescription: string;
  fullOverview: string;
  problemSolved: string;
  architecture: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  category: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  technologiesUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  details?: string;
}

export interface AchievementItem {
  title: string;
  award: string;
  project: string;
  description: string;
  year: string;
}
