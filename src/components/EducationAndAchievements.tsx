import { educationData, achievementsData } from '../data/experience';
import { GraduationCap, Award, Trophy, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';

export default function EducationAndAchievements() {
  return (
    <section id="education" className="py-24 relative bg-[#0D1220]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* EDUCATION COLUMN (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-800 text-[#3B82F6] font-mono text-xs font-medium">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Education
              </h2>
              <p className="text-sm text-[#94A3B8]">
                Academic foundation in computer engineering and software fundamentals.
              </p>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#3B82F6]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-[#CBD5E1]">
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className="text-xs text-[#94A3B8] pt-1 max-w-md">
                        {edu.details}
                      </p>
                    )}
                  </div>

                  <div className="sm:text-right shrink-0">
                    <div className="inline-flex flex-col items-start sm:items-end px-3 py-2 rounded-xl bg-[#080B14] border border-slate-800">
                      <span className="text-xs font-mono text-[#94A3B8] uppercase">
                        {edu.scoreLabel}
                      </span>
                      <span className="text-xl font-mono font-bold text-[#FACC15]">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS COLUMN (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-800 text-[#FACC15] font-mono text-xs font-medium">
                <Trophy className="w-3.5 h-3.5" />
                <span>Honors &amp; Recognition</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Achievements
              </h2>
              <p className="text-sm text-[#94A3B8]">
                Academic research recognition and paper presentations.
              </p>
            </div>

            <div className="space-y-4">
              {achievementsData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-[#FACC15]/40 transition-all duration-300 shadow-xl shadow-black/30 relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#080B14] border border-slate-800 text-[#FACC15] shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#FACC15] bg-[#FACC15]/10 px-2.5 py-0.5 rounded-full border border-[#FACC15]/20 font-semibold">
                          {item.title}
                        </span>
                        <span className="text-xs font-mono text-[#94A3B8]">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#F8FAFC]">
                        {item.project}
                      </h3>
                      <p className="text-xs text-[#3B82F6] font-mono">
                        {item.award}
                      </p>
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
                        {item.description}
                      </p>
                      <div className="pt-2 flex items-center gap-1.5 text-xs text-[#22C55E]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Peer-reviewed presentation</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Research note badge */}
              <div className="p-4 rounded-xl bg-[#080B14] border border-slate-800/80 flex items-center gap-3 text-xs text-[#CBD5E1]">
                <BookOpen className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>
                  Interested in automated conversational agents, dialogue state mapping, and practical algorithmic pipelines.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
