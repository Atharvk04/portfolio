import { Download, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { downloadAtharvResume } from '../utils/resumeDownloader';

interface ResumeCtaProps {
  onOpenResumeModal: () => void;
}

export default function ResumeCta({ onOpenResumeModal }: ResumeCtaProps) {
  return (
    <section id="resume" className="py-20 relative bg-[#080B14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#111827] via-[#0D1220] to-[#151C2C] border border-slate-700/80 p-8 sm:p-12 overflow-hidden shadow-2xl shadow-black/80">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080B14] border border-slate-800 text-[#FACC15] font-mono text-xs font-medium">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Interested in my profile?
              </h2>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                Download my resume to learn more about my experience, skills, and projects. Open to full-time junior/entry-level Java Backend and Full Stack Developer roles.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#CBD5E1] pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  Verified Education
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  Internship Experience
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  Technical Projects
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                id="resume-section-download-btn"
                href="/assets/Atharv-Kawalase-Resume.pdf"
                download="Atharv-Kawalase-Resume.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  downloadAtharvResume();
                }}
                className="px-6 py-3.5 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Resume</span>
              </a>

              <button
                id="resume-section-view-btn"
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl bg-[#151C2C] hover:bg-[#1E293B] text-[#F8FAFC] font-semibold text-sm border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Eye className="w-4 h-4 text-[#3B82F6]" />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
