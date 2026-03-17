"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Shield, TrendingDown, Zap, Layers, BellOff, BookOpen } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  "shield-check": <Shield size={22} />,
  "trending-down": <TrendingDown size={22} />,
  "zap": <Zap size={22} />,
  "layers": <Layers size={22} />,
  "bell-off": <BellOff size={22} />,
  "book-open": <BookOpen size={22} />,
};

const TYPE_COLORS: Record<string, { chip: string; bg: string; border: string; icon: string }> = {
  security:       { chip: "chip-gold",   bg: "rgba(240,165,0,0.05)",   border: "rgba(240,165,0,0.2)",   icon: "#F0A500" },
  reliability:    { chip: "chip",        bg: "rgba(0,212,255,0.05)",   border: "rgba(0,212,255,0.2)",   icon: "#00D4FF" },
  automation:     { chip: "chip-purple", bg: "rgba(123,97,255,0.05)",  border: "rgba(123,97,255,0.2)",  icon: "#7B61FF" },
  infrastructure: { chip: "chip",        bg: "rgba(0,212,255,0.05)",   border: "rgba(0,212,255,0.15)",  icon: "#00D4FF" },
  leadership:     { chip: "chip-gold",   bg: "rgba(240,165,0,0.05)",   border: "rgba(240,165,0,0.15)",  icon: "#F0A500" },
};

export default function AchievementsSection() {
  const { achievements } = resumeData;

  return (
    <section id="achievements" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm tracking-widest mb-3">03 / ACHIEVEMENTS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            What I've Delivered
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const colors = TYPE_COLORS[item.type] || TYPE_COLORS.reliability;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative group rounded-2xl p-6 transition-all duration-300 cursor-default"
                style={{
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {/* Spotlight hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${colors.border} 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${colors.border}`, color: colors.icon }}
                >
                  {ICON_MAP[item.icon]}
                </div>

                {/* Type badge */}
                <span className={`chip ${colors.chip} mb-3 capitalize`}>
                  {item.type}
                </span>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-text mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-subtle leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
