import { siteConfig } from '@/data/site';

export function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center">
      <div className="container-shell w-full grid gap-0 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_600px] py-16 lg:py-0 lg:gap-16 items-center">

        {/* Text side */}
        <div className="flex flex-col justify-center order-2 lg:order-1 py-8 lg:py-24">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Artem Kravets
          </h1>
          <p className="mt-6 max-w-md text-base leading-8" style={{ color: 'var(--foreground)' }}>
            Art Photographer &amp; Art Director based in Vienna, Austria
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full border px-7 py-3 text-sm font-medium tracking-widest uppercase transition hover:bg-white hover:text-black"
              style={{ borderColor: 'var(--border)' }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full px-7 py-3 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              Book a Session
            </a>
          </div>
          <div className="mt-14 flex items-center gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.3em] transition hover:opacity-60"
              style={{ color: 'var(--muted)' }}
            >
              Instagram
            </a>
            <span style={{ color: 'var(--border)' }}>·</span>
            <span className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--muted)' }}>
              Vienna, Austria
            </span>
          </div>
        </div>

        {/* Photo side */}
        <div className="order-1 lg:order-2 lg:self-stretch flex items-center">
          <div className="w-full overflow-hidden lg:h-full lg:min-h-screen">
            <img
              src={siteConfig.heroImage}
              alt="Artem Kravets — Vienna Fashion Photographer"
              className="w-full h-[65vw] lg:h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
