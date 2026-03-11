import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Building Secure APIs: A Practical Guide',
    description:
        'Best practices for API security — authentication, authorization, rate limiting, input validation, and error handling to protect your backend services.',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Building Secure APIs: A Practical Guide',
    author: { '@type': 'Person', name: 'John Mayoka', url: 'https://www.mayoka.dev' },
    datePublished: '2024-11-20',
    description:
        'Best practices for API security — authentication, authorization, rate limiting, input validation, and error handling to protect your backend services.',
};

export default function SecureApisPage() {
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
                    <span>Nov 20, 2024</span>
                    <span>·</span>
                    <span>8 min read</span>
                    <span>·</span>
                    <span className="wp-tag">Security</span>
                    <span className="wp-tag">API</span>
                    <span className="wp-tag">Backend</span>
                </div>
                <h1 className="wp-title">Building Secure APIs: A Practical Guide</h1>
                <div className="wp-body">
                    <p>
                        APIs are the backbone of modern web applications, but they also represent a massive attack surface.
                        Every endpoint you expose is a potential entry point for attackers. Building a secure API isn&apos;t about
                        adding security as an afterthought — it needs to be woven into every design decision from the start.
                    </p>
                    <h2>Authentication Done Right</h2>
                    <p>
                        Use short-lived JWTs for stateless authentication and pair them with refresh tokens stored in
                        <code>HttpOnly</code> cookies. Never embed sensitive data in the JWT payload — it&apos;s base64-encoded,
                        not encrypted. Implement token rotation so that if a refresh token is compromised, it can only be used
                        once before invalidation. For server-to-server communication, use API keys with strict IP allowlisting
                        and rotate them on a regular schedule.
                    </p>
                    <h2>Rate Limiting and Throttling</h2>
                    <p>
                        Without rate limiting, your API is vulnerable to brute-force attacks, credential stuffing, and denial-of-service.
                        Implement tiered rate limits: stricter limits on authentication endpoints (e.g., 5 requests per minute)
                        and more relaxed limits on read-heavy routes. Use a sliding window algorithm backed by Redis for
                        distributed environments. Always return a <code>429 Too Many Requests</code> response with
                        a <code>Retry-After</code> header so legitimate clients know when to retry.
                    </p>
                    <h2>Input Validation</h2>
                    <p>
                        Validate every piece of incoming data against a strict schema. Use libraries like Zod or Joi to define
                        expected types, lengths, and patterns. Reject requests that don&apos;t conform rather than trying to sanitize
                        them into shape. Pay special attention to nested objects and arrays — attackers often exploit deeply
                        nested payloads to cause stack overflows or excessive memory consumption (known as &quot;billion laughs&quot;-style attacks).
                    </p>
                    <h2>Error Handling</h2>
                    <p>
                        Never expose stack traces, database errors, or internal paths in API responses. Use generic error
                        messages for clients while logging detailed errors server-side. Differentiate between 4xx (client errors)
                        and 5xx (server errors) consistently. A well-designed error response includes a machine-readable error
                        code, a human-readable message, and a correlation ID for debugging — nothing more.
                    </p>
                    <h2>Defense in Depth</h2>
                    <p>
                        Layer your defenses: validate at the edge with a WAF, enforce authentication in middleware, check
                        authorization at the route level, and validate input in the handler. Use CORS to restrict which
                        origins can call your API. Enable HTTPS everywhere and set security headers like
                        <code>Strict-Transport-Security</code> and <code>X-Content-Type-Options</code>. Security is never a
                        single layer — it&apos;s the sum of many small, deliberate choices.
                    </p>
                </div>
            </div>
        </>
    );
}
