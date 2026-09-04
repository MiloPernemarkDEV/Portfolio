import { internship } from "../data/site";

function Cloud({ className, stroke = "#7cf29a" }: { className?: string; stroke?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 110"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M54 90c-22 0-40-16-40-36 0-18 14-33 32-36 6-18 24-30 44-30 22 0 41 14 47 34 8-4 16-6 26-6 28 0 50 20 50 46 0 4 0 8-1 12 14 4 24 16 24 30 0 18-16 32-36 32H54Z"
        fill="#143322"
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InternshipBanner() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-accent-dim py-16 lg:py-20">
      <Cloud className="pointer-events-none absolute -top-6 -left-10 w-44 opacity-80 sm:w-52 lg:w-64" />
      <Cloud
        className="pointer-events-none absolute -right-8 -bottom-8 w-40 opacity-80 sm:w-48 lg:w-56"
        stroke="#ff4ecd"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-2 font-mono text-sm font-medium tracking-wide text-accent uppercase neon-lime">
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
                    ? "rounded-full border border-accent/50 bg-bg/40 px-4 py-2 text-sm font-medium text-accent shadow-[0_0_16px_rgba(124,242,154,0.18)]"
                    : index % 3 === 1
                      ? "rounded-full border border-cyan/50 bg-bg/40 px-4 py-2 text-sm font-medium text-cyan shadow-[0_0_16px_rgba(34,211,238,0.18)]"
                      : "rounded-full border border-pink/50 bg-bg/40 px-4 py-2 text-sm font-medium text-pink shadow-[0_0_16px_rgba(255,78,205,0.18)]"
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
