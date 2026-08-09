import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto max-w-content px-6 pt-8 pb-20 md:px-10 md:pt-10 md:pb-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div aria-hidden="true" className="mb-4 h-1 w-10 rounded-full bg-navy" />
          <h2 id="work-heading" className="text-base font-bold uppercase tracking-widest text-navy md:text-lg">
            Featured work ({String(featuredProjects.length).padStart(2, "0")})
          </h2>
        </div>

        <Link href="/work" className="text-sm font-semibold text-navy underline decoration-lime decoration-2 underline-offset-4 hover:decoration-4">
          View all projects ↗
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}