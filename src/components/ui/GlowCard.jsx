import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GlowCard({ children, className = "", hoverScale = 1.015 }) {
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateInteraction = () => setInteractive(mediaQuery.matches);

    updateInteraction();
    mediaQuery.addEventListener("change", updateInteraction);

    return () => mediaQuery.removeEventListener("change", updateInteraction);
  }, []);

  const handleMove = (event) => {
    if (!interactive) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    event.currentTarget.style.setProperty("--glow-x", `${x}%`);
    event.currentTarget.style.setProperty("--glow-y", `${y}%`);
  };

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl ${className}`}
      onMouseMove={interactive ? handleMove : undefined}
      whileHover={interactive ? { scale: hoverScale, y: -4 } : undefined}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundImage: interactive
          ? "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,255,255,0.12), transparent 35%)"
          : undefined,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] bg-[length:200%_100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />
      {children}
    </motion.div>
  );
}
