'use client';

import { motion } from 'framer-motion';
import { FadeUp, RollingNumber } from '@/components/animations';
import { numbersCopy } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function NumbersSection() {
  return (
    <section className="section-padding bg-bg-primary border-y border-rule" id="numbers-section" aria-label="The Numbers">
      <div className="container-wide">
        <FadeUp>
          <span className="text-micro text-accent-gold">{numbersCopy.eyebrow}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-heading mt-4 text-text-primary">
            {numbersCopy.headline}
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {numbersCopy.stats.map((st, i) => {
            const rawNum = parseInt(st.val.replace(/,/g, ''));
            const suffix = st.val.includes('+') ? '+' : '';

            return (
              <motion.div
                key={st.label}
                className="p-8 bg-bg-warm border border-rule/60 rounded-lg flex flex-col justify-between"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: easeOutExpo }}
              >
                <div>
                  <div className="text-stat text-text-primary mb-3">
                    <RollingNumber value={rawNum} suffix={suffix} />
                  </div>
                  <h3 className="text-xs font-mono font-bold text-accent-red tracking-wider uppercase mb-2">
                    {st.label}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
