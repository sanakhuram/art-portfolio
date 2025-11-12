import { useState } from 'react';

export function useSectionNavigator(total: number) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return { index, setIndex, next, prev };
}
