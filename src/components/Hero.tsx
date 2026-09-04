import { useEffect, useState } from "react";
import { heroLines, site } from "../data/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroLines.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="border-b border-border bg-bg py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          {site.heroGreeting}
        </h2>
        <p className="mt-3 font-display text-xl text-text-muted sm:text-2xl" aria-live="polite">
          I'm a game programmer{" "}
          <span className="relative inline-grid align-baseline">
            {heroLines.map((line, lineIndex) => (
              <span
                key={line}
                aria-hidden={lineIndex !== index}
                className={`col-start-1 row-start-1 text-accent transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                  lineIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {line}
              </span>
            ))}
          </span>
        </p>
        <p className="mt-3 font-display text-xl text-text-muted sm:text-2xl">
          {site.heroInvite}
        </p>
      </div>
    </section>
  );
}
