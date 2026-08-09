import type { CaseStudy } from "@/lib/caseStudies";

export const tata1mgAppRevamp: CaseStudy = {
  meta: {
    slug: "tata-1mg-app-revamp",
    title: "E-Pharmacy App",
    client: "Tata 1mg",
    // Logo file confirmed as .webp
    clientLogo: "/images/about/logos/tata-1mg.webp",
    tagline: "Enhancing the Experience",
    // Computed by adding the three phase durations stated in the
    // source (3 + 5 + 2 weeks) — not a single figure given directly.
    durationBadge: "10-WEEK PROJECT",
    tickerStats: [
      "NAVIGATION TIME DOWN 35%",
      "CART ABANDONMENT DOWN 52%",
      "TASK SUCCESS UP 31%",
    ],
    heroSrc: "/images/case-studies/tata-1mg-app-revamp/hero.gif",
    heroAlt: "Animated walkthrough of the Tata 1mg app revamp interactive prototype",
    heroFit: "contain",
    heroMaxWidth: "max-w-[300px]",
    heroMaxHeight: "h-[520px]",
    intro: [
      "Tata 1mg is a leading e-pharmacy platform in India, offering services such as online medicine delivery, diagnostics, doctor consultations, and health insurance plans. Despite its comprehensive offerings, the app struggled with usability challenges, inconsistent design, and cluttered navigation, negatively impacting user retention and trust.",
    ],
    keyResults: [
      "Navigation time reduced by 35%.",
      "Cart abandonment decreased from 25% to 12%.",
      "Task success rate improved to 85%.",
      "Repeat usage increased by 30%.",
    ],
    role: "UX Designer & Researcher",
    timeline: "10 Weeks — Discovery (3wk), Design (5wk), Testing (2wk)",
    methods: [
      "User Research",
      "Heuristic Evaluation",
      "Prototyping and Testing",
      "Competitor Analysis",
    ],
  },
  blocks: [
    {
      type: "dual-card",
      heading: "Defining The Problem",
      cards: [
        {
          label: "Current State",
          body: "Usability challenges led to 65% of users struggling to locate key features. Usability issues led to a 25% cart abandonment rate, with most drop-offs occurring during prescription uploads and checkout.",
        },
        {
          label: "Desired Outcome",
          body: "Reduce cart abandonment to under 15%. Improve navigation efficiency to reduce task completion time by at least 30%.",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "Understanding the User Ecosystem",
      paragraphs: [
        "To design an effective solution, it was essential to first gain a deep understanding of the user behaviour on the application.",
      ],
    },
    {
      type: "subsection",
      heading: "User Research",
      body: "We conducted 65 structured interviews with regular and occasional e-pharmacy users, ages 20–55, to understand navigation behaviour and pain points.",
    },
    {
      type: "highlight-banner",
      label: "Key Insight:",
      message:
        "80% of participants expressed frustration with inefficient navigation — the average time to locate a product was 2 minutes, nearly double the industry benchmark of 1 minute.",
    },
    {
      type: "insight-list",
      heading: "Empathy Mapping",
      variant: "bullets",
      items: [
        "Thinks: \"I want a trustworthy and efficient experience like my local pharmacy.\"",
        "Feels: 70% of participants described frustration with confusing layouts and unclear processes.",
        "Does: 30% of users abandoned the app during prescription upload, citing it as cumbersome.",
      ],
    },
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "Heuristic Evaluation",
      paragraphs: [
        "To identify usability issues, a heuristic evaluation was conducted based on Nielsen's principles.",
      ],
    },
    {
      type: "insight-list",
      heading: "Key Findings",
      variant: "bullets",
      items: [
        "Visibility of System Status: The search bar disappeared on scroll, creating confusion about accessing search functionality.",
        "Match Between System and Real World: Medical categories lacked clarity; users struggled to identify homeopathy, allopathy, or organ-specific categories.",
        "Consistency and Standards: Iconography was inconsistent, with varying styles and sizes making icons hard to interpret and click.",
        "Error Prevention: Lack of clear instructions during prescription uploads led to frequent user errors.",
        "Aesthetic and Minimalist Design: Cluttered layouts with misaligned spacing and overuse of advertisements distracted users from the primary task.",
      ],
    },
    {
      type: "image",
      src: "/images/case-studies/tata-1mg-app-revamp/heuristic-annotated-1.jpg",
      alt: "Annotated heuristic evaluation of the Tata 1mg app, screen 1, showing clutter and spacing issues",
      maxWidth: "max-w-2xl",
    },
    {
      type: "image",
      src: "/images/case-studies/tata-1mg-app-revamp/heuristic-annotated-2.jpg",
      alt: "Annotated heuristic evaluation of the Tata 1mg app, screen 2, showing icon and layout inconsistencies",
      maxWidth: "max-w-2xl",
    },
    {
      type: "text",
      heading: "Severity Grading",
    },
    {
      type: "image",
      src: "/images/case-studies/tata-1mg-app-revamp/severity-grading.jpg",
      alt: "Severity grading table across Home Screen, Health Plans, Care Plans, Profile, Categories, Product Page, Cart, Lab Test, and Consult Doctors",
      caption: "Severity graded across nine key screens and eight usability dimensions.",
      captionPosition: "before",
      maxWidth: "max-w-4xl",
    },
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "As-Is: User Journey Mapping",
    },
    {
      type: "image",
      src: "/images/case-studies/tata-1mg-app-revamp/journey-map.jpg",
      alt: "User journey mapping board across the Need Medicines, Onboarding, and Ordering Medicine phases",
    },
    {
      type: "quote-callout",
      eyebrow: "Framing the Problem",
      heading: "How might we",
      quote:
        "create a user-friendly e-pharmacy platform that reduces cognitive load, simplifies navigation, and enables users to seamlessly access healthcare services, fostering trust and improving task completion efficiency?",
    },
    {
      type: "text",
      eyebrow: "Building the MVP",
      heading: "The MVP",
    },
    {
      type: "insight-list",
      heading: "Ideation",
      variant: "bullets",
      items: [
        "Simplified navigation with a fixed search bar for easy access.",
        "Reorganized information hierarchy to prioritize product details over promotions.",
        "Introduced trust-building elements like secure payment icons and delivery timelines.",
      ],
    },
    {
      type: "image",
      src: "/images/case-studies/tata-1mg-app-revamp/mvp-prototype.gif",
      alt: "Interactive prototype of the redesigned Tata 1mg app MVP",
      caption: "Interactive prototype in Figma",
      maxWidth: "max-w-[300px]",
      maxHeight: "h-[520px]",
    },
    {
      type: "insight-list",
      heading: "Prototyping & Testing",
      variant: "bullets",
      items: [
        "Created interactive wireframes and tested with 10 participants.",
        "Iterative improvements led to a 35% reduction in task completion time and 90% user satisfaction with navigation.",
      ],
    },
    {
      type: "insight-list",
      heading: "Core Features in the Redesigned MVP",
      variant: "cards",
      items: [
        "Simplified Navigation: Persistent search bar and streamlined categories reduced clicks by 30%.",
        "Improved Visual Design: Consistent iconography and colour palette aligned with Tata 1mg's branding.",
        "Personalization: Tailored recommendations increased engagement, with 20% of users exploring suggested products.",
        "Trust-Building Enhancements: Visible safety cues (e.g. \"100% genuine products\") increased trust by 15%.",
      ],
    },
    {
      type: "metric-grid",
      eyebrow: "Results",
      heading: "Impact",
      // Folds together the source's "Impact On Users" bullets and its
      // separate "Before & After Metrics" table — those two sections
      // stated the same figures twice, so this renders them once.
      metrics: [
        { value: "2min → 1.3min", label: "Navigation time reduced by 35%." },
        { value: "25% → 12%", label: "Cart abandonment rate decreased — about a 52% improvement." },
        { value: "65% → 85%", label: "Task success rate improved, especially for first-time users." },
        { value: "30%", label: "Increase in repeat usage, with more users completing multiple orders." },
        { value: "85%", label: "Of users expressed higher confidence in the platform's usability." },
        { value: "↑", label: "Positive feedback on app aesthetics and ease of use." },
      ],
    },
    {
      type: "insight-list",
      eyebrow: "Learnings",
      heading: "Reflections & Learnings",
      variant: "bullets",
      items: [
        "User-Centric Approach: Prioritizing user pain points drove meaningful design changes.",
        "Iterative Design: Regular feedback loops ensured the design met user expectations.",
        "Balancing Business & User Goals: Improved trust and usability supported increased revenue potential.",
      ],
    },
    {
      type: "copyright-notice",
      message:
        "This project explores a redesign of the Tata 1mg app based on independent UX research and analysis. All Tata 1mg branding, product names, and trademarks belong to Tata 1mg, and this work is presented here for portfolio purposes only — no copyright is claimed over this work.",
    },
  ],
};