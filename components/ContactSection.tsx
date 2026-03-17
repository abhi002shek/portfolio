"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const { basics } = resumeData;

  return (
    <section id="contact" className="relative py-24 px-6 pb-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm tracking-widest mb-3">06 / CONTACT</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            Let's Work Together
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-subtle mt-6 max-w-xl mx-auto leading-relaxed">
            I'm available immediately and open to DevOps, SRE, and Platform Engineering roles
            in Hyderabad, Bangalore, Noida, or remote. Let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl border border-border/60 p-8 md:p-12 glow-accent"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { icon: <Mail size={18} />, label: "Email", value: basics.email, href: `mailto:${basics.email}` },
              { icon: <Phone size={18} />, label: "Phone", value: basics.phone, href: `tel:${basics.phone}` },
              { icon: <Linkedin size={18} />, label: "LinkedIn", value: "abhishek-singh-2b96961a0", href: basics.links.linkedin },
              { icon: <Github size={18} />, label: "GitHub", value: "abhi002shek", href: basics.links.github },
              { icon: <MapPin size={18} />, label: "Location", value: basics.location, href: undefined },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted font-mono tracking-wide mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-text hover:text-accent transition-colors duration-200 animated-underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-text">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${basics.email}`}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Send size={16} />
              Send Me a Message
            </a>
            <a
              href={basics.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-accent/30 text-accent rounded-xl hover:bg-accent/10 transition-all duration-200 font-medium"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted text-xs font-mono mt-12"
        >
          Abhishek Singh · DevOps & SRE Engineer · Hyderabad, India · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
