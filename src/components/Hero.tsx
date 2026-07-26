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
