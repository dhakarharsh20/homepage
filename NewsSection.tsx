'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { newsCopy } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function NewsSection() {
  return (
    <section className="section-padding bg-bg-warm" id="news-section" aria-label="Latest News">
      <div className="container-wide">
        <FadeUp>
          <span className="text-micro text-accent-gold">{newsCopy.eyebrow}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-heading mt-4 text-text-primary">
            {newsCopy.headline}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-4 text-body text-text-secondary max-w-2xl">
            {newsCopy.body}
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsCopy.articles.map((art, i) => (
            <motion.a
              key={art.title}
              href={art.href}
              className="bg-white p-8 border border-rule/80 hover:border-accent-red transition-all duration-400 rounded-lg flex flex-col justify-between group shadow-sm"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: easeOutExpo }}
            >
              <div>
                <div className="flex items-center justify-between text-micro text-accent-red font-mono mb-4">
                  <span>{art.category}</span>
                  <span className="text-text-muted">{art.date}</span>
                </div>

                <h3 className="text-lg font-light text-text-primary group-hover:text-accent-red transition-colors leading-snug">
                  {art.title}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-rule flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-text-secondary group-hover:text-text-primary">
                  READ MORE
                </span>
                <span className="text-text-muted group-hover:text-accent-red group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
