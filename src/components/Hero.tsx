import { ArrowRight, Download } from 'lucide-react';
import { downloadAtharvResume } from '../utils/resumeDownloader';

const HERO_IMAGE_URL = 'https://i.ibb.co/WpzzCyrc/Chat-GPT-Image-Sep-12-2026-12-02-28-PM-1.png';
const FALLBACK_HERO_IMAGE = '/assets/atharv-kawalase-hero.png';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onOpenResumeModal, onOpenContact }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern bg-radial-gradient"
    >
      {/* Decorative ambient blurred glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#2563EB]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-[#FACC15]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN - Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111827] border border-slate-800 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-wider text-[#CBD5E1] uppercase">
                Available For Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-[#F8FAFC]">Atharv.</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#FACC15]">
                  Java Backend Developer
                </span>
              </h2>
            </div>

            {/* Core Message & Supporting Paragraph */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl font-medium text-[#F8FAFC]/90">
                Building reliable backend systems and practical full-stack applications.
              </p>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Software developer focused on building reliable backend systems, REST APIs, database-driven applications, and practical full-stack solutions. Passionate about clean architecture, relational database design, and continuously learning modern technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2">
                <a
                  id="hero-cta-download-resume"
                  href="/assets/Atharv-Kawalase-Resume.pdf"
                  download="Atharv-Kawalase-Resume.pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    downloadAtharvResume();
                  }}
                  className="px-5 py-3.5 rounded-xl bg-[#111827] hover:bg-[#151C2C] text-[#F8FAFC] font-semibold text-sm border border-slate-700/80 hover:border-[#FACC15]/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#FACC15]" />
                  <span>Download Resume</span>
                </a>

                <button
                  id="hero-cta-view-resume-modal"
                  onClick={onOpenResumeModal}
                  className="p-3.5 rounded-xl bg-[#111827]/70 hover:bg-[#151C2C] text-[#94A3B8] hover:text-[#F8FAFC] border border-slate-800 text-xs font-mono transition-colors"
                  title="Quick View Resume"
                >
                  View
                </button>
              </div>

              <button
                id="hero-cta-connect-link"
                onClick={onOpenContact}
                className="text-sm font-medium text-[#CBD5E1] hover:text-[#FACC15] flex items-center gap-1.5 px-3 py-2 transition-colors group"
              >
                <span>Let's Connect</span>
                <span className="text-[#3B82F6] group-hover:text-[#FACC15] group-hover:translate-x-1 transition-all">→</span>
              </button>
            </div>

            {/* Quick Tech Highlights Strip */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-[#94A3B8]">Core Stack:</span>
              <div className="flex flex-wrap gap-2">
                {['Java 17+', 'Spring Boot', 'REST APIs', 'MySQL', 'React', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0D1220] text-[#CBD5E1] border border-slate-800 flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Developer Profile Photo */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/20 via-[#3B82F6]/15 to-[#FACC15]/10 rounded-3xl filter blur-2xl -z-10" />

            {/* Clean Portrait Frame - Pure image with elegant styling */}
            <div className="relative w-full max-w-md rounded-3xl bg-[#0D1220] border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden">
              <img
                id="hero-developer-portrait"
                src={HERO_IMAGE_URL}
                alt="Atharv Kawalase - Java Backend Developer"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover object-top filter contrast-[1.02] brightness-95 transition-transform duration-500 hover:scale-[1.01]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_HERO_IMAGE;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
