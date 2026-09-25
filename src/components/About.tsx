"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-24 bg-[#0a0a0a] text-white relative">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">About</p>
          <h2 className="font-syne text-4xl md:text-5xl font-bold leading-tight">
            Building things that feel effortless.
          </h2>
        </motion.div>

        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          {[
            "I'm Jay, a fullstack developer focused on building clean, performant digital products. I work across the stack, from crafting intuitive interfaces to designing robust backends.",
            "My approach is simple. Understand the problem deeply, then build the simplest solution that works. I care about the details that make software feel effortless.",
            "Whether it's a marketing site, a dashboard, or a full product, I bring the same obsession with speed, clarity, and craft.",
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {line}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-white text-sm border-b border-white/30 pb-1 hover:border-white transition-colors"
            >
              See my work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
