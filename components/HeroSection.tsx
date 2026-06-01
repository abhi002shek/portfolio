"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
  item: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } } },
};

export default function HeroSection() {
  const { basics, topImpact } = resumeData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 px-6"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT — main content */}
          <div className="max-w-2xl">
          {/* Status badge */}
          <motion.div variants={stagger.item} className="mb-8">
            <span className="inline-flex items-center gap-2 chip-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Available immediately · Hyderabad, India
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={stagger.item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-4 tracking-tight"
          >
            <span className="text-text">{basics.name.split(" ")[0]} </span>
            <span className="gradient-text text-glow">{basics.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={stagger.item}
            className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-subtle mb-6 tracking-wide"
          >
            {basics.title}{" "}
            <span className="text-accent2">·</span>{" "}
            {basics.subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={stagger.item}
            className="text-lg md:text-xl text-muted font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-accent/40 pl-5 italic"
          >
            "{basics.tagline}"
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              View Experience
              <ArrowDown size={16} />
            </button>
            <a
              href="mailto:itsabhishek1531@gmail.com"
              className="flex items-center gap-2 px-7 py-3.5 border border-accent/30 text-accent rounded-xl hover:bg-accent/10 transition-all duration-200 font-medium"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={stagger.item} className="flex items-center gap-4 mb-16">
            <a
              href={basics.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={basics.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <div className="flex items-center gap-2 text-muted text-sm">
              <MapPin size={14} />
              <span>{basics.location}</span>
            </div>
          </motion.div>

          {/* Top Impact strip */}
          <motion.div
            variants={stagger.item}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {topImpact.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass rounded-2xl p-5 border border-border/60 glow-accent-hover transition-all duration-300"
              >
                <div className="text-2xl font-display font-bold gradient-text mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-text mb-1">{item.label}</div>
                <div className="text-xs text-muted leading-relaxed">{item.context}</div>
              </motion.div>
            ))}
          </motion.div>
          </div>

          {/* RIGHT — YAML decorative card */}
          <motion.div
            variants={stagger.item}
            className="hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-bright rounded-2xl border border-accent/20 overflow-hidden shadow-2xl"
              style={{ boxShadow: "0 0 60px rgba(0,212,255,0.12), 0 0 120px rgba(123,97,255,0.06)" }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-surface/50">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-muted">infrastructure.yaml</span>
              </div>
              {/* YAML content */}
              <div className="p-6 font-mono text-sm leading-7">
                <div><span className="text-accent2">apiVersion</span><span className="text-subtle">: </span><span className="text-gold">v1</span></div>
                <div><span className="text-accent2">kind</span><span className="text-subtle">: </span><span className="text-green-400">Engineer</span></div>
                <div><span className="text-accent2">metadata</span><span className="text-subtle">:</span></div>
                <div className="pl-4"><span className="text-accent">name</span><span className="text-subtle">: </span><span className="text-text">abhishek-singh</span></div>
                <div className="pl-4"><span className="text-accent">namespace</span><span className="text-subtle">: </span><span className="text-text">devops</span></div>
                <div><span className="text-accent2">spec</span><span className="text-subtle">:</span></div>
                <div className="pl-4"><span className="text-accent">experience</span><span className="text-subtle">: </span><span className="text-gold">3y</span></div>
                <div className="pl-4"><span className="text-accent">location</span><span className="text-subtle">: </span><span className="text-text">Hyderabad, India</span></div>
                <div className="pl-4"><span className="text-accent">skills</span><span className="text-subtle">:</span></div>
                {["kubernetes", "terraform", "aws", "python", "ci-cd"].map((s) => (
                  <div key={s} className="pl-8"><span className="text-subtle">- </span><span className="text-green-400">{s}</span></div>
                ))}
                <div className="pl-4"><span className="text-accent">traits</span><span className="text-subtle">:</span></div>
                {["automation-obsessed", "uptime-defender", "cost-optimizer"].map((t) => (
                  <div key={t} className="pl-8"><span className="text-subtle">- </span><span className="text-accent2">{t}</span></div>
                ))}
                <div className="pl-4 flex items-center gap-1">
                  <span className="text-accent">status</span><span className="text-subtle">: </span>
                  <span className="text-green-400">available</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-accent ml-1 rounded-sm"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
}
