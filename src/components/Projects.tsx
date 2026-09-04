import { projects } from "../data/site";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-b border-border bg-bg py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-mono text-base font-medium tracking-wide text-accent uppercase sm:text-lg">
            Projects
          </h2>
        </div>

        <div className="grid gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
