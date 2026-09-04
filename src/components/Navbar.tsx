import { useState } from "react";
import { navLinks, site } from "../data/site";

const actionLinks = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Resume", href: `${import.meta.env.BASE_URL}resume.pdf`, external: true },
  { label: "Contact", href: "#contact", external: false },
] as const;

const sectionLinks = navLinks.filter((link) => link.label !== "Contact");

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 bg-bg/90 backdrop-blur-md after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-accent after:via-cyan after:to-pink">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 lg:px-8"
        aria-label="Primary"
      >
        <div>
          <a
            href="#"
            className="font-mono text-xs font-medium tracking-wide text-accent uppercase transition-colors hover:text-accent-hover"
          >
            {site.name}
          </a>
          <h1 className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
            {site.role}
          </h1>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5">
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {actionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={
                  link.label === "Contact"
                    ? "inline-flex items-center rounded-lg bg-pink px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-pink/80"
                    : link.label === "GitHub"
                      ? "inline-flex items-center rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-text transition-all hover:border-cyan/60 hover:text-cyan"
                      : link.label === "LinkedIn"
                        ? "inline-flex items-center rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-text transition-all hover:border-pink/60 hover:text-pink"
                        : "inline-flex items-center rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-text transition-all hover:border-accent/60 hover:text-accent"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-text md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-text-muted transition-colors hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {actionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={
                  link.label === "Contact"
                    ? "inline-flex rounded-lg bg-pink px-4 py-2 text-sm font-semibold text-bg"
                    : "inline-flex rounded-lg border border-border px-3 py-2 text-sm font-medium text-text"
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
