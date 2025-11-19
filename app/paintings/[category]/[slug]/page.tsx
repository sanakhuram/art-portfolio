// app/paintings/[category]/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, type Category } from '../../data';
import { getPainting } from '../../getImages';
import PaintingMediaCarousel from '@/app/components/PaintingMediaCarousel';

export const dynamicParams = true;

type Params = Promise<{ category?: string; slug?: string }>;

export default async function PaintingPage({ params }: { params: Params }) {
  const { category = '', slug = '' } = await params;
  const cat = category as Category;

  if (!CATEGORIES.includes(cat)) notFound();

  const painting = getPainting(cat, slug);
  if (!painting) notFound();

  return (
    <main className="bg-background pt-6 md:pt-10 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back link */}
        <Link
          href={`/paintings/${cat}`}
          className="text-royal hover:text-foreground tracking-wide text-[0.95rem]"
        >
          ← Back to {cat}
        </Link>

        {/* TITLE */}
        <h1 className="mt-6 mb-10 text-4xl sm:text-5xl font-display text-royal leading-tight">
          {painting.name}
        </h1>

        {/* 2-COLUMN layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — IMAGE + THUMBS */}
          <div className="space-y-6">
            <PaintingMediaCarousel
              title={painting.name}
              mainSrc={painting.src}
              extraImages={painting.extraImages}
              video={painting.video}
            />
          </div>

          {/* RIGHT — DESCRIPTION */}
          <div className="space-y-10 text-royal/90 leading-relaxed">
            {/* DESCRIPTION */}
            <section>
              <h2 className="text-2xl font-display text-royal mb-2">Description</h2>
              <p className="tracking-wide">{painting.description}</p>
            </section>

            {/* QUOTE — only if exists */}
            {painting.quote && (
              <section className="border-l-4 border-royal/40 pl-4 italic text-royal/80">
                <p className="whitespace-pre-line">“{painting.quote}”</p>
              </section>
            )}

            {/* MATERIALS */}
            <section>
              <h2 className="text-2xl font-display text-royal mb-2">Materials</h2>
              <p className="tracking-wide">{painting.materials}</p>
            </section>

            {/* PROCESS */}
            <section>
              <h2 className="text-2xl font-display text-royal mb-2">Process</h2>
              <p className="tracking-wide">{painting.process}</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
