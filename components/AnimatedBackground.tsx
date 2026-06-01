"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
}

interface FloatingLabel {
  x: number; y: number;
  vx: number; vy: number;
  text: string; opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 30 : 70;
    const CONNECTION_DISTANCE = isMobile ? 100 : 160;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animId: number;
    const particles: Particle[] = [];
    const SKILL_LABELS = ["GitHub Actions", "GitLab", "GCP", "Azure", "Terraform", "Kubernetes", "Docker", "Python", "ArgoCD", "Helm"];
    const labels: FloatingLabel[] = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
      labels.length = 0;
      SKILL_LABELS.forEach((text, i) => {
        labels.push({
          x: (width / (SKILL_LABELS.length + 1)) * (i + 1),
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          text,
          opacity: 0.18,
        });
      });
    }

    function drawGradientMesh() {
      // Deep bg gradient
      const grad = ctx!.createRadialGradient(
        width * 0.3, height * 0.2, 0,
        width * 0.3, height * 0.2, width * 0.8
      );
      grad.addColorStop(0, "rgba(0,212,255,0.03)");
      grad.addColorStop(0.5, "rgba(123,97,255,0.02)");
      grad.addColorStop(1, "transparent");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, width, height);

      const grad2 = ctx!.createRadialGradient(
        width * 0.8, height * 0.7, 0,
        width * 0.8, height * 0.7, width * 0.6
      );
      grad2.addColorStop(0, "rgba(123,97,255,0.04)");
      grad2.addColorStop(1, "transparent");
      ctx!.fillStyle = grad2;
      ctx!.fillRect(0, 0, width, height);
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      drawGradientMesh();

      // Update + draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx!.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.12;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      // Draw floating skill labels
      ctx!.font = "600 13px 'JetBrains Mono', monospace";
      for (const lbl of labels) {
        lbl.x += lbl.vx;
        lbl.y += lbl.vy;
        if (lbl.x < -80) lbl.x = width + 80;
        if (lbl.x > width + 80) lbl.x = -80;
        if (lbl.y < 0) lbl.y = height;
        if (lbl.y > height) lbl.y = 0;
        // pill background
        const tw = ctx!.measureText(lbl.text).width;
        ctx!.fillStyle = `rgba(0, 212, 255, 0.06)`;
        ctx!.beginPath();
        ctx!.roundRect(lbl.x - 8, lbl.y - 14, tw + 16, 22, 6);
        ctx!.fill();
        ctx!.strokeStyle = `rgba(0, 212, 255, 0.18)`;
        ctx!.lineWidth = 0.8;
        ctx!.stroke();
        ctx!.fillStyle = `rgba(0, 212, 255, 0.55)`;
        ctx!.fillText(lbl.text, lbl.x, lbl.y);
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", () => { resize(); initParticles(); });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
