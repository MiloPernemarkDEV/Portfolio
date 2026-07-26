import { internship } from "../data/site";

export function InternshipBanner() {
  return (
    <section className="border-b border-border bg-accent-light py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
            Internship
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            {internship.headline}
          </h2>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-sm font-medium text-text-muted">Focus areas</p>
          <ul className="flex flex-wrap gap-2">
            {internship.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-accent-muted bg-white px-4 py-2 text-sm font-medium text-text"
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
