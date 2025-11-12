// components/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] w-full grid md:grid-cols-[48%_52%] bg-background"> 
      {/* LEFT: big type */}
      <div className="flex items-center">
        <div className="w-full max-w-[520px] pl-6 sm:pl-10 lg:pl-20 py-10">
          <h1 className="font-display font-extrabold leading-[0.82] text-6xl sm:text-8xl lg:text-9xl tracking-tight text-foreground">
            PORT<br/>FOLIO
          </h1>

          <div className="mt-8">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-wide text-foreground">
              SANA KHURAM
            </p>
            <p className="mt-2 font-heading italic text-sm sm:text-base text-foreground/70">
              ARTIST • ILLUSTRATOR • STORYTELLER
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: circular image */}
      <div className="relative flex items-center justify-center px-6 sm:px-10 lg:px-16">
        <div className="relative aspect-square w-full max-w-[520px] sm:max-w-[580px] md:max-w-[620px] lg:max-w-[680px] overflow-hidden rounded-full border-20 border-sage shadow-xl">
          <Image
            src="/images/hero.svg" // your artwork
            alt="Artwork by Sana Khuram"
            fill
            priority
            sizes="(min-width:768px) 50vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
