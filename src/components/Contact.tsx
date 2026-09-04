import { site } from "../data/site";
import { Snowfall } from "./Snowfall";

export function Contact() {
  return (
    <section id="contact" className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-surface px-6 py-16 text-center shadow-[0_0_50px_rgba(34,211,238,0.08),0_0_70px_rgba(255,78,205,0.06)] lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-pink/20 blur-3xl"
            aria-hidden="true"
          />
          <Snowfall />

          <div className="relative z-10">
            <p className="mb-2 font-mono text-sm font-medium tracking-wide text-pink uppercase neon-pink">
              Contact
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Let&apos;s connect
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
              Open to a game programming internship and technical collaboration.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(124,242,154,0.35)]"
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
