import { skills } from "../data/site";

const skillGroups = [
  { title: "Languages", items: skills.languages },
  { title: "Technologies", items: skills.technologies },
  { title: "Concepts", items: skills.concepts },
] as const;

export function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-sm font-medium tracking-wide text-accent uppercase">
            Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Technical stack
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 border-b border-border pb-3 text-sm font-semibold tracking-wide text-text uppercase">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
