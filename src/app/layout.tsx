import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ENIGMA 5.0 — GENESIS: BEYOND THE FUTURE | CSI SIESGST',
  description:
    'ENIGMA 5.0 Hackathon on 26 September at SIES GST College. A 24-hour sprint tackling Healthcare, Finance, and Sustainability with a ₹25,000 prize pool.',
  keywords: [
    'ENIGMA 5.0',
    'GENESIS',
    'BEYOND THE FUTURE',
    'SIES GST College',
    'CSI SIESGST',
    '24 Hour Hackathon',
    'Healthcare',
    'Finance',
    'Sustainability',
    '26 September',
  ],
  authors: [{ name: 'CSI SIESGST Student Chapter' }],
  openGraph: {
    title: 'ENIGMA 5.0 — GENESIS: BEYOND THE FUTURE',
    description: '26 September • SIES GST College • 24 Hours • 4 Members / Team • ₹25,000 Prize Pool.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ENIGMA 5.0',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENIGMA 5.0 — GENESIS: BEYOND THE FUTURE',
    description: '26 September • SIES GST College • 24 Hours • ₹25K Prize Pool.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#06060a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@800;900&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#06060a] text-zinc-100 antialiased selection:bg-purple-600 selection:text-white min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
