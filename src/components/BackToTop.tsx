import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#111827]/90 text-[#CBD5E1] hover:text-[#FACC15] hover:bg-[#151C2C] border border-slate-700/80 shadow-xl backdrop-blur-sm transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
