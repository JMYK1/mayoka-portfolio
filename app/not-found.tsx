import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist or has been moved.',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <>
            <style>{`
        .nf-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: #080c0f;
          color: #e0e0e0;
          font-family: var(--font-body, 'DM Sans', sans-serif);
          text-align: center;
          padding: 2rem;
        }
        .nf-code {
          font-family: var(--font-mono, 'Space Mono', monospace);
          font-size: clamp(6rem, 20vw, 12rem);
          font-weight: 700;
          color: #00ff88;
          line-height: 1;
          margin: 0;
          text-shadow: 0 0 40px rgba(0, 255, 136, 0.3);
        }
        .nf-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          margin: 1rem 0 0.5rem;
        }
        .nf-desc {
          font-size: 1.1rem;
          color: #8a9bae;
          max-width: 420px;
          margin: 0 0 2rem;
          line-height: 1.6;
        }
        .nf-btn {
          display: inline-block;
          padding: 0.85rem 2rem;
          background: #00ff88;
          color: #080c0f;
          font-family: var(--font-mono, 'Space Mono', monospace);
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          border-radius: 6px;
          transition: box-shadow 0.25s ease, transform 0.15s ease;
        }
        .nf-btn:hover {
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
            <div className="nf-wrap">
                <p className="nf-code">404</p>
                <h1 className="nf-title">Page Not Found</h1>
                <p className="nf-desc">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let&apos;s get you back on track.
                </p>
                <a href="/#hero" className="nf-btn">
                    Go Home
                </a>
            </div>
        </>
    );
}
