'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:grid md:grid-cols-[48%_52%] bg-background">

      {/* LEFT: big type */}
      <div className="flex items-center justify-center md:justify-start py-10 md:py-0">
        <div className="w-full max-w-[520px] pl-6 sm:pl-10 lg:pl-20">
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
      <div className="relative flex items-center justify-center py-8 md:py-0 px-6 sm:px-10 lg:px-16">
        <div className="relative aspect-square w-[75%] max-w-[420px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[680px] overflow-hidden rounded-full border-20 border-sage shadow-xl">
          <Image
            src="/images/hero.svg"
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
