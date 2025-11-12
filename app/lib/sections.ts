// lib/sections.ts
export const fadeSlide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export const sections = [
  { id: 'home', content: 'Home' },
  { id: 'about', content: 'About' },
  { id: 'art', content: 'Paintings' },
  { id: 'process', content: 'Process' },
  { id: 'contact', content: 'Contact' },
];
