// app/paintings/[category]/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, type Category } from "../../data";
import { getPainting } from "../../getImages";
import PaintingMediaCarousel from "@/app/components/PaintingMediaCarousel";

export const dynamicParams = true;

type Params = Promise<{ category?: string; slug?: string }>;

export default async function PaintingPage({ params }: { params: Params }) {
  const { category = "", slug = "" } = await params;
  const cat = category as Category;

  if (!CATEGORIES.includes(cat)) notFound();

  const painting = getPainting(cat, slug);
  if (!painting) notFound();

  return (
    <main className="bg-background min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <Link
          href={`/paintings/${cat}`}
          className="text-royal hover:text-foreground tracking-wide text-[0.95rem]"
        >
          ← Back to {cat}
        </Link>

        {/* Title */}
        <h1 className="mt-6 text-4xl sm:text-5xl font-display text-royal leading-tight">
          {painting.name}
        </h1>

        {/* Carousel: main image + extra images + video */}
        <PaintingMediaCarousel
          title={painting.name}
          mainSrc={painting.src}
          extraImages={painting.extraImages}
          video={painting.video}
        />

        {/* Text sections */}
        <div className="mt-16 space-y-10 text-royal/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-display text-royal mb-2">Description</h2>
            <p className="tracking-wide">{painting.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-royal mb-2">Materials</h2>
            <p className="tracking-wide">{painting.materials}</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-royal mb-2">Process</h2>
            <p className="tracking-wide">{painting.process}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
