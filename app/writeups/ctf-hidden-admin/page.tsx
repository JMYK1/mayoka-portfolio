import type { Metadata } from 'next';

const title = "CTF Writeup: Hidden Admin Web Challenge";
const description =
    'Step-by-step CTF walkthrough: forced browsing, directory enumeration, JWT forgery, and privilege escalation to capture the flag in a web challenge.';
const url = 'https://www.mayoka.dev/writeups/ctf-hidden-admin';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
        title,
        description,
        url,
        type: 'article',
        publishedTime: '2024-10-28T00:00:00Z',
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
    datePublished: '2024-10-28',
    description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: 'https://www.mayoka.dev/images/og-image.png',
};

export default function CtfHiddenAdminPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="wp-wrap">
                <a href="/#writeups" className="wp-back">← Back to Writeups</a>
                <div className="wp-meta">
                    <span>Oct 28, 2024</span>
                    <span>·</span>
                    <span>5 min read</span>
                    <span>·</span>
                    <span className="wp-tag">CTF</span>
                    <span className="wp-tag">Writeup</span>
                    <span className="wp-tag">Web</span>
                </div>
                <h1 className="wp-title">CTF Writeup: Web Challenge &apos;Hidden Admin&apos;</h1>
                <div className="wp-body">
                    <p>
                        This challenge presented a seemingly simple blog application with a login form. The goal was to find
                        and access a hidden admin panel to retrieve the flag. No source code was provided — just a URL and a
                        hint: &quot;Not everything is linked.&quot;
                    </p>
                    <h2>Initial Reconnaissance</h2>
                    <p>
                        I started by browsing the application normally. The site had a homepage, a few blog posts, and a
                        standard login form. Viewing the page source revealed nothing unusual — no hidden comments, no
                        JavaScript clues. The login form posted to <code>/api/auth</code> and returned generic error messages,
                        ruling out easy SQL injection. Time to look deeper.
                    </p>
                    <h2>Directory Enumeration</h2>
                    <p>
                        The hint about unlisted pages pointed toward forced browsing. I used <code>gobuster</code> with a
                        common wordlist: <code>gobuster dir -u http://target -w common.txt</code>. Within seconds, it
                        revealed <code>/admin</code>, <code>/backup</code>, and <code>/debug</code>. The <code>/admin</code>
                        path returned a 403 Forbidden, <code>/backup</code> returned a 404, but <code>/debug</code> returned
                        a 200 with an interesting JSON response containing environment variables — including a
                        <code>SESSION_SECRET</code>.
                    </p>
                    <h2>Cookie Manipulation</h2>
                    <p>
                        Examining the cookies, I found a <code>session</code> cookie that looked like a signed JWT. Decoding
                        it on jwt.io revealed a payload with <code>{`{\"role\": \"user\", \"id\": 1}`}</code>. Since I now had the
                        <code>SESSION_SECRET</code> from the debug endpoint, I could forge a new token. I changed
                        <code>role</code> to <code>admin</code>, re-signed the JWT with the leaked secret, and replaced my
                        browser cookie.
                    </p>
                    <h2>Capturing the Flag</h2>
                    <p>
                        Refreshing <code>/admin</code> with the forged cookie bypassed the 403 and loaded the admin dashboard.
                        The flag was displayed at the top of the page: <code>FLAG{`{h1dd3n_4dm1n_p4n3l}`}</code>. The entire
                        chain — from recon to flag — took about 12 minutes.
                    </p>
                    <h2>Key Takeaways</h2>
                    <p>
                        This challenge reinforced several important lessons: never expose debug endpoints in production,
                        always keep secrets out of environment dumps, implement proper role-based access control that
                        doesn&apos;t rely solely on client-side tokens, and remember that security through obscurity (hiding
                        the admin path) is not a real defense. Every endpoint must enforce authorization independently.
                    </p>
                </div>
            </div>
        </>
    );
}
