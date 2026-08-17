import { about, site } from "../data/site";

export function About() {
  return (
    <section id="about" className="border-b border-border bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Building complex technical systems
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            {about.text}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            {about.education}{" "}
            <a
              href={site.schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {site.school}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
