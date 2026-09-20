import { useEffect, useState } from "react";
import { site } from "../data/site";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seen = sessionStorage.getItem("portfolio-boot") === "1";
    if (motion.matches || seen) {
      document.getElementById("boot")?.remove();
      setGone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    document.getElementById("boot")?.remove();

    const started = performance.now();
    const duration = 620;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      setProgress(Math.round(t * 100));

      if (t < 1) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      window.setTimeout(() => setLeaving(true), 40);
      window.setTimeout(() => {
        sessionStorage.setItem("portfolio-boot", "1");
        document.body.style.overflow = "";
        setGone(true);
      }, 280);
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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg transition-opacity duration-300 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex w-[min(92vw,18rem)] flex-col items-center px-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.38em] text-accent uppercase">
          {site.name}
        </p>
        <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-text">
          {site.role}
        </p>
        <div className="mt-8 h-[2px] w-full overflow-hidden bg-border">
          <div
            className="h-full bg-accent transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
