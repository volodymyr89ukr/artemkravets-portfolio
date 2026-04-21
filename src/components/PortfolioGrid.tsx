'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { galleryItems } from '@/data/site';

const categories = ['All', 'Fashion', 'Portrait', 'Studio'];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const isOpen = activeIndex !== null;
  const activeImage = isOpen ? filteredItems[activeIndex]?.image ?? null : null;

  function openPhoto(index: number) { setActiveIndex(index); }
  function closeLightbox() { setActiveIndex(null); }
  function goPrev() {
    setActiveIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );
  }
  function goNext() {
    setActiveIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }

  // Lock scroll + keyboard navigation
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft')  goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape')     closeLightbox();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, filteredItems.length]);

  const lightbox =
    mounted && isOpen && activeImage
      ? createPortal(
          <div
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.93)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
            }}
            onClick={closeLightbox}
          >
            {/* Photo */}
            <img
              src={activeImage}
              alt="Full size"
              style={{
                maxHeight: '90vh', maxWidth: '82vw',
                objectFit: 'contain', borderRadius: '0.75rem', cursor: 'default',
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close"
              style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                background: 'none', border: 'none',
                color: 'rgba(255,255,255,0.5)', fontSize: '2rem',
                lineHeight: 1, cursor: 'pointer', transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              ×
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous photo"
              style={{
                position: 'absolute', left: '1.5rem', top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              <ChevronLeft />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next photo"
              style={{
                position: 'absolute', right: '1.5rem', top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              <ChevronRight />
            </button>

            {/* Counter */}
            <div style={{
              position: 'absolute', bottom: '1.5rem', left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase',
            }}>
              {(activeIndex ?? 0) + 1} / {filteredItems.length}
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <section id="portfolio" className="container-shell py-20 md:py-28">

        <div className="mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.4em]" style={{ color: 'var(--accent)' }}>
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Selected Work
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-5 py-2 text-xs uppercase tracking-[0.25em] transition-all"
                style={
                  isActive
                    ? { background: 'var(--accent)', color: '#000' }
                    : { border: '1px solid var(--border)', color: 'var(--muted)' }
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openPhoto(index)}
              className="group relative block overflow-hidden focus:outline-none"
              style={{ border: 'none', borderRadius: 0, WebkitAppearance: 'none' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full block transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'rgba(0,0,0,0.18)' }}
              />
            </button>
          ))}
        </div>

      </section>

      {lightbox}
    </>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

