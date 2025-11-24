// app/paintings/[category]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CATEGORIES, type Category } from '../data';
import { getCategoryData } from '../getImages';
import type { Painting } from '../types';

export const dynamicParams = true;

type Params = Promise<{ category?: string }>;

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category = '' } = await params;
  const cat = category as Category;

  if (!CATEGORIES.includes(cat)) notFound();

  const data = getCategoryData(cat);

  return (
    <main className="bg-background min-h-svh pt-6 md:pt-10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-royal/70 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{' '}
          /
          <Link href="/#paintings" className="hover:underline">
            {' '}
            Paintings
          </Link>{' '}
          /<span className="capitalize"> {cat}</span>
        </div>

        {/* Title + description */}
        <h1 className="font-display text-4xl sm:text-5xl text-royal capitalize">
          {data.title}
        </h1>

        <p className="mt-4 text-royal/80 max-w-3xl leading-relaxed">{data.description}</p>

        {/* Masonry layout */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 mt-10">
          {data.paintings.map((p: Painting) => (
            <Link
              key={`${p.slug}-${p.file}`}
              href={`/paintings/${cat}/${p.slug}`}
              className="block mb-6 break-inside-avoid rounded-lg overflow-hidden shadow ring-1 ring-black/10 bg-linen hover:opacity-90 transition"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
              <div className="p-2 text-center text-sm text-royal/80">{p.name}</div>
            </Link>
          ))}
        </div>
        <Link
          href="/#paintings"
          className="mt-12 mb-10 inline-block text-royal text-2xl hover:text-sage transition"
        >
          ←
        </Link>

      </div>
    </main>
  );
}
