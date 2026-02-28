'use client';
import { useState } from 'react';

/* ── PASSWORD STRENGTH ── */
function checkStrength(val: string) {
  const checks = [
    [/.{8,}/, 'Length ≥ 8'],
    [/[A-Z]/, 'Uppercase'],
    [/[a-z]/, 'Lowercase'],
    [/[0-9]/, 'Number'],
    [/[^A-Za-z0-9]/, 'Special char'],
    [/.{16,}/, 'Length ≥ 16'],
  ] as [RegExp, string][];

  const passed: string[] = [];
  const failed: string[] = [];
  checks.forEach(([rx, label]) => (rx.test(val) ? passed : failed).push(label));
  const score = passed.length;
  const pct = Math.round((score / checks.length) * 100);
  const color = score <= 2 ? '#ff3c5a' : score <= 4 ? '#ffd600' : '#00ff88';
  const label = score <= 2 ? '⚠ Weak' : score <= 4 ? '◐ Moderate' : '✓ Strong';
  return { score, pct, color, label, passed, failed };
}

function PasswordTool() {
  const [val, setVal] = useState('');
  const [show, setShow] = useState(false);
  const result = val ? checkStrength(val) : null;

  return (
    <div className="tool-card">
      <div className="tool-title">
        🔐 Password Strength
        <span className="tool-badge">100% Offline</span>
      </div>
      <div className="tool-desc">{'// Check if your password meets security criteria'}</div>
      <div style={{ position: 'relative' }}>
        <input
          type={show ? 'text' : 'password'}
          className="tool-input"
          placeholder="Enter a password..."
          value={val}
          onChange={e => setVal(e.target.value)}
        />
      </div>
      {result && (
        <>
          <div className="strength-bar">
            <div
              className="strength-fill"
              style={{ width: result.pct + '%', background: result.color }}
            />
          </div>
          <div className="tool-output">
            <span style={{ color: result.color }}>{result.label}</span>
            {' · '}Score: {result.score}/6{'\n'}
            ✓ {result.passed.join(' · ')}{'\n'}
            {result.failed.length > 0 && `✗ Missing: ${result.failed.join(', ')}`}
          </div>
        </>
      )}
      {!result && (
        <div className="tool-output">→ Waiting for input...</div>
      )}
    </div>
  );
}

/* ── SHA-256 ── */
function SHA256Tool() {
  const [val, setVal] = useState('');
  const [hash, setHash] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!val) return;
    setLoading(true);
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(val));
    const hex = Array.from(new Uint8Array(buf))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    setHash(hex);
    setLoading(false);
  };

  return (
    <div className="tool-card">
      <div className="tool-title">
        #️⃣ SHA-256 Generator
        <span className="tool-badge">100% Offline</span>
      </div>
      <div className="tool-desc">{'// Generate a one-way cryptographic hash'}</div>
      <input
        type="text"
        className="tool-input"
        placeholder="Enter text to hash..."
        value={val}
        onChange={e => setVal(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && generate()}
      />
      <button className="tool-btn" onClick={generate}>
        {loading ? '⟳ Hashing...' : 'Hash →'}
      </button>
      <div className="tool-output">{hash || '→ Hash will appear here...'}</div>
    </div>
  );
}

/* ── JWT DECODER ── */
function JWTTool() {
  const [val, setVal] = useState('');
  const [out, setOut] = useState('');
  const [err, setErr] = useState(false);

  const decode = () => {
    if (!val) return;
    setErr(false);
    try {
      const [, payload] = val.trim().split('.');
      const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
      setOut(JSON.stringify(decoded, null, 2));
    } catch {
      setErr(true);
      setOut('✗ Invalid JWT — check the token format');
      setTimeout(() => setErr(false), 2000);
    }
  };

  return (
    <div className="tool-card">
      <div className="tool-title">
        🔑 JWT Decoder
        <span className="tool-badge">100% Offline</span>
      </div>
      <div className="tool-desc">{'// Decode and inspect JSON Web Token payloads'}</div>
      <input
        type="text"
        className="tool-input"
        placeholder="Paste a JWT token..."
        value={val}
        onChange={e => setVal(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && decode()}
      />
      <button className="tool-btn" onClick={decode}>Decode →</button>
      <div className="tool-output" style={err ? { color: 'var(--red)' } : {}}>
        {out || '→ Decoded payload will appear here...'}
      </div>
    </div>
  );
}

export default function SecurityTools() {
  return (
    <div className="tools-grid">
      <PasswordTool />
      <SHA256Tool />
      <JWTTool />
    </div>
  );
}
