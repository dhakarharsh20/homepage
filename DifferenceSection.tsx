'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { differenceCopy } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function DifferenceSection() {
  return (
    <section className="section-padding bg-bg-primary" id="difference-section" aria-label="Why Tempsens">
      <div className="container-wide">
        <FadeUp>
          <span className="text-micro text-accent-gold">{differenceCopy.eyebrow}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-heading mt-4 text-text-primary max-w-4xl">
            {differenceCopy.headline}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-body text-text-secondary max-w-3xl leading-relaxed">
            {differenceCopy.body}
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differenceCopy.principles.map((pr, i) => (
            <motion.div
              key={pr.title}
              className="p-8 bg-bg-warm border border-rule/80 rounded-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: easeOutExpo }}
            >
              <div>
                <span className="text-micro text-accent-red font-mono font-bold block mb-3">0{i + 1}</span>
                <h3 className="text-lg font-bold text-text-primary tracking-tight leading-snug">{pr.title}</h3>
                <p className="mt-3 text-xs text-text-muted leading-relaxed">{pr.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
