import type { CaseStudy } from "@/lib/caseStudies";
import { smartInvestigator } from "./smartInvestigator";
import { containerLoadOptimization } from "./containerLoadOptimization";
import { ample } from "./ample";
import { tata1mgAppRevamp } from "./tata1mgAppRevamp";
import { techgen } from "./techgen";

// All 5 case studies. Add a new project the same way: build a data
// file, import it, and add one entry below.
export const caseStudies: Record<string, CaseStudy> = {
  "smart-investigator": smartInvestigator,
  "container-load-optimization": containerLoadOptimization,
  ample: ample,
  "tata-1mg-app-revamp": tata1mgAppRevamp,
  techgen: techgen,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}