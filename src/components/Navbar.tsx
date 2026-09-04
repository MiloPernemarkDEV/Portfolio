import { useState } from "react";
import { navLinks, site } from "../data/site";

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 21H3.56V8.75h3.38V21zM5.25 7.18a1.96 1.96 0 1 1 0-3.92 1.96 1.96 0 0 1 0 3.92zM21 21h-3.38v-6.52c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.5 1.69-2.5 3.44V21H9.58V8.75h3.24v1.67h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V21z" />
    </svg>
  );
}

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

          <div className="flex items-center gap-1">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-lg p-2 text-text transition-colors hover:text-cyan"
            >
              <GitHubIcon />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-lg p-2 text-text transition-colors hover:text-pink"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#contact"
              className="ml-1 inline-flex items-center rounded-lg bg-pink px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-pink/80"
            >
              Contact
            </a>
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
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-lg p-2 text-text"
              onClick={() => setOpen(false)}
            >
              <GitHubIcon />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-lg p-2 text-text"
              onClick={() => setOpen(false)}
            >
              <LinkedInIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-lg bg-pink px-4 py-2 text-sm font-semibold text-bg"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
