'use client';

import { motion } from 'framer-motion';
import { FadeUp, RollingNumber } from '@/components/animations';
import { globalCopy } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function GlobalSection() {
  return (
    <section className="section-padding bg-bg-dark text-text-light" id="global-section" aria-label="Global Presence">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <FadeUp>
              <span className="text-micro text-accent-gold">{globalCopy.eyebrow}</span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-heading mt-4 text-white">
                {globalCopy.headline}
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 text-body text-text-muted/70 leading-relaxed font-light">
                {globalCopy.body}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-10">
                <a href={globalCopy.cta.href} className="btn-dark">
                  {globalCopy.cta.label} →
                </a>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-6">
              {globalCopy.proof.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="p-6 bg-bg-charcoal border border-white/10 rounded-lg flex items-center gap-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: easeOutExpo }}
                >
                  <div className="text-stat text-accent-gold min-w-[120px]">
                    {isNaN(parseInt(item.value)) ? (
                      <span>{item.value}</span>
                    ) : (
                      <RollingNumber value={parseInt(item.value)} suffix={item.value.includes('+') ? '+' : ''} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-mono text-white font-bold tracking-wider">{item.title}</h3>
                    <p className="text-xs text-text-muted/70 mt-1">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
