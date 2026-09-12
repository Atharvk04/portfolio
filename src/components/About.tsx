import { aboutHighlights, journeyTimeline } from '../data/experience';
import { Server, BrainCircuit, Sparkles, Calendar, GraduationCap, Briefcase, Rocket } from 'lucide-react';

export default function About() {
  const getTimelineIcon = (year: string) => {
    if (year === '2021') return <Calendar className="w-4 h-4 text-[#3B82F6]" />;
    if (year === '2025') return <GraduationCap className="w-4 h-4 text-[#FACC15]" />;
    if (year.includes('2025–2026')) return <Briefcase className="w-4 h-4 text-[#3B82F6]" />;
    return <Rocket className="w-4 h-4 text-[#22C55E]" />;
  };

  return (
    <section id="about" className="py-24 relative bg-[#0D1220]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-800 text-[#3B82F6] font-mono text-xs font-medium">
            <span>&lt;biography /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            I’m a Java-focused software developer who enjoys building practical applications and solving backend problems. My development experience includes Java, Spring Boot, REST APIs, databases, authentication, and full-stack application development.
          </p>
        </div>

        {/* 3 Highlight Cards (01, 02, 03) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {aboutHighlights.map((highlight) => {
            const getIcon = () => {
              if (highlight.number === '01') return <Server className="w-6 h-6 text-[#3B82F6]" />;
              if (highlight.number === '02') return <BrainCircuit className="w-6 h-6 text-[#FACC15]" />;
              return <Sparkles className="w-6 h-6 text-[#22C55E]" />;
            };

            return (
              <div
                key={highlight.number}
                className="group relative p-8 rounded-2xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#FACC15]">
                      {highlight.number}
                    </span>
                    <div className="p-3 rounded-xl bg-[#080B14] border border-slate-800 group-hover:border-[#3B82F6]/40 transition-colors">
                      {getIcon()}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-2.5 tracking-tight group-hover:text-[#3B82F6] transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                  <span>Core Pillar</span>
                  <span className="text-[#3B82F6] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Timeline / Journey */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#111827]/70 border border-slate-800 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] flex items-center gap-2">
                <span>Professional Journey</span>
                <span className="w-2 h-2 rounded-full bg-[#FACC15]"></span>
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                Milestones in academics, practical internships, and active engineering projects
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#080B14] border border-slate-800 text-xs font-mono text-[#CBD5E1] self-start sm:self-auto">
              2021 — 2026+
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {journeyTimeline.map((item, idx) => (
              <div key={item.year} className="relative group">
                {/* Connecting line on desktop */}
                {idx < journeyTimeline.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-12 right-0 h-[2px] bg-gradient-to-r from-slate-700 to-slate-800 -z-0" />
                )}

                <div className="relative z-10 flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#080B14] border border-slate-700 flex items-center justify-center shadow-md group-hover:border-[#3B82F6] transition-colors">
                    {getTimelineIcon(item.year)}
                  </div>
                  <span className="font-mono text-sm font-bold text-[#FACC15] bg-[#080B14]/80 px-2 py-0.5 rounded border border-slate-800">
                    {item.year}
                  </span>
                </div>

                <div className="space-y-1.5 pl-1">
                  <h4 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-[#3B82F6]">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
