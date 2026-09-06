import { useEffect, useState } from "react";
import { site } from "../data/site";

const LINES = [
  "INIT RUNTIME",
  "LOAD GAMEPLAY SYSTEMS",
  "SPAWN AGENTS",
  "READY",
] as const;

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      document.getElementById("boot")?.remove();
      setGone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    document.getElementById("boot")?.remove();

    const started = performance.now();
    const duration = 1700;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      const next = Math.round(t * 100);
      setProgress(next);
      setLineCount(Math.min(LINES.length, Math.floor(t * LINES.length) + 1));

      if (t < 1) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      window.setTimeout(() => setLeaving(true), 280);
      window.setTimeout(() => {
        document.body.style.overflow = "";
        setGone(true);
      }, 720);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg transition-opacity duration-500 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="w-[min(92vw,22rem)] px-6">
        <p className="font-mono text-[11px] tracking-[0.28em] text-cyan uppercase">
          {site.name}
        </p>
        <p className="mt-1 font-display text-2xl font-bold tracking-tight text-text">
          {site.role}
        </p>

        <ul className="mt-8 space-y-1.5 font-mono text-[11px] tracking-wide text-text-muted">
          {LINES.slice(0, lineCount).map((line, index) => (
            <li
              key={line}
              className={
                index === LINES.length - 1 && lineCount === LINES.length
                  ? "text-accent"
                  : index % 2 === 0
                    ? "text-cyan"
                    : "text-pink"
              }
            >
              <span className="mr-2 text-text-muted">{">"}</span>
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-8 h-[3px] overflow-hidden rounded-full bg-border">
          <div
            className="h-full bg-gradient-to-r from-accent via-cyan to-pink transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 font-mono text-[11px] tabular-nums text-text-muted">
          {progress.toString().padStart(3, "0")}%
        </p>
      </div>
    </div>
  );
}
