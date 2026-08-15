"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "./projectsData";
import ProjectBadge from "./ProjectBadge";
import ProjectTechStack from "./ProjectTechStack";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-accent">
      <div className="relative aspect-video overflow-hidden bg-black">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {project.featured && (
            <ProjectBadge text="Featured Project" />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        {project.status && (
          <p className="mt-2 text-sm text-accent">
            {project.status}
          </p>
        )}

        <p className="mt-4 text-muted leading-relaxed">
          {project.description}
        </p>

        <ProjectTechStack tech={project.technologies} />

        <div className="mt-8 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-black"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}