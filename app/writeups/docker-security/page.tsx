import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Docker Security Basics for Web Developers',
    description:
        'Essential Docker security practices — minimal base images, non-root users, secret management, image scanning, and network isolation for containerized web apps.',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Docker Security Basics for Web Developers',
    author: { '@type': 'Person', name: 'John Mayoka', url: 'https://www.mayoka.dev' },
    datePublished: '2024-07-05',
    description:
        'Essential Docker security practices — minimal base images, non-root users, secret management, image scanning, and network isolation for containerized web apps.',
};

export default function DockerSecurityPage() {
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
                    <span>Jul 5, 2024</span>
                    <span>·</span>
                    <span>5 min read</span>
                    <span>·</span>
                    <span className="wp-tag">Docker</span>
                    <span className="wp-tag">DevOps</span>
                    <span className="wp-tag">Security</span>
                </div>
                <h1 className="wp-title">Docker Security Basics for Web Developers</h1>
                <div className="wp-body">
                    <p>
                        Docker makes deployment reproducible and portable, but it also introduces security concerns that many
                        web developers overlook. A misconfigured container can expose your host system, leak secrets, or give
                        attackers a persistent foothold. Here are the essential security practices every developer should follow
                        when containerizing web applications.
                    </p>
                    <h2>Use Minimal Base Images</h2>
                    <p>
                        Start with the smallest image possible. Instead of <code>node:20</code> (which includes a full Debian
                        installation), use <code>node:20-alpine</code> or even a distroless image. Fewer packages mean fewer
                        vulnerabilities. A typical <code>node:20</code> image has over 400 known CVEs at any given time; the
                        Alpine variant typically has under 10. Multi-stage builds let you install build tools in one stage and
                        copy only the compiled output to a minimal runtime image.
                    </p>
                    <h2>Never Run as Root</h2>
                    <p>
                        By default, Docker containers run as root. If an attacker breaks out of your application, they&apos;re root
                        inside the container — and with certain misconfigurations, root on the host. Add a <code>USER</code>
                        instruction to your Dockerfile: create a non-root user with <code>addgroup</code> and
                        <code>adduser</code>, then switch to it. Set filesystem permissions explicitly so your app can only
                        read and write what it needs.
                    </p>
                    <h2>Manage Secrets Properly</h2>
                    <p>
                        Never bake secrets (API keys, database passwords, tokens) into your Docker image. Anyone who pulls
                        the image can extract them. Use environment variables injected at runtime, Docker secrets (in Swarm),
                        or a vault service. Add a <code>.dockerignore</code> file that excludes <code>.env</code>,
                        <code>.git</code>, and <code>node_modules</code> to prevent accidental inclusion of sensitive files
                        in the build context.
                    </p>
                    <h2>Scan Images Regularly</h2>
                    <p>
                        Use <code>docker scout</code>, Trivy, or Snyk to scan your images for known vulnerabilities before
                        deploying. Integrate scanning into your CI/CD pipeline so that every push is checked automatically.
                        Set a policy: no critical or high-severity CVEs in production images. Pin your base image versions
                        to avoid surprise upgrades that introduce new vulnerabilities.
                    </p>
                    <h2>Network Isolation</h2>
                    <p>
                        Don&apos;t expose ports you don&apos;t need. Use Docker networks to isolate services — your database container
                        should never be reachable from the public internet. Only the reverse proxy or API gateway should have
                        external port mappings. Use <code>read_only: true</code> in your compose file to mount the container
                        filesystem as read-only, preventing attackers from writing malicious files even if they gain shell access.
                    </p>
                </div>
            </div>
        </>
    );
}
