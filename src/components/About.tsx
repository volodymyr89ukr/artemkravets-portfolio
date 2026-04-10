import { siteConfig, testimonials } from '@/data/site';

export function About() {
  return (
    <section id="about" className="container-shell py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">

        {/* About text */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: 'var(--accent)' }}>
            About
          </p>
          <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Artem Kravets
          </h2>
          <div className="space-y-5 text-sm leading-8" style={{ color: 'var(--muted)' }}>
            <p>
              Based in Vienna, I work at the intersection of fashion and portrait photography —
              creating images that are editorial in feel, yet deeply personal in nature.
            </p>
            <p>
              Every session is a collaboration. I work closely with each person to build
              an atmosphere where they can be themselves — and the camera follows.
            </p>
            <p>
              Vienna's architecture, parks, and light are an endless source of inspiration.
              I shoot both on location across the city and in studio.
            </p>
          </div>
          <div className="mt-10 flex gap-6">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.3em] transition hover:opacity-60"
              style={{ color: 'var(--accent)' }}
            >
              Instagram ↗
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.3em] transition hover:opacity-60"
              style={{ color: 'var(--muted)' }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-5">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-2xl p-8"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <p
                className="text-lg leading-9 italic"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                "{testimonial.text}"
              </p>
              <footer className="mt-6 text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
                — {testimonial.name}
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
