"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useVideoTexture, Environment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

function VideoPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useVideoTexture("/hero-video.mp4", {
    loop: true,
    muted: true,
    autoplay: true,
  });

  useFrame((state) => {
    if (meshRef.current) {
      const { x, y } = state.mouse;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, (x * Math.PI) / 20, 0.05);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, (-y * Math.PI) / 20, 0.05);
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 0.2, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 0.2, 0.05);
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <planeGeometry args={[16, 9]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Environment preset="city" />
          <VideoPlane />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 30 : 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Welcome to my portfolio.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
            Jay — Fullstack Developer.
          </p>
          
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors text-sm tracking-widest uppercase"
          >
            View Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
