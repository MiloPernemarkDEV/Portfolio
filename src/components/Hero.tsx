import { publicUrl, site } from "../data/site";

export function Hero() {
  return (
    <section className="border-b border-border bg-bg py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          {site.heroGreeting}
        </h2>
        <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-accent sm:text-3xl lg:text-4xl">
          {site.heroFocus}
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-muted sm:text-xl">
          {site.heroInvite}
        </p>
        <p className="mt-3 font-mono text-xs tracking-wide text-text-muted uppercase sm:text-sm">
          {site.title}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            View projects
          </a>
          <a
            href={publicUrl(site.resume)}
            download="Milo_Pernemark_CV.pdf"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
          >
            Resume
          </a>
          <a
            href="#internship"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-amber/60 hover:text-amber"
          >
            Internship
          </a>
        </div>
      </div>
    </section>
  );
}
