import Link from "next/link";

export default function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="bg-lavender/10"
    >
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <h2
            id="about-preview-heading"
            className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl"
          >
            I&apos;m drawn to the messy middle.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70 md:text-lg">
            The handoffs, edge cases, competing needs, and unfamiliar
            terminology—this is where thoughtful design earns its place. I
            combine research, systems thinking, and visual craft to turn
            ambiguity into experiences people can trust.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-navy underline decoration-lime decoration-2 underline-offset-4 hover:decoration-4"
          >
            More about me ↗
          </Link>
        </div>
      </div>
    </section>
  );
}