// app/components/PaintingMediaCarousel.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  mainSrc: string;
  extraImages?: string[];
  video?: string; 
};

type MediaItem =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; alt: string };

export default function PaintingMediaCarousel({
  title,
  mainSrc,
  extraImages = [],
  video,
}: Props) {
  const items: MediaItem[] = [
    { kind: 'image', src: mainSrc, alt: title },
    ...extraImages.map((src, i) => ({
      kind: 'image' as const,
      src,
      alt: `${title} detail ${i + 1}`,
    })),
  ];

  if (video) {
    items.push({
      kind: 'video',
      src: video,
      alt: `${title} – video installation`,
    });
  }

  // If nothing, render nothing
  if (!items.length) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <section className="mt-8">
      {/* Big media area */}
      <div className="rounded-lg overflow-hidden shadow-lg bg-black/5">
        {active.kind === 'image' && (
          <Image
            src={active.src}
            alt={active.alt}
            width={1400}
            height={1600}
            className="w-full h-auto object-cover"
          />
        )}

        {active.kind === 'video' && (
          <video className="w-full h-auto" controls preload="metadata">
            <source src={active.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Caption */}
      <p className="mt-3 text-sm text-royal/80 italic">
        {active.kind === 'video' ? 'Video installation / documentation' : active.alt}
      </p>

      {/* Thumbnails */}
      {items.length > 1 && (
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
          {items.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative shrink-0 rounded-md overflow-hidden border
                ${
                  index === activeIndex
                    ? 'border-royal ring-2 ring-royal/60'
                    : 'border-royal/20 hover:border-royal/60'
                }`}
            >
              {item.kind === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={120}
                  height={120}
                  className="h-24 w-24 object-cover"
                />
              ) : (
                <div className="h-24 w-24 bg-royal/80 text-background flex items-center justify-center text-xs font-medium">
                  Video
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
