import type { Metadata } from 'next';

const title = 'XSS Basics: Understanding Cross-Site Scripting';
const description =
    'Learn how cross-site scripting attacks work, the three types of XSS, real-world examples, and battle-tested prevention strategies for modern web apps.';
const url = 'https://www.mayoka.dev/writeups/xss-basics';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
        title,
        description,
        url,
        type: 'article',
        publishedTime: '2024-12-15T00:00:00Z',
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
    datePublished: '2024-12-15',
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: 'https://www.mayoka.dev/images/og-image.png',
};

export default function XssBasicsPage() {
    return (
        <>
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
