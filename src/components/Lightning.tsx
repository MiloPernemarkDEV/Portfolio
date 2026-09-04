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

function edgePoint(width: number, height: number, edge: number): Point {
  switch (edge) {
    case 0:
      return { x: width * Math.random(), y: -10 };
    case 1:
      return { x: width + 10, y: height * Math.random() };
    case 2:
      return { x: width * Math.random(), y: height + 10 };
    default:
      return { x: -10, y: height * Math.random() };
  }
}

function createBolt(width: number, height: number): Bolt {
  const startEdge = Math.floor(Math.random() * 4);
  let endEdge = Math.floor(Math.random() * 4);
  if (endEdge === startEdge) {
    endEdge = (startEdge + 1 + Math.floor(Math.random() * 3)) % 4;
  }

  const start = edgePoint(width, height, startEdge);
  const end = edgePoint(width, height, endEdge);

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

    const keepoutEl = parent.querySelector("[data-lightning-keepout]");

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let keepout: { x: number; y: number; w: number; h: number } | null = null;
    let bolts: Bolt[] = [];
    let nextStrike = 200;
    let flash = 0;
    let flashColor = "34, 211, 238";
    let frame = 0;
    let running = true;
    let elapsed = 0;

    const measureKeepout = () => {
      if (!(keepoutEl instanceof HTMLElement)) {
        keepout = null;
        return;
      }

      const parentRect = parent.getBoundingClientRect();
      const rect = keepoutEl.getBoundingClientRect();
      const padX = 40;
      const padY = 32;
      keepout = {
        x: rect.left - parentRect.left - padX,
        y: rect.top - parentRect.top - padY,
        w: rect.width + padX * 2,
        h: rect.height + padY * 2,
      };
    };

    const punchKeepout = () => {
      if (!keepout) return;

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.filter = "blur(18px)";
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.roundRect(keepout.x, keepout.y, keepout.w, keepout.h, 28);
      ctx.fill();
      ctx.restore();
    };

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
      measureKeepout();
    };

    const strike = () => {
      const bolt = createBolt(width, height);
      bolts.push(bolt);
      if (Math.random() < 0.35) bolts.push(createBolt(width, height));
      flashColor =
        bolt.color === "#ff4ecd"
          ? "255, 78, 205"
          : bolt.color === "#7cf29a"
            ? "124, 242, 154"
            : "34, 211, 238";
      flash = 0.08;
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

      if (flash > 0.004) {
        ctx.fillStyle = `rgba(${flashColor}, ${flash})`;
        ctx.fillRect(0, 0, width, height);
        flash *= 0.78;
      } else {
        flash = 0;
      }

      bolts = bolts.filter((bolt) => {
        bolt.life += 1;
        if (bolt.life > bolt.maxLife) return false;
        drawBolt(bolt);
        return true;
      });

      punchKeepout();

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
    if (keepoutEl instanceof HTMLElement) observer.observe(keepoutEl);
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
