import Nav from './components/Nav';
import Cursor from './components/Cursor';
import Terminal from './components/Terminal';
import Stats from './components/Stats';
import SecurityTools from './components/SecurityTools';
import ContactForm from './components/ContactForm';
import Reveal from './components/Reveal';

/* ────────── DATA ────────── */
const PROJECTS = [
  {
    featured: true,
    icon: '🌐',
    type: 'Portfolio · Security',
    name: 'Portfolio Website',
    desc: 'My personal security engineer portfolio. 3D visuals, security tool demos, and zero bloat. Deep dive into 3D web graphics and performance optimization.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Spline 3D'],
    github: 'https://github.com/JMYK1/portfolio',
    demo: 'https://mayoka.dev',
  },
  {
    icon: '📊',
    type: 'Security · Dashboard',
    name: 'Log Analyzer Dashboard',
    desc: 'Parse, visualize, and flag anomalies in server logs in real time. Pattern recognition in log data and data visualization at scale.',
    tags: ['React', 'D3.js', 'Node.js', 'SQLite'],
    github: 'https://github.com/JMYK1/log-analyzer-dashboard',
  },
  {
    icon: '🔐',
    type: 'Security · Client-Side',
    name: 'Password Hygiene Checker',
    desc: 'Analyze password strength offline. Nothing leaves your browser. Built with the Web Crypto API for fully private, client-side analysis.',
    tags: ['TypeScript', 'Web Crypto', 'React'],
    github: 'https://github.com/JMYK1/password',
  },
  {
    icon: '🔗',
    type: 'Security · Detection',
    name: 'URL Parser & Phishing Detector',
    desc: 'Spot phishing URLs by dissecting patterns completely offline. Analyzes URL anatomy and detects common social engineering techniques.',
    tags: ['TypeScript', 'Regex', 'React'],
    github: 'https://github.com/JMYK1/URL-perser-Phishing-Risk',
  },
  {
    icon: '✅',
    type: 'Full-Stack · SaaS',
    name: 'Task Manager App',
    desc: 'Full-stack task app with real-time sync and team collaboration. Deep dive into real-time communication patterns and database optimization.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/JMYK1/Task-Manager-App',
  },
  {
    icon: '🚩',
    type: 'Security · Education',
    name: 'CTF Writeups Collection',
    desc: 'Solved CTF challenges, explained step-by-step for learners. Problem-solving under pressure and security research methodology.',
    tags: ['Markdown', 'Next.js', 'MDX'],
    github: 'https://github.com/JMYK1/CTF-Writeup-Collection-',
  },
];

const SKILLS = [
  { cat: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3'] },
  { cat: 'Backend', items: ['Node.js', 'Express', 'Python', 'REST APIs', 'PostgreSQL', 'MongoDB'] },
  { cat: 'Security', items: ['OWASP Top 10', 'Burp Suite', 'Network Basics', 'CTF Challenges', 'Secure Coding', 'Threat Modeling'] },
  { cat: 'Tooling', items: ['Git', 'VS Code', 'Postman', 'Figma', 'Chrome DevTools', 'Linux CLI'] },
  { cat: 'DevOps', items: ['Docker', 'Vercel', 'GitHub Actions', 'Nginx', 'AWS Basics', 'CI/CD'] },
];

const WRITEUPS = [
  { date: 'Dec 15\n2024', title: 'XSS Basics: Understanding Cross-Site Scripting', desc: 'A beginner-friendly deep dive into XSS vulnerabilities, how they work, and how to prevent them.', tags: ['Security', 'Web', 'XSS'], mins: 6 },
  { date: 'Nov 20\n2024', title: 'Building Secure APIs: A Practical Guide', desc: 'Best practices for API security including authentication, rate limiting, and input validation.', tags: ['Security', 'API', 'Backend'], mins: 8 },
  { date: 'Oct 28\n2024', title: "CTF Writeup: Web Challenge 'Hidden Admin'", desc: 'Walkthrough of a web CTF challenge involving forced browsing and privilege escalation.', tags: ['CTF', 'Writeup', 'Web'], mins: 5 },
  { date: 'Sep 15\n2024', title: 'React Performance: Beyond the Basics', desc: 'Advanced techniques for optimizing React apps, from memo to virtualization.', tags: ['React', 'Performance', 'Frontend'], mins: 7 },
  { date: 'Aug 10\n2024', title: 'Introduction to Threat Modeling for Developers', desc: 'How to think about security during the design phase of your applications.', tags: ['Security', 'Architecture', 'Design'], mins: 6 },
  { date: 'Jul 5\n2024', title: 'Docker Security Basics for Web Developers', desc: 'Essential security practices when containerizing your web applications.', tags: ['Docker', 'DevOps', 'Security'], mins: 5 },
];

/* ────────── ICONS ────────── */
const GH = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLink = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ────────── PAGE ────────── */
export default function HomePage() {
  return (
    <>
      <Cursor />
      <Nav />

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Security Engineer · New York City · Available for Work
          </div>

          <h1 className="hero-title">
            <span className="line1">I build web apps.</span>
            <span className="line2" data-text="Then I break them.">Then I break them.</span>
          </h1>

          <p className="hero-sub">
            Freelance web developer and cybersecurity engineer who ships fast and stays safe.{' '}
            <em>Next.js + TypeScript</em> with a security-first mindset — building hardened frontends,
            secure APIs, and hunting bugs.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
              See What I&apos;ve Built
            </a>
            <a href="#contact" className="btn-secondary">Let&apos;s Talk</a>
            <a href="/resume.pdf" className="btn-ghost" target="_blank" rel="noopener noreferrer">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Resume
            </a>
          </div>

          <Stats />
        </div>

        <Terminal />
      </section>

      <div className="divider" />

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="container">
          <Reveal><div className="section-label">About</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Who Is John Mayoka?</h2></Reveal>
          <div className="about-grid">
            <div className="about-text">
              <Reveal delay={120}>
                <p>I&apos;m a <strong>fully self-taught web developer</strong> based in New York City, with years of hands-on experience building production apps and breaking things to make them stronger. I didn&apos;t learn this in a classroom — I earned it, cert by cert, challenge by challenge.</p>
              </Reveal>
              <Reveal delay={160}>
                <p>Instead of a traditional degree, I forged my skills through rigorous self-study, earning <strong>certifications and badges on GitHub and AWS</strong>, and completing advanced HackTheBox and TryHackMe path labs.</p>
              </Reveal>
              <Reveal delay={200}>
                <p>Right now I&apos;m deep in <strong>React, Next.js, and TypeScript</strong> on the frontend, and sharpening my offensive security skills as an active CTF player and bug bounty hunter. I work at the edge where development meets defense.</p>
              </Reveal>
              <Reveal delay={240}>
                <p>I&apos;m looking for <strong>full-time roles and contracts</strong> where I can build great software and make it secure. If your team ships fast and cares about doing it right — let&apos;s talk.</p>
              </Reveal>
              <Reveal delay={280}>
                <div style={{ marginTop: 32 }}>
                  <a href="#contact" className="btn-primary">Get In Touch →</a>
                </div>
              </Reveal>
            </div>
            <div>
              {[
                { label: '// Current Focus', title: 'What I\'m Working On', body: 'Deep in React, Next.js, and TypeScript. Completing advanced offensive security labs. Active CTF participant and bug bounty hunter on HackerOne and Bugcrowd.' },
                { label: '// Philosophy', title: 'Security-First Development', body: "I don't just build features. I think about how they fail, how they scale, and how they get attacked. Every line of code is a potential attack surface." },
                { label: '// Availability', title: 'Open to Opportunities', body: 'Currently available for freelance contracts and full-time roles. Based in NYC, open to remote or hybrid. Quick turnaround, clean code, zero bloat.' },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 80}>
                  <div className="about-card">
                    <div className="about-card-label">{card.label}</div>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PROJECTS ── */}
      <section id="projects" className="projects-section">
        <div className="container">
          <Reveal><div className="section-label">Projects</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Real Code. Real Impact.</h2></Reveal>
          <Reveal delay={120}><p className="section-desc">From web applications to security tools — each one built to solve a real problem.</p></Reveal>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className={`project-card${p.featured ? ' featured' : ''}`}>
                  {p.featured && <span className="project-featured-badge">Featured</span>}
                  <div className="project-img-placeholder">
                    <div className="project-icon">{p.icon}</div>
                  </div>
                  <div className="project-body">
                    <div className="project-type">{p.type}</div>
                    <h3 className="project-name">{p.name}</h3>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <div className="project-links">
                      <a href={p.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <GH /> GitHub
                      </a>
                      {p.demo && (
                        <a href={p.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                          <ExternalLink /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="container">
          <Reveal><div className="section-label">Skills</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">My Tech Stack</h2></Reveal>
          <Reveal delay={120}><p className="section-desc">A curated set of tools I use to build and secure web applications.</p></Reveal>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <Reveal key={s.cat} delay={i * 60}>
                <div className="skill-category">
                  <div className="skill-cat-name">{'// '}{s.cat}</div>
                  <div className="skill-items">
                    {s.items.map(item => <span key={item} className="skill-item">{item}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SECURITY TOOLS ── */}
      <section id="security-tools" className="tools-section">
        <div className="container">
          <Reveal><div className="section-label">Security Tools</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Mini Security Utilities</h2></Reveal>
          <Reveal delay={120}><p className="section-desc">Client-side tools — all processing happens locally in your browser. No data is ever sent anywhere.</p></Reveal>
          <SecurityTools />
        </div>
      </section>

      <div className="divider" />

      {/* ── WRITEUPS ── */}
      <section id="writeups">
        <div className="container">
          <Reveal><div className="section-label">Writeups</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Notes From the Trenches</h2></Reveal>
          <Reveal delay={120}><p className="section-desc">Technical articles, CTF writeups, and things learned the hard way.</p></Reveal>
          <div className="writeups-list">
            {WRITEUPS.map((w, i) => (
              <Reveal key={w.title} delay={i * 50}>
                <div className="writeup-item">
                  <div className="writeup-date" style={{ whiteSpace: 'pre' }}>{w.date}</div>
                  <div className="writeup-content">
                    <div className="writeup-title">{w.title}</div>
                    <div className="writeup-desc">{w.desc}</div>
                    <div className="writeup-tags">
                      {w.tags.map(t => <span key={t} className="writeup-tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="writeup-read">{w.mins} min → Read</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section">
        <div className="container">
          <Reveal><div className="section-label">Contact</div></Reveal>
          <Reveal delay={80}><h2 className="section-title">Let&apos;s Build Something Together</h2></Reveal>
          <Reveal delay={120}><p className="section-desc">Got a project, a role, or just want to say hi? I&apos;ll get back to you within 24 hours.</p></Reveal>
          <div className="contact-grid">
            <Reveal delay={80}>
              <div>
                <div className="contact-email">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:john@mayoka.dev">john@mayoka.dev</a>
                </div>
                <div className="contact-location">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  New York, USA — Open to Remote
                </div>
                <div className="social-links">
                  <a href="https://github.com/JMYK1" className="social-link" target="_blank" rel="noopener noreferrer">
                    <GH /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/johnmayoka" className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://x.com/johnmayoka" className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X / Twitter
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-copy">
          © 2026 <span>John Mayoka</span>. Built with ☕ and lots of coffee.
        </div>
        <div className="footer-right">mayoka.dev · NYC · Available for Work</div>
      </footer>
    </>
  );
}
