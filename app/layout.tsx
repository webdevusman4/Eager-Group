import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './(site)/site.css';
import { DevRouteSwitcher } from '@/components/DevRouteSwitcher';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const description =
  'Corporate sales training, business consultancy and executive programmes led by Iftikhar Ahmed, founder of Eager Group, Karachi.';

export const metadata: Metadata = {
  metadataBase: new URL('https://eagertrainings.com'),
  title: {
    default: 'Eager Consulting & Training | Iftikhar Ahmed',
    template: '%s | Eager Consulting & Training',
  },
  description,
  applicationName: 'Eager Consulting & Training',
  appleWebApp: { title: 'Eager', statusBarStyle: 'default' },
  formatDetection: { telephone: true },
  openGraph: {
    siteName: 'Eager Consulting & Training',
    title: 'Eager Consulting & Training | Iftikhar Ahmed',
    description,
    type: 'website',
    locale: 'en_PK',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#0A1260',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <DevRouteSwitcher />
      </body>
    </html>
  );
}
