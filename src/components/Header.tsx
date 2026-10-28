'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center" aria-label="AVP Sports home">
          <Image
            src="/AVP%20Sports%20Shop%20Cricket%20Logo.png"
            alt="AVP Sports logo"
            width={280}
            height={88}
            priority
            className="h-16 w-auto object-contain md:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[var(--avp-amber)]'
                    : 'text-[var(--avp-ink)] hover:text-[var(--avp-green)]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--avp-brown)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[var(--avp-amber)]"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[var(--avp-ink)] transition-colors hover:bg-[var(--avp-bg)] md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="container flex flex-col gap-2 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--avp-green)]/10 text-[var(--avp-green)]'
                      : 'text-[var(--avp-ink)] hover:bg-[var(--avp-bg)]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--avp-brown)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
