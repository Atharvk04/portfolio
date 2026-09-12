import { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-details-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div
        id="project-details-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl my-8 p-6 sm:p-8 rounded-2xl bg-[#0D1220] border border-slate-700/80 shadow-2xl shadow-black/90 text-[#F8FAFC] space-y-6 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              {project.isFeatured && (
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#2563EB]/20 text-[#3B82F6] border border-[#2563EB]/40">
                  Featured Project
                </span>
              )}
              {project.status && (
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/40">
                  {project.status}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8FAFC]">
              {project.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl bg-[#111827] border border-slate-800 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />
            Project Overview
          </h4>
          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* Problem Solved */}
        <div className="p-4 rounded-xl bg-[#111827] border border-slate-800 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#FACC15] flex items-center gap-1.5 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
            Problem Solved &amp; Impact
          </h4>
          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            {project.problemSolved}
          </p>
        </div>

        {/* Architecture */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#3B82F6]" />
            System Architecture &amp; Design
          </h4>
          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            {project.architecture}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
            Key Implementation Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-[#CBD5E1] bg-[#111827]/70 p-2.5 rounded-lg border border-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
            Technologies &amp; Tools Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#151C2C] text-[#F8FAFC] border border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#151C2C] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-semibold border border-slate-700 flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#111827] text-[#94A3B8] hover:text-[#F8FAFC] text-xs font-medium border border-slate-800 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
