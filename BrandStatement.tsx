'use client';

import { FadeUp, RevealText } from '@/components/animations';
import { openingStatement } from '@/data/content';

export default function BrandStatement() {
  return (
    <section className="section-padding bg-bg-primary border-b border-rule" id="opening" aria-label="Opening Statement">
      <div className="container-wide">
        <FadeUp>
          <span className="text-micro text-accent-gold">{openingStatement.eyebrow}</span>
        </FadeUp>

        <div className="mt-8 max-w-5xl">
          <RevealText delay={0.1}>
            <h2
              className="text-text-primary leading-[1.08] tracking-tight font-light"
              style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}
            >
              {openingStatement.headline}
            </h2>
          </RevealText>

          <FadeUp delay={0.3}>
            <p className="mt-8 text-body-large text-text-secondary max-w-3xl font-light">
              {openingStatement.body}
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-8 space-y-1.5 text-[15px] font-mono text-text-muted">
              {openingStatement.supporting.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="mt-12">
              <a href={openingStatement.cta.href} className="btn-primary">
                {openingStatement.cta.label} →
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
