import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: 'var(--border)' }}>
      <div className="container-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p
          className="text-sm tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--muted)' }}
        >
          Artem Kravets
        </p>
        <div className="flex gap-6 items-center">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.25em] transition hover:text-white"
            style={{ color: 'var(--muted)' }}
          >
            Instagram
          </a>
          <span style={{ color: 'var(--border)' }}>·</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xs uppercase tracking-[0.25em] transition hover:text-white"
            style={{ color: 'var(--muted)' }}
          >
            {siteConfig.email}
          </a>
        </div>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          © 2026 Artem Kravets. Vienna, Austria.
        </p>
      </div>
    </footer>
  );
}
