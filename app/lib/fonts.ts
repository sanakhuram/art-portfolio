// app/lib/fonts.ts
import { Corinthia, Indie_Flower } from 'next/font/google';

// ✨ Elegant headings
export const headingFont = Corinthia({
  variable: '--ff-heading',
  subsets: ['latin'],
  weight: '400',
});

// 🖋️ Handwritten body / blog text
export const bodyFont = Indie_Flower({
  variable: '--ff-body',
  subsets: ['latin'],
  weight: '400',
});
