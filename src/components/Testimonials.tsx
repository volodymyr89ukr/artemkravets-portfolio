import { testimonials } from '@/data/site';

export function Testimonials() {
  return (
    <section id="testimonials" className="container-shell py-20 md:py-28">
      <div className="mb-12">
        <p className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: 'var(--accent)' }}>
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Kind Words
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
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
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
              — {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
