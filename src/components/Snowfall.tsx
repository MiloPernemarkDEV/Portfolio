import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  phase: number;
  opacity: number;
  kind: "flake" | "droplet";
};

function createParticle(width: number, height: number, scatter: boolean): Particle {
  const kind: Particle["kind"] = Math.random() < 0.35 ? "droplet" : "flake";

  return {
    x: Math.random() * width,
    y: scatter ? Math.random() * height : -8,
    size: kind === "droplet" ? 1.4 + Math.random() * 1.8 : 1.2 + Math.random() * 2.6,
    speed: kind === "droplet" ? 0.9 + Math.random() * 1.6 : 0.35 + Math.random() * 0.9,
    drift: (Math.random() - 0.5) * 0.45,
    phase: Math.random() * Math.PI * 2,
    opacity: 0.18 + Math.random() * 0.38,
    kind,
  };
}

export function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(90, Math.max(42, width / 18)));
      particles = Array.from({ length: count }, () => createParticle(width, height, true));
    };

    const drawFlake = (p: Particle) => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(22, 163, 74, ${p.opacity})`;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      if (p.size > 2.4) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.phase * 0.15);
        ctx.strokeStyle = `rgba(22, 163, 74, ${p.opacity * 0.7})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(-p.size * 1.6, 0);
        ctx.lineTo(p.size * 1.6, 0);
        ctx.moveTo(0, -p.size * 1.6);
        ctx.lineTo(0, p.size * 1.6);
        ctx.stroke();
        ctx.restore();
      }
    };

    const drawDroplet = (p: Particle) => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(100, 116, 139, ${p.opacity + 0.08})`;
      ctx.ellipse(p.x, p.y, p.size * 0.55, p.size * 1.35, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.9})`;
      ctx.ellipse(
        p.x - p.size * 0.12,
        p.y - p.size * 0.35,
        p.size * 0.18,
        p.size * 0.35,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    };

    const tick = () => {
      if (!running) return;

      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.phase += 0.012 + particle.speed * 0.008;
        particle.y += particle.speed;
        particle.x += Math.sin(particle.phase) * 0.35 + particle.drift;

        if (particle.y > height + 12 || particle.x < -12 || particle.x > width + 12) {
          Object.assign(particle, createParticle(width, height, false));
        }

        if (particle.kind === "droplet") {
          drawDroplet(particle);
        } else {
          drawFlake(particle);
        }
      }

      frame = window.requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(frame);
        return;
      }

      if (!running) {
        running = true;
        frame = window.requestAnimationFrame(tick);
      }
    };

    resize();
    frame = window.requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60]"
      aria-hidden="true"
    />
  );
}
