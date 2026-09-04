import { site } from "../data/site";

export function Hero() {
  return (
    <section className="border-b border-border bg-bg py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          {site.heroGreeting}
        </h2>
        <p className="mt-3 font-display text-xl text-text-muted sm:text-2xl">
          {site.heroPrefix} <span className="text-accent">{site.heroAccent}</span>.
        </p>
        <p className="mt-3 font-display text-xl text-text-muted sm:text-2xl">
          {site.heroInvite}
        </p>
      </div>
    </section>
  );
}
