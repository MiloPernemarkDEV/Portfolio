import { about, site } from "../data/site";

export function About() {
  return (
    <section id="about" className="border-b border-border bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl border-l-2 border-cyan pl-6">
          <p className="mb-2 font-mono text-sm font-medium tracking-wide text-cyan uppercase neon-cyan">
            About
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">{about.text}</p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Currently studying Game Programming at{" "}
            <a
              href={site.schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {site.school}
            </a>. {about.education}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">{about.extra}</p>
        </div>
      </div>
    </section>
  );
}
