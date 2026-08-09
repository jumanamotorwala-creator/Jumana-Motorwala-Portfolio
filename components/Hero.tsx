import Image from "next/image";
import RotatingBadge from "./RotatingBadge";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-navy text-paper">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lavender/30 blur-3xl md:h-96 md:w-96" />

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-[1fr_460px] md:px-10 md:py-32">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lime">
            Product Designer — Research, Systems &amp; Craft
          </p>

          <h1 id="hero-heading" className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            I make complex work feel clear.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
            I&apos;m Jumana Motorwala, a product designer who turns dense workflows into focused, human experiences—from AI-led investigations to healthcare and logistics tools.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="rounded-full bg-lime px-6 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5">
              See selected work
            </a>
            <a href="/about" className="rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10">
              About me
            </a>
          </div>
        </div>

        {/* Polaroid card: outer wrapper is h-auto (hugs its content, per
            the Figma frame's "Hug × Hug" sizing) — only the inner photo
            box is aspect-locked, leaving room below it for the caption
            instead of forcing the whole card into one fixed ratio. */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="-rotate-2 rounded-sm bg-paper p-3 pb-7 shadow-lg">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-lavender/10">
              <Image
                src="/images/hero-photo.jpg"
                alt="Jumana Motorwala, product designer, smiling in a blazer"
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* TODO: swap font-style italic for a real script font (e.g.
                Caveat/Kalam via next/font/google in layout.tsx) to match
                the handwritten caption style in the Figma reference. */}
            <p className="mt-4 text-center font-serif text-lg italic text-navy/70">
              Hi! from this side of the screen
            </p>
          </div>

          <div className="absolute -bottom-6 -right-6">
            <RotatingBadge />
          </div>
        </div>
      </div>
    </section>
  );
}