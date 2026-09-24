"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 200);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#faq", label: "How I Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <Link href="/" className="font-syne text-lg font-bold tracking-tight">
          Jay.
        </Link>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-block text-sm px-5 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
        >
          Let's Talk
        </a>
        <a
          href="#contact"
          className="md:hidden text-xs px-4 py-2 bg-white text-black font-medium rounded-full"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
