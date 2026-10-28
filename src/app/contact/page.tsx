import { Mail, MessageCircle, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

const contactCards = [
  { title: 'Call Us', value: '8056673453 / 9600582605', href: 'tel:+918056673453', icon: Phone },
  { title: 'WhatsApp Us', value: '8056673453', href: 'https://wa.me/918056673453', icon: MessageCircle },
  { title: 'Email Us', value: 'test@gmail.com', href: 'mailto:test@gmail.com', icon: Mail },
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[var(--avp-bg)] py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--avp-green)]">Contact</p>
            <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.05em] text-[var(--avp-ink)] md:text-6xl">
              Contact AVP Sports
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-[var(--avp-ink)]/75">
              Connect with our team for product enquiries, general assistance, and personalised guidance for your sporting needs.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map(({ title, value, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-black/5 bg-white p-4 shadow-[0_20px_40px_rgba(17,17,17,0.04)] transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--avp-green)]/10 text-[var(--avp-green)]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--avp-ink)]/60">{title}</p>
                    <p className="mt-1 text-base font-semibold text-[var(--avp-ink)]">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_rgba(17,17,17,0.06)] md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--avp-brown)] text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--avp-ink)]/60">Business contact</p>
                <h2 className="text-2xl font-black uppercase tracking-[-0.04em] text-[var(--avp-ink)]">Get in touch</h2>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
