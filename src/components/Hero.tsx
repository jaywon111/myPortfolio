"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 40 : 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
            Portfolio 2025
          </p>
          <h1 className="font-syne text-5xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
            Welcome to <br /> my portfolio.
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-light mb-12 max-w-lg">
            Jay. Fullstack Developer building clean, performant digital products.
          </p>

          <MagneticButton
            href="#work"
            className="inline-block px-8 py-4 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition-colors text-xs tracking-[0.25em] uppercase"
          >
            View Work
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
