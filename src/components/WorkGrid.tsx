"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import TiltCard from "./TiltCard";

export default function WorkGrid() {
  return (
    <section id="work" className="py-32 px-8 md:px-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">Selected Work</p>
          <h2 className="font-syne text-4xl md:text-5xl font-bold">Things I've built.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard className="h-full">
                <Link
                  href={`/work/${project.slug}`}
                  className="group block h-full p-10 border border-white/10 rounded-3xl hover:border-white/30 bg-white/[0.02] transition-all"
                >
                  <div className="flex items-start justify-between mb-8">
                    <p className="text-xs text-gray-500 tracking-widest uppercase">
                      {project.year}
                    </p>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <h3 className="font-syne text-3xl font-bold mb-3 group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-8">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest px-3 py-1 border border-white/10 rounded-full text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
