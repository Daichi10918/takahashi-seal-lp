"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
  format?: "comma";
  className?: string;
}

export function CountUp({
  to,
  suffix,
  duration = 1.6,
  format,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || prefersReducedMotion) return;
    motionValue.set(to);
  }, [inView, to, motionValue, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  const value = prefersReducedMotion ? to : display;
  const formatted = format === "comma" ? value.toLocaleString("ja-JP") : value;

  return (
    <span ref={ref} className={className} aria-hidden="true">
      {formatted}
      {suffix}
    </span>
  );
}
