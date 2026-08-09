import type { CaseStudy } from "@/lib/caseStudies";

export const ample: CaseStudy = {
  meta: {
    slug: "ample",
    title: "UX Audit and Redesign Strategy",
    client: "Dr. Reddy's Laboratories",
    clientLogo: "/images/about/logos/dr-reddys.webp",
    tagline: "for Ample Application",
    durationBadge: "2-MONTH AUDIT",
    // No shipped-product metrics exist for an audit-stage project — these
    // are qualitative milestones drawn from the actual outcome (audit
    // presented, redesign approved), not fabricated numbers.
    tickerStats: [
      "USABILITY AUDIT COMPLETE",
      "REDESIGN APPROVED",
      "STAKEHOLDER ALIGNED",
    ],
    heroSrc: "/images/case-studies/ample/hero.png",
    heroAlt: "Ample UX audit deck shown on a laptop screen, displaying categorized usability issue cards",
    heroFit: "contain",
    heroShowBox: false,
    intro: [
      "This project focused on conducting a UX audit and redesign strategy for a complex enterprise application in the healthcare and manufacturing domain. The application supports tasks such as checklist management, abnormality reporting, and task approvals, playing a critical role in streamlining and digitizing manual processes. Our objective was to identify UX issues and propose improvements to optimize user efficiency, increase task accuracy, and enhance overall usability.",
    ],
    // Standing in for a "Key Results" list — this project's real
    // deliverable was the audit + approval to redesign, not shipped
    // metrics, so these are the anticipated outcomes from the audit
    // findings rather than measured results.
    keyResults: [
      "Improved User Adoption by creating a more intuitive and approachable interface.",
      "Higher Process Adherence through clearer guidance and more accessible actions.",
      "Greater Business Alignment by ensuring the application supports efficient workflows and improves productivity.",
    ],
    role: "UX Researcher & Auditor",
    timeline: "2-Month Audit",
    // No explicit "Methods" list exists in the source — these are drawn
    // directly from the audit phases described in the case study itself.
    methods: [
      "Heuristic Evaluation",
      "Issue Clustering",
      "Stakeholder Workshops",
      "Current & Proposed User Flow Mapping",
    ],
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "The Challenge",
      paragraphs: [
        "Ample, a critical digital workflow tool, was facing low user adoption and inconsistent task completion rates. Despite being functionally robust, users struggled with key workflows like raising abnormalities and completing checklists due to poor usability, fragmented navigation, and a lack of visual clarity.",
        "Additionally, the interface lacked accessibility considerations, making it harder for visually impaired users to engage effectively. The challenge was to identify the root usability issues, align the experience with business goals, and redesign the application to improve adoption, task success rates, and user satisfaction — all within a tight two-month timeline.",
      ],
    },
    {
      type: "card-grid",
      heading: "Project Scope",
      cards: [
        {
          title: "Clickable Actions / Buttons",
          body: "Issues with action visibility, accessibility, and button prioritization.",
          accent: "navy",
        },
        {
          title: "Spacing & Size",
          body: "Inconsistent spacing, sizing, and element alignment affecting visual clarity and ease of interaction.",
          accent: "lavender",
        },
        {
          title: "Nudge & UX Writing",
          body: "Opportunities to improve guidance and clarity through microcopy and nudges to aid users.",
          accent: "lime",
        },
        {
          title: "Colour & UI Consistency",
          body: "Inconsistent colour usage and UI elements that could hinder user comprehension and navigation.",
          accent: "navy",
        },
      ],
    },
    {
      type: "process-timeline",
      heading: "Audit Phases",
      steps: [
        {
          title: "Heuristic Analysis",
          src: "/images/case-studies/ample/audit-heuristic-analysis.jpg",
          alt: "Heuristic analysis review of the Ample application against standard UX heuristics",
          description:
            "We reviewed the application against standard UX heuristics, noting any usability issues related to navigation, information architecture, and UI design.",
        },
        {
          title: "Clustering",
          src: "/images/case-studies/ample/audit-clustering.jpg",
          alt: "Clustering board grouping related usability issues into common themes",
          description:
            "We clustered related problems into common themes — navigation, readability, accessibility — to highlight core areas needing improvement. This helped us create targeted solutions that address root causes across multiple issues.",
        },
        {
          title: "User Flow: Current & Proposed",
          src: "/images/case-studies/ample/audit-user-flow.jpg",
          alt: "Current versus proposed user flow diagrams for the Ample application",
          description:
            "Based on our findings, we created optimized user journeys with reduced steps, simplified actions, and improved accessibility to essential features.",
        },
      ],
    },
    {
      type: "text",
      heading: "Key Takeaways",
      paragraphs: [
        "These insights provided a roadmap for enhancing the application in a way that would improve user satisfaction, adherence to workflows, and task completion efficiency.",
      ],
    },
    {
      type: "sticky-note-grid",
      heading: "Themes from the Audit",
      notes: [
        { title: "Unclear Navigation", accent: "navy" },
        { title: "Complex Workflows", accent: "lime" },
        { title: "Inconsistent UI Elements", accent: "lavender" },
        { title: "Accessibility Gaps", accent: "navy" },
        { title: "Lack of Guidance", accent: "lime" },
        { title: "Inefficient Clicks", accent: "lavender" },
        { title: "Visual Hierarchy Issues", accent: "navy" },
        { title: "Opportunity for Clustering", accent: "lime" },
        { title: "Opportunity for Clustering", accent: "lavender" },
        { title: "Feedback Delays", accent: "navy" },
      ],
    },
    {
      type: "text",
      eyebrow: "Results",
      heading: "Project Outcomes",
      paragraphs: [
        "Following the audit, we presented our findings to the business stakeholders, emphasizing the potential benefits of a redesign. The project received approval to proceed with a full application redesign over a two-month timeline.",
      ],
    },
    {
      type: "card-grid",
      heading: "Next Steps",
      cards: [
        {
          title: "User Interviews",
          body: "Gathering qualitative insights from end users to validate audit findings and prioritize redesign elements.",
          accent: "lime",
        },
        {
          title: "Stakeholder Workshops",
          body: "Conducting sessions with key business and operational stakeholders to ensure alignment with organizational needs.",
          accent: "lavender",
        },
        {
          title: "Iterative Testing",
          body: "Developing and testing prototypes to validate our design decisions and ensure they address key pain points effectively.",
          accent: "navy",
        },
      ],
    },
    {
      type: "insight-list",
      heading: "Looking Ahead",
      variant: "bullets",
      items: [
        "Expanding the redesign to other modules within the application.",
        "Conducting A/B testing to optimize newly implemented features.",
        "Gathering post-implementation feedback to measure impact on user satisfaction and productivity.",
      ],
    },
    {
      type: "confidential-notice",
      message:
        "Due to the confidential nature of this project owned by Dr. Reddy's Laboratories, further details cannot be shared in public forums.",
      contactEmail: "jumana.motorwala44@gmail.com",
      contactPhone: "+91 8120400052",
    },
  ],
};