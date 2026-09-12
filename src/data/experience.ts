import { ExperienceItem, EducationItem, AchievementItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    role: 'Application Developer Intern',
    company: 'NexaNova ProTech',
    location: 'Pune, Maharashtra',
    period: 'Oct 2025 – Apr 2026',
    type: 'Internship',
    responsibilities: [
      'Applied Java and object-oriented programming concepts to design modular server components.',
      'Developed robust backend functionality using Spring Boot and Spring MVC architecture.',
      'Designed, built, and consumed RESTful APIs supporting client integration.',
      'Designed and queried MySQL relational databases ensuring data integrity and transactional safety.',
      'Implemented secure user authentication, session handling mechanisms, and form validation routines.',
      'Collaborated on React-based user interface components to deliver seamless full-stack user journeys.',
      'Utilized Git and GitHub workflows for source code version control, branching, and pull request reviews.'
    ],
    technologiesUsed: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'MySQL', 'React.js', 'Git']
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Electronics and Computer Engineering',
    institution: 'MIT ADT University',
    period: '2021 – 2025',
    score: '6.93',
    scoreLabel: 'CGPA',
    details: 'Comprehensive coursework in Software Engineering, Object-Oriented Design, Computer Networks, and Microprocessors.'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Maharashtra State Board',
    period: 'Completed 2021',
    score: '88.67%',
    scoreLabel: 'Percentage',
    details: 'Physics, Chemistry, Mathematics, and Computer Science foundation.'
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'Best Research Paper',
    award: 'Outstanding Paper Presentation Award',
    project: 'Admission Assistant Robot',
    description:
      'Recognized for conceptualizing and presenting a novel automated robotic assistant framework designed to streamline university admissions inquiries and campus guidance through intelligent dialog mapping.',
    year: '2024'
  }
];

export const aboutHighlights = [
  {
    number: '01',
    title: 'Backend Development',
    description:
      'Designing robust REST APIs, business services, and database layers with Spring Boot and clean architecture patterns.'
  },
  {
    number: '02',
    title: 'Problem Solving',
    description:
      'Analyzing requirements methodically, applying OOP design principles, and writing maintainable, well-structured Java code.'
  },
  {
    number: '03',
    title: 'Continuous Learning',
    description:
      'Consistently exploring modern tech stacks, hands-on full-stack development, and integrating emerging tools like AI services.'
  }
];

export const journeyTimeline = [
  {
    year: '2021',
    title: 'Started Engineering',
    subtitle: 'MIT ADT University',
    description: 'Embarked on Bachelor of Technology in Electronics and Computer Engineering.'
  },
  {
    year: '2025',
    title: 'Graduated in Electronics & Computer Engineering',
    subtitle: 'MIT ADT University',
    description: 'Completed graduation with 6.93 CGPA, strengthening core systems and algorithms.'
  },
  {
    year: '2025–2026',
    title: 'Application Developer Internship',
    subtitle: 'NexaNova ProTech, Pune',
    description: 'Hands-on enterprise Java, Spring Boot, MySQL, and full-stack development.'
  },
  {
    year: '2026',
    title: 'Building AI-Powered Placement Assistant',
    subtitle: 'Independent Flagship Initiative',
    description: 'Architecting an adaptive technical interview preparation platform with Java & AI APIs.'
  }
];
