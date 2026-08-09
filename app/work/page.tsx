import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Jumana Motorwala",
  description: "All projects by Jumana Motorwala, Senior Product Designer.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section aria-labelledby="all-work-heading" className="mx-auto max-w-content px-6 pt-16 pb-8 md:px-10 md:pt-24 md:pb-10">
          <div aria-hidden="true" className="mb-4 h-1 w-10 rounded-full bg-navy" />
          <h1 id="all-work-heading" className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            All projects
          </h1>
        </section>

        <section aria-label="Project list" className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}