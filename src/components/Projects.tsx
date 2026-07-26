import { projects } from "../data/site";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
            Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Technical case studies
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Selected work in systems programming, engine development, and
            developer tooling.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
