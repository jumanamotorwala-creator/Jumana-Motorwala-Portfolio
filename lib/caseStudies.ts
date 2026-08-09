// Shared schema for every case study on the site. A case study is an
// ordered array of typed "blocks" rather than a fixed set of fields —
// this is deliberate: across the 5 real Figma case studies, the shape
// varies too much for a rigid schema (Ample has no screen breakdown at
// all and ends in a confidentiality notice; TechGen has a MoSCoW
// prioritization grid; the other three follow a closer shared pattern
// but still differ in section count). A block-array lets each case
// study be its own sequence while sharing one rendering template, so
// adding a 6th project later means writing a new block array, not
// redesigning the page.

export interface CaseStudyMeta {
  slug: string;
  title: string;
  client: string; // e.g. "Dr. Reddy's Laboratories" — used as alt text and as a text fallback if no logo is set
  clientLogo?: string; // path under public/, e.g. "/images/about/logos/dr-reddys.webp"
  tagline: string;
  durationBadge?: string; // e.g. "15-MONTH PROJECT"
  tickerStats: string[]; // short phrases for the scrolling stat strip
  heroSrc: string; // .gif or .jpg — hero.gif for prototype-driven projects
  heroAlt: string;
  heroIsVideo?: boolean; // reserved for a future .mp4 swap-in
  heroFit?: "cover" | "contain"; // default "cover"; controls object-fit only
  heroShowBox?: boolean; // default true; false removes the border/bg/shadow card (e.g. transparent PNGs)
  heroMaxWidth?: string; // optional Tailwind max-width class, e.g. "max-w-[300px]", for phone-shaped media that shouldn't stretch to fill a wide hero column
  heroMaxHeight?: string; // optional Tailwind max-height class, e.g. "max-h-[520px]"; needed alongside heroMaxWidth for tall/elongated media (e.g. a full-scroll screen recording) that would otherwise still overflow the viewport even at a capped width
  intro: string[]; // two-column intro paragraphs below the ticker
  keyResults: string[];
  role: string;
  timeline: string;
  methods: string[];
}

// --- Content block types -----------------------------------------

interface TextBlock {
  type: "text";
  eyebrow?: string; // e.g. "DISCOVERY"
  heading?: string;
  ghostNumber?: string; // large faint background numeral, e.g. "45"
  paragraphs?: string[];
}

interface SubsectionBlock {
  type: "subsection";
  eyebrow?: string;
  heading: string;
  label?: string; // e.g. "Current State:" / "Desired Outcome:"
  body: string;
}

// Renders Current State / Desired Outcome (or similar) as a paired
// two-card row under one heading, matching the redesign's layout.
interface DualCardBlock {
  type: "dual-card";
  eyebrow?: string;
  heading: string;
  ghostNumber?: string;
  cards: { label: string; body: string }[];
}

interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  captionPosition?: "before" | "after"; // default "after"; "before" renders larger, as a lead-in line rather than a muted caption
  maxWidth?: string; // optional Tailwind max-width class, e.g. "max-w-2xl", to shrink an oversized or phone-shaped image instead of stretching full width
  maxHeight?: string; // optional Tailwind max-height class, e.g. "max-h-[520px]"; bounds a tall/elongated image (e.g. a full-scroll recording) so it fits in view instead of just being narrower but still tall
}

interface ScreenBlock {
  type: "screen";
  heading: string;
  src: string;
  alt: string;
  description: string;
  bullets?: string[];
  maxHeight?: string; // Tailwind FIXED-height class, e.g. "h-[420px]" — NOT max-h-*, which silently fails here since percentage-based child sizing needs a real parent height, not just a ceiling
}

interface InsightListBlock {
  type: "insight-list";
  eyebrow?: string;
  heading: string;
  ghostNumber?: string;
  variant?: "bullets" | "cards"; // "cards" renders numbered 01/02/03 cards
  items: string[];
}

interface MetricGridBlock {
  type: "metric-grid";
  eyebrow?: string;
  heading: string;
  metrics: { value: string; label: string }[];
}

interface QuoteCalloutBlock {
  type: "quote-callout";
  eyebrow?: string;
  heading: string; // e.g. "How might we"
  quote: string;
}

// Full-width solid-accent banner for a single standout stat or insight,
// e.g. "Key Insight: over 80% of investigation time..."
interface HighlightBannerBlock {
  type: "highlight-banner";
  label?: string; // e.g. "Key Insight:"
  message: string;
}

// Two-or-more persona cards with goals/pain points/needs — used by
// projects that did explicit persona mapping (Container Load
// Optimization, and later TechGen).
interface PersonaGridBlock {
  type: "persona-grid";
  eyebrow?: string;
  heading: string;
  personas: {
    name: string;
    role: string;
    photoSrc?: string;
    goals: string[];
    painPoints: string[];
    needs: string[];
  }[];
}

// A row of full images shown side by side — for cases (like Figma
// persona-card exports) where the source image already contains all
// the information as one flattened graphic, so no separate text
// fields are needed alongside it.
interface ImageGridBlock {
  type: "image-grid";
  eyebrow?: string;
  heading?: string;
  images: { src: string; alt: string; caption?: string }[];
}

// A vertical connected timeline of steps, each with a heading,
// description, and a full-width image — no bordered box around the
// image, unlike ScreenBlock. Used for process/audit phases that read
// as one continuous flow rather than alternating left/right screens.
interface ProcessTimelineBlock {
  type: "process-timeline";
  eyebrow?: string;
  heading?: string;
  steps: { title: string; description: string; src: string; alt: string }[];
}

// MoSCoW-style prioritization grid — four labeled columns (typically
// Must-Have / Should-Have / Could-Have / Won't-Have), each holding a
// stack of short feature tags. Distinct from CardGridBlock, which is
// one card per item — this is grouped columns of many small items.
interface PriorityGridBlock {
  type: "priority-grid";
  eyebrow?: string;
  heading?: string;
  columns: {
    label: string; // e.g. "Must-Have"
    sublabel?: string; // e.g. "Critical Features"
    accent: "navy" | "lime" | "lavender" | "muted"; // "muted" for de-prioritized columns like Won't-Have
    items: string[];
  }[];
}

interface CardGridBlock {
  type: "card-grid";
  heading: string;
  cards: { title: string; body: string; accent?: "navy" | "lime" | "lavender" }[];
}

interface StickyNoteGridBlock {
  type: "sticky-note-grid";
  heading?: string;
  notes: { title: string; accent: "navy" | "lime" | "lavender" }[];
}

interface ConfidentialNoticeBlock {
  type: "confidential-notice";
  message: string;
  contactEmail: string;
  contactPhone?: string;
}

// Distinct from ConfidentialNoticeBlock: this isn't "details withheld,
// contact me" — it's an ownership/attribution disclaimer for a project
// whose full case study IS shown, crediting the actual client.
interface CopyrightNoticeBlock {
  type: "copyright-notice";
  message: string;
}

export type CaseStudyBlock =
  | TextBlock
  | SubsectionBlock
  | DualCardBlock
  | ImageBlock
  | ScreenBlock
  | InsightListBlock
  | MetricGridBlock
  | QuoteCalloutBlock
  | HighlightBannerBlock
  | PersonaGridBlock
  | ImageGridBlock
  | ProcessTimelineBlock
  | PriorityGridBlock
  | CardGridBlock
  | StickyNoteGridBlock
  | ConfidentialNoticeBlock
  | CopyrightNoticeBlock;

export interface CaseStudy {
  meta: CaseStudyMeta;
  blocks: CaseStudyBlock[];
}