import { site } from "../data/site";

export function Contact() {
  return (
    <section id="contact" className="bg-accent-light py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
          Contact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
          Open to software engineering internships and technical collaborations.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Email me
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
