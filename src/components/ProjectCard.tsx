import type { Project } from "../data/site";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-md">
      <div className="aspect-video overflow-hidden bg-surface">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <h3 className="text-xl font-semibold tracking-tight text-text">
          {project.title}
        </h3>

        <p className="mt-3 leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-5">
          <p className="mb-2 text-xs font-medium tracking-wide text-text-muted uppercase">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-xs font-medium tracking-wide text-text-muted uppercase">
            Technical highlights
          </p>
          <ul className="space-y-1.5">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm text-text-muted"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
