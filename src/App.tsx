import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationAndAchievements from './components/EducationAndAchievements';
import ResumeCta from './components/ResumeCta';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import BackToTop from './components/BackToTop';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-[#F8FAFC] selection:bg-[#2563EB] selection:text-white relative">
      {/* Sticky Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        <About />

        <Skills />

        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        <Experience />

        <EducationAndAchievements />

        <ResumeCta onOpenResumeModal={() => setResumeModalOpen(true)} />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* In-App Resume Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

