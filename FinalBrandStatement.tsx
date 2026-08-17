'use client';

import { FadeUp } from '@/components/animations';
import { finalBrandStatement } from '@/data/content';

export default function FinalBrandStatement() {
  return (
    <section className="py-20 bg-bg-dark text-text-light border-t border-white/10 text-center" id="final-brand" aria-label="Final Brand Statement">
      <div className="container-wide max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-light text-white tracking-tight leading-tight">
            {finalBrandStatement.large}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-6 flex flex-col items-center gap-1">
            <span className="text-micro text-accent-gold font-bold">TEMPSENS</span>
            <p className="text-sm text-text-muted/70 font-light">
              {finalBrandStatement.small}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
