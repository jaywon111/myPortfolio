"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What does your tech stack look like?",
    a: "React, Next.js, TypeScript, Node.js, PostgreSQL, and Tailwind CSS. I also work with Three.js when a project calls for 3D on the web.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes. I take on select freelance projects. Reach out with your idea and timeline and I'll let you know if it's a good fit.",
  },
  {
    q: "Are you open to full-time roles?",
    a: "Yes, particularly remote or hybrid roles where the work is interesting and the team cares about craft.",
  },
  {
    q: "Where are you based?",
    a: "Nigeria. I work with clients and teams globally and I'm comfortable across time zones.",
  },
  {
    q: "Do you design as well as develop?",
    a: "I do. I can take a project from wireframe to deployed product, or slot into an existing design system without friction.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-8 md:px-24 bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">How I Work</p>
          <h2 className="font-syne text-4xl md:text-5xl font-bold">
            A few things worth knowing.
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-lg md:text-xl pr-8 group-hover:text-white transition-colors">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
                >
                  <Plus size={16} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-400 leading-relaxed pr-12">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
