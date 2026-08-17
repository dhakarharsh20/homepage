'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { calibrationCopy } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function CalibrationSection() {
  return (
    <section className="section-padding bg-bg-warm" id="calibration-section" aria-label="Calibration and Precision">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <FadeUp>
              <span className="text-micro text-accent-gold">{calibrationCopy.eyebrow}</span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-heading mt-4 text-text-primary">
                {calibrationCopy.headline}
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 text-body text-text-secondary leading-relaxed">
                {calibrationCopy.body}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-10">
                <a href={calibrationCopy.cta.href} className="btn-primary">
                  {calibrationCopy.cta.label} →
                </a>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white p-8 md:p-10 border border-rule shadow-sm rounded-lg">
              <span className="text-micro text-accent-red font-bold block mb-4">SERVICE CAPABILITIES</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {calibrationCopy.services.map((srv, i) => (
                  <motion.div
                    key={srv}
                    className="p-3 bg-bg-warm rounded border border-rule/60 text-xs font-mono font-medium text-text-primary flex items-center gap-2"
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: easeOutExpo }}
                  >
                    <span className="w-1.5 h-1.5 bg-accent-red rounded-full flex-shrink-0" />
                    <span>{srv}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
