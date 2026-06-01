import { brandServices } from '@/data/site';

export function ForBrands() {
  return (
    <section id="for-brands" className="container-shell py-20 md:py-28">
      <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
        For Brands
      </h2>

      <p className="max-w-2xl text-base leading-8" style={{ color: 'var(--muted)' }}>
        I am open for collaborations with fashion, art, and lifestyle brands. I create visual
        content for campaigns, collections, and brand storytelling.
      </p>

      <p className="mt-10 mb-6 text-base leading-8" style={{ color: 'var(--muted)' }}>
        I can provide you with such services:
      </p>
      <ul
        className="grid gap-x-10 gap-y-4 sm:grid-cols-2 max-w-3xl text-base leading-7"
        style={{ color: 'var(--foreground)' }}
      >
        {brandServices.map((service) => (
          <li key={service} className="flex gap-3">
            <span style={{ color: 'var(--accent)' }}>—</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>

      <p className="mt-12 max-w-2xl text-sm leading-8" style={{ color: 'var(--muted)' }}>
        Available for studio and on-location projects in Vienna and across Europe.
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-8" style={{ color: 'var(--muted)' }}>
        For collaborations and commercial inquiries, please get in touch.
      </p>
      <a
        href="#contact"
        className="mt-8 inline-block rounded-full px-7 py-3 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-80"
        style={{ background: 'var(--accent)', color: '#000' }}
      >
        Get in touch
      </a>
    </section>
  );
}
