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
    formData.append('access_key', siteConfig.web3formsKey);
    formData.append('subject', 'New inquiry from artemkravets.com');
    formData.append('from_name', 'artemkravets.com');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      const data = await response.json();

      if (!response.ok || !data.success) throw new Error(data.message || 'Form submission failed.');

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
          <h2 className="text-4xl md:text-5xl mb-8">
            Book a Session
          </h2>
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
            <div>
              <span style={{ color: 'var(--accent)' }}>WhatsApp</span>
              <br />
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block hover:text-white transition"
              >
                {siteConfig.whatsapp} ↗
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
          {/* Honeypot — hidden field to trap bots (Web3Forms) */}
          <input type="checkbox" name="botcheck" defaultChecked={false} tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
                Name
              </span>
              <input type="text" name="name" required className={inputClass} style={inputStyle} />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
                Email
              </span>
              <input type="email" name="email" required className={inputClass} style={inputStyle} />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
              Session type
            </span>
            <select name="sessionType" className={inputClass} style={inputStyle} defaultValue="Personal Studio Shooting">
              <option>Personal Studio Shooting</option>
              <option>Personal Outdoor Shooting</option>
              <option>For Brands</option>
            </select>
          </label>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
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
            className="mt-6 rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition hover:opacity-80 disabled:opacity-40"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            {submitState === 'submitting' ? 'Sending…' : 'Send Inquiry'}
          </button>

          {submitState === 'success' ? (
            <p className="mt-5 text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--accent)' }}>
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
