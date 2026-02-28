'use client';
import { useEffect, useRef } from 'react';

const LINES = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'john_mayoka · security_engineer', cls: 'green' },
  { type: 'cmd', text: 'cat skills.txt' },
  { type: 'out', text: 'Next.js · React · TypeScript', cls: 'cyan' },
  { type: 'out', text: 'Node.js · PostgreSQL · Docker', cls: 'cyan' },
  { type: 'cmd', text: 'ls ./security/' },
  { type: 'out', text: 'owasp/  ctf/  burpsuite/  bugbounty/', cls: '' },
  { type: 'cmd', text: 'echo $STATUS' },
  { type: 'out', text: '✓ AVAILABLE FOR WORK', cls: 'green' },
  { type: 'prompt', text: '' },
] as const;

export default function Terminal() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const idxRef  = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const render = () => {
      const el = bodyRef.current;
      if (!el || idxRef.current >= LINES.length) return;

      const l   = LINES[idxRef.current++];
      const div = document.createElement('div');
      div.className = 't-line';

      if (l.type === 'cmd') {
        div.innerHTML = `<span class="t-prompt">john@mayoka:~$</span><span class="t-cmd">&nbsp;${l.text}</span>`;
      } else if (l.type === 'out') {
        div.innerHTML = `<span class="t-out ${l.cls}">${l.text}</span>`;
      } else {
        div.innerHTML = `<span class="t-prompt">john@mayoka:~$</span>&nbsp;<span class="t-cursor"></span>`;
      }

      el.appendChild(div);
      el.scrollTop = el.scrollHeight;

      if (idxRef.current < LINES.length) {
        timer = setTimeout(render, l.type === 'cmd' ? 520 : 220);
      }
    };

    timer = setTimeout(render, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-terminal">
      <div className="terminal-header">
        <div className="t-dot red" />
        <div className="t-dot yellow" />
        <div className="t-dot green" />
        <span className="terminal-title">~/mayoka.dev — bash</span>
      </div>
      <div ref={bodyRef} className="terminal-body" />
    </div>
  );
}
