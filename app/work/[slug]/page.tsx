import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyBlocks from "@/components/CaseStudyBlocks";
import { getAllCaseStudySlugs, getCaseStudy } from "@/lib/caseStudyData";

interface PageProps {
  params: { slug: string };
}

// Pre-renders every known case study slug at build time. New projects
// added to lib/caseStudyData/index.ts are automatically included here
// with no changes needed to this file.
export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.meta.title} — Jumana Motorwala`,
    description: caseStudy.meta.tagline,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy) notFound();

  const { meta, blocks } = caseStudy;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-content px-6 pt-8 md:px-10 md:pt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-lime-ink"
          >
            ← Back to work
          </Link>
        </section>

        {/* Hero — giant title with a faint oversized-initial watermark
            behind it (matches the reference's "SI" ghost letters),
            hero media on the right, duration badge below the tagline. */}
        <section className="relative mx-auto max-w-content overflow-hidden px-6 pb-12 pt-8 md:px-10 md:pb-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 top-0 select-none text-[14rem] font-extrabold leading-none text-lime/10 md:text-[20rem]"
          >
            {meta.title.slice(0, 2).toUpperCase()}
          </span>

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_560px] md:gap-16">
            <div>
              {meta.clientLogo ? (
                <img
                  src={meta.clientLogo}
                  alt={meta.client}
                  className="h-8 w-auto md:h-10"
                />
              ) : (
                <p className="text-lg text-navy/70">{meta.client}</p>
              )}
              <h1 className="mt-3 text-5xl font-extrabold leading-[0.95] tracking-tight text-navy md:text-7xl">
                {meta.title}
              </h1>
              <p className="mt-4 text-xl text-navy/70">{meta.tagline}</p>
              {meta.durationBadge && (
                <span className="mt-6 inline-block -rotate-2 rounded bg-lime px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-navy">
                  {meta.durationBadge}
                </span>
              )}
            </div>

            {meta.heroShowBox === false ? (
              <div
                className={`flex items-center justify-center ${
                  meta.heroMaxWidth ? `mx-auto ${meta.heroMaxWidth}` : ""
                } ${meta.heroMaxHeight ? meta.heroMaxHeight : ""}`}
              >
                <img
                  src={meta.heroSrc}
                  alt={meta.heroAlt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <div
                className={`overflow-hidden rounded-card border border-navy/10 bg-navy/5 shadow-lg ${
                  meta.heroMaxWidth ? `mx-auto ${meta.heroMaxWidth}` : ""
                }`}
              >
                {meta.heroMaxHeight ? (
                  // Bounded on both axes: guarantees the whole media fits
                  // in view (letterboxed if needed) instead of just being
                  // narrower but still tall enough to require scrolling.
                  <div className={`flex items-center justify-center ${meta.heroMaxHeight}`}>
                    <img
                      src={meta.heroSrc}
                      alt={meta.heroAlt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={meta.heroSrc}
                    alt={meta.heroAlt}
                    className={`w-full ${meta.heroFit === "contain" ? "object-contain" : "object-cover"}`}
                  />
                )}
              </div>
            )}
          </div>
        </section>

        {/* Ticker strip — reuses the About page's seamless-loop pattern */}
        <div className="w-full overflow-hidden bg-navy py-3" aria-hidden="true">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="text-xs font-bold uppercase tracking-widest text-lime md:text-sm"
              >
                {meta.tickerStats.join(" — ")} —&nbsp;
              </span>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-content px-6 pt-12 md:px-10 md:pt-16">
          <div
            className={`grid grid-cols-1 gap-8 ${
              meta.intro.length > 1 ? "md:grid-cols-2 md:gap-12" : ""
            }`}
          >
            {meta.intro.map((p, i) => (
              <p key={i} className="text-navy/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 border-t border-navy/10 pt-10 sm:grid-cols-3">
            <div className="rounded-lg bg-navy p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-lime">
                Key Results
              </p>
              <ul className="mt-3 space-y-3 text-paper/90">
                {meta.keyResults.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-navy p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-lime">
                Role &amp; Timeline
              </p>
              <p className="mt-3 font-semibold text-paper">{meta.role}</p>
              <p className="text-paper/80">{meta.timeline}</p>
            </div>
            <div className="rounded-lg bg-navy p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-lime">
                Methods
              </p>
              <p className="mt-3 text-paper/90">{meta.methods.join(", ")}</p>
            </div>
          </div>
        </section>

        <CaseStudyBlocks blocks={blocks} />

        {/* Closing CTA banner — solid navy (was solid red in the
            reference), pointing back to the work page rather than
            duplicating the site's global ContactCTA a second time on
            this already-long page. */}
        <section className="mt-20 bg-navy px-6 py-16 text-paper md:px-10 md:py-20">
          <div className="mx-auto max-w-content">
            <p className="text-3xl font-extrabold leading-snug md:text-5xl">
              More case studies
              <br />
              on the work page.
            </p>
            <Link
              href="/work"
              className="mt-6 inline-block text-lime underline decoration-2 underline-offset-4 hover:decoration-4"
            >
              ← Back to work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}