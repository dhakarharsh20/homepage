'use client';

import { motion } from 'framer-motion';
import { FadeUp, RevealText } from '@/components/animations';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  {
    number: '01',
    label: 'Sense',
    title: 'Temperature Sensing Solutions',
    description: 'From -200°C to 2300°C — thermocouples, RTDs, pyrometers, thermal imagers, and calibration services engineered for extreme accuracy.',
  },
  {
    number: '02',
    label: 'Heat',
    title: 'Electrical Heating Solutions',
    description: 'Complete heating systems — immersion heaters, process heaters, furnaces, and custom heating skid systems for demanding industrial applications.',
  },
  {
    number: '03',
    label: 'Connect',
    title: 'Specialised Cables',
    description: 'LV power, control, instrumentation, thermocouple, RTD, heat trace, and MIMS cables — designed for critical connectivity in harsh environments.',
  },
];

export default function EngineeringStory() {
  return (
    <section className="bg-bg-warm section-padding overflow-hidden" id="engineering" aria-label="Engineering capabilities">
      <div className="container-wide">
        <FadeUp>
          <span className="text-micro text-text-muted">Engineering Depth</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-heading mt-6 max-w-4xl">
            Customised thermal engineering for critical processes
          </h2>
        </FadeUp>

        {/* Blueprint grid */}
        <div className="mt-20 relative">
          {/* Technical grid background */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="eng-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#eng-grid)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.number}
                className="relative p-8 md:p-10 border-l border-rule first:border-l-0 md:first:border-l"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: easeOutExpo }}
              >
                {/* Large ghost number */}
                <span className="text-text-primary/[0.04] block leading-none" style={{ fontSize: 'clamp(80px, 10vw, 140px)', fontWeight: 200 }}>
                  {cap.number}
                </span>

                {/* Measurement line */}
                <div className="flex items-center gap-3 mt-4 mb-6">
                  <div className="w-8 h-[1px] bg-accent-red" />
                  <span className="text-micro text-accent-red">{cap.label}</span>
                </div>

                <h3 className="text-[20px] font-light text-text-primary leading-tight">
                  {cap.title}
                </h3>

                <p className="mt-4 text-[14px] text-text-muted leading-relaxed">
                  {cap.description}
                </p>

                {/* Dimension marks - engineering aesthetic */}
                <div className="absolute top-4 right-4 flex items-center gap-1 opacity-10">
                  <div className="w-3 h-[1px] bg-current" />
                  <span className="text-[8px] font-mono">DIM</span>
                  <div className="w-3 h-[1px] bg-current" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting line */}
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 pointer-events-none"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeOutExpo }}
            style={{ transformOrigin: 'left', background: 'linear-gradient(90deg, transparent, var(--color-accent-red), transparent)', opacity: 0.15 }}
          />
        </div>

        {/* Product images row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          <motion.div
            className="aspect-[4/3] overflow-hidden"
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOutExpo }}
          >
            <img src="/images/products/contact-sensing.jpeg" alt="Temperature sensing equipment" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            className="aspect-[4/3] overflow-hidden"
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: easeOutExpo }}
          >
            <img src="/images/products/electric-heating.jpeg" alt="Electrical heating solutions" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            className="aspect-[4/3] overflow-hidden hidden md:block"
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: easeOutExpo }}
          >
            <img src="/images/products/lab-furnace.jpeg" alt="Industrial furnace solutions" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
