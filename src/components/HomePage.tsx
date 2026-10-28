'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Dumbbell, ShieldCheck, Sparkles, Trophy, Users, Zap } from 'lucide-react';

const categories = [
  {
    title: 'Cricket',
    description: 'Performance-driven gear for match days, practice and training.',
    image:
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Football',
    description: 'Built for speed, control, and confidence on every touch.',
    image:
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Badminton',
    description: 'Lightweight essentials for agile movement and sharp play.',
    image:
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fitness & Training',
    description: 'Support your routine with training-focused essentials.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sports Accessories',
    description: 'Everyday add-ons to sharpen comfort, focus and performance.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
  },
];

const features = [
  {
    title: 'Quality-Focused Selection',
    description: 'A curated mix of dependable sports essentials for dedicated athletes and active lifestyles.',
    icon: ShieldCheck,
  },
  {
    title: 'Performance-Driven Sports Gear',
    description: 'Products chosen to support movement, confidence, and consistency in every session.',
    icon: Zap,
  },
  {
    title: 'Customer-Focused Service',
    description: 'Helpful guidance and a professional experience designed around your sporting goals.',
    icon: Users,
  },
  {
    title: 'Passion for Sports',
    description: 'Every recommendation reflects the energy and enthusiasm behind the game.',
    icon: Trophy,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(135,169,107,0.25),_white_45%)]">
        <div
          className="absolute inset-0 opacity-95"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(17,17,17,0.76) 0%, rgba(17,17,17,0.35) 40%, rgba(17,17,17,0.15) 100%), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container relative grid min-h-[560px] items-center py-16 md:min-h-[680px] md:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              <Sparkles size={14} className="text-[var(--avp-amber)]" />
              Performance starts here
            </span>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
              GEAR UP.
              <span className="block text-[var(--avp-amber)]">PLAY BOLD.</span>
            </h1>
            <p className="mt-5 text-xl font-medium text-white/90">
              AVP Sports — Built for Passion. Ready for Performance.
            </p>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/80">
              Premium sports essentials and accessories for players who value quality, energy, and a stronger edge in every moment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-[var(--avp-amber)] px-6 py-3.5 text-sm font-semibold text-[var(--avp-ink)] shadow-lg shadow-[var(--avp-amber)]/30 transition-transform hover:-translate-y-0.5"
              >
                Explore AVP Sports
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(17,17,17,0.08)]"
          >
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"
              alt="Athletes training together"
              className="h-[320px] w-full object-cover md:h-[500px]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="max-w-xl"
          >
            <span className="inline-flex rounded-full bg-[var(--avp-green)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--avp-green)]">
              Brand story
            </span>
            <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] text-[var(--avp-ink)] md:text-5xl">
              More Than a Game. It&apos;s a Passion.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--avp-ink)]/75">
              AVP Sports brings together the spirit of sport with a professional, customer-first approach. We help athletes and enthusiasts discover gear and accessories that support their training, confidence, and love for the game.
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--avp-ink)]/75">
              Whether you&apos;re training seriously or simply living an active lifestyle, AVP Sports is here to support your sporting journey with practical recommendations and a premium shopping experience.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--avp-brown)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--avp-amber)]"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--avp-bg)] py-16 md:py-24">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-green)]">Sports categories</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] text-[var(--avp-ink)]">
              Gear for every game.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {categories.map((category, index) => (
              <motion.article
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_40px_rgba(17,17,17,0.06)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[var(--avp-ink)]">{category.title}</h3>
                    <ArrowRight size={18} className="text-[var(--avp-amber)] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm leading-6 text-[var(--avp-ink)]/70">{category.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-green)]">Why choose us</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] text-[var(--avp-ink)]">
              Trusted by players who take sport seriously.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-[0_20px_40px_rgba(17,17,17,0.04)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--avp-green)]/10 text-[var(--avp-green)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--avp-ink)]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--avp-ink)]/70">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(17,17,17,0.72), rgba(17,17,17,0.38)), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative py-16 text-white md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-amber)]">Your edge</p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-tight tracking-[-0.05em] md:text-6xl">
              Your Game. Your Passion. Your Edge.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
              Discover sports essentials that help you move better, train harder, and enjoy every moment on the field.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--avp-amber)] px-6 py-3.5 text-sm font-semibold text-[var(--avp-ink)] transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s Talk <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container rounded-[2rem] bg-[var(--avp-green)]/10 px-6 py-10 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--avp-green)]">Get in touch</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] text-[var(--avp-ink)]">
                Ready to Get in the Game?
              </h2>
              <p className="mt-3 text-base text-[var(--avp-ink)]/70">
                Connect with AVP Sports for enquiries and assistance.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/918056673453"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--avp-brown)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <BadgeCheck size={18} /> Chat on WhatsApp
              </a>
              <a
                href="tel:+918056673453"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--avp-brown)] px-5 py-3 text-sm font-semibold text-[var(--avp-brown)] transition-colors hover:bg-white"
              >
                <Dumbbell size={18} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
