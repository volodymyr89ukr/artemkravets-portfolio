export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-neutral-300">{text}</p> : null}
    </div>
  );
}
