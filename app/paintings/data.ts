// app/paintings/data.ts
export const CATEGORIES = ['metanoia','tasawwuf','mughal','mythology','nature'] as const;
export type Category = typeof CATEGORIES[number];

// Keep YOUR folders exactly as you wrote:
// metanoia  -> /images/metanoia
// tasawwuf  -> /images/tassawuf   (double “s”)
// mughal    -> /images/mughal
// mythology -> /images/myth
// nature    -> /images/somemore
export const PAINTINGS: Record<Category, { src: string; alt: string }[]> = {
  metanoia: Array.from({ length: 10 }, (_, i) => ({
    src: `/images/metanoia/${i + 1}.jpg`,
    alt: `Metanoia ${i + 1}`,
  })),
  tasawwuf: Array.from({ length: 10 }, (_, i) => ({
    src: `/images/tassawuf/${i + 1}.jpg`,
    alt: `Tasawwuf ${i + 1}`,
  })),
  mughal: Array.from({ length: 10 }, (_, i) => ({
    src: `/images/mughal/${i + 1}.jpg`,
    alt: `Mughal ${i + 1}`,
  })),
  mythology: Array.from({ length: 10 }, (_, i) => ({
    src: `/images/myth/${i + 1}.jpg`,
    alt: `Mythology ${i + 1}`,
  })),
  nature: Array.from({ length: 10 }, (_, i) => ({
    src: `/images/somemore/${i + 1}.jpg`,
    alt: `Nature ${i + 1}`,
  })),
};
