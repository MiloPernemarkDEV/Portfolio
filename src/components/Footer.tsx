import { site } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-center font-mono text-sm text-text-muted">
          © {year} <span className="text-text">{site.name}</span>
          {" · "}
          {site.role}
        </p>
      </div>
    </footer>
  );
}
