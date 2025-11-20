'use client';

import Image from 'next/image';
import { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const SLIDES = [
  {
    heading: 'ABOUT ME',
    image: '/images/self1.png',
    text: `I’m a traditional miniature artist who grew up surrounded by stories, folklore, and poetry the kind that travels through families long before it reaches paper. Life brought me from Pakistan to Norway, but my roots never left my brush. My recent work is all about acceptance and belonging; merging the warmth of tradition with the quiet Nordic light that now shapes my days.`,
  },
  {
    heading: 'PRACTICE',
    image: '/images/self2.png',
    text: `My practice sits between the old and the new. I keep the discipline and precision of miniature painting symbolic elements, and narrative cycles but I let my palette evolve. The colors shifted from classic pigments to sepia tones and weather-softened hues. I like painting stories that move in circles: beginnings looping back to endings.`,
  },
  {
    heading: 'STORYTELLING',
    image: '/images/self3.png',
    text: `I’m deeply drawn to folklore, myths, and character-building. I create my own figures, shaped by poetry, memory, and fragments of the world around me. Every piece begins with a narrative  a quiet moment, a wandering idea — and grows into a character or a scene. I like storytelling that isn’t loud… it’s stitched into the lines and patterns themselves.`,
  },
  {
    heading: 'EDUCATION',
    image: '/images/hero-bird.png',
    text: `•Noroff School of Technology & Digital Media, Norway  
  Frontend Development — Higher Professional Diploma (2 years)

• National College of Arts, Pakistan 
  Master of Interior Design (MA, 2 years)

• Kinnaird College for Women, Pakistan  
  Bachelor of Fine Arts (BFA, 4 years)`,
  },
];

export default function About() {
  const [i, setI] = useState(0);

  const prev = () => setI((v) => (v === 0 ? SLIDES.length - 1 : v - 1));
  const next = () => setI((v) => (v === SLIDES.length - 1 ? 0 : v + 1));

  const slide = SLIDES[i];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 pt-10 pb-16"
    >
      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10 md:gap-14">
        {/* LEFT — circular image slider */}
        <div className="flex items-center justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden ring-4 ring-royal/40 shadow-xl bg-background/20">
            <Image src={slide.image} alt="Portrait" fill className="object-cover" />

            {/* arrows */}
            <button
              onClick={prev}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-sm p-2 rounded-lg shadow border border-royal/20 hover:bg-white/70 transition"
            >
              <LuChevronLeft className="w-5 h-5 text-royal" />
            </button>

            <button
              onClick={next}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-sm p-2 rounded-lg shadow border border-royal/20 hover:bg-white/70 transition"
            >
              <LuChevronRight className="w-5 h-5 text-royal" />
            </button>
          </div>
        </div>

        {/* RIGHT — text */}
        <div className="text-center md:text-left px-2">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {slide.heading}
          </h2>

          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed whitespace-pre-line space-y-4">
            {slide.text}
          </p>

          <div className="mt-5 flex justify-center md:justify-start gap-2">
            {SLIDES.map((_, idx) => (
              <span
                key={idx}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === idx ? 'bg-royal' : 'bg-royal/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
