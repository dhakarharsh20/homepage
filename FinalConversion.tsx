'use client';

import { FadeUp } from '@/components/animations';
import { finalConversionCopy } from '@/data/content';

export default function FinalConversion() {
  return (
    <section className="section-padding bg-bg-dark text-text-light text-center" id="final-conversion" aria-label="Final Conversion">
      <div className="container-wide max-w-4xl mx-auto">
        <FadeUp>
          <span className="text-micro text-accent-gold">{finalConversionCopy.eyebrow}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-heading mt-6 text-white">
            {finalConversionCopy.headline}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-body text-text-muted/70 max-w-xl mx-auto font-light leading-relaxed">
            {finalConversionCopy.body}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={finalConversionCopy.primaryCTA.href} className="btn-dark py-4 px-10 text-[14px]">
              {finalConversionCopy.primaryCTA.label} →
            </a>
            <a href={finalConversionCopy.secondaryCTA.href} className="px-8 py-4 border border-white/30 text-white text-[13px] font-medium uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all">
              {finalConversionCopy.secondaryCTA.label} →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
