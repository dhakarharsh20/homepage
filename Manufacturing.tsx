'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { manufacturingCopy } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Manufacturing() {
  return (
    <section className="section-padding bg-bg-primary border-t border-rule" id="manufacturing" aria-label="Backward Integrated Manufacturing">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <FadeUp>
              <span className="text-micro text-accent-gold">{manufacturingCopy.eyebrow}</span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-heading mt-4 text-text-primary">
                {manufacturingCopy.headlineLine1}<br />
                <span className="text-text-secondary">{manufacturingCopy.headlineLine2}</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 text-body text-text-secondary leading-relaxed">
                {manufacturingCopy.body}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-8 p-6 bg-bg-dark text-white rounded-lg inline-block">
                <span className="text-micro text-accent-gold block mb-1">CAPABILITY</span>
                <span className="text-xl font-bold tracking-wider">{manufacturingCopy.featuredLine}</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-10">
                <a href={manufacturingCopy.cta.href} className="btn-primary">
                  {manufacturingCopy.cta.label} →
                </a>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {manufacturingCopy.points.map((pt, i) => (
                <motion.div
                  key={pt.title}
                  className="p-6 bg-bg-warm border border-rule/60 rounded-md"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: easeOutExpo }}
                >
                  <span className="text-micro font-mono text-accent-red font-bold">0{i + 1} — {pt.title}</span>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{pt.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
