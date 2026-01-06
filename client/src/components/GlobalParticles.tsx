import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GlobalParticles() {
  const [particles, setParticles] = useState<{ id: number; color: string; x: number; y: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const colors = ["#1679bd", "#3CB043", "#FFA500"];
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      color: colors[i % colors.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 rounded-full opacity-20 blur-[1px]"
          style={ {
            backgroundColor: p.color,
            left: `${p.x}%`,
            top: `${p.y}%`,
          } }
          animate={ {
            y: [0, -100, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.3, 0.1],
          } }
          transition={ {
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          } }
        />
      ))}
    </div>
  );
}
