"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ORBIT_ITEMS = [
  {
    label: "Kubernetes",
    color: "#326CE5",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2.5a1.5 1.5 0 00-.66.154L5.34 7.346A1.5 1.5 0 004.5 8.69v14.62a1.5 1.5 0 00.84 1.344l10 4.692a1.5 1.5 0 001.32 0l10-4.692a1.5 1.5 0 00.84-1.344V8.69a1.5 1.5 0 00-.84-1.344L16.66 2.654A1.5 1.5 0 0016 2.5z" fill="#326CE5"/>
        <path d="M16 7l-1.2 4.4h-4.6l3.7 2.7-1.4 4.3L16 15.7l3.5 2.7-1.4-4.3 3.7-2.7h-4.6L16 7z" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Docker",
    color: "#2496ED",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="13" width="26" height="12" rx="2" fill="#2496ED"/>
        <rect x="5" y="15" width="4" height="4" rx="0.5" fill="white"/>
        <rect x="11" y="15" width="4" height="4" rx="0.5" fill="white"/>
        <rect x="17" y="15" width="4" height="4" rx="0.5" fill="white"/>
        <rect x="11" y="9" width="4" height="4" rx="0.5" fill="#2496ED" stroke="white" strokeWidth="1"/>
        <rect x="17" y="9" width="4" height="4" rx="0.5" fill="#2496ED" stroke="white" strokeWidth="1"/>
        <path d="M25 14c1-1 3-0.5 3 1.5" stroke="white" strokeWidth="1.2" fill="none"/>
        <circle cx="26" cy="12" r="1" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Terraform",
    color: "#7B42BC",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5l7 4v8l-7-4V5z" fill="#7B42BC"/>
        <path d="M20 9l7 4v8l-7-4V9z" fill="#5C4EE5"/>
        <path d="M5 9l7 4v8l-7-4V9z" fill="#4040B2"/>
        <path d="M12 19l7 4v4l-7-4v-4z" fill="#7B42BC"/>
      </svg>
    ),
  },
  {
    label: "AWS",
    color: "#FF9900",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 20.5c-3 0-5-1.5-5-4s2-4 5-4c.3 0 .6 0 .9.05C10.4 10.2 12.9 8.5 16 8.5c4 0 7 3 7 6.5 0 .2 0 .4-.02.6C24.7 16 26 17.3 26 19c0 1.9-1.5 3.5-3.5 3.5H9z" fill="#FF9900"/>
        <path d="M8 26l2-3h12l2 3H8z" fill="#FF9900" opacity="0.6"/>
      </svg>
    ),
  },
  {
    label: "Python",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3C10 3 10.5 5.5 10.5 5.5V8h11v1H8S4 8.5 4 14s3.5 5.5 3.5 5.5H9.5v-2.5S9.3 14 12 14h8c2.5 0 4-1.5 4-4V7c0-2.5-2-4-8-4z" fill="#3776AB"/>
        <path d="M16 29c6 0 5.5-2.5 5.5-2.5V24h-11v-1h13.5S28 23.5 28 18s-3.5-5.5-3.5-5.5H22.5v2.5S22.7 18 20 18h-8c-2.5 0-4 1.5-4 4v3c0 2.5 2 4 8 4z" fill="#FFD43B"/>
        <circle cx="13" cy="6.5" r="1.2" fill="white"/>
        <circle cx="19" cy="25.5" r="1.2" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Jenkins",
    color: "#D33833",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" fill="#D33833"/>
        <circle cx="16" cy="13" r="6" fill="#F0D6B7"/>
        <circle cx="16" cy="11" r="3" fill="#335061"/>
        <path d="M10 22c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="#F0D6B7"/>
        <rect x="14" y="24" width="4" height="3" rx="1" fill="#335061"/>
      </svg>
    ),
  },
  {
    label: "Prometheus",
    color: "#E6522C",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" fill="#E6522C"/>
        <circle cx="16" cy="16" r="4" fill="white"/>
        <path d="M16 5v4M16 23v4M5 16h4M23 16h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8.5 8.5l2.8 2.8M20.7 20.7l2.8 2.8M8.5 23.5l2.8-2.8M20.7 11.3l2.8-2.8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Grafana",
    color: "#F46800",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" fill="#F46800"/>
        <path d="M8 22l4-6 4 3 4-8 4 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="8" cy="22" r="1.5" fill="white"/>
        <circle cx="12" cy="16" r="1.5" fill="white"/>
        <circle cx="16" cy="19" r="1.5" fill="white"/>
        <circle cx="20" cy="11" r="1.5" fill="white"/>
        <circle cx="24" cy="16" r="1.5" fill="white"/>
      </svg>
    ),
  },
];

// Split into 2 rings: inner 4, outer 4
const RING1 = ORBIT_ITEMS.slice(0, 4);
const RING2 = ORBIT_ITEMS.slice(4);

function OrbitRing({
  items,
  radius,
  duration,
  iconSize,
  reverse = false,
}: {
  items: typeof ORBIT_ITEMS;
  radius: number;
  duration: number;
  iconSize: number;
  reverse?: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateY: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const z = Math.sin(rad) * radius;
        return (
          <motion.div
            key={item.label}
            className="absolute flex flex-col items-center gap-1"
            style={{
              width: iconSize,
              height: iconSize + 20,
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px)`,
            }}
            animate={{ rotateY: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="rounded-xl p-1.5 shadow-lg"
              style={{
                width: iconSize,
                height: iconSize,
                background: `${item.color}18`,
                border: `1px solid ${item.color}40`,
                boxShadow: `0 0 12px ${item.color}30`,
              }}
            >
              {item.svg}
            </div>
            <span
              className="font-mono text-center leading-none"
              style={{ fontSize: 9, color: item.color, opacity: 0.8, whiteSpace: "nowrap" }}
            >
              {item.label}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function TechOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-accent text-sm tracking-widest mb-3">TECH STACK</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text">
            Tools in Orbit
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          {/* 3D scene container */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: 380,
              height: 380,
              perspective: 800,
              perspectiveOrigin: "50% 50%",
            }}
          >
            {/* Orbit ring guides */}
            <div
              className="absolute rounded-full border border-accent/10"
              style={{ width: 220, height: 220, transform: "rotateX(75deg)" }}
            />
            <div
              className="absolute rounded-full border border-accent2/10"
              style={{ width: 340, height: 340, transform: "rotateX(75deg)" }}
            />

            {/* Inner ring */}
            <div
              className="absolute"
              style={{
                width: 220,
                height: 220,
                transformStyle: "preserve-3d",
                transform: "rotateX(75deg)",
              }}
            >
              <OrbitRing items={RING1} radius={110} duration={18} iconSize={36} />
            </div>

            {/* Outer ring */}
            <div
              className="absolute"
              style={{
                width: 340,
                height: 340,
                transformStyle: "preserve-3d",
                transform: "rotateX(75deg)",
              }}
            >
              <OrbitRing items={RING2} radius={170} duration={28} iconSize={32} reverse />
            </div>

            {/* Center hub */}
            <div className="relative z-10 flex flex-col items-center justify-center w-20 h-20 rounded-full glass border border-accent/30 glow-accent">
              <span className="text-2xl">☁️</span>
              <span className="font-mono text-accent text-xs mt-0.5">DevOps</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
