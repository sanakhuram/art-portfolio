// app/components/About.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const PARAS = [
  `I tell stories with tiny lines. My work sits between tradition and today—mythological scenes, intricate patterns, and quiet moments from a journey that started in Pakistan and now breathes Nordic light in Norway.`,
  `My palette has moved from sepia and monochrome to softer modern tones, yet I keep traditional miniature elements to honor the roots.`,
  `I shifted from painting into design, but carried the same discipline: precision, patience, and respect for form. The result is a bridge—story illustrations, mythic fragments, and patterns that hold memory.`,
];

export default function About() {
  const [p, setP] = useState(0); // paragraph index
  const canPrev = p > 0;
  const canNext = p < PARAS.length - 1;

  return (
    // margin pushes section below fixed nav background
    <section id="about" className="mt-16 md:mt-20 bg-background">
      <div className="mx-auto w-full grid md:grid-cols-2 gap-y-10">
        {/* LEFT: smaller textured panel + portrait */}
        <div className="relative min-h-[340px] md:min-h-[460px] lg:min-h-[520px]">
          <Image
            src="/images/about-ground.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-70"
            sizes="(min-width:768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-background/10" />
          <div className="absolute inset-0 grid place-items-center p-6">
            <div className="relative w-[66%] sm:w-[70%] max-w-[400px] aspect-3/4 overflow-hidden rounded-xl shadow-lg ring-1 ring-black/10">
              <Image
                src="/images/myself.png"
                alt="Sana Khuram at the museum"
                fill
                className="object-cover"
                sizes="(min-width:768px) 26vw, 80vw"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: heading + paragraph slider */}
        <div className="flex items-center justify-center px-6 sm:px-10 lg:px-20 py-8">
          <div className="max-w-[640px] text-center">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-3">
              ABOUT ME
            </h2>

            <p className="font-display text-base sm:text-lg text-foreground/90">
              <span className="font-semibold">Story Illustration &amp; Intricate Pattern</span>
            </p>

            {/* Paragraph slider (‹ ›) */}
            <div className="mt-5 flex items-start justify-center gap-3">
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

              <div className="text-foreground/90 leading-relaxed text-base sm:text-lg">
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
            <div className="mt-2 flex justify-center gap-1.5">
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
      </div>
    </section>
  );
}
