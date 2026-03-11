import type { Metadata } from 'next';
import { Space_Mono, Syne, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mayoka.dev'),
  title: {
    default: 'John Mayoka | Security Engineer & Web Developer NYC',
    template: '%s | John Mayoka',
  },
  description:
    'John Mayoka — self-taught full-stack web developer and security engineer in NYC. Next.js, React, TypeScript, security-first development. Available for freelance and full-time roles.',
  keywords: [
    'John Mayoka',
    'security engineer NYC',
    'web developer New York',
    'full-stack developer',
    'Next.js developer',
    'React developer for hire',
    'cybersecurity developer',
    'freelance web developer NYC',
    'bug bounty hunter',
    'CTF player',
    'TypeScript developer',
    'mayoka.dev',
  ],
  authors: [{ name: 'John Mayoka', url: 'https://www.mayoka.dev' }],
  creator: 'John Mayoka',
  publisher: 'John Mayoka',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mayoka.dev',
    siteName: 'John Mayoka',
    title: 'John Mayoka | Security Engineer & Full-Stack Web Developer NYC',
    description:
      'I build web apps. Then I try to break them. Next.js developer with a security-first mindset — available for freelance & full-time in NYC.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'John Mayoka — Security Engineer & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@johnmayoka',
    creator: '@johnmayoka',
    title: 'John Mayoka | Security Engineer & Full-Stack Developer NYC',
    description: 'I build web apps. Then I try to break them.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.mayoka.dev',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  category: 'technology',
  verification: {
    google: '596b1253811c3ed8',
  },
  other: {
    'theme-color': '#00ff88',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'John Mayoka',
  },
};

const jsonLdSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.mayoka.dev/#person',
    name: 'John Mayoka',
    url: 'https://www.mayoka.dev',
    email: 'john@mayoka.dev',
    jobTitle: 'Full-Stack Web Developer & Security Engineer',
    description:
      'Self-taught web developer and cybersecurity engineer based in New York City. Specializing in Next.js, React, TypeScript, and security-first development.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    sameAs: [
      'https://github.com/JMYK1',
      'https://linkedin.com/in/johnmayoka',
      'https://x.com/johnmayoka',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Cybersecurity',
      'OWASP',
      'CTF',
      'Bug Bounty',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.mayoka.dev/#website',
    url: 'https://www.mayoka.dev',
    name: 'John Mayoka | Security Engineer & Full-Stack Developer',
    description:
      'Personal portfolio of John Mayoka — full-stack web developer and cybersecurity engineer based in New York City.',
    publisher: { '@id': 'https://www.mayoka.dev/#person' },
    inLanguage: 'en-US',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://www.mayoka.dev/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.mayoka.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://www.mayoka.dev/#about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Projects',
        item: 'https://www.mayoka.dev/#projects',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Skills',
        item: 'https://www.mayoka.dev/#skills',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Security Tools',
        item: 'https://www.mayoka.dev/#security-tools',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Writeups',
        item: 'https://www.mayoka.dev/#writeups',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Contact',
        item: 'https://www.mayoka.dev/#contact',
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York City" />
        {jsonLdSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
