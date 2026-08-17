'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { productEcosystemCopy } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function ProductEcosystem() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="section-padding bg-bg-dark text-text-light" id="product-ecosystem" aria-label="Product Ecosystem">
      <div className="container-wide">
        <FadeUp>
          <span className="text-micro text-accent-gold">{productEcosystemCopy.eyebrow}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-heading mt-4 text-white">
            {productEcosystemCopy.headline}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-body text-text-muted/70 max-w-3xl font-light">
            {productEcosystemCopy.body}
          </p>
        </FadeUp>

        {/* Skiper35 Grid Component — 6 Interactive Category Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productEcosystemCopy.categories.map((cat, i) => {
            const isHovered = hoveredId === cat.id;

            return (
              <motion.div
                key={cat.id}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-bg-charcoal p-8 flex flex-col justify-between group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: easeOutExpo }}
              >
                {/* Background image subtle accent */}
                <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-charcoal via-bg-charcoal/80 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-micro font-mono text-accent-gold">{cat.number}</span>
                    <span className="text-xs font-mono text-white/40 group-hover:text-accent-gold transition-colors">Skiper35</span>
                  </div>

                  <h3 className="text-xl font-light text-white group-hover:text-accent-gold transition-colors leading-snug">
                    {cat.title}
                  </h3>

                  {/* Bullet / Pill Items */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-[12px] bg-white/10 text-white/80 px-2.5 py-1 rounded font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
                  <a href={cat.href} className="text-micro text-white group-hover:text-accent-gold font-semibold inline-flex items-center gap-2 transition-colors">
                    {cat.cta} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
