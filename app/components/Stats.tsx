'use client';
import { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(target);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setCount(0);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let cur = 0;
        const step = Math.ceil(target / 40);
        const id = setInterval(() => {
          cur = Math.min(cur + step, target);
          setCount(cur);
          if (cur >= target) clearInterval(id);
        }, 40);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted, target]);

  return (
    <div ref={ref} className="stat-num">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <div className="hero-stats">
      <div>
        <Counter target={6} suffix="+" />
        <div className="stat-label">Projects Shipped</div>
      </div>
      <div>
        <Counter target={50} suffix="+" />
        <div className="stat-label">CTF Challenges</div>
      </div>
      <div>
        <Counter target={8} suffix="+" />
        <div className="stat-label">Certifications</div>
      </div>
    </div>
  );
}
