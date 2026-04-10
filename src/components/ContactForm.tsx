'use client';

import { FormEvent, useState } from 'react';
import { siteConfig } from '@/data/site';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorText, setErrorText] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState('submitting');
    setErrorText('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });

      if (!response.ok) throw new Error('Form submission failed.');

      form.reset();
      setSubmitState('success');
    } catch (error) {
      console.error(error);
      setSubmitState('error');
      setErrorText('Something went wrong. Please try again or reach out directly by email.');
    }
  }

  const inputClass =
    'w-full rounded-xl px-5 py-3.5 text-sm text-white outline-none transition focus:border-white/40 bg-transparent';
  const inputStyle = { border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)' };

  return (
    <section id="contact" className="container-shell py-20 md:py-28">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">

        {/* Left */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: 'var(--accent)' }}>
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Book a Session
          </h2>
          <p className="text-sm leading-8 mb-10" style={{ color: 'var(--muted)' }}>
            Based in Vienna, available for sessions across the city
            and surrounding area. Also open to travel for editorial and commercial projects.
          </p>
          <div className="space-y-4 text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
            <div>
              <span style={{ color: 'var(--accent)' }}>Email</span>
              <br />
              <a href={`mailto:${siteConfig.email}`} className="mt-1 block hover:text-white transition">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <span style={{ color: 'var(--accent)' }}>Instagram</span>
              <br />
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block hover:text-white transition"
              >
                @artemkravetsofficial ↗
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 md:p-10"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted)' }}>
                Name
              </span>
              <input type="text" name="name" required className={inputClass} style={inputStyle} />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted)' }}>
                Email
              </span>
              <input type="email" name="email" required className={inputClass} style={inputStyle} />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted)' }}>
              Session type
            </span>
            <select name="sessionType" className={inputClass} style={inputStyle} defaultValue="Fashion Session">
              <option>Fashion Session</option>
              <option>Portrait Session</option>
              <option>Creative Editorial</option>
              <option>Other</option>
            </select>
          </label>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted)' }}>
              Message
            </span>
            <textarea
              name="message"
              rows={5}
              required
              className={inputClass}
              style={{ ...inputStyle, resize: 'none' }}
            />
          </label>

          <button
            type="submit"
            disabled={submitState === 'submitting'}
            className="mt-6 rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.25em] font-medium transition hover:opacity-80 disabled:opacity-40"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            {submitState === 'submitting' ? 'Sending…' : 'Send Inquiry'}
          </button>

          {submitState === 'success' ? (
            <p className="mt-5 text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>
              Thank you — I'll be in touch soon.
            </p>
          ) : null}
          {submitState === 'error' ? (
            <p className="mt-5 text-xs" style={{ color: '#f87171' }}>
              {errorText}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
