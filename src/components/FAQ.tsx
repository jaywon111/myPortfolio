"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What is your tech stack?", answer: "React, Next.js, Node.js, TypeScript, PostgreSQL, and Tailwind CSS. I also work with Three.js for 3D web experiences." },
  { question: "Are you available for freelance?", answer: "Yes, I'm open to select freelance projects. Reach out with your idea and timeline." },
  { question: "Are you open to full-time roles?", answer: "Yes, I'm open to full-time opportunities, particularly remote or hybrid roles." },
  { question: "Where are you based?", answer: "I'm based in Nigeria but work with clients and teams globally." },
  { question: "Do you do UI/UX design?", answer: "Yes. I design as well as develop, so I can take a project from wireframe to deployed product." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-8 md:px-24 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400">{faq.answer}</div>
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
