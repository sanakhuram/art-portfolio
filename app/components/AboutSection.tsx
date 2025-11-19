'use client';

import Image from 'next/image';
import { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const IMAGES = [
  '/images/myself1.png',
  '/images/myself2.png',
  '/images/myself3.png',
];

const PARAS = [
  `I tell stories with tiny lines. My work sits between tradition and today—mythological scenes, intricate patterns, and quiet moments from a journey that started in Pakistan and now breathes Nordic light in Norway.`,
  `My palette has moved from sepia and monochrome to softer modern tones, yet I keep traditional miniature elements to honor the roots.`,
  `I shifted from painting into design, but carried the same discipline: precision, patience, and respect for form. The result is a bridge—story illustrations, mythic fragments, and patterns that hold memory.`,
];

export default function About() {
  const [p, setP] = useState(0); // paragraph index
  const [img, setImg] = useState(0); // image index

  const canPrev = p > 0;
  const canNext = p < PARAS.length - 1;

  const prevImg = () => setImg((n) => (n === 0 ? IMAGES.length - 1 : n - 1));
  const nextImg = () => setImg((n) => (n === IMAGES.length - 1 ? 0 : n + 1));

  return (
    <section id="about" className="relative min-h-screen">
      {/* Full background image */}
      <Image
        src="/images/bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-background/30" />

      {/* Content grid */}
      <div className="relative grid md:grid-cols-2 gap-10 items-center min-h-screen px-6 sm:px-12 lg:px-20">
        {/* LEFT: circular image carousel */}
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-royal/40">
            <Image
              src={IMAGES[img]}
              alt="About portrait"
              fill
              className="object-cover"
              sizes="(min-width:768px) 40vw, 80vw"
            />
            {/* carousel controls */}
            <button
              aria-label="Previous image"
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
            >
              <LuChevronLeft className="h-6 w-6 text-royal" />
            </button>
            <button
              aria-label="Next image"
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
            >
              <LuChevronRight className="h-6 w-6 text-royal" />
            </button>
          </div>
        </div>

        {/* RIGHT: text content */}
        <div className="text-center md:text-left max-w-[640px] mx-auto">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-3">
            ABOUT ME
          </h2>

          <p className="font-display text-base sm:text-lg text-foreground/90 mb-6">
            <span className="font-semibold">Story Illustration &amp; Intricate Pattern</span>
          </p>

          {/* Paragraph slider */}
          <div className="mt-5 flex items-start justify-center md:justify-start gap-3">
            <button
              aria-label="Previous paragraph"
              onClick={() => setP((n) => Math.max(0, n - 1))}
              className={`p-2 rounded-full ring-1 ring-royal/15 hover:ring-royal/30 transition ${
                !canPrev ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              disabled={!canPrev}
            >
              <LuChevronLeft className="h-5 w-5" />
            </button>

            <div className="text-foreground/90 leading-relaxed text-base sm:text-lg max-w-[500px]">
              {PARAS[p]}
            </div>

            <button
              aria-label="Next paragraph"
              onClick={() => setP((n) => Math.min(PARAS.length - 1, n + 1))}
              className={`p-2 rounded-full ring-1 ring-royal/15 hover:ring-royal/30 transition ${
                !canNext ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              disabled={!canNext}
            >
              <LuChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* dots for paragraph slider */}
          <div className="mt-2 flex justify-center md:justify-start gap-1.5">
            {PARAS.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 w-1.5 rounded-full ${
                  p === idx ? 'bg-royal' : 'bg-royal/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
