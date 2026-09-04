import { site } from "../data/site";
import { Snowfall } from "./Snowfall";

export function Contact() {
  return (
    <section id="contact" className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-surface px-6 py-16 text-center lg:px-16 lg:py-20">
          <Snowfall />

          <div className="relative z-10">
            <p className="mb-2 font-mono text-sm font-medium tracking-wide text-pink uppercase">
              Contact
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Ask me about anything, or give me a job.
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
              >
                Email me
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-text transition-colors hover:border-cyan/60 hover:text-cyan"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-text transition-colors hover:border-pink/60 hover:text-pink"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
