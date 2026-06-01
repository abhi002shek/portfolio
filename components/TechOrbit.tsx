"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ICONS = [
  { label: "Kubernetes", color: "#326CE5", angle: 0,
    svg: <svg viewBox="0 0 128 128"><path fill="#326CE5" d="M64 8.4L12.6 37.2v57.6L64 123.6l51.4-28.8V37.2z"/><path fill="#fff" d="M64 24l-8 24H32l20 14-8 24 20-14 20 14-8-24 20-14H72z"/></svg> },
  { label: "Docker", color: "#2496ED", angle: 45,
    svg: <svg viewBox="0 0 128 128"><rect x="8" y="52" width="112" height="52" rx="8" fill="#2496ED"/><rect x="20" y="64" width="18" height="18" rx="2" fill="#fff"/><rect x="46" y="64" width="18" height="18" rx="2" fill="#fff"/><rect x="72" y="64" width="18" height="18" rx="2" fill="#fff"/><rect x="46" y="38" width="18" height="18" rx="2" fill="#2496ED" stroke="#fff" strokeWidth="3"/><rect x="72" y="38" width="18" height="18" rx="2" fill="#2496ED" stroke="#fff" strokeWidth="3"/><path d="M100 56c4-4 12-2 12 6" stroke="#fff" strokeWidth="4" fill="none"/><circle cx="104" cy="48" r="4" fill="#fff"/></svg> },
  { label: "Terraform", color: "#7B42BC", angle: 90,
    svg: <svg viewBox="0 0 128 128"><path fill="#7B42BC" d="M48 16l32 18v36L48 52z"/><path fill="#5C4EE5" d="M84 36l32 18v36L84 72z"/><path fill="#4040B2" d="M12 36l32 18v36L12 72z"/><path fill="#7B42BC" d="M48 76l32 18v18L48 94z"/></svg> },
  { label: "AWS", color: "#FF9900", angle: 135,
    svg: <svg viewBox="0 0 128 128"><path fill="#FF9900" d="M38 82c-12 0-20-6-20-16s8-16 20-16c1 0 3 0 4 .2C45 38 54 30 64 30c16 0 28 12 28 26 0 1 0 2-.1 3C98 61 106 68 106 78c0 8-6 14-14 14H38z"/><path fill="#FF9900" opacity=".5" d="M32 104l8-12h48l8 12H32z"/></svg> },
  { label: "Python", color: "#3776AB", angle: 180,
    svg: <svg viewBox="0 0 128 128"><path fill="#3776AB" d="M64 8C42 8 44 18 44 18v20h44v6H32S8 41 8 64s18 22 18 22h12V74s-1-18 18-18h32c16 0 18-12 18-12V26S92 8 64 8z"/><path fill="#FFD43B" d="M64 120c22 0 20-10 20-10V90H40v-6h56s24 3 24-20-18-22-18-22h-12v12s1 18-18 18H40c-16 0-18 12-18 12v22s-4 24 42 24z"/><circle cx="52" cy="26" r="6" fill="#fff"/><circle cx="76" cy="102" r="6" fill="#fff"/></svg> },
  { label: "Jenkins", color: "#D33833", angle: 225,
    svg: <svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#D33833"/><circle cx="64" cy="52" r="24" fill="#F0D6B7"/><circle cx="64" cy="44" r="12" fill="#335061"/><path d="M40 88c0-13 11-24 24-24s24 11 24 24" fill="#F0D6B7"/><rect x="56" y="96" width="16" height="12" rx="4" fill="#335061"/></svg> },
  { label: "Prometheus", color: "#E6522C", angle: 270,
    svg: <svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#E6522C"/><circle cx="64" cy="64" r="16" fill="#fff"/><path d="M64 20v16M64 92v16M20 64h16M92 64h16" stroke="#fff" strokeWidth="8" strokeLinecap="round"/><path d="M34 34l11 11M83 83l11 11M34 94l11-11M83 45l11-11" stroke="#fff" strokeWidth="6" strokeLinecap="round"/></svg> },
  { label: "Grafana", color: "#F46800", angle: 315,
    svg: <svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="56" fill="#F46800"/><path d="M28 88l16-24 16 12 16-32 16 20" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="28" cy="88" r="6" fill="#fff"/><circle cx="44" cy="64" r="6" fill="#fff"/><circle cx="60" cy="76" r="6" fill="#fff"/><circle cx="76" cy="44" r="6" fill="#fff"/><circle cx="92" cy="64" r="6" fill="#fff"/></svg> },
];

export default function TechOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-mono text-accent text-sm tracking-widest mb-2">TECH STACK</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text">Tools in Orbit</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          {/* Orbit container — fixed size, relative positioning */}
          <div className="relative" style={{ width: 360, height: 360 }}>

            {/* Orbit ring 1 */}
            <div className="absolute inset-0 rounded-full border border-accent/15 pointer-events-none" />
            {/* Orbit ring 2 */}
            <div className="absolute rounded-full border border-accent2/10 pointer-events-none"
              style={{ inset: 30 }} />

            {/* Icons — each positioned absolutely around the circle */}
            {ICONS.map((icon) => {
              const rad = (icon.angle * Math.PI) / 180;
              const r = 150; // orbit radius from center
              const cx = 180 + Math.cos(rad) * r; // center is 180,180
              const cy = 180 + Math.sin(rad) * r;
              return (
                <motion.div
                  key={icon.label}
                  className="absolute flex flex-col items-center gap-1"
                  style={{ left: cx - 22, top: cy - 22, width: 44 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + icon.angle / 360, duration: 0.4 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  <div
                    className="rounded-xl p-1.5 transition-all duration-300"
                    style={{
                      width: 44,
                      height: 44,
                      background: `${icon.color}20`,
                      border: `1.5px solid ${icon.color}50`,
                      boxShadow: `0 0 14px ${icon.color}40`,
                    }}
                  >
                    {icon.svg}
                  </div>
                  <span
                    className="font-mono text-center leading-none"
                    style={{ fontSize: 9, color: icon.color, whiteSpace: "nowrap" }}
                  >
                    {icon.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Rotating dashed ring animation */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: "1px dashed rgba(0,212,255,0.12)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Center hub */}
            <div
              className="absolute flex flex-col items-center justify-center rounded-full glass border border-accent/40 glow-accent"
              style={{ width: 80, height: 80, left: 140, top: 140 }}
            >
              <span className="text-2xl">☁️</span>
              <span className="font-mono text-accent text-xs">DevOps</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
