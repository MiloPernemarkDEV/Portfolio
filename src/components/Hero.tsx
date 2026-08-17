import { site } from "../data/site";

const heroLinks = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Resume", href: site.resume, external: true },
  { label: "Contact", href: "#contact", external: false },
] as const;

export function Hero() {
  return (
    <section className="relative border-b border-border bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(22,163,74,0.08),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-24 right-10 hidden h-40 w-40 lg:block"
        aria-hidden="true"
      >
        <span className="hero-flake absolute top-6 right-10 h-2 w-2 rounded-full bg-accent/40" />
        <span className="hero-flake-delay absolute top-16 right-24 h-1.5 w-1 rounded-full bg-slate-400/50" />
        <span className="hero-flake absolute top-28 right-6 h-1 w-1 rounded-full bg-accent/30" />
        <svg
          className="hero-flake-delay absolute top-2 right-2 h-8 w-8 text-accent/25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M12 2v20M4.9 6.5l14.2 11M4.9 17.5l14.2-11" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="animate-fade-up mb-4 text-sm font-medium tracking-wide text-accent uppercase">
            Software Engineer
          </p>

          <h1 className="animate-fade-up-delay-1 text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>

          <p className="animate-fade-up-delay-1 mt-4 text-lg font-medium text-text-muted sm:text-xl">
            {site.title}
          </p>

          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            {site.description}
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-3">
            {heroLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={
                  link.label === "Contact"
                    ? "inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                    : "inline-flex items-center rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
