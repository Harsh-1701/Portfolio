import SectionLabel from "./SectionLabel";
import ProjectCard from "./projects/ProjectCard";
import { projects } from "./projects/projectsData";

export default function Projects() {
  return (
    <section className="border-t border-line px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="03" label="Projects" />
          </div>

          <div className="md:col-span-8">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Things I've built.
            </h2>

            <p className="mt-5 max-w-2xl text-muted">
              From AI and healthcare to full-stack applications and productivity
              tools. These projects reflect what I've been building outside the
              classroom.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}