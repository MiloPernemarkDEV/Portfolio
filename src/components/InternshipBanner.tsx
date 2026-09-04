import { internship } from "../data/site";

export function InternshipBanner() {
  return (
    <section className="border-b border-border bg-accent-dim py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-2 font-mono text-sm font-medium tracking-wide text-accent uppercase">
            Internship
          </p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {internship.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            {internship.detail}
          </p>
        </div>

        <div className="mt-10">
          <p className="mb-4 font-mono text-xs font-medium tracking-wide text-accent uppercase">
            Focus areas
          </p>
          <ul className="flex flex-wrap gap-2">
            {internship.focusAreas.map((area, index) => (
              <li
                key={area}
                className={
                  index % 3 === 0
                    ? "rounded-full border border-accent/50 bg-bg/40 px-4 py-2 font-chip text-sm font-semibold text-accent"
                    : index % 3 === 1
                      ? "rounded-full border border-cyan/50 bg-bg/40 px-4 py-2 font-chip text-sm font-semibold text-cyan"
                      : "rounded-full border border-pink/50 bg-bg/40 px-4 py-2 font-chip text-sm font-semibold text-pink"
                }
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
