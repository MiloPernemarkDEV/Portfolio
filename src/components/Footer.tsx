import { site } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-transparent bg-surface py-8 after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-pink after:via-cyan after:to-accent">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-center font-mono text-sm text-text-muted">
          © {year} <span className="text-accent">{site.name}</span>
          <span className="text-pink"> · </span>
          <span className="text-cyan">{site.role}</span>
        </p>
      </div>
    </footer>
  );
}
