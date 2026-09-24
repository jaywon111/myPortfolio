"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-24 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8">About</h2>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I'm Jay, a fullstack developer focused on building clean, performant digital products. 
            I work across the stack — from crafting intuitive interfaces to designing robust backends.
          </p>
          <p>
            My approach is simple: understand the problem deeply, then build the simplest solution that works. 
            I care about the details that make software feel effortless.
          </p>
          <p>
            Check out my <a href="#work" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors">Work</a> or see what I'm currently using in my <a href="#capabilities" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors">Capabilities</a>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
