import type { CaseStudy } from "@/lib/caseStudies";

export const containerLoadOptimization: CaseStudy = {
  meta: {
    slug: "container-load-optimization",
    title: "Container Load Optimization",
    client: "Dr. Reddy's Laboratories",
    clientLogo: "/images/about/logos/dr-reddys.webp",
    tagline: "Pharmaceutical logistics with multi-persona UX design, data visualization",
    durationBadge: "4-MONTH PROJECT",
    tickerStats: [
      "CONTAINER SPACE OPTIMIZED",
      "UNIFIED BATCH SCHEDULING",
      "FASTER DISPATCH DECISIONS",
    ],
    heroSrc: "/images/case-studies/container-load-optimization/hero.gif",
    heroAlt: "Animated walkthrough of the Container Load Optimization interactive prototype",
    intro: [
      "A multi-persona logistics platform designed to eliminate container space wastage in pharmaceutical dispatch operations — enabling demand planners and warehouse teams to coordinate batch scheduling, container loading, and MOT decisions from a single, unified interface.",
    ],
    keyResults: [
      "Reduced container space wastage through optimized pallet planning.",
      "Unified batch scheduling across demand, warehouse, and dispatch teams.",
      "Faster dispatch workflows with real-time short-dating visibility for planners.",
    ],
    role: "UX Researcher & Data Visualizer",
    timeline: "Aug 2023 – Nov 2023",
    methods: [
      "User Research",
      "Stakeholder Interviews",
      "Persona Mapping",
      "As-Is Journey Mapping",
      "Hi-Fi UI Design",
      "Data Visualization",
    ],
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "The Challenge",
      paragraphs: [
        "Pharmaceutical companies like Dr. Reddy's must stay ahead of market demand — dispatching manufactured batches before supply shortages arise across global markets. Shipments go out via multiple modes of transport (air, fast and expensive, and sea, economical but slow), but freight schedules were being booked without coordination.",
        "Teams across demand planning, warehouse, logistics, and quality all worked in silos. There was no single source of visibility into how pallets were being packed, which routes were confirmed, or how much container space was going to waste. The result: real financial losses from inefficiently booked shipments.",
      ],
    },
    {
      type: "dual-card",
      heading: "Defining The Problem",
      cards: [
        {
          label: "Current State",
          body: "Demand planners managed batch schedules manually, often in spreadsheets or disconnected systems. Warehouse teams had no mechanism to see batch status across the dispatch lifecycle.",
        },
        {
          label: "Desired Outcome",
          body: "Create a single platform that could serve multiple personas at once — making complex logistics data legible, actionable, and fast to scan.",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "Understanding the Manufacturing Ecosystem",
      paragraphs: [
        "The pharmaceutical supply chain operates under strict regulatory, quality, and shelf-life constraints. No single tool accounted for batch release timelines, short-dating thresholds, and multi-market MOT rules all at once — or how shifting demand signals across markets should influence dispatch decisions.",
      ],
    },
    {
      type: "insight-list",
      heading: "Industry Context",
      variant: "bullets",
      items: [
        "Sea shipments require whole-container booking — partial use still costs full price.",
        "Air freight runs 4–6x costlier but was used for critical, time-sensitive shipments.",
        "Batch release is quality-gated — \"Waiting for batch release\" is a distinct workflow state.",
        "Short-dated stock must be prioritized in dispatch — shelf life directly impacts market availability.",
      ],
    },
    {
      type: "insight-list",
      heading: "Gap in Existing Tools",
      variant: "bullets",
      items: [
        "Generic ERP systems show batch data in flat tables with no spatial or utilization context.",
        "No existing visual container-load or pallet-arrangement view for warehouse teams.",
        "MOT split decisions were made manually, based on urgency rather than data.",
        "Multi-persona workflows had no shared data layer — teams worked from different reports.",
      ],
    },
    {
      type: "text",
      heading: "Assumptions",
      paragraphs: [
        "Going into this project, we operated with the following design assumptions based on stakeholder conversations and domain research:",
        "Demand planners primarily work from desktop in an office environment and need fast, scannable tools. Warehouse teams may need to reference container plans on-floor, but confirmation actions primarily happen at a workstation.",
      ],
    },
    {
      type: "insight-list",
      variant: "bullets",
      heading: "Key Assumptions",
      items: [
        "Container volume utilization is the single most important KPI for the warehouse team — it should be the first thing they see.",
        "Planners need to confirm batches for dispatch in bulk — individual row actions alone would be too slow at scale.",
        "The split-batch feature is high-value but low-frequency — it needs to be accessible without being prominent enough to trigger accidentally.",
        "Months-in-hand (MoH) trend data is more actionable as a line chart than as a raw number — planners need to see direction, not just a data point.",
      ],
    },
    {
      type: "persona-grid",
      heading: "Personas & Objectives",
      personas: [
        {
          name: "Priya Sharma",
          role: "Demand Planner — Supply Chain, FTO 3, Hyderabad",
          photoSrc: "/images/case-studies/container-load-optimization/persona-priya.jpg",
          goals: [
            "See all scheduled, dispatch-ready, and pending batches in one place.",
            "Confirm batches for dispatch quickly without missing short-dated stock.",
            "Split batches across MOTs based on urgency and market need.",
          ],
          painPoints: [
            "No single view to see batch status across the dispatch lifecycle.",
            "MOT decisions made on intuition, not data — costly air shipments happen when sea would've worked.",
            "MoH data buried in reports, not visible at the point of dispatch decision.",
          ],
          needs: [
            "Contextual batch intelligence (demand, transit, shelf life) on demand.",
            "Bulk selection and confirmation for high-volume planning days.",
          ],
        },
        {
          name: "Ramesh Iyer",
          role: "Warehouse Lead — Warehouse Operations, Plant Manager, Chennai",
          photoSrc: "/images/case-studies/container-load-optimization/persona-ramesh.jpg",
          goals: [
            "Know exactly how many containers are dispatching today and tomorrow.",
            "Ensure every container is loaded as efficiently as possible.",
            "Identify and resolve re-palletization issues before dispatch.",
          ],
          painPoints: [
            "No visual way to see pallet arrangement — loading plans lived in text or spreadsheets.",
            "Re-palletization issues discovered at the dock, not during planning.",
            "No single view spanning today, tomorrow, and custom date ranges.",
          ],
          needs: [
            "A visual container-loading map with layer-by-layer pallet positions.",
            "Utilization % front and center before any row-level detail.",
          ],
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "As-Is: User Journey Mapping",
    },
    {
      type: "image",
      src: "/images/case-studies/container-load-optimization/journey-map.jpg",
      alt: "As-Is user journey mapping board across five phases for demand planners and warehouse teams",
    },
    {
      type: "quote-callout",
      eyebrow: "Framing the Problem",
      heading: "How might we",
      quote:
        "give demand planners and warehouse teams a shared, real-time view of the entire batch lifecycle — from scheduling to container loading — so that every container leaves the plant as efficiently as possible?",
    },
    {
      type: "insight-list",
      eyebrow: "Definition",
      heading: "Key Insights",
      variant: "cards",
      items: [
        "Three Lifecycle States: Planners need the batch lifecycle split into three distinct states — Scheduled, Dispatch Plan, Waiting for Release — each with its own filters and actions.",
        "Surface Urgency Early: Short-dating stock is the highest urgency signal for a demand planner; it should appear at the row level, not buried in a separate report.",
        "Make Space Spatial: Container space utilization needs to be shown spatially, not just numerically — losing that connection breaks the link between a planner's split decision and a warehouse team's pallet detail.",
        "Flag Before Drilling In: Re-palletization flags need to be visible before a warehouse team opens pallet detail — catching issues at the list level saves time versus the drill-down level.",
      ],
    },
    {
      type: "text",
      eyebrow: "Building the MVP",
      heading: "The MVP",
      paragraphs: [
        "With research and prioritization complete, we defined the MVP as a two-persona split web platform — a Demand Planner view for managing the full batch dispatch lifecycle, and a Warehouse view for container utilization and pallet-loading detail. Both personas share a common visual language, dense data tables, and batch-level status indicators, ensuring continuity across teams without disrupting existing operational flow.",
        "The design was built around a minimal, clean UI to support data density without visual noise. A persistent color-coded panel pattern gives contextual batch intelligence without disrupting the planning flow: purple for split batches, red for re-palletization flags, green for confirmed containers — status at a glance.",
      ],
    },
    {
      type: "screen",
      heading: "The Demand Planner Screen — Scheduled for Packing",
      src: "/images/case-studies/container-load-optimization/screen-demand-planner.jpg",
      alt: "Demand Planner screen showing batches scheduled for packing with a contextual detail panel",
      description:
        "The primary landing view for the demand planner, showing all batches currently scheduled to be packed. The right panel loads contextual intelligence on row-click.",
      bullets: [
        "Three-tab navigation: Scheduled for Packing / Dispatch Plan for Today / Waiting for Release — each tab reflects a real stage in the batch lifecycle, with its own filters and actions.",
        "Contextual detail panel: monthly demand, total open orders, MOT usage, and current stock-on-hand — no drill-down required, key data surfaces on row-click.",
        "Short-dating breakdown: a month-by-month bar chart with a highlighted running total flags urgency across weeks.",
        "MoH trend chart: a line chart plots months-in-hand over time, not just a snapshot number.",
        "Split-batch indicators: purple dots on rows show batches already split, preventing duplicate actions without needing to read every row.",
      ],
    },
    {
      type: "screen",
      heading: "The Warehouse Screen — Container & Batch Overview",
      src: "/images/case-studies/container-load-optimization/screen-warehouse-overview.jpg",
      alt: "Warehouse screen showing container and batch overview with utilization metrics",
      description:
        "The warehouse team's primary view, showing container and batch data filtered by plant, MOT, and dispatch date, with utilization surfaced before any other detail.",
      bullets: [
        "Container volume strip: Utilization % / Volume Occupied / Total Volume displayed as a persistent header bar — the most critical KPI is always visible before scrolling.",
        "Re-palletization flag: red indicators surface at the list level, before a warehouse team needs to open pallet detail.",
        "Time-range tabs: Today / Tomorrow / Custom Date Range — content shifts view without navigating away when comparing across dates.",
        "Confirm Dispatch CTA: a prominent purple \"Confirm Dispatch\" button sits top-right, reinforcing that confirmation is a per-container decision, not a bulk action.",
      ],
    },
    {
      type: "screen",
      heading: "The Warehouse Screen — Pallet Detail Panel",
      src: "/images/case-studies/container-load-optimization/screen-pallet-detail.jpg",
      alt: "Pallet detail panel showing current versus revised pallet data",
      description:
        "Clicking \"Pallet Details\" on any batch row opens an inline right panel showing granular pallet detail — Pallet ID, shipper count (current vs. revised), pallet height, and X/Y/Z position — without leaving the main screen.",
      bullets: [
        "Current vs. revised columns sit side by side, so a revision is visible at a glance without comparing screens.",
        "Acknowledgement indicator: revised pallets with a confirmed change get a purple checkmark in the row.",
        "Paginated view: the panel paginates pallet records to keep it from being overwhelmed by high pallet counts.",
      ],
    },
    {
      type: "screen",
      heading: "Container Loading Plan — 3-Layer Spatial Visualization",
      src: "/images/case-studies/container-load-optimization/screen-container-loading-plan.jpg",
      alt: "3-layer spatial visualization of container loading plan showing top, middle, and bottom layers",
      description:
        "A full-screen visualization of container loading, presenting three cross-sectional layer views — Layer 1 (Top), Layer 2 (Middle), Layer 3 (Bottom) — each mapped directly to how the real container floor plan physically loads.",
      bullets: [
        "Spatial model: translating a 3D container into flat layer plans matches how loading decisions are actually made on the floor, more intuitively than tabular alternatives.",
        "Occupied vs. empty slots: purple-filled slots show confirmed pallets, grey outlines show empty ones — gaps are clear before pallets are physically moved.",
        "Batch-coded pallet cards: each pallet shows batch ID, product name, quantity, and MOT indicator in a single glance.",
        "Layer-density indicator: an underfilled layer is flagged immediately, so unused space is caught before dispatch rather than discovered at the dock.",
      ],
    },
    {
      type: "insight-list",
      eyebrow: "Results",
      heading: "Impact",
      variant: "cards",
      items: [
        "Optimized Container Utilization",
        "Smarter MOT Decision-Making",
        "Faster Dispatch Workflows",
        "Reduced Operational Risk",
        "Cross-Team Data Consistency",
      ],
    },
    {
      type: "copyright-notice",
      message:
        "Container Load Optimization is a product designed for Dr. Reddy's Laboratories. All product concepts, workflows, and materials shown belong to Dr. Reddy's Laboratories and are presented here for portfolio purposes only — no copyright is claimed over this work.",
    },
  ],
};