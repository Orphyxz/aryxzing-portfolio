import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundFX() {
  const prefersReducedMotion = useReducedMotion();
  const [interactiveSpotlight, setInteractiveSpotlight] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 120 });

  useEffect(() => {
    if (prefersReducedMotion) {
      setInteractiveSpotlight(false);
      return undefined;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateInteraction = () => setInteractiveSpotlight(mediaQuery.matches);

    updateInteraction();
    mediaQuery.addEventListener("change", updateInteraction);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener("change", updateInteraction);
    }

    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      mediaQuery.removeEventListener("change", updateInteraction);
      window.removeEventListener("pointermove", handleMove);
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${smoothX}px ${smoothY}px, rgba(93,210,255,0.11), transparent 65%)`;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {interactiveSpotlight ? (
        <motion.div className="absolute inset-0 hidden opacity-70 lg:block" style={{ backgroundImage: spotlight }} />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(133,119,255,0.12),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(246,185,117,0.1),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(93,210,255,0.08),transparent_20%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:78px_78px] opacity-[0.04]" />
      <div className="noise-layer absolute inset-0 opacity-[0.06] md:opacity-[0.1]" />
      <motion.div
        className="absolute -left-24 top-24 hidden h-64 w-64 rounded-full bg-glow-violet/16 blur-3xl lg:block"
        animate={prefersReducedMotion ? undefined : { y: [0, 28, -12, 0], x: [0, 24, 6, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-5rem] top-[26rem] hidden h-72 w-72 rounded-full bg-glow-cyan/8 blur-3xl lg:block"
        animate={prefersReducedMotion ? undefined : { y: [0, -36, 12, 0], x: [0, -30, -14, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
