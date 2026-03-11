import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "CTF Writeup: Web Challenge 'Hidden Admin'",
    description:
        "Step-by-step walkthrough of a web CTF challenge involving forced browsing, directory enumeration, and privilege escalation to reach a hidden admin panel.",
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "CTF Writeup: Web Challenge 'Hidden Admin'",
    author: { '@type': 'Person', name: 'John Mayoka', url: 'https://www.mayoka.dev' },
    datePublished: '2024-10-28',
    description:
        "Step-by-step walkthrough of a web CTF challenge involving forced browsing, directory enumeration, and privilege escalation to reach a hidden admin panel.",
};

export default function CtfHiddenAdminPage() {
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
