// components/Hero.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] md:min-h-[90vh] bg-background px-4">
      <div className="relative w-full max-w-5xl aspect-3/4 sm:aspect-4/3">
        {/* Frame / arch */}
        <Image
          src="/images/hero-frame.png"
          alt="Decorative arch frame"
          fill
          className="object-contain object-bottom"
          priority
          sizes="(min-width: 1024px) 900px, (min-width: 768px) 80vw, 100vw"
        />

        {/* Bird with Framer Motion */}
        <motion.div
          className="absolute top-[10%] sm:top-[14%] left-1/2 -translate-x-1/2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Image
            src="/images/hero-bird.png"
            alt="Golden bird"
            width={500}
            height={500}
            className="w-[70px] sm:w-[110px] lg:w-[140px] h-auto"
          />
        </motion.div>

        {/* Left tree */}
        <div className="absolute bottom-0 left-[4%] sm:left-[9%]">
          <Image
            src="/images/hero-left-tree.png"
            alt="Decorative tree"
            width={250}
            height={260}
            className="w-[32vw] max-w-[230px] lg:max-w-[260px] h-auto"
          />
        </div>

        {/* Right tree */}
        <div className="absolute bottom-0 right-[4%] sm:right-[9%]">
          <Image
            src="/images/hero-right-tree.png"
            alt="Decorative tree"
            width={250}
            height={260}
            className="w-[32vw] max-w-[230px] lg:max-w-[260px] h-auto"
          />
        </div>

        {/* Base / stones */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[10%] sm:translate-y-[15%]">
          <Image
            src="/images/hero-base.png"
            alt="Stone base"
            width={500}
            height={100}
            className="w-[60vw] max-w-[500px] h-auto"
          />
        </div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-6 sm:mt-9">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-red-900">
            Sana Khuram
          </h1>
          <p className="mt-3 font-heading text-xl sm:text-2xl md:text-3xl text-red-900">
            Miniature Artist
          </p>
          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-red-900">
            &amp;
          </p>
          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-red-900">
            Illustrator
          </p>
        </div>
      </div>
    </section>
  );
}
