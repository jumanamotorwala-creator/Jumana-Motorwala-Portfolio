import type { CaseStudyBlock } from "@/lib/caseStudies";

interface CaseStudyBlocksProps {
  blocks: CaseStudyBlock[];
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-lime-ink">
      {children}
    </p>
  );
}

// Fixed (not random) rotation pattern — avoids a server/client
// hydration mismatch flash that true Math.random() would cause.
const cardTilts = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "rotate-2", "-rotate-2"];

function GhostNumber({ value }: { value: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -left-2 -top-6 select-none text-[8rem] font-extrabold leading-none text-navy/5 md:-top-10 md:text-[11rem]"
    >
      {value}
    </span>
  );
}

export default function CaseStudyBlocks({ blocks }: CaseStudyBlocksProps) {
  return (
    <div className="mx-auto max-w-content px-6 md:px-10">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <div key={i} className="relative mt-16">
                {block.ghostNumber && <GhostNumber value={block.ghostNumber} />}
                <div className="relative">
                  {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                  {block.heading && (
                    <h2 className="text-2xl font-extrabold text-navy md:text-3xl">
                      {block.heading}
                    </h2>
                  )}
                  {block.paragraphs && block.paragraphs.length > 0 && (
                    <div className={block.heading ? "mt-4 space-y-4" : "space-y-4"}>
                      {block.paragraphs.map((p, pi) => (
                        <p key={pi} className="leading-relaxed text-navy/80">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );

          case "subsection":
            return (
              <div key={i} className="mt-16">
                {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                <h3 className="text-xs font-bold uppercase tracking-widest text-navy/60">
                  {block.heading}
                </h3>
                <p className="mt-2 text-navy/80">{block.body}</p>
              </div>
            );

          case "dual-card":
            return (
              <div key={i} className="relative mt-16 overflow-hidden rounded-lg bg-lavender/10 p-6 md:p-8">
                {block.ghostNumber && <GhostNumber value={block.ghostNumber} />}
                <div className="relative">
                  {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                  <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {block.cards.map((c, ci) => (
                      <div key={ci} className="rounded-md bg-navy p-5">
                        <p className="text-sm font-bold uppercase tracking-widest text-lime">
                          {c.label}
                        </p>
                        <p className="mt-2 text-paper/90">{c.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );

          case "image":
            return (
              <figure key={i} className={`mt-16 ${block.maxWidth ? `mx-auto ${block.maxWidth}` : ""}`}>
                {block.caption && block.captionPosition === "before" && (
                  <p className="mb-4 text-lg font-semibold text-navy">{block.caption}</p>
                )}
                <div className="overflow-hidden rounded-card border border-navy/10 bg-navy/5">
                  {block.maxHeight ? (
                    <div className={`flex items-center justify-center ${block.maxHeight}`}>
                      <img src={block.src} alt={block.alt} className="max-h-full max-w-full object-contain" />
                    </div>
                  ) : (
                    <img src={block.src} alt={block.alt} className="w-full object-contain" />
                  )}
                </div>
                {block.caption && block.captionPosition !== "before" && (
                  <figcaption className="mt-3 text-sm font-semibold text-navy/70">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "screen": {
            // Alternates image/text sides on desktop for a gallery feel,
            // matching the reference's staggered screen layout. Stacks
            // to a single column below md regardless of side.
            const imageFirst = i % 2 === 0;
            return (
              <div key={i} className="mt-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
                <div className={imageFirst ? "md:order-1" : "md:order-2"}>
                  <div className="overflow-hidden rounded-card border border-navy/10 bg-navy/5">
                    {block.maxHeight ? (
                      <div className={`flex items-center justify-center ${block.maxHeight}`}>
                        <img src={block.src} alt={block.alt} className="max-h-full max-w-full object-contain" />
                      </div>
                    ) : (
                      <img src={block.src} alt={block.alt} className="w-full object-contain" />
                    )}
                  </div>
                </div>
                <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                  <h3 className="text-lg font-extrabold uppercase tracking-wide text-navy">
                    {block.heading}
                  </h3>
                  <p className="mt-3 text-navy/80 leading-relaxed">{block.description}</p>
                  {block.bullets && (
                    <ul className="mt-3 space-y-2 text-navy/80">
                      {block.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2">
                          <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-ink" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          }

          case "insight-list": {
            if (block.variant === "cards") {
              return (
                <div key={i} className="mt-16">
                  {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                  <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {block.items.map((item, ii) => {
                      const [label, ...rest] = item.split(":");
                      const body = rest.join(":").trim();
                      return (
                        <div
                          key={ii}
                          className={`rounded-md bg-navy p-5 shadow-md transition-transform hover:rotate-0 ${
                            cardTilts[ii % cardTilts.length]
                          }`}
                        >
                          <span className="text-xs font-bold text-lime">
                            {String(ii + 1).padStart(2, "0")}
                          </span>
                          <p className="mt-2 font-bold text-lime">{label}</p>
                          {body && <p className="mt-1 text-sm text-paper/90">{body}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
            return (
              <div key={i} className="mt-16">
                {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                <ul className="mt-4 space-y-3 text-navy/80">
                  {block.items.map((item, ii) => (
                    <li key={ii} className="flex gap-2">
                      <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-navy" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          case "metric-grid":
            return (
              <div key={i} className="mt-16">
                {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {block.metrics.map((m, mi) => (
                    <div
                      key={mi}
                      className={`rounded-lg bg-navy p-6 shadow-md transition-transform hover:rotate-0 ${
                        cardTilts[mi % cardTilts.length]
                      }`}
                    >
                      <p className="text-4xl font-extrabold leading-none text-lime md:text-5xl">
                        {m.value}
                      </p>
                      <p className="mt-2 text-paper/90">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "quote-callout":
            return (
              <div key={i} className="mt-16 rounded-lg bg-lime px-6 py-10 md:px-10">
                {block.eyebrow && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-navy/70">
                    {block.eyebrow}
                  </p>
                )}
                <p className="text-2xl font-bold leading-snug text-navy md:text-3xl">
                  <span className="italic">{block.heading}</span> {block.quote}
                </p>
              </div>
            );

          case "highlight-banner":
            return (
              <div key={i} className="mt-16 rounded-lg bg-navy px-6 py-6 md:px-8">
                <p className="text-lg font-bold leading-snug text-lime md:text-xl">
                  {block.label && <span>{block.label} </span>}
                  {block.message}
                </p>
              </div>
            );

          case "persona-grid":
            return (
              <div key={i} className="mt-16">
                {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {block.personas.map((p, pi) => (
                    <div key={pi} className="rounded-lg bg-lavender/10 p-6">
                      <div className="flex items-center gap-4">
                        {p.photoSrc ? (
                          <img
                            src={p.photoSrc}
                            alt={p.name}
                            className="h-16 w-16 shrink-0 rounded-full object-cover"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-bold text-lime"
                          >
                            {p.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        )}
                        <div>
                          <p className="font-bold text-navy">{p.name}</p>
                          <p className="text-sm text-navy/70">{p.role}</p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-lime-ink">Goals</p>
                        <ul className="mt-2 space-y-1 text-sm text-navy/80">
                          {p.goals.map((g, gi) => (
                            <li key={gi}>{g}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-lime-ink">Pain Points</p>
                        <ul className="mt-2 space-y-1 text-sm text-navy/80">
                          {p.painPoints.map((pp, ppi) => (
                            <li key={ppi}>{pp}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-lime-ink">Needs</p>
                        <ul className="mt-2 space-y-1 text-sm text-navy/80">
                          {p.needs.map((n, ni) => (
                            <li key={ni}>{n}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "image-grid":
            return (
              <div key={i} className="mt-16">
                {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                {block.heading && (
                  <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                )}
                <div className={`${block.heading ? "mt-6" : ""} grid grid-cols-1 gap-6 md:grid-cols-2`}>
                  {block.images.map((img, imi) => (
                    <figure key={imi} className="mx-auto w-full max-w-sm md:max-w-none">
                      <div className="overflow-hidden rounded-card border border-navy/10 bg-navy/5">
                        <img src={img.src} alt={img.alt} className="mx-auto w-full max-w-xs object-contain md:max-w-sm" />
                      </div>
                      {img.caption && (
                        <figcaption className="mt-3 text-sm font-semibold text-navy/70">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            );

          case "process-timeline":
            return (
              <div key={i} className="mt-16">
                {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                {block.heading && (
                  <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                )}
                <ol className={`${block.heading ? "mt-8" : ""} space-y-6`}>
                  {block.steps.map((step, si) => (
                    <li key={si} className="grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_1.3fr] md:gap-8">
                      {/* Ghost numeral sits behind the heading/description
                          as the step marker — replaces the earlier
                          line-and-dot approach, which needed fragile
                          pixel offsets to stay centered. */}
                      <div className="relative">
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -left-1 -top-6 select-none text-8xl font-extrabold leading-none text-navy/5 md:-top-8 md:text-9xl"
                        >
                          {si + 1}
                        </span>
                        <div className="relative">
                          <h3 className="text-lg font-extrabold uppercase tracking-wide text-navy">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-navy/80 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      {/* No border/background box. A fixed aspect ratio
                          keeps every step's image the same height —
                          without this, a taller screenshot in one step
                          would inflate its whole row and read as extra
                          gap even with tight spacing on the list. */}
                      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-card">
                        <img src={step.src} alt={step.alt} className="max-h-full w-full object-contain" />
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            );

          case "priority-grid":
            return (
              <div key={i} className="mt-16">
                {block.eyebrow && <Eyebrow>{block.eyebrow}</Eyebrow>}
                {block.heading && (
                  <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                )}
                <div className={`${block.heading ? "mt-6" : ""} grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
                  {block.columns.map((col, ci) => (
                    <div
                      key={ci}
                      className={`rounded-lg p-5 ${
                        col.accent === "navy"
                          ? "bg-navy text-paper"
                          : col.accent === "lime"
                          ? "bg-lime text-navy"
                          : col.accent === "lavender"
                          ? "bg-lavender text-navy"
                          : "bg-navy/5 text-navy/60"
                      }`}
                    >
                      <h3 className="font-bold">{col.label}</h3>
                      {col.sublabel && (
                        <p className="mt-1 text-xs opacity-80">{col.sublabel}</p>
                      )}
                      <ul className="mt-3 space-y-2">
                        {col.items.map((item, ii) => (
                          <li
                            key={ii}
                            className={`rounded px-2 py-1.5 text-sm ${
                              col.accent === "muted" ? "bg-navy/5" : "bg-white/15"
                            }`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "card-grid":
            return (
              <div key={i} className="mt-16">
                <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {block.cards.map((c, ci) => (
                    <div
                      key={ci}
                      className={`rounded-lg p-5 ${
                        c.accent === "navy"
                          ? "bg-navy text-paper"
                          : c.accent === "lime"
                          ? "bg-lime text-navy"
                          : c.accent === "lavender"
                          ? "bg-lavender text-navy"
                          : "bg-navy/5 text-navy"
                      }`}
                    >
                      <h3 className="font-bold">{c.title}</h3>
                      <p className="mt-2 text-sm opacity-90">{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "sticky-note-grid":
            return (
              <div key={i} className="mt-16">
                {block.heading && (
                  <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{block.heading}</h2>
                )}
                <div className={`${block.heading ? "mt-6" : ""} flex flex-wrap gap-3`}>
                  {block.notes.map((n, ni) => (
                    <span
                      key={ni}
                      className={`rounded-md px-4 py-3 text-sm font-semibold ${
                        n.accent === "navy"
                          ? "bg-navy text-paper"
                          : n.accent === "lime"
                          ? "bg-lime text-navy"
                          : "bg-lavender text-navy"
                      }`}
                    >
                      {n.title}
                    </span>
                  ))}
                </div>
              </div>
            );

          case "confidential-notice":
            return (
              <div
                key={i}
                className="mt-16 rounded-lg bg-navy px-6 py-10 text-center text-paper md:px-10"
              >
                <p className="mx-auto max-w-2xl font-semibold">{block.message}</p>
                <p className="mt-4 text-sm text-paper/80">
                  Please reach out to me for more details:
                </p>
                <p className="mt-1 font-semibold text-lime">
                  <a href={`mailto:${block.contactEmail}`}>{block.contactEmail}</a>
                  {block.contactPhone && <> &middot; {block.contactPhone}</>}
                </p>
              </div>
            );

          case "copyright-notice":
            return (
              <div key={i} className="mt-16 border-t border-navy/10 pt-8">
                <p className="text-center text-sm italic text-navy/50">{block.message}</p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}