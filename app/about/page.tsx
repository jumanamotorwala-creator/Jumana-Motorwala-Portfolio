import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutPhotoCarousel from "@/components/AboutPhotoCarousel";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Jumana Motorwala",
  description:
    "Jumana Motorwala is a Product Designer with 3.5+ years of experience designing user-centered solutions across AI-driven platforms, healthcare, and enterprise systems.",
};

const tickerPhrase =
  "AVAILABLE FOR WORK — FINTECH — HEALTHCARE — B2B SAAS — DESIGN SYSTEMS —";

const experienceAreas = [
  "AI-powered platforms for decision-making and automation",
  "Enterprise systems transforming manual processes into digital workflows",
  "Data-heavy products where usability and clarity are critical",
];

const values = [
  { label: "Empathy-driven design", tier: "base", tilt: "" },
  { label: "Data-informed decisions", tier: "tint", tilt: "-rotate-2" },
  { label: "UX strategy & systems thinking", tier: "emphasis", tilt: "" },
  { label: "Cross-functional collaboration", tier: "base", tilt: "rotate-1" },
  { label: "Continuous learning", tier: "tint", tilt: "" },
] as const;

const funFacts = [
  "✨ Stargazer at heart — always chasing meteor showers",
  "🍪 Built a small home bakery brand (The Tasty Treats)",
  "⚽ Football enthusiast — player and fan",
  "🎮 Gaming helps me unwind and sparks creative thinking",
  "☕ Powered by coffee and lo-fi playlists",
  "🎬 Big-time binge watcher",
];

const factTilts = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-1", "-rotate-1"];

const process = [
  {
    number: "01",
    title: "Research",
    description:
      "User research and usability testing to find the real problem beneath the ask.",
  },
  {
    number: "02",
    title: "Frame",
    description:
      "Align the solution with business and technical constraints before designing.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Turn workflows into intuitive, scalable experiences — not just interfaces.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "Collaborate cross-functionally to bring real-world solutions to life.",
  },
];

type Accent = "navy" | "lime" | "lavender";

const experience: {
  company: string;
  role: string;
  dates: string;
  current: boolean;
  logo: string | null;
  initials: string;
  accent: Accent;
}[] = [
  {
    company: "UXReactor (Ascendion Engineering)",
    role: "Sr. Product Designer",
    dates: "Apr 2025 – Sept 2025",
    current: false,
    logo: "uxreactor.svg",
    initials: "UX",
    accent: "navy",
  },
  {
    company: "Dr. Reddy's Laboratories",
    role: "Sr. UX Designer",
    dates: "Aug 2024 – Mar 2025",
    current: false,
    logo: "dr-reddys.webp",
    initials: "DR",
    accent: "lime",
  },
  {
    company: "Dr. Reddy's Laboratories",
    role: "UX Designer",
    dates: "July 2023 – Aug 2024",
    current: false,
    logo: "dr-reddys.webp",
    initials: "DR",
    accent: "lavender",
  },
  {
    company: "TYS — The Yellow Strawberry",
    role: "UX Designer",
    dates: "Feb 2022 – Mar 2023",
    current: false,
    logo: "tys.webp",
    initials: "TY",
    accent: "navy",
  },
];

const education: {
  school: string;
  program: string;
  dates: string;
  logo: string | null;
  initials: string;
  accent: Accent;
}[] = [
  {
    school: "Atlas SkillTech University, ISDI' Parsons, New York",
    program: "PG — Design & Innovation",
    dates: "2022 – 2023",
    logo: "atlas-skilltech.png",
    initials: "AS",
    accent: "lime",
  },
  {
    school: "Amity University, Mumbai",
    program: "B.Sc. Animation & Visual Graphics",
    dates: "2019 – 2022",
    logo: "amity.png",
    initials: "AU",
    accent: "lavender",
  },
];

const aboutPhotos = [
  {
    src: "/images/about/photo-1.jpg",
    alt: "Jumana in cap and gown holding her diploma, graduating with a Master's in Design",
    caption: "Mastered it",
  },
  {
    src: "/images/about/photo-2.jpg",
    alt: "Jumana presenting a microcopy slide to her UX team at Dr. Reddy's",
    caption: "Microcopy, major moment",
  },
  {
    src: "/images/about/photo-3.jpg",
    alt: "Jumana stirring a cup of coffee",
    caption: "Powered by coffee",
  },
  {
    src: "/images/about/photo-4.jpg",
    alt: "Jumana playing the ukulele",
    caption: "Learning my notes",
  },
  {
    src: "/images/about/photo-5.jpg",
    alt: "Jumana facilitating a design thinking workshop with stakeholders around sticky notes",
    caption: "Facilitator mode: on",
  },
  {
    src: "/images/about/photo-6.jpg",
    alt: "Jumana during a gym workout phase",
    caption: "Weight, I can do this",
  },
  {
    src: "/images/about/photo-7.jpg",
    alt: "Jumana standing on a misty hillside trail while trekking",
    caption: "Trail and error",
  },
  {
    src: "/images/about/photo-8.jpg",
    alt: "Jumana taking a mirror selfie in a fitting room, trying on an outfit",
    caption: "Dressed to experiment",
  },
];

const tierClasses: Record<(typeof values)[number]["tier"], string> = {
  base: "bg-navy/5 text-navy",
  tint: "bg-lime/10 text-lime-ink",
  emphasis: "border-2 border-lime-ink text-lime-ink bg-transparent",
};

const accentSquare: Record<Accent, string> = {
  navy: "bg-navy",
  lime: "bg-lime",
  lavender: "bg-lavender",
};

const accentMonogram: Record<Accent, string> = {
  navy: "bg-navy text-paper",
  lime: "bg-lime text-navy",
  lavender: "bg-lavender text-navy",
};

function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-4">
      <span aria-hidden="true" className="block h-1 w-10 bg-navy" />
      <h2
        id={id}
        className="mt-3 text-base font-bold uppercase tracking-widest text-navy md:text-lg"
      >
        {children}
      </h2>
    </div>
  );
}

function TimelineRow({
  logo,
  logoAlt,
  initials,
  accent,
  title,
  subtitle,
  dates,
  current,
  index,
}: {
  logo: string | null;
  logoAlt: string;
  initials: string;
  accent: Accent;
  title: React.ReactNode;
  subtitle: string;
  dates: string;
  current: boolean;
  index: number;
}) {
  return (
    <li
      className={`group flex items-center gap-6 rounded-lg p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        index % 2 === 0 ? "bg-navy/[0.03]" : "bg-transparent"
      } ${index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"}`}
    >
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 shrink-0 rounded-sm ${accentSquare[accent]}`}
      />

      {logo ? (
        <img
          src={`/images/about/logos/${logo}`}
          alt={logoAlt}
          className="h-12 w-auto max-w-[100px] shrink-0 object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-xs font-bold ${accentMonogram[accent]}`}
        >
          {initials}
        </span>
      )}

      <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1 sm:flex-nowrap">
        <span className="truncate font-semibold text-navy">
          {title} <span className="font-normal text-navy/70">— {subtitle}</span>
        </span>
        <span className="shrink-0 text-sm text-navy/60">
          {dates}
          {current && (
            <span className="ml-2 rounded-full bg-lime px-2 py-0.5 text-xs font-bold text-navy">Present</span>
          )}
        </span>
      </div>
    </li>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section aria-labelledby="about-heading" className="mx-auto max-w-content px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1fr_380px] md:gap-20">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lime-ink">About</p>
              <h1
                id="about-heading"
                className="mt-4 text-4xl font-extrabold leading-snug tracking-tight text-navy md:text-5xl md:leading-snug"
              >
                Design
                <br />
                is where
                <br />
                <span className="underline decoration-lime decoration-[6px] underline-offset-4">science &amp; art</span>
                <br />
                break even
              </h1>
            </div>

            <div className="relative">
              <AboutPhotoCarousel photos={aboutPhotos} />
            </div>
          </div>
        </section>

        <div className="w-full overflow-hidden bg-navy py-3" aria-hidden="true">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="text-xs font-semibold uppercase tracking-widest text-lime md:text-sm"
              >
                {tickerPhrase}&nbsp;
              </span>
            ))}
          </div>
        </div>

        <section aria-label="Bio" className="mx-auto max-w-content px-6 pt-16 pb-16 md:px-10 md:pt-20 md:pb-20">
          <blockquote className="relative max-w-3xl">
            <span aria-hidden="true" className="absolute -left-2 -top-6 text-6xl font-extrabold text-lime md:-left-4 md:-top-8 md:text-7xl">
              &ldquo;
            </span>
            <p className="text-2xl font-bold leading-snug text-navy md:text-3xl">
              <span className="underline decoration-lime decoration-[6px] underline-offset-4">Curious</span> about the complexity,
              <br />
              <span className="underline decoration-lime decoration-[6px] underline-offset-4">Passionate</span> about simplifying it
              <br />
              &amp; <span className="underline decoration-lime decoration-[6px] underline-offset-4">Focused</span> on building experiences that actually work.
            </p>
          </blockquote>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <p className="text-base leading-relaxed text-navy/80 md:text-lg">
              👋 Hi, I&apos;m Jumana — a <span className="font-semibold text-navy">Product Designer with 3.5+ years of experience</span> designing user-centered solutions <span className="font-semibold text-navy">across AI-driven platforms, healthcare, and enterprise systems.</span>
            </p>
            <p className="text-base leading-relaxed text-navy/80 md:text-lg">
              Currently, I&apos;ve been working on digitizing and optimizing enterprise workflows, collaborating closely with cross-functional teams to bring impactful, real-world solutions to life.
            </p>
          </div>
        </section>

        <section aria-label="Background" className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-20">
          <div>
            <SectionHeading>Values &amp; Skills</SectionHeading>
            <ul
              className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-3"
              aria-label="Values and skills"
            >
              {values.map((value) => (
                <li
                  key={value.label}
                  className={`shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-base font-semibold sm:px-3.5 ${tierClasses[value.tier]} ${value.tilt}`}
                >
                  {value.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-lg bg-lavender/10 p-6 md:p-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 text-7xl font-extrabold text-navy/5 md:text-8xl"
            >
              +
            </span>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              <div>
                <SectionHeading>Experience Depth</SectionHeading>
                <p className="text-navy/80">Over the past few years, I&apos;ve worked on:</p>
                <ul className="mt-3 space-y-2 text-navy/80">
                  {experienceAreas.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-navy" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-semibold text-navy">My work focuses on reducing cognitive load, improving usability, and designing systems that scale.</p>
              </div>

              <div className="border-t border-navy/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <SectionHeading>What Drives Me</SectionHeading>
                <p className="text-xl font-bold leading-snug text-navy md:text-2xl">
                  I enjoy working on problems that are complex beneath the surface but simple for the user — where thoughtful design can make a meaningful difference in how people interact with technology.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading>Fun Facts</SectionHeading>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {funFacts.map((fact, i) => (
                <div
                  key={fact}
                  className={`rounded-md bg-navy/5 p-4 transition-transform hover:rotate-0 ${factTilts[i % factTilts.length]}`}
                >
                  <span className="text-sm font-bold text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-navy/80">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="process-heading" className="bg-paper pb-16 md:pb-20">
          <div className="mx-auto max-w-content px-6 md:px-10">
            <SectionHeading id="process-heading">My Process</SectionHeading>
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div key={step.number} className="relative">
                  <span aria-hidden="true" className="absolute -top-6 left-0 text-6xl font-extrabold text-navy/5 md:text-7xl">
                    {step.number}
                  </span>
                  <h3 className="relative text-lg font-bold text-navy">{step.title}</h3>
                  <p className="relative mt-2 text-sm text-navy/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="experience-heading" className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-20">
          <SectionHeading id="experience-heading">Experience</SectionHeading>
          <ul className="mt-8 space-y-3">
            {experience.map((job, i) => (
              <TimelineRow
                key={i}
                index={i}
                logo={job.logo}
                logoAlt={`${job.company} logo`}
                initials={job.initials}
                accent={job.accent}
                title={job.role}
                subtitle={job.company}
                dates={job.dates}
                current={job.current}
              />
            ))}
          </ul>
        </section>

        <section aria-labelledby="education-heading" className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-20">
          <SectionHeading id="education-heading">Education</SectionHeading>
          <ul className="mt-8 space-y-3">
            {education.map((edu, i) => (
              <TimelineRow
                key={i}
                index={i}
                logo={edu.logo}
                logoAlt={`${edu.school} logo`}
                initials={edu.initials}
                accent={edu.accent}
                title={edu.program}
                subtitle={edu.school}
                dates={edu.dates}
                current={false}
              />
            ))}
          </ul>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}