"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, MessageCircle, Twitter, Send } from "lucide-react";

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/jaywon111", label: "GitHub" },
  { icon: <MessageCircle size={18} />, href: "https://wa.me/message/GV3KVX743I2FC1", label: "WhatsApp" },
  { icon: <Twitter size={18} />, href: "https://x.com/catrotangold", label: "X" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/xaenjrzz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Something went wrong. Please try again.");
        setSending(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-8 md:px-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">Contact</p>
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-6">
            Let's build something.
          </h2>
          <p className="text-gray-400 mb-10 max-w-md">
            Have a project, a role, or an idea worth talking about? Drop a line.
          </p>

          <div className="space-y-4">
            <a href="mailto:jayjaywon01@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                <Mail size={16} />
              </span>
              jayjaywon01@gmail.com
            </a>
            <a href="tel:+2348163324132" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                <Phone size={16} />
              </span>
              +234 816 332 4132
            </a>
          </div>

          <div className="mt-10 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-white/15 py-3 text-white focus:outline-none focus:border-white transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-white/15 py-3 text-white focus:outline-none focus:border-white transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-white/15 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-xs tracking-[0.25em] uppercase hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            <Send size={14} />
            {sending ? "Sending" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
