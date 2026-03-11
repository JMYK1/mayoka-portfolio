import type { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    type: 'article',
    siteName: 'John Mayoka',
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
    images: ['/images/og-image.png'],
  },
};

export default function WriteupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        .wp-wrap{max-width:760px;margin:0 auto;padding:6rem 1.5rem 4rem;color:#e0e0e0;font-family:var(--font-body,'DM Sans',sans-serif)}
        .wp-back{display:inline-block;margin-bottom:2rem;color:#00ff88;text-decoration:none;font-family:var(--font-mono,'Space Mono',monospace);font-size:.9rem}
        .wp-back:hover{text-decoration:underline}
        .wp-meta{display:flex;gap:1rem;flex-wrap:wrap;align-items:center;margin-bottom:1.5rem;font-size:.85rem;color:#8a9bae}
        .wp-tag{background:rgba(0,255,136,.1);color:#00ff88;padding:.2rem .6rem;border-radius:4px;font-size:.75rem;font-family:var(--font-mono,'Space Mono',monospace)}
        .wp-title{font-family:var(--font-display,'Syne',sans-serif);font-size:clamp(1.8rem,5vw,2.6rem);font-weight:800;color:#fff;margin:0 0 1rem;line-height:1.2}
        .wp-body{line-height:1.8;font-size:1.05rem;color:#c0c8d4}
        .wp-body h2{font-family:var(--font-display,'Syne',sans-serif);color:#fff;margin:2rem 0 .75rem;font-size:1.4rem}
        .wp-body p{margin:0 0 1.25rem}
        .wp-body code{background:rgba(0,255,136,.08);color:#00ff88;padding:.15rem .4rem;border-radius:3px;font-family:var(--font-mono,'Space Mono',monospace);font-size:.9rem}
      `}</style>
      {children}
    </>
  );
}
