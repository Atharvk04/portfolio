import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-800 text-[#3B82F6] font-mono text-xs font-medium">
            <span>&lt;career history /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Practical hands-on industry experience building production backend features and full-stack modules.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical glowing connector line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-[2px] bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#FACC15]/40 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-20 group">
                {/* Glowing Node on Timeline */}
                <div className="absolute left-[9px] sm:left-[25px] top-6 w-3.5 h-3.5 rounded-full bg-[#080B14] border-2 border-[#FACC15] ring-4 ring-[#2563EB]/20 shadow-[0_0_10px_#FACC15] group-hover:scale-125 transition-transform" />

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-slate-800/90 hover:border-[#3B82F6]/50 transition-all duration-300 shadow-xl shadow-black/40">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-800/80">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#2563EB]/15 text-[#3B82F6] border border-[#2563EB]/30 mb-2">
                        <Briefcase className="w-3 h-3" />
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-base font-semibold text-[#FACC15] mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#94A3B8]">
                      <span className="flex items-center gap-1.5 text-[#CBD5E1]">
                        <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                      Key Contributions &amp; Responsibilities:
                    </h4>
                    <div className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#94A3B8]">Technologies:</span>
                    {exp.technologiesUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0D1220] text-[#CBD5E1] border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
