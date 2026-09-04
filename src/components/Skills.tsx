import { skills } from "../data/site";

const skillGroups = [
  {
    title: "Languages",
    items: skills.languages,
    accent: "text-cyan border-cyan/40 bg-cyan/10",
    heading: "text-cyan",
  },
  {
    title: "Technologies",
    items: skills.technologies,
    accent: "text-pink border-pink/40 bg-pink/10",
    heading: "text-pink",
  },
  {
    title: "Concepts",
    items: skills.concepts,
    accent: "text-accent border-accent/40 bg-accent/10",
    heading: "text-accent",
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 font-mono text-sm font-medium tracking-wide text-cyan uppercase">
            Skills
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            What I work in
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className={`mb-5 border-b border-border pb-3 font-mono text-xs font-semibold tracking-wide uppercase ${group.heading}`}>
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-md border px-3 py-2 font-chip text-sm font-semibold ${group.accent}`}
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
