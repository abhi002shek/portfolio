"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function SkillsSection() {
  const { skills, targetRoles, certifications, education } = resumeData;

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm tracking-widest mb-3">05 / SKILLS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            My Technical Stack
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.01 }}
              className="glass rounded-2xl p-5 border border-border/60 hover:border-accent/20 transition-all duration-300"
            >
              <p className="font-display font-semibold text-accent text-sm mb-3 tracking-wide">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span key={j} className="text-xs text-subtle bg-surface/60 border border-border/40 rounded-lg px-2.5 py-1.5 leading-relaxed">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target roles + certs side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Target roles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 border border-border/60"
          >
            <p className="font-display font-semibold text-accent2 text-sm mb-4 tracking-wide uppercase">
              Roles I'm Targeting
            </p>
            <div className="space-y-2">
              {targetRoles.map((role, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-subtle">
                  <span className="text-accent2">▸</span>
                  {role}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education + certs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Education */}
            <div className="glass rounded-2xl p-5 border border-border/60">
              <p className="font-display font-semibold text-gold text-sm mb-3 tracking-wide uppercase">
                Education
              </p>
              {education.map((ed, i) => (
                <div key={i}>
                  <p className="font-semibold text-text text-sm">{ed.degree}</p>
                  <p className="text-xs text-muted mt-0.5">{ed.institution} · {ed.location} · {ed.dates}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-5 border border-border/60">
              <p className="font-display font-semibold text-gold text-sm mb-3 tracking-wide uppercase">
                Certifications
              </p>
              <div className="space-y-2.5">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">◆</span>
                    <div>
                      <p className="text-sm text-text font-medium leading-snug">{cert.name}</p>
                      <p className="text-xs text-muted mt-0.5">{cert.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
