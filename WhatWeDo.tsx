'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { whatWeDo } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function WhatWeDo() {
  return (
    <section className="section-padding bg-bg-primary" id="verticals" aria-label="What Tempsens Actually Does">
      <div className="container-wide">
        <FadeUp>
          <span className="text-micro text-accent-gold">{whatWeDo.eyebrow}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-heading mt-4 text-text-primary">
            {whatWeDo.headline}<br />
            <span className="text-text-secondary font-light">{whatWeDo.subheadline}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-8 text-body text-text-secondary max-w-3xl leading-relaxed">
            {whatWeDo.body}
          </p>
        </FadeUp>

        {/* Three Verticals */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatWeDo.verticals.map((vert, i) => (
            <motion.div
              key={vert.number}
              className="bg-bg-warm p-8 lg:p-10 border border-rule/60 hover:border-accent-red transition-all duration-500 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: easeOutExpo }}
            >
              <div>
                <span className="text-micro text-accent-red font-mono font-semibold">{vert.number} — {vert.title}</span>
                <h3 className="mt-4 text-xl font-light text-text-primary leading-snug">{vert.subtitle}</h3>
                <p className="mt-4 text-[14px] text-text-muted leading-relaxed">{vert.description}</p>
              </div>

              <div className="mt-10 pt-4 border-t border-rule">
                <a href={vert.href} className="text-micro text-accent-red hover:text-accent-gold font-semibold inline-flex items-center gap-2 transition-colors">
                  {vert.cta} <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
