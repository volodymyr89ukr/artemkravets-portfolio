import { siteConfig } from '@/data/site';

export function About() {
  return (
    <section id="about" className="container-shell py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 items-start">

        {/* Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            About Me
          </h2>
          <div className="mt-8 flex gap-6">
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

        {/* Bio */}
        <div className="space-y-5 text-sm leading-8" style={{ color: 'var(--muted)' }}>
          <p>
            My work has been published in magazines such as Sainteight Magazine, Malvie Magazine,
            Goji Magazine, and 17.23 Magazine. A solo exhibition in Ukraine has featured my work in a
            street photography style. Invitations to photograph Ukrainian Fashion Week followed in
            2023 and 2024. Collaboration with European and Ukrainian models, including brands, is an
            ongoing part of my practice. My work has also been included in the Top 10 of the 35AWARDS
            competition (6th and 7th).
          </p>
          <p>
            Both digital and film photography are part of my workflow, with a continuous focus on
            professional development and refinement of craft. A classic approach to photography
            remains a core direction of my style. The greatest sources of inspiration are
            photographers of the 1950s–1970s, as well as old black-and-white films.
          </p>
        </div>

      </div>
    </section>
  );
}
