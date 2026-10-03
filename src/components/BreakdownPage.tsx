import { useEffect, useState, type ReactNode } from "react";
import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  breakdownIds,
  cachedMarkdown,
  hasBreakdown,
  loadBreakdown,
} from "../data/breakdowns";
import { projects, site } from "../data/site";
import { AppLink } from "../router";

function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}

const sectionHeading =
  "mt-12 font-display text-2xl font-bold tracking-tight text-text";
const subheading = "mt-8 font-display text-xl font-bold tracking-tight text-text";

function textBlock(children: ReactNode) {
  return <p className="mt-3 text-[1.05rem] leading-relaxed text-text-muted">{children}</p>;
}

const markdownComponents: Components = {
  h1({ children }) {
    return <h3 className={sectionHeading}>{children}</h3>;
  },
  h2({ children }) {
    return <h3 className={sectionHeading}>{children}</h3>;
  },
  h3({ children }) {
    return <h4 className={subheading}>{children}</h4>;
  },
  h4({ children }) {
    return <h5 className="mt-6 text-lg font-semibold text-text">{children}</h5>;
  },
  p({ children }) {
    return textBlock(children);
  },
  ul({ children }) {
    return (
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[1.05rem] leading-relaxed text-text-muted">
        {children}
      </ul>
    );
  },
  ol({ children }) {
    return (
      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[1.05rem] leading-relaxed text-text-muted">
        {children}
      </ol>
    );
  },
  li({ children }) {
    return <li className="leading-relaxed [&>p]:mt-1">{children}</li>;
  },
  a({ href, children }) {
    const external = Boolean(href?.startsWith("http"));
    return (
      <a
        href={href}
        className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  blockquote({ children }) {
    return (
      <blockquote className="mt-4 border-l-2 border-accent/50 pl-4 text-text-muted italic [&>p]:mt-2">
        {children}
      </blockquote>
    );
  },
  hr() {
    return <hr className="mt-10 border-border" />;
  },
  strong({ children }) {
    return <strong className="font-semibold text-text">{children}</strong>;
  },
  img({ src, alt }) {
    if (!src) return null;
    const resolved = /^(https?:|data:)/.test(src) ? src : assetUrl(src);
    return (
      <img
        src={resolved}
        alt={alt ?? ""}
        loading="lazy"
        decoding="async"
        className="mt-4 w-full rounded-2xl border border-border"
      />
    );
  },
  pre({ children }) {
    return (
      <pre className="mt-4 overflow-x-auto rounded-xl border border-[#2b2420]/15 bg-[#241e1b] px-4 py-3.5 font-mono text-[12px] leading-relaxed text-[#f3e6da] sm:text-[13px]">
        {children}
      </pre>
    );
  },
  code({ className, children }) {
    const value = String(children);
    const block = Boolean(className?.includes("language-")) || value.includes("\n");
    if (block) {
      return <code className={className}>{value.replace(/\n$/, "")}</code>;
    }
    return (
      <code className="rounded-md bg-[#241e1b]/10 px-1.5 py-0.5 font-mono text-[0.88em] text-text">
        {children}
      </code>
    );
  },
  table({ children }) {
    return (
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">{children}</table>
      </div>
    );
  },
  th({ children }) {
    return (
      <th className="border border-border bg-surface px-3 py-2 font-semibold text-text">
        {children}
      </th>
    );
  },
  td({ children }) {
    return <td className="border border-border px-3 py-2 text-text-muted">{children}</td>;
  },
};

function BreakdownMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="[&>:first-child]:mt-12">
      <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {markdown}
      </Markdown>
    </div>
  );
}

export default function BreakdownPage({ id }: { id: string }) {
  const project = projects.find((item) => item.id === id);
  const exists = hasBreakdown(id);
  const [markdown, setMarkdown] = useState<string | undefined>(() => cachedMarkdown(id));

  useEffect(() => {
    const previous = document.title;
    document.title = project
      ? `${project.title} breakdown | ${site.name}`
      : `Breakdown | ${site.name}`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  useEffect(() => {
    if (!exists) return;
    const cached = cachedMarkdown(id);
    if (cached != null) {
      setMarkdown(cached);
      return;
    }
    let cancel = false;
    void loadBreakdown(id).then((value) => {
      if (!cancel && value != null) setMarkdown(value);
    });
    return () => {
      cancel = true;
    };
  }, [exists, id]);

  if (!project || !exists) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-text">
          Breakdown not found
        </h2>
        <AppLink
          to="/"
          className="mt-6 inline-flex text-sm font-medium text-accent hover:text-accent-hover"
        >
          Back home
        </AppLink>
      </main>
    );
  }

  const video = project.image && /\.(mp4|webm)$/i.test(project.image);

  return (
    <main className="border-b border-border bg-bg py-10 lg:py-14">
      <article className="mx-auto max-w-4xl px-6 lg:px-8">
        <AppLink
          to="/#projects"
          className="font-mono text-xs font-medium tracking-wide text-accent uppercase hover:text-accent-hover"
        >
          ← Projects
        </AppLink>

        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {project.title}
        </h2>
        {(project.role || project.engine || project.platform) ? (
          <p className="mt-2 font-mono text-xs tracking-wide text-accent">
            {[project.role, project.engine, project.platform].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {breakdownIds.map((itemId) => {
            const linked = projects.find((entry) => entry.id === itemId);
            const current = itemId === id;
            return (
              <AppLink
                key={itemId}
                to={`/breakdown/${itemId}`}
                className={`rounded-full border px-3 py-1 font-chip text-xs font-semibold ${
                  current
                    ? "border-accent bg-accent text-bg"
                    : "border-border text-text-muted hover:border-accent/60 hover:text-accent"
                }`}
              >
                {linked?.title ?? itemId}
              </AppLink>
            );
          })}
        </div>

        {project.image ? (
          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-surface">
            {video ? (
              <video
                src={assetUrl(project.image)}
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={project.imageAlt ?? project.title}
              />
            ) : (
              <img
                src={assetUrl(project.image)}
                alt={project.imageAlt ?? project.title}
                decoding="async"
                className="aspect-video w-full object-cover"
              />
            )}
          </div>
        ) : null}

        {markdown ? <BreakdownMarkdown markdown={markdown} /> : null}
      </article>
    </main>
  );
}
