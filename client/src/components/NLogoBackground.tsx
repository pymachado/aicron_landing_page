import { motion } from "framer-motion";

export function NLogoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full preserve-3d"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1679bd" />
            <stop offset="50%" stopColor="#3CB043" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>

        {/* The "N" path structure representing the logo shape */}
        <motion.path
          d="M30 70 V30 L70 70 V30"
          stroke="url(#flowGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating pulses/impulses along the N shape */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r="3"
            fill={i === 0 ? "#1679bd" : i === 1 ? "#3CB043" : "#FFA500"}
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "linear",
            }}
            style={ {
              offsetPath: "path('M30 70 V30 L70 70 V30')",
              filter: "blur(2px)",
            } }
          />
        ))}

        {/* Ambient glow particles */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={`glow-${i}`}
            r={Math.random() * 2 + 1}
            fill="#1679bd"
            initial={{ 
              x: Math.random() * 100, 
              y: Math.random() * 100, 
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * 100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  );
}
