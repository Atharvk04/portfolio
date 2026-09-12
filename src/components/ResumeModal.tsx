import { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Mail, MapPin } from 'lucide-react';
import { downloadAtharvResume } from '../utils/resumeDownloader';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="resume-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div
        id="resume-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl my-8 p-6 sm:p-10 rounded-2xl bg-[#0D1220] border border-slate-700/80 shadow-2xl shadow-black/90 text-[#F8FAFC] space-y-6 max-h-[90vh] overflow-y-auto"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FACC15]">
            <FileText className="w-4 h-4" />
            <span>ATHARV_KAWALASE_RESUME_PREVIEW</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/assets/Atharv-Kawalase-Resume.pdf"
              download="Atharv-Kawalase-Resume.pdf"
              onClick={(e) => {
                e.preventDefault();
                downloadAtharvResume();
              }}
              className="px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 rounded-lg bg-[#111827] text-[#94A3B8] hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="bg-[#111827] rounded-xl p-6 sm:p-8 border border-slate-800 space-y-6 text-sm text-[#CBD5E1]">
          {/* Header */}
          <div className="border-b border-slate-800 pb-5">
            <h2 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
              Atharv Kawalase
            </h2>
            <p className="text-sm font-mono text-[#3B82F6] font-semibold mt-0.5">
              Java Backend Developer | Software Developer
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#94A3B8] mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#FACC15]" />
                atharv.04.kawalase@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                Pune, Maharashtra, India
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FACC15]">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Software developer focused on building reliable backend systems, REST APIs, database-driven applications, and practical full-stack solutions. Experienced in Java, Spring Boot, Spring MVC, MySQL, and full-stack integration with clean object-oriented architecture.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#3B82F6]">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-[#F8FAFC]">Languages: </span>
                <span>Java, C, C++</span>
              </div>
              <div>
                <span className="font-semibold text-[#F8FAFC]">Backend: </span>
                <span>Spring Boot, Spring MVC, Spring Security, Hibernate, JPA, JDBC, Servlets, REST APIs</span>
              </div>
              <div>
                <span className="font-semibold text-[#F8FAFC]">Databases: </span>
                <span>MySQL, PostgreSQL</span>
              </div>
              <div>
                <span className="font-semibold text-[#F8FAFC]">Frontend &amp; Tools: </span>
                <span>HTML, CSS, JavaScript, React.js, Tailwind CSS, Git, Maven, Postman</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FACC15] flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Work Experience
            </h3>
            <div className="border-l-2 border-[#2563EB]/40 pl-4 space-y-1">
              <div className="flex justify-between items-baseline">
                <h4 className="font-semibold text-[#F8FAFC]">Application Developer Intern</h4>
                <span className="text-xs font-mono text-[#94A3B8]">Oct 2025 – Apr 2026</span>
              </div>
              <p className="text-xs text-[#3B82F6]">NexaNova ProTech — Pune</p>
              <ul className="text-xs text-[#CBD5E1] space-y-1 mt-2 list-disc list-inside">
                <li>Engineered backend functionality and modular controllers with Java and Spring Boot.</li>
                <li>Designed and tested RESTful APIs with Postman, ensuring robust request payload validation.</li>
                <li>Created schema tables, indexes, and transactional queries using MySQL.</li>
                <li>Collaborated with frontend React components and managed branches via Git/GitHub.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#3B82F6] flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </h3>
            <div className="border-l-2 border-slate-700 pl-4 space-y-3 text-xs">
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#F8FAFC]">B.Tech in Electronics and Computer Engineering</span>
                  <span className="font-mono text-[#FACC15]">CGPA: 6.93</span>
                </div>
                <p className="text-[#94A3B8]">MIT ADT University (2021 – 2025)</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#F8FAFC]">Higher Secondary Certificate (HSC)</span>
                  <span className="font-mono text-[#FACC15]">88.67%</span>
                </div>
                <p className="text-[#94A3B8]">Maharashtra State Board (Completed 2021)</p>
              </div>
            </div>
          </div>

          {/* Research & Achievements */}
          <div className="space-y-1">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#22C55E] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Research Recognition
            </h3>
            <p className="text-xs text-[#CBD5E1]">
              <strong className="text-[#F8FAFC]">Best Research Paper Award:</strong> Admission Assistant Robot — Outstanding Paper Presentation on campus dialogue automation systems.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-mono text-[#94A3B8]">
            File: /assets/Atharv-Kawalase-Resume.pdf
          </span>
          <a
            href="/assets/Atharv-Kawalase-Resume.pdf"
            download="Atharv-Kawalase-Resume.pdf"
            onClick={(e) => {
              e.preventDefault();
              downloadAtharvResume();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/20 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
