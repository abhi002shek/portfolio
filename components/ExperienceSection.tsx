"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/data";
import { ChevronDown, Building2, Calendar, MapPin } from "lucide-react";

function useScrollReveal() {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  };
}

export default function ExperienceSection() {
  const { experience } = resumeData;
  const [openIndex, setOpenIndex] = useState<number>(0);
  const reveal = useScrollReveal();

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...reveal} className="mb-16">
          <p className="font-mono text-accent text-sm tracking-widest mb-3">02 / EXPERIENCE</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            Where I've Built
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-4">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.1 }}
            >
              <div
                className={`glass rounded-2xl border transition-all duration-300 cursor-pointer ${
                  openIndex === i
                    ? "border-accent/30 glow-accent"
                    : "border-border/60 hover:border-border"
                }`}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                {/* Header row */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Company */}
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                          <Building2 size={16} className="text-accent" />
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-text">
                          {exp.company}
                        </h3>
                      </div>

                      {/* Role */}
                      <p className="font-semibold text-accent text-base mb-2 ml-12">
                        {exp.role}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 ml-12">
                        <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                          <Calendar size={11} />
                          {exp.dates}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                        <span className="chip">{exp.duration}</span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted mt-1"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>

                  {/* Highlight chips — always visible */}
                  <div className="flex flex-wrap gap-2 mt-4 ml-12">
                    {exp.highlights.map((h, j) => (
                      <span key={j} className={j % 2 === 0 ? "chip" : "chip chip-purple"}>
                        {h.label}: {h.detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded bullets */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border/40 px-6 md:px-8 py-6">
                        <p className="font-mono text-xs text-muted tracking-widest mb-4 uppercase">
                          {exp.vendor}
                        </p>
                        <ul className="space-y-3">
                          {exp.bullets.map((b, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.04, duration: 0.4 }}
                              className="flex gap-3 text-sm text-subtle leading-relaxed"
                            >
                              <span className="text-accent mt-1 flex-shrink-0">▸</span>
                              <span>{b}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
