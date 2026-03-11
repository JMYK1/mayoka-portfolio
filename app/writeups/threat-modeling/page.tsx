import type { Metadata } from 'next';

const title = 'Introduction to Threat Modeling for Developers';
const description =
    'Learn the STRIDE framework, data flow diagrams, and practical threat modeling techniques to build security into your application design from day one.';
const url = 'https://www.mayoka.dev/writeups/threat-modeling';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
        title,
        description,
        url,
        type: 'article',
        publishedTime: '2024-08-10T00:00:00Z',
        authors: ['https://www.mayoka.dev'],
    },
    twitter: { title, description },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: { '@type': 'Person', name: 'John Mayoka', url: 'https://www.mayoka.dev' },
    publisher: { '@type': 'Person', name: 'John Mayoka', url: 'https://www.mayoka.dev' },
    datePublished: '2024-08-10',
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: 'https://www.mayoka.dev/images/og-image.png',
};

export default function ThreatModelingPage() {
    return (
        <>
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
