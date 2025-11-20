/* eslint-disable react-hooks/purity */
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const butterflies = [
  "/images/butterfly/1.png",
  "/images/butterfly/2.png",
  "/images/butterfly/3.png",
  "/images/butterfly/4.png",
  "/images/butterfly/5.png",
  "/images/butterfly/6.png",
  "/images/butterfly/7.png",
  "/images/butterfly/8.png",
  "/images/butterfly/9.png",
];

export default function Hero() {
  const [spawn, setSpawn] = useState(false);

  const handleSpawn = () => {
    setSpawn(true);

    // butterflies disappear after animation
    setTimeout(() => setSpawn(false), 2000);
  };

  // random direction maker
  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-background pt-24 sm:pt-28">
      
      {/* LEFT content */}
      <div className="flex items-center justify-center md:w-1/2 py-10 md:py-0">
        <div className="w-full max-w-[520px] px-6 sm:px-10 lg:px-20">
          <h1
            className="font-display font-extrabold leading-[0.82]
            text-6xl sm:text-8xl lg:text-9xl tracking-tight text-foreground"
          >
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

      {/* RIGHT – image with butterflies */}
      <div className="flex items-center justify-center md:w-1/2 py-12 md:py-0 px-6 sm:px-10 lg:px-16">
        <div
          className="relative aspect-square 
            w-[85%] sm:w-[70%] md:w-[70%] lg:w-[65%]
            max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[580px]"
          onMouseEnter={handleSpawn}
          onTouchStart={handleSpawn}
        >
          {/* Image circle */}
          <div className="absolute inset-0 rounded-full overflow-hidden border-14 border-sage shadow-xl">
            <Image
              src="/images/hero.svg"
              alt="Artwork by Sana Khuram"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Butterflies layer */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {spawn &&
              [...Array(12)].map((_, i) => {
                const img =
                  butterflies[Math.floor(Math.random() * butterflies.length)];

                return (
                  <motion.img
                    key={i}
                    src={img}
                    alt="butterfly"
                    className="absolute w-16 h-16 sm:w-14 sm:h-14"
                    initial={{
                      x: random(-20, 20),
                      y: random(-20, 20),
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      x: random(-400, 400), // wide horizontal spread
                      y: random(-350, 350), // big vertical spread
                      opacity: 1,
                      scale: random(0.8, 1.4),
                      rotate: random(-90, 90),
                    }}
                    transition={{
                      duration: 1.6,
                      ease: "easeOut",
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
