import { useEffect, useRef } from "react";
import type { Project } from "../data/site";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const TECH_STYLES: Record<string, string> = {
  "C++": "border-sky/40 bg-sky/10 text-sky",
  "C++20": "border-sky/40 bg-sky/10 text-sky",
  "C++23": "border-sky/40 bg-sky/10 text-sky",
  C: "border-sky/40 bg-sky/10 text-sky",
  "C#": "border-violet/40 bg-violet/10 text-violet",
  Unity: "border-cyan/40 bg-cyan/10 text-cyan",
  "Unreal Engine 5": "border-amber/40 bg-amber/10 text-amber",
  "Unreal Engine": "border-amber/40 bg-amber/10 text-amber",
  "Vulkan": "border-accent/40 bg-accent/10 text-accent",
  "Vulkan 1.3": "border-accent/40 bg-accent/10 text-accent",
  VMA: "border-accent/40 bg-accent/10 text-accent",
  OpenGL: "border-cyan/40 bg-cyan/10 text-cyan",
  "Win32 API": "border-text-muted/40 bg-surface text-text-muted",
  "Rust FFI": "border-amber/40 bg-amber/10 text-amber",
  CMake: "border-text-muted/40 bg-surface text-text-muted",
  AI: "border-violet/40 bg-violet/10 text-violet",
  "Behavior Tree": "border-violet/40 bg-violet/10 text-violet",
  Blackboard: "border-violet/40 bg-violet/10 text-violet",
  NavMesh: "border-accent/40 bg-accent/10 text-accent",
  Simulation: "border-accent/40 bg-accent/10 text-accent",
  ScriptableObjects: "border-cyan/40 bg-cyan/10 text-cyan",
  Gameplay: "border-accent/40 bg-accent/10 text-accent",
  Plugins: "border-amber/40 bg-amber/10 text-amber",
  Blueprints: "border-amber/40 bg-amber/10 text-amber",
  Niagara: "border-sky/40 bg-sky/10 text-sky",
  "P/Invoke": "border-violet/40 bg-violet/10 text-violet",
  Raylib: "border-sky/40 bg-sky/10 text-sky",
};

function TechBadge({ tech }: { tech: string }) {
  return (
    <span
      className={`rounded-md border px-3 py-1.5 font-chip text-xs font-semibold ${
        TECH_STYLES[tech] ?? "border-border bg-surface text-text-muted"
      }`}
    >
      {tech}
    </span>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v6h5M8.5 14.5h7M8.5 17.5h4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProjectVideo({
  src,
  label,
  zoomed,
}: {
  src: string;
  label: string;
  zoomed?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={label}
      className={`h-full w-full object-cover ${zoomed ? "scale-[1.35]" : ""}`}
    />
  );
}

function isVideo(path: string) {
  return /\.(mp4|webm)$/i.test(path);
}

function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const github = project.links.find((link) => link.label === "GitHub");
  const pdf = project.links.find((link) => link.label === "Contributions");
  const showcaseVideo = project.links.find((link) => link.label === "Showcase Video");
  const otherLinks = project.links.filter(
    (link) =>
      link.label !== "GitHub" &&
      link.label !== "Contributions" &&
      link.label !== "Showcase Video",
  );

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 ${
        featured ? "hover:border-accent/40" : "hover:border-amber/35"
      }`}
    >
      {project.image ? (
        <div className="relative aspect-[16/10] min-h-[13.5rem] overflow-hidden bg-surface lg:min-h-[16.5rem]">
          {isVideo(project.image) ? (
            <ProjectVideo
              src={assetUrl(project.image)}
              label={project.imageAlt ?? project.title}
              zoomed={project.id === "telemetry-for-dummies"}
            />
          ) : (
            <img
              src={assetUrl(project.image)}
              alt={project.imageAlt ?? project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
        </div>
      ) : featured ? (
        <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-accent to-amber" />
      ) : null}

      <div className="flex flex-1 flex-col p-7 lg:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl font-bold tracking-tight text-text lg:text-3xl">
            {project.title}
          </h3>
          {project.status ? (
            <span
              className={
                project.status === "In progress"
                  ? "rounded-full border border-amber/50 bg-amber/10 px-2.5 py-0.5 font-chip text-[11px] font-semibold text-amber"
                  : project.status === "5-person team"
                    ? "rounded-full border border-cyan/50 bg-cyan/10 px-2.5 py-0.5 font-chip text-[11px] font-semibold text-cyan"
                    : "rounded-full border border-violet/50 bg-violet/10 px-2.5 py-0.5 font-chip text-[11px] font-semibold text-violet"
              }
            >
              {project.status}
            </span>
          ) : null}
        </div>

        {(project.role || project.engine || project.platform) ? (
          <p className="mt-2 font-mono text-xs tracking-wide text-accent">
            {[project.role, project.engine, project.platform]
              .filter(Boolean)
              .join(" · ")}
          </p>
        ) : null}

        <p className="mt-4 text-[1.05rem] leading-relaxed text-text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <p className="mt-6 leading-relaxed text-text-muted">
          {project.highlights
            .map((highlight) =>
              highlight.endsWith(".") ? highlight : `${highlight}.`,
            )
            .join(" ")}
        </p>

        {project.links.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
              >
                <GitHubIcon />
                GitHub
              </a>
            ) : null}
            {pdf ? (
              <a
                href={assetUrl(pdf.href)}
                download="USS-Calliope-Contributions.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
              >
                <PdfIcon />
                Contributions
              </a>
            ) : null}
            {showcaseVideo ? (
              <a
                href={showcaseVideo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-amber/60 hover:text-amber"
              >
                <PlayIcon />
                Showcase Video
              </a>
            ) : null}
            {otherLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
