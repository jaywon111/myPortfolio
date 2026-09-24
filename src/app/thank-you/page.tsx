"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-green-400" />
        </div>
        <h1 className="font-syne text-4xl font-bold mb-4">Message Received</h1>
        <p className="text-gray-400 mb-8">
          Thanks for reaching out. I'll get back to you as soon as I can.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 border border-white/20 rounded-full text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
