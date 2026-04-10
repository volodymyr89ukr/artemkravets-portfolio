import { navLinks } from '@/data/site';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b" style={{ borderColor: 'var(--border)', background: 'rgba(8,8,8,0.85)', backdropFilter: 'blur(20px)' }}>
      <div className="container-shell flex items-center justify-between py-5">
        <a
          href="#top"
          className="text-sm font-medium tracking-[0.3em] uppercase"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', letterSpacing: '0.25em' }}
        >
          Artem Kravets
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex" style={{ color: 'var(--muted)' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
        >
          Book
        </a>
      </div>
    </header>
  );
}
