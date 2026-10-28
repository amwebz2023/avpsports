'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      className={`fixed bottom-20 right-20 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--avp-brown)] text-white shadow-[0_18px_35px_rgba(90,62,43,0.32)] transition-all duration-300 hover:bg-[var(--avp-amber)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--avp-amber)]/30 sm:bottom-6 sm:right-24 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
