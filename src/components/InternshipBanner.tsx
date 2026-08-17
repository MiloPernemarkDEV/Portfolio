import { internship } from "../data/site";

export function InternshipBanner() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#b7c6b8] py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #2c4334 1.15px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
            Internship
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            {internship.headline}
          </h2>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-sm font-medium text-[#3d4f42]">Focus areas</p>
          <ul className="flex flex-wrap gap-2">
            {internship.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border-2 border-accent bg-[#eef3ef] px-4 py-2 text-sm font-medium text-accent shadow-[2px_2px_0_0_#3d5c47]"
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
