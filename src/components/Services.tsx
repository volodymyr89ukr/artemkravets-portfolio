import { services } from '@/data/site';

export function Services() {
  return (
    <section id="services" className="container-shell py-20 md:py-28">
      <div className="mb-12">
        <p className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: 'var(--accent)' }}>
          Services
        </p>
        <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          What I Offer
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl p-8 flex flex-col"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              {service.title}
            </h3>
            <p className="text-sm leading-7 flex-1" style={{ color: 'var(--muted)' }}>
              {service.description}
            </p>
            <ul className="mt-8 space-y-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-xs uppercase tracking-[0.15em]"
                  style={{ color: 'var(--muted)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>—</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
