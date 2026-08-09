import type { CaseStudy } from "@/lib/caseStudies";

export const techgen: CaseStudy = {
  meta: {
    slug: "techgen",
    title: "TechGen",
    // Treated as a fictional/hackathon-prompt company, not a real
    // business — no copyright-notice block added at the end. Flag if
    // this assumption is wrong.
    client: "TechGen",
    tagline: "Streamline, Collaborate, Succeed.",
    durationBadge: "48-HOUR HACKATHON",
    tickerStats: [
      "TASK EFFICIENCY UP 25%",
      "TASK ACCURACY UP 30%",
      "STREAMLINED COLLABORATION",
    ],
    heroSrc: "/images/case-studies/techgen/hero.png",
    heroAlt: "TechGen collaboration platform shown on a laptop screen, displaying chat threads and meeting details",
    heroFit: "contain",
    heroShowBox: false,
    intro: [
      "In this 48-hour hackathon, my goal was to design a functional and user-centric platform that streamlined collaboration and boosted productivity across teams. Given the time constraints, I focused on delivering an MVP that highlighted key features, while ensuring a seamless user experience and intuitive design.",
    ],
    keyResults: [
      "Integrated user-centric, real-time communication features that streamlined collaboration.",
      "Proposed an MVP improving task management efficiency by 25%, while boosting task tracking accuracy by 30%.",
      "Delivered comprehensive documentation covering problem definition, ideation, and wireframes.",
    ],
    // No role title is explicitly stated in the source — inferred from
    // the listed methods (research, journey mapping, prioritization,
    // wireframing). Flag if a more specific title was intended.
    role: "UX/Product Designer",
    timeline: "8-Hour Hackathon Sprint",
    methods: [
      "User Research",
      "Journey Mapping",
      "Prioritization",
      "Wire-framing",
    ],
  },
  blocks: [
    {
      type: "insight-list",
      heading: "Timeline Breakdown",
      variant: "bullets",
      // Transcribed exactly as the source states it, including the
      // overlapping hour ranges (Hour 3 alone, then 4–6, then 5–6
      // again) — not silently corrected, in case that's intentional
      // (parallel work) rather than a typo worth flagging to fix.
      items: [
        "Hour 1–2: Research, problem framing, and persona creation.",
        "Hour 3: Prioritize current and future needs.",
        "Hour 4–6: Brainstormed and prioritized features with MoSCoW.",
        "Hour 5–6: Designed wireframes for key screens.",
        "Hour 7–8: Documented key insights, metrics, and results.",
      ],
    },
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "The Challenge",
      paragraphs: [
        "TechGen's communication infrastructure is fragmented across multiple tools — Slack, Zoom, Teams, Email, WhatsApp, and more. The absence of a standardized platform leads to inefficiencies, wasted time, and miscommunication.",
        "Difficulty in maintaining data accessibility, security, and version control across teams. Limited visibility into task tracking, scheduling, and team progress compounds the problem further.",
      ],
    },
    {
      type: "dual-card",
      heading: "Defining The Problem",
      cards: [
        {
          label: "Current State",
          body: "TechGen operates on a global scale with 8,000+ employees across 16 business functions, 5 continents, 18 countries, and 12 time zones. The internal communication and collaboration infrastructure is fragmented across multiple tools, leading to inefficiencies, wasted time, and reduced productivity.",
        },
        {
          label: "Desired Outcome",
          body: "Design a unified communication platform that improves productivity across the organization by 60% or higher, creating a seamless and scalable experience for 8,000+ employees across 12 time zones.",
        },
      ],
    },
    {
      type: "insight-list",
      eyebrow: "Discovery",
      heading: "TechGen Context",
      variant: "bullets",
      items: [
        "A fast-growing company with 8,000+ employees across 16 business functions, 5 continents, 18 countries, and 12 time zones.",
        "High annual growth rate of 20%, requiring a scalable and integrated internal communication infrastructure.",
      ],
    },
    {
      type: "insight-list",
      heading: "Key Competitors in Internal Communication Platforms",
      variant: "cards",
      items: [
        "Slack: Popular messaging tool with strong integrations, but lacks video conferencing and document sharing.",
        "Microsoft Teams: Comprehensive collaboration platform integrated with Office Suite, with strong video conferencing capabilities.",
        "Google Meet: Excellent for video conferencing and document sharing, but lacks strong task management capabilities.",
        "Zoom: Strong video meeting capabilities, but insufficient for daily, frequent collaboration across diverse teams.",
      ],
    },
    {
      type: "insight-list",
      heading: "Assumptions",
      variant: "bullets",
      items: [
        "All employees at TechGen require real-time communication across time zones.",
        "A large portion of communication involves task tracking, scheduling, and document collaboration.",
        "TechGen prioritizes data security and scalability as key evaluation criteria.",
        "The platform must seamlessly integrate with the existing tools TechGen uses — Zoom, Microsoft Suite, Google Workspace.",
        "Different business functions (HR, Operations, Sales) will have distinct workflows and communication preferences.",
      ],
    },
    {
      type: "persona-grid",
      heading: "Personas & Objectives",
      personas: [
        {
          name: "Emma Johnson",
          role: "Senior Project Manager — Operations, London, UK",
          goals: [
            "Efficiently manage cross-functional teams.",
            "Minimize delays and ensure seamless collaboration across global teams.",
            "Maintain robust communication channels without interruptions.",
          ],
          painPoints: [
            "Constant context-switching between tools like Teams, Slack, and Email.",
            "Difficulty tracking project progress across multiple communication channels.",
            "Security concerns about sharing sensitive project data across disparate tools.",
          ],
          needs: [
            "A centralized platform where all communication, updates, and project tools are integrated.",
            "Instant notifications and real-time collaboration features.",
          ],
        },
        {
          name: "Michael Turner",
          role: "Sales Executive Representative — Sales, New York, USA",
          goals: [
            "Build and maintain strong internal communication with global sales teams.",
            "Collaborate with team members across different time zones without delays.",
          ],
          painPoints: [
            "Friction in collaboration with teams across different time zones.",
            "Difficulty finding shared documents and communication history.",
          ],
          needs: [
            "A reliable platform with global time zone support and advanced search tools for quick data sharing.",
            "Real-time reporting and sales insights.",
          ],
        },
        {
          name: "Sarah Lee",
          role: "IT Operations Specialist — IT Operations, Sydney, Australia",
          goals: [
            "Ensure security and compliance across all platforms.",
            "Minimize downtime caused by tool integration issues.",
          ],
          painPoints: [
            "Managing compatibility across a variety of communication tools.",
            "Addressing security and compliance concerns across the organization.",
          ],
          needs: [
            "A platform built with strong security measures and compliance adherence.",
            "Streamlined integration and troubleshooting functionalities.",
          ],
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Discovery",
      heading: "As-Is: User Journey Mapping",
      paragraphs: [
        "Primary issue mapped: scheduling and managing a global team meeting.",
      ],
    },
    {
      type: "image",
      src: "/images/case-studies/techgen/journey-map.jpg",
      alt: "As-Is user journey mapping board for scheduling and managing a global team meeting",
    },
    {
      type: "insight-list",
      eyebrow: "Definition",
      heading: "Key Insights",
      variant: "cards",
      items: [
        "Unified Platform Benefits",
        "AI and Automation Opportunities",
        "Improved User Experience",
        "Enhanced Productivity and Security",
      ],
    },
    {
      type: "quote-callout",
      eyebrow: "Framing the Problem",
      heading: "How might we",
      quote:
        "design a unified communication and collaboration platform for TechGen that streamlines internal workflows, enhances productivity, ensures data security across global teams, and scales effortlessly across time zones?",
    },
    {
      type: "text",
      eyebrow: "Building the MVP",
      heading: "Brainstorming Ideas",
      paragraphs: [
        "I applied the MoSCoW method — Must-Have, Should-Have, Could-Have, Won't-Have — to prioritize features for the ideation process, since time was limited.",
      ],
    },
    {
      type: "priority-grid",
      columns: [
        {
          label: "Must-Have",
          sublabel: "Critical Features",
          accent: "navy",
          items: [
            "AI-Powered Unified Scheduling System",
            "Centralized Communication Hub",
            "Task Management",
            "Document Repository",
            "End-to-End Encryption",
          ],
        },
        {
          label: "Should-Have",
          sublabel: "Important, but not mission-critical",
          accent: "lavender",
          items: [
            "Role-Based Access Control (RBAC)",
            "Persistent Team Communication",
            "Calendar Integration",
            "Notification and Alerts System",
          ],
        },
        {
          label: "Could-Have",
          sublabel: "Nice to include, time permitting",
          accent: "lime",
          items: [
            "Interactive Whiteboards for Brainstorming",
            "Geo-Location Login Alerts",
            "Customizable Interface Themes",
          ],
        },
        {
          label: "Won't-Have",
          sublabel: "Out of scope for now",
          accent: "muted",
          items: [
            "Integration with rarely used third-party tools",
            "Complex niche tools that scale poorly",
            "Separate standalone apps for departments",
          ],
        },
      ],
    },
    {
      type: "text",
      heading: "The MVP",
      paragraphs: [
        "With all the foundational research, insights, and user journey mapping completed, I began designing the interface for the TechGen unified communication platform. The primary focus was to streamline communication processes by integrating key features like the centralized messaging system, a consolidated meeting scheduler, and a project overview dashboard.",
        "The design aimed to enhance team productivity while addressing key pain points such as inefficiencies, lack of collaboration, and security concerns.",
      ],
    },
    {
      type: "screen",
      heading: "Home Screen",
      src: "/images/case-studies/techgen/screen-home.gif",
      alt: "TechGen home screen showing task overview, upcoming meetings, and team chat navigation",
      description:
        "The Home Screen serves as the central hub for team collaboration and project management, giving users an at-a-glance view of tasks, meetings, and actionable insights.",
      bullets: [
        "Left Navigation Panel: displays teammates and active chat threads, allowing seamless switching between conversations.",
        "Central Workspace: highlights Tasks In Progress and Upcoming Meetings, with summarized project updates and one-click task creation.",
        "Right Panel: a \"glance\" feature surfaces critical highlights with minimal interruption to focus.",
        "Visual Cues and Interactivity: progress bars, colour-coded status indicators, and quick-access buttons enhance usability.",
      ],
      maxHeight: "h-[420px]",
    },
    {
      type: "screen",
      heading: "The Chat Screen",
      src: "/images/case-studies/techgen/screen-chat.jpg",
      alt: "TechGen chat screen showing message threads and a contextual project panel",
      description:
        "The Chat Screen is tailored for real-time communication and collaboration, focused on reducing the friction of team interaction.",
      bullets: [
        "Persistent Sidebar: displays active threads and contacts, keeping context without losing accessibility.",
        "Message Pane: a centralized chat thread showing conversations in real time, with emoji reactions and file sharing.",
        "Right Contextual Panel: shows project-specific updates and tasks related to the chat topic, without navigating away.",
      ],
    },
    {
      type: "screen",
      heading: "The Meeting Details & Scheduling Screen",
      src: "/images/case-studies/techgen/screen-meeting.gif",
      alt: "TechGen meeting scheduling screen showing a calendar and meeting summary panel",
      description:
        "The Meeting Screen is designed to simplify scheduling, managing, and reviewing meetings.",
      bullets: [
        "Overview Panel: a dashboard view of scheduled, rescheduled, and cancelled meetings.",
        "Meeting Summary Section: detailed meeting summaries, shared documents, and follow-up notes.",
        "Today's Calendar: a visual calendar with scheduling, date range, and drag-and-drop features, keeping commitments visible with minimal effort.",
      ],
      maxHeight: "h-[420px]",
    },
    {
      type: "metric-grid",
      eyebrow: "Results",
      heading: "Impact",
      metrics: [
        { value: "30%", label: "Boosted productivity — faster task completion with centralized dashboards." },
        { value: "40%", label: "Improved communication — quicker response time across teams." },
        { value: "20%", label: "Reduction in scheduling conflicts, with better time-zone coordination." },
        { value: "85%", label: "User adoption rate within 2 days of usability testing." },
        { value: "25%", label: "Fewer external tools needed, reducing operational expenses." },
        { value: "90%", label: "Compliance with data protection standards, ensuring safety." },
      ],
    },
  ],
};