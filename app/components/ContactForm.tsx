'use client';
import { useState, FormEvent, useRef } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error('Failed');

      setStatus('sent');
      formRef.current?.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Name</label>
        <input
          type="text"
          className="form-input"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input
          type="email"
          className="form-input"
          id="email"
          name="email"
          placeholder="your@email.com"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea
          className="form-textarea"
          id="message"
          name="message"
          placeholder="Tell me about your project or opportunity..."
          required
        />
      </div>
      <button type="submit" className="form-submit" disabled={status === 'loading'}>
        {status === 'sent' ? (
          '✓ Message Sent!'
        ) : status === 'error' ? (
          <span style={{ color: 'var(--red, #ff3c5a)' }}>✗ Failed — try again</span>
        ) : status === 'loading' ? (
          '⟳ Sending...'
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
