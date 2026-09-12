import { jsPDF } from 'jspdf';

export function downloadAtharvResume() {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
    const margin = 38;
    const contentWidth = pageWidth - margin * 2;

    let y = 42;

    // Header Background Accent Card
    doc.setFillColor(15, 23, 42); // #0f172a
    doc.roundedRect(margin, y - 8, contentWidth, 78, 4, 4, 'F');

    // Name
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('ATHARV KAWALASE', margin + 14, y + 18);

    // Subtitle / Title
    doc.setFontSize(10.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(59, 130, 246); // #3b82f6
    doc.text('Java Backend Developer  |  Software Developer', margin + 14, y + 35);

    // Contact Information
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(203, 213, 225); // #cbd5e1
    doc.text(
      'Pune, India  |  atharv.04.kawalase@gmail.com  |  github.com/Atharvk04  |  linkedin.com/in/atharv-kawalase',
      margin + 14,
      y + 53
    );

    y += 86;

    // Helper for Section Headings
    function drawSectionHeading(title: string, topOffset: number): number {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(30, 58, 138); // #1e3a8a
      doc.text(title.toUpperCase(), margin, topOffset);

      doc.setDrawColor(203, 213, 225); // #cbd5e1
      doc.setLineWidth(0.75);
      doc.line(margin, topOffset + 4, margin + contentWidth, topOffset + 4);

      return topOffset + 18;
    }

    // 1. PROFESSIONAL SUMMARY
    y = drawSectionHeading('Professional Summary', y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(51, 65, 85); // #334155
    const summary =
      'Results-driven Software Developer specializing in Java, Spring Boot, RESTful API design, and relational database systems. Proficient in building scalable backend architectures, optimizing MySQL schemas, and collaborating with modern React frontend interfaces. Passionate about clean code, robust MVC/DAO design patterns, and engineering high-availability services.';
    const splitSummary = doc.splitTextToSize(summary, contentWidth);
    doc.text(splitSummary, margin, y);
    y += splitSummary.length * 11.5 + 6;

    // 2. TECHNICAL SKILLS
    y = drawSectionHeading('Technical Skills', y);
    doc.setFontSize(8.8);

    const skills = [
      { category: 'Programming Languages', items: 'Java (Java 8, 17+), C, C++, JavaScript, TypeScript, SQL' },
      { category: 'Backend & Frameworks', items: 'Spring Boot, Spring MVC, Spring Security, Hibernate, JPA, JDBC, Servlets, REST APIs' },
      { category: 'Databases & Storage', items: 'MySQL (Indexing, Joins, Triggers, Views, Normalization), PostgreSQL' },
      { category: 'Frontend Technologies', items: 'React.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+)' },
      { category: 'Tools & Architecture', items: 'Git, GitHub, Maven, Postman, Linux/Unix Shell, MVC Architecture, DAO Pattern, OOP' }
    ];

    skills.forEach((skill) => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      const bulletLabel = `•  ${skill.category}: `;
      doc.text(bulletLabel, margin + 4, y);
      const catWidth = doc.getTextWidth(bulletLabel);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      const splitSkill = doc.splitTextToSize(skill.items, contentWidth - catWidth - 8);
      doc.text(splitSkill, margin + 4 + catWidth, y);
      y += splitSkill.length * 11.5 + 2;
    });
    y += 6;

    // 3. PROFESSIONAL EXPERIENCE
    y = drawSectionHeading('Professional Experience', y);

    // Job Title & Date
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text('Application Developer Intern', margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    const dateStr = 'Oct 2025 – Apr 2026';
    doc.text(dateStr, margin + contentWidth - doc.getTextWidth(dateStr), y);
    y += 12;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(37, 99, 235); // #2563eb
    doc.text('NexaNova ProTech — Pune, India', margin, y);
    y += 12;

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
    doc.setFontSize(8);
    doc.setTextColor(37, 99, 235);
    const p1Link = 'github.com/Atharvk04/ai-powered-interview-prep';
    doc.text(p1Link, margin + contentWidth - doc.getTextWidth(p1Link), y);
    y += 12;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Tech Stack: Java, Spring Boot, MySQL, REST APIs, React.js, Generative AI APIs, Maven', margin, y);
    y += 11;

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
    doc.setFontSize(8);
    doc.setTextColor(37, 99, 235);
    const p2Link = 'github.com/Atharvk04/ShoppingCart';
    doc.text(p2Link, margin + contentWidth - doc.getTextWidth(p2Link), y);
    y += 12;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Tech Stack: Java, JSP, Servlets, JDBC, MySQL, HTML5, CSS3, Session Management', margin, y);
    y += 11;

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
    doc.setFontSize(8.8);
    doc.setTextColor(15, 23, 42);
    doc.text('B.Tech in Electronics & Computer Engineering  —  MIT ADT University, Pune', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    const edu1Date = '2021 – 2025  |  CGPA: 6.93';
    doc.text(edu1Date, margin + contentWidth - doc.getTextWidth(edu1Date), y);
    y += 12;

    // Education item 2
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(15, 23, 42);
    doc.text('Higher Secondary Certificate (HSC)  —  Maharashtra State Board', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    const edu2Date = 'Completed 2021  |  Score: 88.67%';
    doc.text(edu2Date, margin + contentWidth - doc.getTextWidth(edu2Date), y);
    y += 12;

    // Research award
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const awardText = '•  Best Research Paper Award: Recognized for outstanding presentation on "Admission Assistant Robot" dialogue automation system.';
    const splitAward = doc.splitTextToSize(awardText, contentWidth - 10);
    doc.text(splitAward, margin + 6, y);

    // Save and trigger clean direct browser download
    doc.save('Atharv-Kawalase-Resume.pdf');
  } catch (err) {
    console.error('Client-side PDF generation fallback:', err);
    // If anything fails, fallback to direct file link
    const link = document.createElement('a');
    link.href = '/assets/Atharv-Kawalase-Resume.pdf';
    link.download = 'Atharv-Kawalase-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
