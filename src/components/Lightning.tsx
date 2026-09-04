import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

type Bolt = {
  main: Point[];
  forks: Point[][];
  color: string;
  life: number;
  maxLife: number;
  core: number;
};

const COLORS = ["#22d3ee", "#7dd3fc", "#ff4ecd", "#7cf29a"];

function pickColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function zigzag(start: Point, end: Point, jag: number): Point[] {
  const points: Point[] = [start];
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const dist = Math.hypot(dx, dy) || 1;
  const steps = Math.max(8, Math.floor(dist / 16));

  for (let i = 1; i < steps; i += 1) {
    const t = i / steps;
    const nx = -dy / dist;
    const ny = dx / dist;
    const offset = (Math.random() - 0.5) * jag * (1 - Math.abs(t - 0.5) * 0.4);
    points.push({
      x: start.x + dx * t + nx * offset,
      y: start.y + dy * t + ny * offset,
    });
  }

  points.push(end);
  return points;
}

function createBolt(width: number, height: number): Bolt {
  const fromLeft = Math.random() < 0.5;
  const start: Point = {
    x: fromLeft ? width * Math.random() * 0.35 : width * (0.65 + Math.random() * 0.35),
    y: -8,
  };
  const end: Point = {
    x: width * (0.15 + Math.random() * 0.7),
    y: height * (0.55 + Math.random() * 0.4),
  };

  const main = zigzag(start, end, 42);
  const forks: Point[][] = [];

  for (let i = 3; i < main.length - 2; i += 1) {
    if (Math.random() > 0.28) continue;
    const origin = main[i];
    const forkEnd: Point = {
      x: origin.x + (Math.random() - 0.5) * 120,
      y: origin.y + 30 + Math.random() * 90,
    };
    forks.push(zigzag(origin, forkEnd, 22));
  }

  return {
    main,
    forks,
    color: pickColor(),
    life: 1,
    maxLife: 28 + Math.floor(Math.random() * 18),
    core: 1.6 + Math.random() * 1.2,
  };
}

function strokePath(
  ctx: CanvasRenderingContext2D,
  points: Point[],
  color: string,
  width: number,
  alpha: number,
) {
  if (points.length < 2) return;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i += 1) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.strokeStyle = color;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = width;
  ctx.stroke();
}

export function Lightning() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let bolts: Bolt[] = [];
    let nextStrike = 200;
    let frame = 0;
    let running = true;
    let elapsed = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const bounds = parent.getBoundingClientRect();
      width = Math.max(1, Math.floor(bounds.width));
      height = Math.max(1, Math.floor(bounds.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const strike = () => {
      bolts.push(createBolt(width, height));
      if (Math.random() < 0.35) bolts.push(createBolt(width, height));
      nextStrike = 900 + Math.random() * 1600;
    };

    const drawBolt = (bolt: Bolt) => {
      const t = bolt.life / bolt.maxLife;
      const flicker = 0.75 + Math.random() * 0.25;
      const alpha = Math.min(1, t * 1.6) * flicker;

      ctx.lineJoin = "miter";
      ctx.lineCap = "square";

      strokePath(ctx, bolt.main, bolt.color, bolt.core + 5, alpha * 0.22);
      strokePath(ctx, bolt.main, bolt.color, bolt.core + 1.4, alpha * 0.85);
      strokePath(ctx, bolt.main, "#ffffff", Math.max(0.7, bolt.core * 0.4), alpha);

      for (const fork of bolt.forks) {
        strokePath(ctx, fork, bolt.color, bolt.core * 0.7, alpha * 0.7);
        strokePath(ctx, fork, "#ffffff", 0.6, alpha * 0.55);
      }

      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      if (!running) return;

      const dt = Math.min(32, now - elapsed || 16);
      elapsed = now;
      nextStrike -= dt;

      if (nextStrike <= 0) strike();

      ctx.clearRect(0, 0, width, height);

      bolts = bolts.filter((bolt) => {
        bolt.life += 1;
        if (bolt.life > bolt.maxLife) return false;
        drawBolt(bolt);
        return true;
      });

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
        elapsed = performance.now();
        frame = window.requestAnimationFrame(tick);
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    resize();
    const firstStrike = window.setTimeout(strike, 200);
    frame = window.requestAnimationFrame(tick);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.clearTimeout(firstStrike);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
