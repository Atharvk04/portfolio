import { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight, Sparkles, Server, Terminal, Database, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'Java', 'Spring Boot', 'Full Stack', 'Web', 'Other'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter as any);
  });

  const featuredProject = projectsData.find((p) => p.isFeatured);
  const regularProjects = filteredProjects.filter((p) => !p.isFeatured || activeFilter !== 'All');

  return (
    <section id="projects" className="py-24 relative bg-[#0D1220]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-800 text-[#3B82F6] font-mono text-xs font-medium">
              <span>&lt;portfolio &amp; work /&gt;</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8]">
              Things I've built and worked on, demonstrating clean architecture, REST API design, and practical full-stack solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/30'
                    : 'bg-[#111827] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#151C2C] border border-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED PROJECT HERO CARD (Shown prominently when "All" or relevant filter is selected) */}
        {featuredProject && (activeFilter === 'All' || featuredProject.category.includes(activeFilter as any)) && (
          <div className="mb-14 group">
            <div className="relative rounded-3xl bg-[#111827] border border-slate-700/80 hover:border-[#3B82F6]/60 transition-all duration-300 shadow-2xl shadow-black/60 overflow-hidden p-6 sm:p-10">
              {/* Background gradient accents */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left content */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#2563EB]/20 text-[#3B82F6] border border-[#2563EB]/40">
                      <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
                      Featured Project
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#FACC15]/15 text-[#FACC15] border border-[#FACC15]/30">
                      Under Development
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight group-hover:text-[#3B82F6] transition-colors">
                    {featuredProject.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>

                  {/* Highlights Bullet Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#94A3B8]">
                    {featuredProject.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0D1220] text-[#CBD5E1] border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => onSelectProject(featuredProject)}
                      className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                    >
                      <span>Explore Architecture &amp; Features</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-[#0D1220] hover:bg-[#151C2C] text-[#F8FAFC] font-semibold text-xs border border-slate-700/80 flex items-center gap-2 transition-all hover:border-slate-600"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Interactive Mockup / Architecture Preview */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => onSelectProject(featuredProject)}
                    className="cursor-pointer rounded-2xl bg-[#080B14] border border-slate-800/90 p-5 shadow-inner hover:border-[#3B82F6]/50 transition-all space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#CBD5E1]">
                        <Terminal className="w-4 h-4 text-[#3B82F6]" />
                        <span>ai-interview-system.flow</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#22C55E]/15 text-[#22C55E]">
                        Spring ➔ AI API
                      </span>
                    </div>

                    {/* Architecture diagram cards */}
                    <div className="space-y-2.5 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#3B82F6]" />
                          <span>Candidate Resume Parser</span>
                        </div>
                        <span className="text-[10px] text-[#94A3B8]">PDF / Text</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#111827] border border-[#2563EB]/40 flex items-center justify-between shadow-sm shadow-blue-500/10">
                        <div className="flex items-center gap-2 text-[#3B82F6]">
                          <Server className="w-4 h-4 text-[#FACC15]" />
                          <span>Spring Boot AI Pipeline</span>
                        </div>
                        <span className="text-[10px] text-[#FACC15]">Prompt &amp; Eval Engine</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-[#22C55E]" />
                          <span>MySQL Historical Archives</span>
                        </div>
                        <span className="text-[10px] text-[#94A3B8]">JPA / Hibernate</span>
                      </div>
                    </div>

                    <div className="pt-2 text-center text-xs text-[#3B82F6] flex items-center justify-center gap-1 font-medium">
                      <span>Click to inspect technical details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* OTHER PROJECTS GRID */}
        <div className={`grid grid-cols-1 ${regularProjects.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {regularProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#111827] border border-slate-800/90 hover:border-[#3B82F6]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between overflow-hidden"
            >
              {/* Card top banner/icon */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#080B14] text-[#3B82F6] border border-slate-800">
                    {project.category.join(' • ')}
                  </span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-1.5 rounded-lg bg-[#080B14] text-[#94A3B8] hover:text-[#FACC15] border border-slate-800 hover:border-slate-700 transition-colors"
                    title="View details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight mb-2.5 group-hover:text-[#3B82F6] transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-3 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Key features bullets */}
                <div className="space-y-1.5 mb-5 text-xs text-[#CBD5E1]">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#FACC15]"></span>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0D1220] text-[#CBD5E1] border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono text-[#94A3B8]">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-3 border-t border-slate-800/80 bg-[#0D1220]/40 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-[#CBD5E1] hover:text-[#FACC15] flex items-center gap-1 transition-colors"
                >
                  <span>Project Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#94A3B8] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
