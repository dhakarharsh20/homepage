'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pillItems = [
  {
    id: 'contact-sensing',
    title: 'Contact Sensing',
    subtitle: 'Thermocouples & RTDs',
    src: 'Contact Sensing.jpeg',
    href: 'https://tempsens.com/ct/temperature-sensing-solutions/',
  },
  {
    id: 'non-contact-sensing',
    title: 'Non Contact Sensing',
    subtitle: 'Pyrometers & Imagers',
    src: 'Non Contact Sensing.jpeg',
    href: 'https://tempsens.com/ct/temperature-sensing-solutions/pyrometers/',
  },
  {
    id: 'electric-heating',
    title: 'Electrical Heating Solutions',
    subtitle: 'Industrial Heaters',
    src: 'Electric Heating Solutions.jpeg',
    href: 'https://tempsens.com/ct/industrial-heaters/',
  },
  {
    id: 'lab-furnace',
    title: 'Lab & Ind Furnace',
    subtitle: 'Process & Lab Furnaces',
    src: 'Lab & Ind Furnace.jpeg',
    href: 'https://tempsens.com/ct/industrial-heaters/industrial-and-rd-furnaces/',
  },
  {
    id: 'temp-calibrator',
    title: 'Temp Calibrator',
    subtitle: 'Calibration Sources',
    src: 'temperature calibrator.jpeg',
    href: 'https://tempsens.com/ct/temperature-sensing-solutions/temperature-calibration-and-services/',
  },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen flex items-end bg-bg-dark overflow-hidden pt-28 pb-12 md:pb-16"
      aria-label="Hero"
      id="hero"
    >
      {/* Background Main Thermal Image — 100% Brightness, No Dimming */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/images/hero/thermal.png"
          alt="Tempsens Thermal Engineering Background"
          className="w-full h-full object-cover object-left opacity-100"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        />
      </div>

      <div className="relative z-10 max-w-[1720px] mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          
          {/* Bottom Left Corner — Only Buttons, No Text */}
          <motion.div
            className="flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
          >
            <a
              href="https://tempsens.com/contact-us/"
              className="btn-dark py-3.5 px-8 text-[12px] shadow-2xl backdrop-blur-md bg-white/95 text-bg-dark hover:bg-accent-gold hover:text-bg-dark"
            >
              Request Quote
            </a>
            <a
              href="https://tempsens.com/ct/temperature-sensing-solutions/"
              className="px-6 py-3.5 border border-white/40 bg-black/40 backdrop-blur-md text-white text-[12px] font-medium uppercase tracking-wider hover:border-white hover:bg-black/60 transition-all duration-300 shadow-2xl"
            >
              Explore Catalogue →
            </a>
          </motion.div>

          {/* Right Side — Compact Pill Card Stack */}
          <div className="w-full md:w-auto flex justify-end ml-auto">
            <motion.div
              className="flex gap-2 md:gap-3 h-[520px] md:h-[calc(100vh-180px)] max-h-[800px] w-full md:w-[380px] lg:w-[420px] xl:w-[460px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: easeOutExpo }}
            >
              {pillItems.map((item, index) => {
                const isHovered = hoveredIndex === index;
                const hasAnyHover = hoveredIndex !== null;

                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className="relative overflow-hidden rounded-[28px] md:rounded-[32px] cursor-pointer group border border-white/20 shadow-2xl block backdrop-blur-md"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    animate={{
                      flex: isHovered ? 3 : hasAnyHover ? 0.6 : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ minWidth: 0 }}
                  >
                    {/* Card Image */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:object-contain group-hover:p-1.5 transition-all duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/85 group-hover:via-black/30 transition-colors duration-500" />

                    {/* Content inside Pill Card */}
                    <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between z-10">
                      {/* Top Pill badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Bottom Title & Subtitle */}
                      <div>
                        <AnimatePresence mode="wait">
                          {isHovered ? (
                            <motion.div
                              key="expanded"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.3, ease: easeOutExpo }}
                            >
                              <span className="text-micro text-accent-gold block mb-0.5">{item.subtitle}</span>
                              <h3 className="text-white text-base md:text-lg font-light leading-snug">
                                {item.title}
                              </h3>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="collapsed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="w-full flex justify-center pb-2"
                            >
                              <span
                                className="text-white/90 text-[11px] font-medium tracking-wider uppercase whitespace-nowrap drop-shadow"
                                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                              >
                                {item.title}
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
          </div>

        </div>
      </div>
    </section>
  );
}
