"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectSection() {
  const { projects } = resumeData;
  const project = projects[0];

  return (
    <section id="project" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm tracking-widest mb-3">04 / PROJECT</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            What I've Built
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl border border-border/60 overflow-hidden glow-accent-hover transition-all duration-500"
        >
          {/* Top bar */}
          <div className="border-b border-border/40 px-8 py-5 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="font-mono text-xs text-muted">github.com/abhi002shek/3-tier-devsecops-project</span>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-subtle mb-6">{project.subtitle}</p>

                {/* Stack chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((s, i) => (
                    <span
                      key={i}
                      className={i % 3 === 0 ? "chip" : i % 3 === 1 ? "chip chip-purple" : "chip chip-gold"}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-accent/30 text-accent rounded-xl hover:bg-accent/10 transition-all duration-200 text-sm font-medium"
                  >
                    <Github size={15} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Right — bullets */}
              <div>
                <ul className="space-y-4">
                  {project.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      className="flex gap-3 text-sm text-subtle leading-relaxed"
                    >
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
