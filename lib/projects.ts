export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
  href: string;
  // Only `featured: true` projects render on the homepage's "Featured
  // work" section. All projects — featured or not — render on /work.
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "smart-investigator",
    title: "Smart Investigator",
    summary:
      "Investigations often live across evidence, people, decisions, and reports. I designed an AI-powered workspace that helps quality teams trace root causes and move from complex investigation to clear action.",
    tags: ["AI Products", "Enterprise UX", "Data-Intensive Workflows"],
    image: {
      src: "/images/projects/smart-investigator.jpg",
      alt: "Smart Investigator web app on a laptop screen, showing an investigation history timeline with connected batch-notification nodes and a panel prompting to select a bubble for a summary report",
    },
    href: "/work/smart-investigator",
    featured: true,
  },
  {
    id: "container-load-optimization",
    title: "Container Load Optimization",
    summary:
      "Pharmaceutical dispatch should not depend on spreadsheet memory and manual maths. I designed a planning experience that helps teams make container-load, pallet-split, and shipment decisions with greater clarity.",
    tags: ["Logistics Systems", "Data Visualization", "Multi-Persona UX"],
    image: {
      src: "/images/projects/container-load-optimization.jpg",
      alt: "Container Load Optimization app on a laptop screen, showing a batch details table for dispatch planning alongside demand and month-of-inventory charts",
    },
    href: "/work/container-load-optimization",
    featured: true,
  },
  {
    id: "tata-1mg-app-revamp",
    title: "Tata 1mg — App Revamp",
    summary:
      "Healthcare tasks arrive with enough uncertainty already. I reworked key app journeys to make finding, managing, and acting on health information feel simpler and more reassuring.",
    tags: ["Healthcare", "Mobile UX", "Service Design"],
    image: {
      src: "/images/projects/tata-1mg-app-revamp.jpg",
      alt: "Tata 1mg app shown on two phone screens — a home screen with prescription upload and quick-access health services, and a cart screen with prescription items and checkout",
    },
    href: "/work/tata-1mg-app-revamp",
    featured: true,
  },
  {
    id: "ample",
    title: "UX Audit & Redesign Strategy — Ample",
    summary:
      "Ample, a critical enterprise workflow tool for checklist management and abnormality reporting, was seeing low adoption despite being functionally robust. I led a UX audit to uncover the root usability issues and lay the groundwork for a full redesign.",
    tags: ["UX Audit", "Enterprise Workflow", "Accessibility"],
    image: {
      src: "/images/projects/ample.jpg",
      alt: "Ample UX audit deck shown on a laptop screen, displaying categorized usability issue cards",
    },
    href: "/work/ample",
    // not featured — appears only on /work
  },
  {
    id: "techgen",
    title: "TechGen — Collaboration Platform",
    summary:
      "TechGen's team communication was scattered across too many disconnected tools. In a 48-hour hackathon sprint, I designed a unified platform bringing messaging, meetings, and task tracking into one place.",
    tags: ["Collaboration Platform", "Rapid Prototyping", "Enterprise SaaS"],
    image: {
      src: "/images/projects/techgen.jpg",
      alt: "TechGen collaboration platform shown on a laptop screen, displaying chat threads and meeting details",
    },
    href: "/work/techgen",
    // not featured — appears only on /work
  },
];