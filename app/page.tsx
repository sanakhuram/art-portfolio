// components/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] bg-background">
      <div className="relative w-full max-w-4xl aspect-4/3">
        {/* Frame / arch */}
        <Image
          src="/images/hero-frame.png"
          alt="Decorative arch frame"
          fill
          className="object-contain"
          priority
        />

        {/* Bird at top */}
        <div className="absolute top-[14%] left-1/2 -translate-x-1/2">
          <Image
            src="/images/hero-bird.png"
            alt="Golden bird"
            width={200}
            height={200}
          />
        </div>

        {/* Left tree */}
        <div className="absolute bottom-[0%] left-[9%]">
          <Image
            src="/images/hero-left-tree.png"
            alt="Decorative tree"
            width={250}
            height={260}
          />
        </div>

        {/* Right tree */}
        <div className="absolute bottom-[0%] right-[9%]">
          <Image
            src="/images/hero-right-tree.png"
            alt="Decorative tree"
            width={250}
            height={260}
          />
        </div>

 {/* Base / stones */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%]">
  <Image
    src="/images/hero-base.png"
    alt="Stone base"
    width={500}
    height={100}
  />
</div>


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-9">
          <h1 className="font-heading text-5xl md:text-5xl text-red-900">
            Sana Khuram
          </h1>
          <p className="mt-4 font-heading text-2xl md:text-3xl text-red-900">
            Miniature Artist
          </p>
          <p className="font-heading text-2xl md:text-3xl text-red-900">
            &amp;
          </p>
            <p className="font-heading text-2xl md:text-3xl text-red-900">
            Illustrator
          </p>
        </div>
      </div>
    </section>
  );
}
