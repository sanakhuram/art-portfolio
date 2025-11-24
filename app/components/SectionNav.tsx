// app/components/SectionNav.tsx
'use client';

import { sections } from '../lib/sections';
import { body } from '../lib/fonts';
import { motion } from 'framer-motion';

type SimpleNavProps = {
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function SectionNav({ currentIndex, onSelect }: SimpleNavProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${body.className} fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-nowrap items-center gap-1 
text-[10px] sm:text-xs md:text-sm text-red-900`}
    >
      {sections.map((section, i) => {
        const isActive = i === currentIndex;
        return (
          <span key={section.id} className="flex items-center">
            <button
              onClick={() => onSelect(i)}
              className={`uppercase transition-transform duration-200 transform hover:-translate-y-1
  text-[10px] sm:text-xs md:text-sm
  ${isActive ? 'underline underline-offset-4' : ''}`}
            >
              {section.content}
            </button>
            {i < sections.length - 1 && (
              <span className="mx-1 w-1 h-1 bg-red-900 rounded-full inline-block" />
            )}
          </span>
        );
      })}
    </motion.nav>
  );
}
