import type { CaseStudy } from "@/lib/caseStudies";

export const smartInvestigator: CaseStudy = {
  meta: {
    slug: "smart-investigator",
    title: "Smart Investigator",
    client: "Dr. Reddy's Laboratories",
    // Reuses the same dr-reddys.webp already uploaded for the About
    // page's Experience timeline — no new asset needed.
    clientLogo: "/images/about/logos/dr-reddys.webp",
    tagline: "AI-Powered Quality Investigations",
    durationBadge: "15-MONTH PROJECT",
    tickerStats: [
      "TAT DOWN 50%",
      "INVESTIGATOR EFFICIENCY UP 40%",
      "RECURRING ISSUES DOWN 30%",
    ],
    heroSrc: "/images/case-studies/smart-investigator/hero.gif",
    heroAlt: "Animated walkthrough of the Smart Investigator interactive prototype",
    intro: [
      "I led the product design process for a 15-month project to create the Smart Investigator platform at Dr. Reddy's Laboratories. The goal was to significantly reduce the Turnaround Time (TAT) for batch failure investigations while enhancing the user experience for investigators and QA managers.",
      "To achieve this, we developed a centralized platform that aggregates data from SAP, MES, ICMS, and OSI PI systems. This streamlined data access, automated root cause detection, and provided actionable insights, enabling investigators to focus on analysis rather than manual tasks.",
    ],
    keyResults: [
      "Reduced investigation turnaround time (TAT) by 50% (from 45 days to 20 days).",
      "Improved investigator efficiency by 40%, with more time spent on analysis than manual tasks.",
      "Achieved 30% reduction in recurring issues by identifying and resolving root causes faster.",
    ],
    role: "UX Designer & Researcher",
    timeline: "July 2023 – September 2024",
    methods: [
      "User Research",
      "User Journey Mapping",
      "Design Thinking Workshops",
      "Prototyping",
      "Usability Testing",
      "Data Analysis & Integration Design",
    ],
  },
  blocks: [
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "The Challenge",
      ghostNumber: "45",
      paragraphs: [
        "Investigating batch failures at Dr. Reddy's Laboratories was a lengthy process, taking up to 45 days to identify root causes due to inefficiencies in data collection and analysis. Critical data was fragmented across systems like SAP, ICMS, HMS, and OSI PI, requiring investigators to spend over 80% of their time on manual data preparation.",
        "This lack of historical insights and repetitive workflows delayed corrective actions, while navigating multiple platforms increased cognitive load. These challenges disrupted workflows, delayed production timelines, and limited proactive problem-solving — highlighting the need for a centralized, efficient, and automated investigation process.",
      ],
    },
    {
      type: "dual-card",
      heading: "Defining The Problem",
      cards: [
        {
          label: "Current State",
          body: "The root cause analysis of batch failures requires extensive manual effort across multiple disconnected data systems, leading to a high Turnaround Time (TAT) of 45 days.",
        },
        {
          label: "Desired Outcome",
          body: "Reduce the investigation TAT by at least 50% to improve process efficiency and ensure timely resolutions.",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "Understanding the Manufacturing Ecosystem",
      paragraphs: [
        "To design an effective solution, it was essential to first gain a deep understanding of the manufacturing processes, failure notifications, and existing pain points.",
      ],
    },
    {
      type: "subsection",
      heading: "User Research",
      body: "We conducted 35 interviews with investigators, site engineers, and quality assurance managers to map the investigation lifecycle and identify challenges.",
    },
    {
      type: "highlight-banner",
      label: "Key Insight:",
      message:
        "Over 80% of investigation time is spent on data preparation and contextualization, leaving little room for meaningful analysis.",
    },
    {
      type: "insight-list",
      heading: "Pain Points",
      variant: "bullets",
      items: [
        "Data is siloed across various systems, including SAP, ICMS, and HMS.",
        "Manual compilation of batch, plant, and environmental data delays insights.",
        "Investigators struggle to retrieve historical data for similar incidents, increasing repeat issues.",
      ],
    },
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "As-Is: User Journey Mapping",
    },
    {
      type: "image",
      src: "/images/case-studies/smart-investigator/journey-map.jpg",
      alt: "As-Is user journey mapping board showing investigator phases, actions, pain points, and emotions",
    },
    {
      type: "text",
      paragraphs: [
        "After gathering initial insights, I facilitated a User Journey Mapping workshop with my team of seven to define the personas, goals, scenarios, and steps for investigators navigating a batch failure. The workshop was instrumental in visualizing the current process and identifying pain points, which allowed us to uncover opportunities for improvement.",
        "The outcome of the workshop provided key insights and identified opportunities to optimize the user experience. We were able to clearly define what needed to be done, the biggest opportunities, and how success would be measured. This workshop played a crucial role not only in shaping the Smart Investigator platform but also in aligning the team's understanding and ensuring everyone was on the same page. It fostered collaborative discussions that helped unify the team's vision for the product.",
      ],
    },
    {
      type: "quote-callout",
      eyebrow: "Framing the Problem",
      heading: "How might we",
      quote:
        "create a centralized platform that reduces cognitive load, streamlines data preparation, and enables investigators to identify root causes quickly and efficiently?",
    },
    {
      type: "text",
      eyebrow: "Definition",
      heading: "Proposed Solution",
    },
    {
      type: "image",
      src: "/images/case-studies/smart-investigator/proposed-solution.jpg",
      alt: "Proposed solution journey mapping board showing the redesigned investigation flow",
      caption: "As-Is: User Journey Mapping",
    },
    {
      type: "insight-list",
      eyebrow: "Definition",
      heading: "Key Insights",
      variant: "cards",
      items: [
        "Streamlined Data Access: Investigators no longer need to waste time switching between systems; they have a unified dashboard with all necessary data at their fingertips.",
        "AI-Enhanced Analysis: AI-driven root-cause suggestions significantly speed up the hypothesis and validation process, reducing human error.",
        "Automated Reporting: Instant report generation reduces bottlenecks in communication and allows more time for meaningful analysis.",
        "Real-Time Collaboration: Sharing findings and collaborating with stakeholders happens instantaneously, improving cross-functional teamwork.",
      ],
    },
    {
      type: "text",
      eyebrow: "Building the MVP",
      heading: "The MVP",
      paragraphs: [
        "With all the necessary foundations, insights, and preparation in place, I began designing the interface for Smart Investigator. We prioritized integrating AI-driven tools like the Probable RCA Grid and Smart Investigator.AI to streamline the investigation process, ensuring faster root cause identification and report generation.",
      ],
    },
    {
      type: "screen",
      heading: "Login Screen",
      src: "/images/case-studies/smart-investigator/screen-login.jpg",
      alt: "Smart Investigator login screen with username and password fields",
      description:
        "Clear email and password fields with a Forgot Password link keep the login simple and accessible.",
    },
    {
      type: "screen",
      heading: "Investigations Screen",
      src: "/images/case-studies/smart-investigator/screen-investigations.jpg",
      alt: "Investigations list screen with filters and status indicators",
      description:
        "Filter and sort by priority, date, or category — colored status and quick actions speed up navigation.",
    },
    {
      type: "screen",
      heading: "Investigation History (Timeline)",
      src: "/images/case-studies/smart-investigator/screen-history-timeline.jpg",
      alt: "Investigation history timeline view showing connected milestone nodes",
      description:
        "A clickable timeline tracks investigation progress and key milestones for full traceability.",
    },
    {
      type: "screen",
      heading: "Probable RCA Grid",
      src: "/images/case-studies/smart-investigator/screen-rca-grid.jpg",
      alt: "Probable root cause analysis grid with confidence scores by category",
      description:
        "Confidence-scored root causes by category, ready for investigators to validate and act on.",
    },
    {
      type: "screen",
      heading: "Process Flow",
      src: "/images/case-studies/smart-investigator/screen-process-flow.jpg",
      alt: "Visual process flow outlining steps to generate an investigation report",
      description:
        "An interactive flowchart maps every stage from data collection to report generation.",
    },
    {
      type: "screen",
      heading: "6M Framework",
      src: "/images/case-studies/smart-investigator/screen-6m-framework.jpg",
      alt: "6M root cause analysis framework screen covering Man, Material, Machine, Method, Measurement, and Environment",
      description:
        "Man, Method, Machine, Material, Measurement, Environment — each an AI-assisted node.",
    },
    {
      type: "screen",
      heading: "Smart Investigator.AI",
      src: "/images/case-studies/smart-investigator/screen-ai.jpg",
      alt: "Smart Investigator AI assistant screen with input field for AI-generated insights",
      description:
        "Ask Smart Investigator AI anything — dynamic answers with guided prompt suggestions.",
    },
    {
      type: "screen",
      heading: "Smart Report",
      src: "/images/case-studies/smart-investigator/screen-report.jpg",
      alt: "Smart Report summary screen with charts and export options",
      description:
        "Charts and key findings summarized for quick export to PDF or direct sharing.",
    },
    {
      type: "metric-grid",
      eyebrow: "Results",
      heading: "Impact",
      metrics: [
        { value: "45 → 20", label: "days: RCA TAT decreased from 45 days to 20 days." },
        { value: "70%", label: "Investigators spent 70% less time on data preparation." },
        { value: "20% → 60%", label: "Analysis time increased from 20% to 60% of the investigation workflow." },
        { value: "30%", label: "30% decrease in recurring incidents due to improved historical insights." },
        { value: "95%", label: "Investigators expressed 95% satisfaction with the platform's ease of use and time savings." },
        { value: "↑", label: "Improved collaboration between QA teams and manufacturing teams." },
      ],
    },
    {
      type: "insight-list",
      eyebrow: "Learnings",
      heading: "Reflection & Learnings",
      variant: "bullets",
      items: [
        "Designing for a highly regulated domain like pharmaceuticals requires balancing user needs with compliance constraints.",
        "Close collaboration with cross-functional teams (IT, QA, business stakeholders) is critical for success.",
        "Iterative testing ensures that complex tools remain user-friendly and intuitive.",
      ],
    },
    {
      type: "copyright-notice",
      message:
        "Smart Investigator is a product designed for Dr. Reddy's Laboratories. All product concepts, workflows, and materials shown belong to Dr. Reddy's Laboratories and are presented here for portfolio purposes only — no copyright is claimed over this work.",
    },
  ],
};