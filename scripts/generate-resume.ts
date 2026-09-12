import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

export function generateResumePdf(): Uint8Array {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
  const pageHeight = doc.internal.pageSize.getHeight(); // 841.89 pt
  const margin = 40;
  const contentWidth = pageWidth - margin * 2; // ~515 pt

  let y = 45;

  // Header background bar accent
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(margin, y - 10, contentWidth, 76, 'F');

  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('ATHARV KAWALASE', margin + 14, y + 18);

  // Subtitle
  doc.setFontSize(10.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(59, 130, 246); // blue-500
  doc.text('Java Backend Developer  |  Software Developer', margin + 14, y + 34);

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225); // slate-300
  doc.text(
    'Pune, Maharashtra, India  |  atharv.04.kawalase@gmail.com  |  github.com/Atharvk04  |  linkedin.com/in/atharv-kawalase',
    margin + 14,
    y + 52
  );

  y += 82;

  // Helper function for section headings
  function drawSectionHeading(title: string, topOffset: number): number {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(30, 58, 138); // blue-900
    doc.text(title.toUpperCase(), margin, topOffset);

    // subtle horizontal line
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.8);
    doc.line(margin, topOffset + 4, margin + contentWidth, topOffset + 4);

    return topOffset + 18;
  }

  // 1. PROFESSIONAL SUMMARY
  y = drawSectionHeading('Professional Summary', y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85); // slate-700
  const summaryText =
    'Results-driven Software Developer specializing in Java, Spring Boot, and relational database systems. Proficient in designing scalable RESTful microservices, crafting optimized MySQL database architectures, and integrating modern React frontends. Passionate about clean code, modular MVC/DAO paradigms, and high-reliability backend engineering.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 12 + 6;

  // 2. TECHNICAL SKILLS
  y = drawSectionHeading('Technical Skills', y);
  doc.setFontSize(9);

  const skills = [
    { category: 'Programming Languages', items: 'Java (Java 8, 17+), C, C++, JavaScript, TypeScript, SQL' },
    { category: 'Backend & Frameworks', items: 'Spring Boot, Spring MVC, Spring Security, Hibernate, JPA, JDBC, Servlets, REST APIs' },
    { category: 'Database Systems', items: 'MySQL (Indexing, Joins, Triggers, Views, Normalization), PostgreSQL' },
    { category: 'Frontend Technologies', items: 'React.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+)' },
    { category: 'Tools & Architecture', items: 'Git, GitHub, Maven, Postman, Linux/Unix Shell, MVC Architecture, DAO Pattern, OOP' }
  ];

  skills.forEach((skill) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`•  ${skill.category}: `, margin + 4, y);
    const catWidth = doc.getTextWidth(`•  ${skill.category}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const splitSkill = doc.splitTextToSize(skill.items, contentWidth - catWidth - 8);
    doc.text(splitSkill, margin + 4 + catWidth, y);
    y += splitSkill.length * 12 + 2;
  });
  y += 6;

  // 3. WORK EXPERIENCE
  y = drawSectionHeading('Professional Experience', y);

  // Role 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Application Developer Intern', margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  const dateStr = 'Oct 2025 – Apr 2026';
  doc.text(dateStr, margin + contentWidth - doc.getTextWidth(dateStr), y);
  y += 13;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(37, 99, 235); // blue-600
  doc.text('NexaNova ProTech — Pune, India', margin, y);
  y += 13;

  const expBullets = [
    'Engineered scalable backend service layers and modular controllers using Java 17 and Spring Boot for core business flows.',
    'Designed, implemented, and rigorously tested production RESTful APIs with Postman, enforcing robust payload validations and status codes.',
    'Formulated optimized MySQL schemas, complex multi-table joins, transactional constraints, and indexes to minimize query latency.',
    'Collaborated with frontend engineers to seamlessly integrate asynchronous React.js components with backend endpoints.',
    'Managed code branching, peer code reviews, pull requests, and automated Maven build lifecycle workflows via Git/GitHub.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  expBullets.forEach((bullet) => {
    const splitBullet = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 10);
    doc.text(splitBullet, margin + 6, y);
    y += splitBullet.length * 11 + 2;
  });
  y += 6;

  // 4. KEY PROJECTS
  y = drawSectionHeading('Key Projects', y);

  // Project 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('AI-Powered Interview Preparation & Placement Assistant', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(37, 99, 235);
  const p1Link = 'github.com/Atharvk04/ai-powered-interview-prep';
  doc.text(p1Link, margin + contentWidth - doc.getTextWidth(p1Link), y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('Tech Stack: Java, Spring Boot, MySQL, REST APIs, React.js, Generative AI APIs, Maven', margin, y);
  y += 12;

  const p1Bullets = [
    'Architected an end-to-end placement prep platform simulating adaptive engineering mock interviews with tailored scoring rubrics.',
    'Developed backend text extraction and resume parsing services to map candidate skill gaps against required technical competencies.',
    'Implemented context-aware AI interview question generation and response evaluation micro-flows with relational performance tracking.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  p1Bullets.forEach((bullet) => {
    const splitBullet = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 10);
    doc.text(splitBullet, margin + 6, y);
    y += splitBullet.length * 11 + 2;
  });
  y += 4;

  // Project 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Online Shopping Cart Web Application', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(37, 99, 235);
  const p2Link = 'github.com/Atharvk04/ShoppingCart';
  doc.text(p2Link, margin + contentWidth - doc.getTextWidth(p2Link), y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('Tech Stack: Java, JSP, Servlets, JDBC, MySQL, HTML5, CSS3, Session Management', margin, y);
  y += 12;

  const p2Bullets = [
    'Built an enterprise e-commerce platform featuring dynamic catalog browsing, session-based carting, and secure user authentication.',
    'Created a comprehensive administrative back-office supporting full CRUD operations on inventory, categories, and order tracking.',
    'Enforced strict ACID transaction guarantees with JDBC connections to ensure consistent stock quantity and billing states.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  p2Bullets.forEach((bullet) => {
    const splitBullet = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 10);
    doc.text(splitBullet, margin + 6, y);
    y += splitBullet.length * 11 + 2;
  });
  y += 6;

  // 5. EDUCATION & HONORS
  y = drawSectionHeading('Education & Academic Achievements', y);

  // Education item 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('B.Tech in Electronics & Computer Engineering  —  MIT ADT University, Pune', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  const edu1Date = '2021 – 2025  |  CGPA: 6.93';
  doc.text(edu1Date, margin + contentWidth - doc.getTextWidth(edu1Date), y);
  y += 13;

  // Education item 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Higher Secondary Certificate (HSC)  —  Maharashtra State Board', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  const edu2Date = 'Completed 2021  |  Score: 88.67%';
  doc.text(edu2Date, margin + contentWidth - doc.getTextWidth(edu2Date), y);
  y += 13;

  // Research award
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const awardText = '•  Best Research Paper Award: Recognized for outstanding presentation on "Admission Assistant Robot" dialogue automation system.';
  const splitAward = doc.splitTextToSize(awardText, contentWidth - 10);
  doc.text(splitAward, margin + 6, y);

  return doc.output('arraybuffer') as unknown as Uint8Array;
}
