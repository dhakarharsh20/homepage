'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function FadeUp({ children, delay = 0, duration = 0.8, className = '', y = 40 }: { children: ReactNode; delay?: number; duration?: number; className?: string; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div style={{ overflow: 'hidden' }} className={className}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, delay, ease: easeOutExpo }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function RevealImage({ src, alt, className = '', delay = 0 }: { src: string; alt: string; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      style={{ overflow: 'hidden' }}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, delay, ease: easeOutExpo }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay, ease: easeOutExpo }}
      />
    </motion.div>
  );
}

/* ─── Rolling Number Animation (Odometer / Slot-Machine Digit Roll Effect) ─── */
interface RollingNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function RollingNumber({ value, suffix = '', prefix = '', className = '' }: RollingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toLocaleString('en-US');
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return (
    <span ref={ref} className={`inline-block font-mono tracking-tight font-light ${className}`}>
      {prefix}0{suffix}
    </span>
  );
}

export function AnimatedNumber(props: RollingNumberProps) {
  return <RollingNumber {...props} />;
}
