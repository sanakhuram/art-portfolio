// app/paintings/[category]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, type Category, PAINTINGS } from '../data';

export const dynamicParams = true;

// In Next 16, `params` is a Promise — model that in the types:
type Params = Promise<{ category?: string }>;

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

// ✅ Async metadata: await params
export async function generateMetadata({ params }: { params: Params }) {
  const { category = '' } = await params;
  const key = category.toLowerCase().trim();
  const label = key ? key[0]!.toUpperCase() + key.slice(1) : 'Paintings';
  return { title: `${label} · Paintings` };
}

// ✅ Async page: await params
export default async function CategoryPage({ params }: { params: Params }) {
  const { category = '' } = await params;
  const key = category.toLowerCase().trim();

  if (!CATEGORIES.includes(key as Category)) {
    notFound();
  }

  const items = PAINTINGS[key as Category] ?? [];

  return (
    <main className="bg-background min-h-screen pt-16">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-royal/70 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#paintings" className="hover:underline">Paintings</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{key}</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-royal capitalize">
          {key}
        </h1>

        {items.length === 0 ? (
          <p className="mt-8 text-royal/80">No images found for this category yet.</p>
        ) : (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {items.map(({ src, alt }, idx) => (
              <figure key={src} className="group relative overflow-hidden rounded-lg ring-1 ring-black/10 bg-linen">
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width:1024px) 18vw, (min-width:640px) 30vw, 45vw"
                  priority={idx < 3}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 text-royal text-xs sm:text-sm px-2 py-1">
                  {alt}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="m-10">
          <Link href="/#paintings" className="text-royal underline underline-offset-4">
            ← Back to categories
          </Link>
        </div>
      </div>
    </main>
  );
}
