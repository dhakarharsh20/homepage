'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { customEngineering } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function CustomEngineering() {
  return (
    <section className="section-padding bg-bg-warm" id="custom-engineering" aria-label="Custom Engineering">
      <div className="container-wide">
        <FadeUp>
          <span className="text-micro text-accent-gold">{customEngineering.eyebrow}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-heading mt-4 text-text-primary">
            {customEngineering.headlineLine1}<br />
            <span className="text-accent-red">{customEngineering.headlineLine2}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-8 text-body text-text-secondary max-w-3xl leading-relaxed">
            {customEngineering.body}
          </p>
        </FadeUp>

        {/* Three Words Column */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {customEngineering.threeWords.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white p-8 border border-rule shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: easeOutExpo }}
            >
              <span className="text-micro text-accent-gold block mb-2 font-bold">0{i + 1}</span>
              <h3 className="text-2xl font-bold tracking-tight text-text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="mt-12">
            <a href={customEngineering.cta.href} className="btn-primary">
              {customEngineering.cta.label} →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
