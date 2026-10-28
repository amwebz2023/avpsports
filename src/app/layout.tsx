import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BackToTop } from '@/components/BackToTop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://avpsports.vercel.app'),
  title: {
    default: 'AVP Sports | Built for Passion. Ready for Performance.',
    template: '%s | AVP Sports',
  },
  description:
    'AVP Sports offers premium sports essentials, accessories, and customer-focused guidance for players who want to play bold.',
  keywords: ['AVP Sports', 'sports gear', 'cricket', 'football', 'fitness'],
  icons: {
    icon: '/AVPsportsshop.png',
    shortcut: '/AVPsportsshop.png',
    apple: '/AVPsportsshop.png',
  },
  openGraph: {
    title: 'AVP Sports',
    description: 'Built for Passion. Ready for Performance.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://avpsports.vercel.app',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <div className="site-shell">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
