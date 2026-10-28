import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[var(--avp-ink)] text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1.3fr]">
        <div>
          <div className="mb-5 flex items-center">
            <Image
              src="/AVPsportsshop.png"
              alt="AVP Sports logo"
              width={260}
              height={80}
              className="h-16 w-auto object-contain drop-shadow-[0_5px_14px_rgba(0,0,0,0.22)]"
            />
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/75">
            AVP Sports is built for athletes, enthusiasts, and everyday players who want gear that matches their passion and performance.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Quick Links</h2>
          <ul className="space-y-3 text-sm text-white/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-[var(--avp-amber)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Contact</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <a href="tel:+918056673453" className="transition-colors hover:text-[var(--avp-amber)]">
                8056673453
              </a>
            </li>
            <li>
              <a href="tel:+919600582605" className="transition-colors hover:text-[var(--avp-amber)]">
                9600582605
              </a>
            </li>
            <li>
              <a href="https://wa.me/918056673453" target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--avp-amber)]">
                WhatsApp: 8056673453
              </a>
            </li>
            <li>
              <a href="mailto:test@gmail.com" className="transition-colors hover:text-[var(--avp-amber)]">
                test@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-center text-sm text-white/65 md:flex-row md:justify-between md:text-left">
          <p>© {year} AVP Sports. All rights reserved.</p>
          <p>Built for passion. Ready for performance.</p>
        </div>
      </div>
    </footer>
  );
}
