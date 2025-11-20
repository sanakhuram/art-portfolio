'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-background pt-24 sm:pt-28">
   
      {/* LEFT */}
      <div className="flex items-center justify-center md:w-1/2 py-10 md:py-0">
        <div className="w-full max-w-[520px] px-6 sm:px-10 lg:px-20">
          <h1 className="font-display font-extrabold leading-[0.82] 
          text-6xl sm:text-8xl lg:text-9xl tracking-tight text-foreground">
            PORT
            <br />
            FOLIO
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

{/* RIGHT */}
<div className="flex items-center justify-center md:w-1/2 py-12 md:py-0 px-6 sm:px-10 lg:px-16">
  <div
    className="
      relative aspect-square 
      w-[85%] sm:w-[70%] md:w-[70%] lg:w-[65%]
      max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[580px]
      overflow-hidden rounded-full 
      border-14 border-sage shadow-xl
    "
  >
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
