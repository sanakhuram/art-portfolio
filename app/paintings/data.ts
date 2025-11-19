// app/paintings/data.ts
export const CATEGORIES = [
  'metanoia',
  'tasawwuf',
  'mughal',
  'mythology',
  'Acceptance',
] as const;

export type Category = typeof CATEGORIES[number];
