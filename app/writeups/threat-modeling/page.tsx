import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Introduction to Threat Modeling for Developers',
    description:
        'How to think about security during the design phase — identifying threats, ranking risks, and building defenses into your application architecture from day one.',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Introduction to Threat Modeling for Developers',
    author: { '@type': 'Person', name: 'John Mayoka', url: 'https://www.mayoka.dev' },
    datePublished: '2024-08-10',
    description:
        'How to think about security during the design phase — identifying threats, ranking risks, and building defenses into your application architecture from day one.',
};

export default function ThreatModelingPage() {
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="wp-wrap">
                <a href="/#writeups" className="wp-back">← Back to Writeups</a>
                <div className="wp-meta">
                    <span>Aug 10, 2024</span>
                    <span>·</span>
                    <span>6 min read</span>
                    <span>·</span>
                    <span className="wp-tag">Security</span>
                    <span className="wp-tag">Architecture</span>
                    <span className="wp-tag">Design</span>
                </div>
                <h1 className="wp-title">Introduction to Threat Modeling for Developers</h1>
                <div className="wp-body">
                    <p>
                        Most developers think about security during code review — if at all. But the most impactful security
                        decisions happen during the design phase, before a single line of code is written. Threat modeling is
                        the practice of systematically identifying what can go wrong with your system and deciding what to do
                        about it. It&apos;s not just for security teams; every developer should understand the basics.
                    </p>
                    <h2>What Is Threat Modeling?</h2>
                    <p>
                        At its core, threat modeling answers four questions: What are we building? What can go wrong? What are
                        we going to do about it? Did we do a good job? You can apply this to an entire application architecture
                        or a single feature. The key is to think adversarially — put yourself in the attacker&apos;s shoes and ask
                        how each component could be abused, bypassed, or broken.
                    </p>
                    <h2>The STRIDE Framework</h2>
                    <p>
                        Microsoft&apos;s STRIDE model categorizes threats into six types: <strong>Spoofing</strong> (pretending to
                        be someone else), <strong>Tampering</strong> (modifying data), <strong>Repudiation</strong> (denying
                        actions), <strong>Information Disclosure</strong> (leaking data), <strong>Denial of Service</strong>
                        (crashing systems), and <strong>Elevation of Privilege</strong> (gaining unauthorized access). Walk
                        through each category for every component in your data flow diagram. This structured approach ensures
                        you don&apos;t miss entire classes of vulnerabilities.
                    </p>
                    <h2>Building a Data Flow Diagram</h2>
                    <p>
                        Start by drawing how data moves through your system: users, browsers, API servers, databases, third-party
                        services. Mark trust boundaries — the lines where data crosses from one trust level to another, like
                        from the public internet to your internal network. Every trust boundary is a high-priority area for
                        threats. A simple whiteboard diagram is enough; the goal is clarity, not perfection.
                    </p>
                    <h2>Prioritizing and Mitigating</h2>
                    <p>
                        Not every threat needs a fix. Rank threats by likelihood and impact using a simple high/medium/low
                        matrix. A SQL injection vulnerability on a public-facing login form is high-likelihood, high-impact —
                        fix it immediately. A theoretical timing attack on an internal health-check endpoint is low on both
                        axes — document it and move on. For each high-priority threat, define a specific mitigation: input
                        validation, encryption, access control, rate limiting, or monitoring.
                    </p>
                    <h2>Making It a Habit</h2>
                    <p>
                        Threat modeling works best when it&apos;s lightweight and continuous. Don&apos;t save it for quarterly security
                        reviews. Instead, spend 15 minutes threat-modeling every new feature during sprint planning. Over
                        time, thinking adversarially becomes second nature — and your applications become fundamentally
                        more resilient.
                    </p>
                </div>
            </div>
        </>
    );
}
