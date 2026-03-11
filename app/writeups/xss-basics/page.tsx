import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'XSS Basics: Understanding Cross-Site Scripting',
    description:
        'A beginner-friendly deep dive into XSS vulnerabilities — how they work, the three main types, real-world examples, and how to prevent them in modern web apps.',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'XSS Basics: Understanding Cross-Site Scripting',
    author: { '@type': 'Person', name: 'John Mayoka', url: 'https://www.mayoka.dev' },
    datePublished: '2024-12-15',
    description:
        'A beginner-friendly deep dive into XSS vulnerabilities — how they work, the three main types, real-world examples, and how to prevent them in modern web apps.',
};

export default function XssBasicsPage() {
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
                    <span>Dec 15, 2024</span>
                    <span>·</span>
                    <span>6 min read</span>
                    <span>·</span>
                    <span className="wp-tag">Security</span>
                    <span className="wp-tag">Web</span>
                    <span className="wp-tag">XSS</span>
                </div>
                <h1 className="wp-title">XSS Basics: Understanding Cross-Site Scripting</h1>
                <div className="wp-body">
                    <p>
                        Cross-Site Scripting (XSS) is one of the most common web security vulnerabilities, consistently appearing
                        in the OWASP Top 10. It occurs when an attacker manages to inject malicious scripts into web pages that
                        other users view. Despite being well-documented, XSS remains prevalent because developers often
                        underestimate just how many injection points exist in modern applications.
                    </p>
                    <h2>The Three Types of XSS</h2>
                    <p>
                        <strong>Reflected XSS</strong> happens when user input is immediately returned by the server without
                        sanitization. A classic example is a search page that displays your query back to you — if the query
                        contains <code>&lt;script&gt;</code> tags, the browser executes them. The payload lives in the URL,
                        making it easy to distribute via phishing links.
                    </p>
                    <p>
                        <strong>Stored XSS</strong> is more dangerous because the malicious script is permanently saved on the
                        target server — typically in a database, comment field, or forum post. Every user who views the affected
                        page becomes a victim. This is the type that leads to large-scale session hijacking and data theft.
                    </p>
                    <p>
                        <strong>DOM-based XSS</strong> occurs entirely on the client side. The vulnerability exists in
                        JavaScript code that reads from a controllable source (like <code>window.location</code>) and writes to
                        a dangerous sink (like <code>innerHTML</code>). The server never sees the payload, making it harder to
                        detect with traditional WAFs.
                    </p>
                    <h2>Real-World Impact</h2>
                    <p>
                        XSS can be leveraged to steal session cookies, redirect users to phishing sites, deface pages, or even
                        perform actions on behalf of authenticated users. In 2018, a stored XSS vulnerability in a major airline&apos;s
                        frequent-flyer portal allowed attackers to steal loyalty points from thousands of accounts. The fix was
                        a single line of output encoding.
                    </p>
                    <h2>Prevention Strategies</h2>
                    <p>
                        The most effective defense is <strong>output encoding</strong> — converting special characters like
                        <code>&lt;</code>, <code>&gt;</code>, and <code>&amp;</code> to their HTML entity equivalents before
                        rendering. Modern frameworks like React handle this automatically through JSX, which escapes values by
                        default. However, using <code>dangerouslySetInnerHTML</code> bypasses this protection entirely.
                    </p>
                    <p>
                        Implement a strong <strong>Content Security Policy (CSP)</strong> header to restrict which scripts can
                        execute. Validate and sanitize all user input on both client and server sides. Use <code>HttpOnly</code> and
                        <code>Secure</code> flags on cookies to limit what XSS can access. Finally, adopt a security-first
                        mindset — treat every piece of user input as potentially malicious until proven otherwise.
                    </p>
                </div>
            </div>
        </>
    );
}
