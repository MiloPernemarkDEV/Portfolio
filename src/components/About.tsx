import { about, site } from "../data/site";

function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}

export function About() {
  return (
    <section id="about" className="border-b border-border bg-bg py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-6 md:grid-cols-[minmax(0,1fr)_15rem] lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-12 lg:px-8">
        <div className="border-l-2 border-cyan pl-6">
          <p className="mb-2 font-mono text-sm font-medium tracking-wide text-cyan uppercase">
            About
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">{about.text}</p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Currently studying Game Programming at{" "}
            <a
              href={site.schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {site.school}
            </a>. {about.education}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">{about.extra}</p>
        </div>

        <img
          src={assetUrl(site.photo)}
          alt={site.name}
          className="aspect-square h-44 w-44 rounded-2xl border border-accent/40 object-cover object-center md:h-full md:w-full md:aspect-auto"
        />
      </div>
    </section>
  );
}
