"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Azure Horizon",
    description: "A project management dashboard with real-time collaboration.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    link: "https://azure-horizon-pm2d.vercel.app/",
  },
  {
    title: "Moku",
    description: "A clean, responsive web experience built from scratch.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://jaywon111.github.io/Moku/",
  },
  {
    title: "Project Three",
    description: "A placeholder for your next project. Add details here.",
    tags: ["Coming Soon"],
    link: "#",
  },
  {
    title: "Project Four",
    description: "Another placeholder. Replace this with your work.",
    tags: ["Coming Soon"],
    link: "#",
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="py-24 px-8 md:px-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">Selected Work</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 border border-white/10 rounded-2xl hover:border-white/30 transition-all bg-white/5"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-white transition-colors">{project.title}</h3>
                <ExternalLink size={18} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
