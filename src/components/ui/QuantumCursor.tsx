"use client";

import { useEffect, useRef } from "react";

export default function QuantumCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const lastMove = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ❌ Disable on mobile & reduced motion (BIG SEO WIN)
    if (
      window.innerWidth < 768 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 🔥 Reduced particles (100 → 60)
    const PARTICLE_COUNT = 60;

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
      life: Math.random() * 80,
    }));

    // 🧠 Throttled mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMove.current < 16) return; // ~60fps cap
      lastMove.current = now;

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // ⏸ Pause animation when tab hidden (HUGE CWV BOOST)
    const handleVisibility = () => {
      if (document.hidden && animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      } else if (!document.hidden && !animationRef.current) {
        animate();
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const force = Math.min(100 / dist, 2.5);
        p.vx += (dx / dist) * force * 0.1;
        p.vy += (dy / dist) * force * 0.1;

        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 220, 255, 0.5)";
        ctx.fill();

        p.life--;
        if (p.life <= 0) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.life = 80;
        }
      });

      // 🎯 Core cursor
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(180, 120, 255, 0.85)";
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
}
