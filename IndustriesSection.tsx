'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { industriesCopy } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const industriesItems = [
  { number: '01', name: 'Steel', href: 'https://tempsens.com/industry/steel-industry/', desc: 'High-temperature thermal measurement and process monitoring through steelmaking conditions.', image: 'Thermal.png' },
  { number: '02', name: 'Cement', href: 'https://tempsens.com/industry/cement-industry/', desc: 'Rotary kiln thermal profiling and energy-intensive process monitoring.', image: 'Lab & Ind Furnace.jpeg' },
  { number: '03', name: 'Petrochemical', href: 'https://tempsens.com/industry/oil-gas/', desc: 'Hazardous area temperature sensing and specialized process heaters.', image: 'Electric Heating Solutions.jpeg' },
  { number: '04', name: 'Power', href: 'https://tempsens.com/industry/power-industry/', desc: 'Critical thermal sensing across power generation and thermal plant operations.', image: 'Contact Sensing.jpeg' },
  { number: '05', name: 'Nuclear & Defence', href: 'https://tempsens.com/industry/defence/', desc: 'Extreme-environment sensors for aerospace and nuclear reactors.', image: 'Non Contact Sensing.jpeg' },
  { number: '06', name: 'Glass', href: 'https://tempsens.com/industry/glass-industry/', desc: 'Non-contact infrared pyrometry and molten glass tank monitoring.', image: 'Non Contact Sensing.jpeg' },
  { number: '07', name: 'Plastic & Pharma', href: 'https://tempsens.com/industry/pharmaceutical-industry/', desc: 'Precise thermal control and calibration for hygienic and polymer processing.', image: 'temperature calibrator.jpeg' },
];

export default function IndustriesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section className="section-padding bg-bg-dark text-text-light overflow-hidden" id="industries-section" aria-label="Industries Stack">
      <div className="container-wide">
        <div>
          <span className="text-micro text-accent-gold">BUILT FOR REAL PROCESSES</span>
          <h2 className="text-heading mt-4 text-white max-w-4xl">
            Different industries. Different temperatures. One demand for precision.
          </h2>
          <p className="mt-6 text-body text-text-muted/70 max-w-3xl leading-relaxed font-light mb-16">
            From extreme heat in steel and glass to controlled environments in pharmaceuticals and research, thermal conditions change from process to process.
          </p>
        </div>

        {/* Horizontal Accordion Stack */}
        <motion.div
          className="flex gap-1 h-[480px] md:h-[560px] w-full overflow-hidden border-y border-white/10 py-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          {industriesItems.map((ind, i) => {
            const isHovered = hoveredIdx === i;
            const hasHover = hoveredIdx !== null;

            return (
              <motion.a
                key={ind.name}
                href={ind.href}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(0)}
                className="relative overflow-hidden cursor-pointer group border-r border-white/10 bg-bg-charcoal block first:border-l"
                animate={{
                  flex: isHovered ? 4.5 : hasHover ? 0.6 : 1,
                }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                style={{ minWidth: 0 }}
              >
                {/* Background Image */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 transition-colors duration-500" />

                {/* Content Inside Strip Panel */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-micro font-mono text-accent-gold bg-black/60 px-2.5 py-1 rounded border border-white/10">
                      {ind.number}
                    </span>
                  </div>

                  {/* Expanded vs Collapsed Content */}
                  <div>
                    <AnimatePresence mode="wait">
                      {isHovered ? (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.35, ease: easeOutExpo }}
                        >
                          <span className="text-micro text-accent-gold block mb-1 font-bold">BUILT FOR REAL PROCESSES</span>
                          <h3 className="text-white text-2xl md:text-3xl font-light tracking-tight">
                            {ind.name}
                          </h3>
                          <p className="mt-3 text-xs md:text-sm text-text-muted/80 leading-relaxed max-w-md">
                            {ind.desc}
                          </p>
                          <span className="mt-6 inline-flex items-center gap-2 text-micro text-accent-gold font-bold">
                            Explore {ind.name} Solutions →
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-full flex justify-center pb-6"
                        >
                          <span
                            className="text-white/80 text-[12px] font-mono tracking-wider uppercase whitespace-nowrap drop-shadow"
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                          >
                            {ind.number} — {ind.name}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <a href="https://tempsens.com/industry/steel-industry/" className="btn-dark">
            Explore industries →
          </a>
        </div>
      </div>
    </section>
  );
}
