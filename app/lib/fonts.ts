// app/lib/fonts.ts
import { League_Spartan, Inter, Cormorant_Garamond } from 'next/font/google';

// Bold display for hero
export const display = League_Spartan({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--ff-display',
});

// Elegant serif for nav/smaller headings
export const heading = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['italic'],
  variable: '--ff-heading',
});

// Neutral body
export const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--ff-body',
});
