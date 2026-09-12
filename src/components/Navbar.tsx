import { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Background blur after scrolling
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section spy
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#FACC15] z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080B14]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            id="brand-logo"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#151C2C] to-[#0D1220] border border-slate-700/60 flex items-center justify-center text-[#F8FAFC] font-mono font-bold text-sm tracking-wider shadow-inner group-hover:border-[#3B82F6]/50 transition-colors">
              <span className="text-[#3B82F6] group-hover:text-[#FACC15] transition-colors">A</span>
              <span>K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[#F8FAFC] flex items-center gap-1.5">
                Atharv Kawalase
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
              </span>
              <span className="text-[11px] font-mono text-[#94A3B8] tracking-wider flex items-center gap-1">
                <Terminal className="w-3 h-3 text-[#3B82F6]" />
                Java Backend Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 bg-[#111827]/60 border border-slate-800/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full ${
                    isActive
                      ? 'text-[#F8FAFC] bg-[#151C2C] border border-[#3B82F6]/30 shadow-sm shadow-[#2563EB]/10'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#FACC15] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-cta-talk"
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-[#FACC15] hover:bg-[#FDE047] active:scale-95 transition-all shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/20"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl bg-[#111827] border border-slate-800 text-[#CBD5E1] hover:text-white hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden animate-fade-in"
        >
          <div
            id="mobile-menu-panel"
            onClick={(e) => e.stopPropagation()}
            className="fixed top-[70px] right-4 left-4 p-5 rounded-2xl bg-[#0D1220] border border-slate-800/90 shadow-2xl space-y-3"
          >
            <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider px-2">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#151C2C] text-[#FACC15] border border-[#3B82F6]/30 font-semibold'
                        : 'text-[#CBD5E1] hover:bg-[#111827] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <div className="pt-2 border-t border-slate-800/80">
              <button
                id="mobile-nav-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-[#FACC15] text-slate-900 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
