import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

type Bolt = {
  trunks: Point[][];
  color: string;
  life: number;
  maxLife: number;
  width: number;
};

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
};

const COLORS = ["#22d3ee", "#ff4ecd", "#7cf29a"];

function pickColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function buildBranch(start: Point, height: number, depth: number): Point[][] {
  const points: Point[] = [start];
  let x = start.x;
  let y = start.y;
  const target = start.y + height * (0.45 + Math.random() * 0.4);
  const trunks: Point[][] = [];

  while (y < target && y < height - 8) {
    x += (Math.random() - 0.5) * (28 + depth * 8);
    y += 10 + Math.random() * 18;
    points.push({ x, y });

    if (depth < 2 && Math.random() < 0.18) {
      trunks.push(
        ...buildBranch({ x, y }, height * (0.18 + Math.random() * 0.2), depth + 1),
      );
    }
  }

  trunks.unshift(points);
  return trunks;
}

function createBolt(width: number, height: number): Bolt {
  const start = { x: width * (0.12 + Math.random() * 0.76), y: -4 };
  return {
    trunks: buildBranch(start, height, 0),
    color: pickColor(),
    life: 1,
    maxLife: 10 + Math.floor(Math.random() * 8),
    width: 1.2 + Math.random() * 1.4,
  };
}

function spawnSparks(bolt: Bolt, sparks: Spark[]) {
  const last = bolt.trunks[0][bolt.trunks[0].length - 1];
  if (!last) return;

  const count = 8 + Math.floor(Math.random() * 10);
  for (let i = 0; i < count; i += 1) {
    sparks.push({
      x: last.x + (Math.random() - 0.5) * 18,
      y: last.y,
      vx: (Math.random() - 0.5) * 3.2,
      vy: -0.4 + Math.random() * 2.4,
      life: 18 + Math.random() * 16,
      color: bolt.color,
    });
  }
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
    let sparks: Spark[] = [];
    let flash = 0;
    let nextStrike = 400;
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
      const bolt = createBolt(width, height);
      bolts.push(bolt);
      spawnSparks(bolt, sparks);
      flash = 0.16;
      nextStrike = 700 + Math.random() * 2200;
    };

    const drawBolt = (bolt: Bolt) => {
      const alpha = Math.max(0, bolt.life / bolt.maxLife);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (const trunk of bolt.trunks) {
        ctx.beginPath();
        ctx.moveTo(trunk[0].x, trunk[0].y);
        for (let i = 1; i < trunk.length; i += 1) {
          ctx.lineTo(trunk[i].x, trunk[i].y);
        }
        ctx.strokeStyle = bolt.color;
        ctx.globalAlpha = alpha * 0.35;
        ctx.lineWidth = bolt.width + 4;
        ctx.stroke();

        ctx.globalAlpha = alpha * 0.9;
        ctx.lineWidth = bolt.width;
        ctx.stroke();

        ctx.strokeStyle = "#ffffff";
        ctx.globalAlpha = alpha * 0.55;
        ctx.lineWidth = Math.max(0.6, bolt.width * 0.35);
        ctx.stroke();
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

      if (flash > 0) {
        ctx.fillStyle = `rgba(34, 211, 238, ${flash})`;
        ctx.fillRect(0, 0, width, height);
        flash *= 0.82;
        if (flash < 0.01) flash = 0;
      }

      bolts = bolts.filter((bolt) => {
        bolt.life -= 1;
        if (bolt.life <= 0) return false;
        drawBolt(bolt);
        return true;
      });

      sparks = sparks.filter((spark) => {
        spark.life -= 1;
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vy += 0.06;
        if (spark.life <= 0) return false;

        ctx.beginPath();
        ctx.fillStyle = spark.color;
        ctx.globalAlpha = Math.max(0, spark.life / 28);
        ctx.arc(spark.x, spark.y, 1.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
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
    const firstStrike = window.setTimeout(strike, 280);
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
