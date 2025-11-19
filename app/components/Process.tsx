// app/process/page.tsx
import Image from "next/image";

type Step = {
  title: string;
  subtitle?: string;
  description: string;
  src: string;
};

const STEPS: Step[] = [
  {
    title: "Preparing the Wasli",
    subtitle: "Handmade ground",
    src: "/images/process/wasli.jpg",
    description:
      "Cotton paper is layered with wheat-starch glue, pressed, and burnished with stone until it becomes wasli — a strong, smooth surface that can hold countless washes and strokes without warping.",
  },
  {
    title: "Grinding Pigments",
    subtitle: "Earth, stone, and color",
    src: "/images/process/pigments.jpg",
    description:
      "Traditional pigments, watercolors, and gouache are ground on stone slabs with water and binding medium. The paint is tested in small swatches until the color sits cleanly on the wasli.",
  },
  {
    title: "Gad-rang",
    subtitle: "Base wash",
    src: "/images/process/gad-rang.jpg",
    description:
      "Soft translucent washes — gad-rang — are laid down slowly to set the overall mood of the painting: warmth, dusk, mist, or night. This stage unifies the surface before any detail begins.",
  },
  {
    title: "Neem-rang",
    subtitle: "Mid tones",
    src: "/images/process/neem-rang.jpg",
    description:
      "Neem-rang builds the mid tones: gentle layers that give form to fabric, faces, and sky. These layers must stay clean and even, so every stroke is placed with patience.",
  },
  {
    title: "Siyah Kalam",
    subtitle: "Fine line work",
    src: "/images/process/siyah-kalam.jpg",
    description:
      "Siyah kalam is the ultra-fine line work that defines miniature painting — eyelashes, veins in petals, folds in cloth. Lines are drawn with a needle-like brush and steady breath.",
  },
  {
    title: "Miniature Brushes",
    subtitle: "Pigeon feather & squirrel hair",
    src: "/images/process/brushes.jpg",
    description:
      "Brushes are traditionally made from squirrel hair, pigeon feather shafts, and bamboo sticks. The tip must be able to lay a line finer than a strand of hair, yet hold enough pigment to flow smoothly.",
  },
  {
    title: "Gold Leaf & Gilding",
    subtitle: "Sacred highlights",
    src: "/images/process/gold.jpg",
    description:
      "Gold leaf is applied to halos, borders, and symbolic areas. It is carefully placed, burnished, and sometimes textured to catch light like tiny suns embedded in the painting.",
  },
  {
    title: "Naqashi & Detailing",
    subtitle: "Dots, patterns, textures",
    src: "/images/process/details.jpg",
    description:
      "Dots, repeats, and ornamental patterns — naqashi — bring depth and rhythm. This stage can take hours or days as each tiny motif is balanced against the whole composition.",
  },
  {
    title: "Light & Shadow",
    subtitle: "Depth and atmosphere",
    src: "/images/process/light.jpg",
    description:
      "Glazes of shadow and light are added in slow layers to give softness to skin, weight to fabrics, and atmosphere to backgrounds. The goal is a quiet glow rather than harsh contrast.",
  },
  {
    title: "Final Burnish",
    subtitle: "Sealing the story",
    src: "/images/process/finish.jpg",
    description:
      "In the final stage, selected areas are gently burnished so the surface shines like ceramic. The wasli now carries not just an image, but hours of breath, decision, correction, and devotion.",
  },
];

export default function Process() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 pt-10 pb-16">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading (UNCHANGED) */}
        <header className="text-center mb-2">
          <p className="text-sm uppercase tracking-[0.3em] text-royal/60">
            PROCESS
          </p>
          <h1 className=" font-display text-4xl sm:text-5xl md:text-6xl text-royal leading-tight">
            Miniature Painting Process
          </h1>
   
        </header>

<section className="mt-2 flex justify-center">
  <div className="relative w-full max-w-4xl mx-auto">

    {/* Left arrow */}
    <button
      onClick={() => document.getElementById("steps-scroll")?.scrollBy({ left: -300, behavior: "smooth" })}
      className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 
                 bg-royal/10 hover:bg-royal/20 text-royal 
                 w-9 h-9 rounded-full items-center justify-center shadow-md"
    >
      &#8249;
    </button>

    {/* Right arrow */}
    <button
      onClick={() => document.getElementById("steps-scroll")?.scrollBy({ left: 300, behavior: "smooth" })}
      className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 
                 bg-royal/10 hover:bg-royal/20 text-royal 
                 w-9 h-9 rounded-full items-center justify-center shadow-md"
    >
      &#8250;
    </button>

    {/* Scroll container */}
    <div
      id="steps-scroll"
      className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth px-3 py-3"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {STEPS.map((step) => (
        <div
          key={step.title}
          className="flex flex-col items-center text-center 
                     min-w-[200px] max-w-[200px] 
                     scroll-snap-align-start"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden 
                          ring-2 ring-royal/40 shadow-md bg-linen">
            <Image src={step.src} alt={step.title} fill className="object-cover" />
          </div>

          <h2 className="mt-3 font-display text-base sm:text-lg text-royal">
            {step.title}
          </h2>

          {step.subtitle && (
            <p className="text-[10px] uppercase tracking-[0.20em] text-royal/60 mt-1">
              {step.subtitle}
            </p>
          )}

          <p className="mt-2 text-[11px] sm:text-xs text-royal/80 leading-snug max-w-[180px]">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Closing text */}
        <section className="mt-5">
          <p className="text-center text-royal/75 text-xs sm:text-sm mx-auto leading-relaxed ">
            Miniature painting is less about speed and more about presence. Each dot,
            line, and wash is a small act of attention a way of sitting with a story
            until it decides to stay.
          </p>
        </section>
      </div>
    </main>
  );
}
