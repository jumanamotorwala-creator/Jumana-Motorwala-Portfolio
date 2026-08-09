import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative rounded-card border border-navy/10 bg-paper transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-card bg-navy/5">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <ul className="mb-3 flex flex-wrap gap-2" aria-label="Project tags">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-lavender/20 px-3 py-1 text-xs font-semibold text-navy"
            >
              {tag}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-navy">
          {/* Stretched link: the whole card is clickable, but there's still
              a single real, keyboard-reachable link with a descriptive name. */}
          <Link href={project.href} className="focus-visible:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-navy/70">
          {project.summary}
        </p>

        <span className="mt-4 inline-block text-sm font-semibold text-navy underline decoration-lime decoration-2 underline-offset-4 group-hover:decoration-4">
          View case study ↗
        </span>
      </div>
    </article>
  );
}
