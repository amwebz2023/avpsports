import Link from 'next/link';
import { ArrowRight, BadgeCheck, Heart, ShieldCheck, Sparkles, Star } from 'lucide-react';

const values = [
  { title: 'Passion', description: 'We care deeply about sport and the energy it brings to everyday life.', icon: Heart },
  { title: 'Quality', description: 'Thoughtful recommendations and dependable essentials for active lifestyles.', icon: Star },
  { title: 'Trust', description: 'Professional service rooted in honesty, clarity, and customer care.', icon: ShieldCheck },
  { title: 'Performance', description: 'Products and guidance that support stronger performance and confidence.', icon: Sparkles },
  { title: 'Customer Satisfaction', description: 'A friendly experience designed around your needs and goals.', icon: BadgeCheck },
];

export default function AboutPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(17,17,17,0.68), rgba(17,17,17,0.4)), url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container py-24 text-white md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-amber)]">About us</p>
            <h1 className="mt-5 text-5xl font-black uppercase tracking-[-0.05em] md:text-7xl">About AVP Sports</h1>
            <p className="mt-5 text-xl text-white/80">Driven by Passion. Inspired by Sport.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-green)]">Brand story</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] text-[var(--avp-ink)]">
              A sports-first brand built around people and performance.
            </h2>
            <p className="mt-6 text-base leading-8 text-[var(--avp-ink)]/75">
              AVP Sports is a sports-focused brand inspired by the energy, discipline, and excitement of active lifestyles. We believe every athlete, enthusiast, and everyday player deserves gear and accessories that truly support their passion and help them feel ready for the moment.
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--avp-ink)]/75">
              Our focus is simple: help people discover sports essentials that suit their goals, while delivering a professional, friendly experience at every step. From everyday training to serious match-day preparation, AVP Sports is here to support every sporting journey.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(17,17,17,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
              alt="Training equipment and sports gear"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--avp-bg)] py-24">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_40px_rgba(17,17,17,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-green)]">Our mission</p>
            <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] text-[var(--avp-ink)]">
              Supporting every sporting journey.
            </h3>
            <p className="mt-5 text-base leading-8 text-[var(--avp-ink)]/75">
              To support every sporting journey by helping customers discover sports equipment and accessories suited to their passion and performance goals.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_40px_rgba(17,17,17,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-green)]">Our vision</p>
            <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] text-[var(--avp-ink)]">
              A trusted sports brand with heart.
            </h3>
            <p className="mt-5 text-base leading-8 text-[var(--avp-ink)]/75">
              To build a trusted sports brand recognized for its customer-focused service, sports enthusiasm, and commitment to quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-green)]">Our values</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] text-[var(--avp-ink)]">
              The values behind the brand.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {values.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-[0_20px_40px_rgba(17,17,17,0.04)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--avp-green)]/10 text-[var(--avp-green)]">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-[var(--avp-ink)]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--avp-ink)]/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="rounded-[2rem] bg-[var(--avp-ink)] px-8 py-10 text-white md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-amber)]">Let&apos;s connect</p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em]">Ready to find your fit?</h2>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--avp-amber)] px-6 py-3 text-sm font-semibold text-[var(--avp-ink)] transition-transform hover:-translate-y-0.5 md:mt-0"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
