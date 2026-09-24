"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, MessageCircle, Twitter, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // REPLACE "your-form-id" WITH YOUR ACTUAL FORMSPREE ID
    const response = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      window.location.href = "/thank-you";
    } else {
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/jaywon111", label: "GitHub" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/message/GV3KVX743I2FC1", label: "WhatsApp" },
    { icon: <Twitter size={20} />, href: "https://x.com/catrotangold", label: "Twitter/X" },
  ];

  return (
    <section id="contact" className="py-24 px-8 md:px-24 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-8">
            Have a project in mind? Fill out the form and I'll get back to you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-8">Direct Contact</h3>
          <div className="space-y-6">
            <a href="mailto:jayjaywon01@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                <Mail size={20} />
              </div>
              <span>jayjaywon01@gmail.com</span>
            </a>
            <a href="tel:+2348163324132" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                <Phone size={20} />
              </div>
              <span>+234 816 332 4132</span>
            </a>
          </div>
          
          <div className="mt-12">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Socials</h4>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
