// app/paintings/data.ts
export const CATEGORIES = [
  'metanoia',
  'tasawwuf',
  'mughal',
  'mythology',
  'acceptance',
] as const;

export type Category = (typeof CATEGORIES)[number];
