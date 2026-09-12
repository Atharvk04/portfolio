import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    category: 'languages',
    skills: [
      { name: 'Java', level: 'Primary Focus', iconName: 'Coffee' },
      { name: 'C', level: 'Core', iconName: 'Code' },
      { name: 'C++', level: 'Core', iconName: 'Code2' }
    ]
  },
  {
    title: 'Backend Development',
    category: 'backend',
    skills: [
      { name: 'Spring Boot', level: 'Framework', iconName: 'Server' },
      { name: 'Spring MVC', level: 'Architecture', iconName: 'Layers' },
      { name: 'Spring Security', level: 'Auth & Roles', iconName: 'Shield' },
      { name: 'Hibernate', level: 'ORM', iconName: 'Database' },
      { name: 'JPA', level: 'Persistence', iconName: 'Binary' },
      { name: 'JDBC', level: 'Data Access', iconName: 'Cpu' },
      { name: 'Servlets', level: 'Java EE', iconName: 'Radio' },
      { name: 'JSP', level: 'Templates', iconName: 'FileCode' },
      { name: 'REST APIs', level: 'Integration', iconName: 'Globe' }
    ]
  },
  {
    title: 'Databases',
    category: 'database',
    skills: [
      { name: 'MySQL', level: 'Relational DB', iconName: 'Database' },
      { name: 'PostgreSQL', level: 'Relational DB', iconName: 'HardDrive' }
    ]
  },
  {
    title: 'Frontend Development',
    category: 'frontend',
    skills: [
      { name: 'HTML5', level: 'Semantic Markup', iconName: 'Layout' },
      { name: 'CSS3', level: 'Styling', iconName: 'Palette' },
      { name: 'JavaScript (ES6+)', level: 'Client Logic', iconName: 'Terminal' },
      { name: 'React.js', level: 'UI Library', iconName: 'Component' },
      { name: 'Tailwind CSS', level: 'Utility Styling', iconName: 'Feather' }
    ]
  },
  {
    title: 'Development Tools',
    category: 'tools',
    skills: [
      { name: 'Git', level: 'Version Control', iconName: 'GitBranch' },
      { name: 'GitHub', level: 'Collaboration', iconName: 'GitFork' },
      { name: 'Maven', level: 'Build Tool', iconName: 'Box' },
      { name: 'Postman', level: 'API Testing', iconName: 'Send' },
      { name: 'Apache Tomcat', level: 'Web Server', iconName: 'Server' },
      { name: 'VS Code', level: 'Editor', iconName: 'Code' },
      { name: 'Eclipse IDE', level: 'Java IDE', iconName: 'Monitor' }
    ]
  },
  {
    title: 'Core Concepts',
    category: 'concepts',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', level: 'Foundation', iconName: 'Blocks' },
      { name: 'Java Collections Framework', level: 'Data Structures', iconName: 'ListOrdered' },
      { name: 'Exception Handling', level: 'Reliability', iconName: 'AlertCircle' },
      { name: 'Multithreading & Concurrency', level: 'Execution', iconName: 'Workflow' },
      { name: 'MVC Architecture', level: 'Design Pattern', iconName: 'LayoutGrid' },
      { name: 'Software Development Life Cycle (SDLC)', level: 'Process', iconName: 'RotateCw' },
      { name: 'Authentication & Session Mgmt', level: 'Security', iconName: 'Key' },
      { name: 'RESTful API Design', level: 'Architecture', iconName: 'Network' }
    ]
  }
];
