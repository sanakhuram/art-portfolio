'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionNav from './SectionNav';
import { sections } from '../lib/sections';

import Hero from './Hero';
import AboutSection from './AboutSection';
import ArtSection from './ArtSection';
import Process from './Process';
import ContactSection from './ContactSection';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
};

function renderSection(id: string) {
  switch (id) {
    case 'home':
      return <Hero />;
    case 'about':
      return <AboutSection />;
    case 'art':
      return <ArtSection />;
    case 'process':
      return <Process />;
    case 'contact':
      return <ContactSection />;
    default:
      return null;
  }
}

export default function SectionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= sections.length) return;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const handleSwipe = (swipe: number) => {
    if (swipe < -80) goTo(currentIndex + 1); // swipe left
    if (swipe > 80) goTo(currentIndex - 1); // swipe right
  };

  const activeSection = sections[currentIndex];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* TOP NAV */}
      <SectionNav currentIndex={currentIndex} onSelect={(i) => goTo(i)} />

      {/* LEFT ARROW */}
      {currentIndex > 0 && (
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 
                     z-30 w-10 h-10 rounded-full bg-royal/10 hover:bg-royal/20 
                     text-royal items-center justify-center shadow-lg"
        >
          &#8249;
        </button>
      )}

      {/* RIGHT ARROW */}
      {currentIndex < sections.length - 1 && (
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 
                     z-30 w-10 h-10 rounded-full bg-royal/10 hover:bg-royal/20 
                     text-royal items-center justify-center shadow-lg"
        >
          &#8250;
        </button>
      )}

      {/* SECTION SLIDER */}
      <div className="h-screen flex items-center justify-center px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.section
            key={activeSection.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => handleSwipe(offset.x)}
            className="w-full max-w-5xl mx-auto"
          >
            {renderSection(activeSection.id)}
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}
