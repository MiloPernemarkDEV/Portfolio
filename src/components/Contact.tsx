import { Lightning } from "./Lightning";
import { publicUrl, site } from "../data/site";

export function Contact() {
  return (
    <section id="contact" className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-surface px-6 py-16 text-center lg:px-16 lg:py-20">
          <Lightning />

          <div className="relative z-10 mx-auto w-fit max-w-full" data-lightning-keepout>
            <p className="mb-2 font-mono text-sm font-medium tracking-wide text-accent uppercase">
              Contact
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Drop me a line.
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
              >
                Email me
              </a>
              <a
                href={publicUrl(site.resume)}
                download="Milo_Pernemark_CV.pdf"
                className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
              >
                Resume
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-text transition-colors hover:border-amber/60 hover:text-amber"
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
