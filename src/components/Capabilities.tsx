"use client";
import { motion } from "framer-motion";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Three.js",
  "PostgreSQL",
  "Supabase",
  "Framer Motion",
  "Vercel",
  "MongoDB",
  "Prisma",
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 bg-[#0a0a0a] overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-8 md:px-24 mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">Capabilities</p>
        <h2 className="font-syne text-4xl md:text-5xl font-bold">The toolkit.</h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          The tools I reach for when building for the web.
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...tech, ...tech].map((item, i) => (
            <span
              key={i}
              className="font-syne text-5xl md:text-7xl font-bold text-white/10 hover:text-white/60 transition-colors duration-500"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
