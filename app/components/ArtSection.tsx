// app/components/ArtSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

const ITEMS = [
  { title: 'Metanoia',   slug: '/paintings/metanoia',  img: '/images/sparrow.png', alt: 'Sparrow' },
  { title: 'Tasawwuf',   slug: '/paintings/tasawwuf',  img: '/images/hero-bird.png',    alt: 'Bird' },
  { title: 'Mughal',     slug: '/paintings/mughal',    img: '/images/tree.png',    alt: 'Tree' },
  { title: 'Mythology',  slug: '/paintings/mythology', img: '/images/flower.png',  alt: 'Flower' },
  { title: 'Nature',     slug: '/paintings/nature',    img: '/images/birds.png',    alt: 'Leaf' }, // <- change if you want
];

export default function ArtSection() {
  return (
    <section id="paintings" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-royal">
          PAINTINGS
        </h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {ITEMS.map(({ title, slug, img, alt }) => (
            <Link
              key={title}
              href={slug}
              className="group relative aspect-square w-full rounded-full border-10 border-sage overflow-hidden shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-royal/40"
              aria-label={title}
            >
              {/* image */}
              <Image
                src={img}
                alt={alt}
                fill
                sizes="(min-width:1024px) 18vw, (min-width:640px) 30vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={false}
              />

              {/* hover/focus overlay */}
              <div className="absolute inset-0 grid place-items-center bg-sage/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="font-display tracking-widest text-sm sm:text-base md:text-lg text-royal">
                  {title.toUpperCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
