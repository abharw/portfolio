"use client";

import { useEffect, useRef } from "react";

import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type Point3 = { x: number; y: number; z: number };

type WireframeFormsProps = {
  variant?: "sphere";
  speed?: number;
  size?: number;
  length?: number;
  className?: string;
};

const SOURCE_CANVAS = 300;
const FOV = 400;

function leftAlignedOriginX(s: number) {
  const t = (1.0 + Math.sqrt(5.0)) / 2.0;
  const radius = s * Math.sqrt(1 + t * t);
  return radius + 2;
}

function buildSphere(s: number) {
  const t = (1.0 + Math.sqrt(5.0)) / 2.0;
  const p: [number, number, number][] = [
    [-1, t, 0],
    [1, t, 0],
    [-1, -t, 0],
    [1, -t, 0],
    [0, -1, t],
    [0, 1, t],
    [0, -1, -t],
    [0, 1, -t],
    [t, 0, -1],
    [t, 0, 1],
    [-t, 0, -1],
    [-t, 0, 1],
  ];

  const points: Point3[] = [];
  const edges: [number, number][] = [];

  p.forEach((v) => points.push({ x: v[0] * s, y: v[1] * s, z: v[2] * s }));
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const d = Math.hypot(
        points[i].x - points[j].x,
        points[i].y - points[j].y,
        points[i].z - points[j].z,
      );
      if (d < s * 2.1) edges.push([i, j]);
    }
  }

  p.forEach((v) =>
    points.push({ x: v[0] * s * 0.5, y: v[1] * s * 0.5, z: v[2] * s * 0.5 }),
  );
  const off = 12;
  for (let i = 0; i < 12; i++) {
    for (let j = i + 1; j < 12; j++) {
      const d = Math.hypot(
        points[off + i].x - points[off + j].x,
        points[off + i].y - points[off + j].y,
        points[off + i].z - points[off + j].z,
      );
      if (d < s * 1.1) edges.push([off + i, off + j]);
    }
    edges.push([i, off + i]);
  }

  return { points, edges };
}

function project(p: Point3, angleX: number, angleY: number, cx: number, cy: number) {
  let x = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
  let z = p.z * Math.cos(angleY) + p.x * Math.sin(angleY);
  let y = p.y * Math.cos(angleX) - z * Math.sin(angleX);
  z = z * Math.cos(angleX) + p.y * Math.sin(angleX);

  const scale = FOV / (FOV + z);
  return { x: x * scale + cx, y: y * scale + cy, z };
}

function renderFrame(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  points: Point3[],
  edges: [number, number][],
  angleX: number,
  angleY: number,
  lineWidth: number,
  originX: number,
) {
  ctx.clearRect(0, 0, width, height);
  ctx.lineWidth = lineWidth;

  const cy = height / 2;
  const projected = points.map((p) => project(p, angleX, angleY, originX, cy));

  for (const edge of edges) {
    const p1 = projected[edge[0]];
    const p2 = projected[edge[1]];
    const depth = (p1.z + p2.z) / 2;
    const alpha = Math.max(0.1, 1 - depth / 200);

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.strokeStyle = `rgba(10, 10, 9, ${alpha * 0.4})`;
    ctx.stroke();
  }

  for (const p of projected) {
    const alpha = Math.max(0.1, 1 - p.z / 200);
    if (alpha > 0.5) {
      ctx.fillStyle = `rgba(10, 10, 9, ${alpha})`;
      ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
    }
  }
}

export function WireframeForms({
  variant = "sphere",
  speed = 3,
  size = 1,
  length = 1,
  className,
}: WireframeFormsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || variant !== "sphere") return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = SOURCE_CANVAS;
    const height = SOURCE_CANVAS;
    canvas.width = width * 2;
    canvas.height = height * 2;
    ctx.setTransform(2, 0, 0, 2, 0, 0);

    const s = Math.round(50 * length);
    const { points, edges } = buildSphere(s);
    const lineWidth = Number((0.8 * size).toFixed(2));
    const originX = leftAlignedOriginX(s);
    const safeSpeed = speed > 0 ? speed : 1;

    let angleX = 0;
    let angleY = 0;
    let frame = 0;

    const paint = () => {
      renderFrame(ctx, width, height, points, edges, angleX, angleY, lineWidth, originX);
    };

    if (reducedMotion) {
      angleY = 0.8;
      angleX = 0.35;
      paint();
      return;
    }

    const tick = () => {
      angleY += 0.005 * safeSpeed;
      angleX += 0.002 * safeSpeed;
      paint();
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [length, reducedMotion, size, speed, variant]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={SOURCE_CANVAS * 2}
      height={SOURCE_CANVAS * 2}
      aria-hidden="true"
    />
  );
}
