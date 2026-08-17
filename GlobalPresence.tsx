'use client';

import { motion } from 'framer-motion';
import { FadeUp, AnimatedNumber } from '@/components/animations';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function GlobalPresence() {
  return (
    <section className="bg-bg-dark text-text-light section-padding overflow-hidden" id="global" aria-label="Global presence">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Map area */}
          <div className="relative">
            <FadeUp>
              <span className="text-micro text-accent-gold">Global Presence</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-heading mt-6 text-text-light">
                Engineering trust worldwide
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 text-body text-text-muted/70 max-w-lg">
                With 11 manufacturing units and exports to 75+ countries, Tempsens delivers thermal engineering solutions wherever critical processes demand precision.
              </p>
            </FadeUp>

            {/* Simplified world map outline */}
            <motion.div
              className="mt-12 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <svg viewBox="0 0 800 400" className="w-full opacity-[0.08]" fill="none" stroke="white" strokeWidth="0.5">
                {/* Simplified continent outlines */}
                <ellipse cx="200" cy="180" rx="120" ry="100" />
                <ellipse cx="350" cy="160" rx="80" ry="120" />
                <ellipse cx="500" cy="180" rx="100" ry="90" />
                <ellipse cx="650" cy="200" rx="80" ry="70" />
                <ellipse cx="700" cy="320" rx="50" ry="40" />
              </svg>

              {/* Location dots */}
              {[
                { x: '35%', y: '45%', label: 'India (HQ)', delay: 0.5 },
                { x: '30%', y: '35%', label: 'Europe', delay: 0.7 },
                { x: '55%', y: '40%', label: 'Middle East', delay: 0.9 },
                { x: '70%', y: '50%', label: 'Asia Pacific', delay: 1.1 },
              ].map((loc, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ left: loc.x, top: loc.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: loc.delay, duration: 0.6, ease: easeOutExpo }}
                >
                  <div className="relative">
                    <div className="w-2 h-2 bg-accent-gold rounded-full" />
                    <div className="absolute -inset-1 bg-accent-gold/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-text-muted/50 whitespace-nowrap">
                      {loc.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              {[
                { value: 11, suffix: '', label: 'Manufacturing Units', sub: 'State-of-the-art production facilities' },
                { value: 75, suffix: '+', label: 'Countries', sub: 'Global export footprint' },
                { value: 3500, suffix: '+', label: 'Customers Worldwide', sub: 'Trusted across critical industries' },
                { value: 40, suffix: '+', label: 'Years of Engineering', sub: 'Decades of thermal expertise' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="border-l-[1px] border-rule-dark pl-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: easeOutExpo }}
                >
                  <div className="text-text-light" style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 200, lineHeight: 1, letterSpacing: '-0.04em' }}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-label text-text-muted/60 mt-2 block">{stat.label}</span>
                  <span className="text-[13px] text-text-muted/40 mt-1 block">{stat.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
