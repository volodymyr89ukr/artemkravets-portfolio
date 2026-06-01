import { services } from '@/data/site';

export function Services() {
  return (
    <section id="services" className="container-shell py-20 md:py-28">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Pricing <span style={{ fontFamily: 'var(--font-inter), sans-serif' }}>&amp;</span> Packages
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((pkg) => (
          <article
            key={pkg.title}
            className="rounded-2xl p-8 md:p-10 flex flex-col"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <h3
              className="text-2xl md:text-3xl"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              {pkg.title}
            </h3>

            {/* Price */}
            <div className="mt-6 mb-8 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--muted)' }}>
                {pkg.duration}
              </p>
              <p
                className="mt-1 text-4xl"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {pkg.price}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--muted)' }}>
                {pkg.priceNote}
              </p>
            </div>

            {/* Includes */}
            <p className="mb-5 text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--muted)' }}>
              Includes
            </p>
            <ul className="space-y-5 text-sm leading-7 flex-1" style={{ color: 'var(--muted)' }}>
              <li className="flex gap-3">
                <span style={{ color: 'var(--accent)' }}>—</span>
                <span>{pkg.photos}</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: 'var(--accent)' }}>—</span>
                <span>
                  <span className="block mb-1" style={{ color: 'var(--foreground)' }}>
                    Full Creative Direction
                  </span>
                  {pkg.creativeDirection}
                </span>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
