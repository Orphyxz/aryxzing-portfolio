import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}) {
  const [interactive, setInteractive] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.5 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateInteraction = () => setInteractive(mediaQuery.matches);

    updateInteraction();
    mediaQuery.addEventListener("change", updateInteraction);

    return () => mediaQuery.removeEventListener("change", updateInteraction);
  }, []);

  const base =
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300";
  const variants = {
    primary:
      "border-glow-amber/30 bg-[linear-gradient(135deg,rgba(246,185,117,0.22),rgba(255,255,255,0.08))] text-white shadow-[0_15px_35px_rgba(246,185,117,0.15)] hover:border-glow-amber/50",
    secondary:
      "border-white/12 bg-white/[0.04] text-white/85 hover:border-white/20 hover:bg-white/[0.08]",
  };

  const handleMove = (event) => {
    if (!interactive) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (bounds.left + bounds.width / 2);
    const offsetY = event.clientY - (bounds.top + bounds.height / 2);
    x.set(offsetX * 0.16);
    y.set(offsetY * 0.16);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    className: `${base} ${variants[variant]} ${className}`,
    style: interactive ? { x: springX, y: springY } : undefined,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: { scale: 0.97 },
    whileHover: interactive ? { scale: 1.02 } : undefined,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  };

  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...sharedProps}>
      {children}
    </motion.button>
  );
}
