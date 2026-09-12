import { Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="py-12 bg-[#080B14] border-t border-slate-850 border-slate-800 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-[#111827] border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-[#3B82F6]">
              AK
            </div>
            <div>
              <h3 className="text-base font-bold text-[#F8FAFC]">
                Atharv Kawalase
              </h3>
              <p className="text-xs font-mono text-[#FACC15] flex items-center justify-center sm:justify-start gap-1">
                <Terminal className="w-3 h-3" />
                Java Backend Developer
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Atharvk04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-[#111827] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#151C2C] border border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/atharv-kawalase"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-[#111827] text-[#94A3B8] hover:text-[#3B82F6] hover:bg-[#151C2C] border border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:atharv.04.kawalase@gmail.com"
              aria-label="Email Atharv"
              className="p-2.5 rounded-xl bg-[#111827] text-[#94A3B8] hover:text-[#FACC15] hover:bg-[#151C2C] border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]">
          <p>© {currentYear} Atharv Kawalase. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with JavaScript, React &amp;</span>
            <Heart className="w-3.5 h-3.5 text-[#EF4444] inline fill-[#EF4444]" />
            <span>passion.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
