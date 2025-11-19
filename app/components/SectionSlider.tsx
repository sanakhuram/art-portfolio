// app/components/SectionSlider.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionNav from './SectionNav';
import { sections } from '../lib/sections';
import Hero from './Hero';
import AboutSection from './AboutSection';
import ArtSection from './ArtSection';
import ContactSection from './ContactSection';
import Process from './Process';

const slideVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
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

  const handleSelect = (newIndex: number) => {
    if (newIndex === currentIndex) return;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const activeSection = sections[currentIndex];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SectionNav currentIndex={currentIndex} onSelect={handleSelect} />

      <div className="h-screen flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.section
            key={activeSection.id}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-full max-w-5xl px-6 mx-auto"
          >
            {renderSection(activeSection.id)}
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}
