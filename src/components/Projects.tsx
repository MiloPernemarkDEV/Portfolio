import { projects } from "../data/site";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-b border-border bg-bg py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="font-mono text-2xl font-medium tracking-wide text-accent uppercase sm:text-3xl lg:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:gap-10">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        <div className="mt-8 grid items-stretch gap-8 md:grid-cols-2 lg:mt-10 lg:gap-10">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
