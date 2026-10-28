'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--avp-ink)]/95 text-white backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center" aria-label="AVP Sports home">
          <Image
            src="/AVPsportsshop.png"
            alt="AVP Sports logo"
            width={360}
            height={112}
            priority
            className="h-[5rem] w-auto object-contain md:h-[6rem]"
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
                    : 'text-white/85 hover:text-[var(--avp-amber)]'
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
            className="inline-flex items-center justify-center rounded-full bg-[var(--avp-amber)] px-5 py-2.5 text-sm font-semibold text-[var(--avp-ink)] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[var(--avp-ink)] md:hidden">
          <nav className="container flex flex-col gap-2 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--avp-amber)]/15 text-[var(--avp-amber)]'
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--avp-amber)] px-5 py-2.5 text-sm font-semibold text-[var(--avp-ink)]"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
