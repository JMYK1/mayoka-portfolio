import type { Metadata } from 'next';

const title = 'Building Secure APIs: A Practical Guide';
const description =
    'Master API security with practical techniques for JWT authentication, rate limiting, input validation, and defense-in-depth for backend services.';
const url = 'https://www.mayoka.dev/writeups/secure-apis';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
        title,
        description,
        url,
        type: 'article',
        publishedTime: '2024-11-20T00:00:00Z',
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
    datePublished: '2024-11-20',
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: 'https://www.mayoka.dev/images/og-image.png',
};

export default function SecureApisPage() {
    return (
        <>
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
