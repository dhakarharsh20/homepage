'use client';

import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { knowledgeCopy } from '@/data/content';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function KnowledgeSection() {
  const articles = [
    {
      category: 'APPLICATION NOTE',
      readTime: '5 MIN READ • AUG 2026',
      title: 'Optimizing Infrared Pyrometry in Molten Glass & Steel Processing',
      excerpt: 'How non-contact infrared thermal imaging eliminates signal drift and improves accuracy across extreme 1600°C furnace environments.',
      image: 'Non Contact Sensing.jpeg',
      linkText: 'Read Technical Article →',
    },
    {
      category: 'CALIBRATION GUIDE',
      readTime: '7 MIN READ • JUL 2026',
      title: 'NABL & ISO/IEC 17025 Standard Calibration for Thermocouples',
      excerpt: 'A comprehensive breakdown of primary reference standards, dry-block calibrators, and error margins in process temperature measurement.',
      image: 'temperature calibrator.jpeg',
      linkText: 'Read Calibration Guide →',
    },
    {
      category: 'MATERIAL SCIENCE',
      readTime: '6 MIN READ • JUN 2026',
      title: 'Mineral Insulated (MI) Cables for High-Vibration Defense Applications',
      excerpt: 'Engineering high-purity MgO insulated thermocouple cables that survive severe mechanical vibration and nuclear radiation environments.',
      image: 'Thermal.png',
      linkText: 'Read Engineering Study →',
    },
  ];

  return (
    <section className="section-padding bg-bg-primary border-t border-rule" id="blog-section" aria-label="Insights & Engineering Blog">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-micro text-accent-gold">INSIGHTS & ENGINEERING BLOG</span>
            <h2 className="text-heading mt-4 text-text-primary max-w-4xl">
              Perspectives on thermal innovation.
            </h2>
            <p className="mt-4 text-body text-text-secondary max-w-2xl leading-relaxed font-light">
              Discover the latest technical articles, industrial application guides, and thermal engineering breakthroughs from Tempsens R&D labs.
            </p>
          </div>
          <div>
            <a href="https://tempsens.com/blog/" className="btn-primary">
              Browse All Articles →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <motion.article
              key={art.title}
              className="bg-bg-warm border border-rule hover:border-accent-gold rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: easeOutExpo }}
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-neutral-900">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-accent-gold text-black text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {art.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-mono text-text-muted mb-2">{art.readTime}</div>
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-red transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="mt-3 text-xs text-text-secondary leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <a
                  href="https://tempsens.com/blog/"
                  className="text-xs font-mono font-bold text-accent-red group-hover:text-accent-gold transition-colors inline-flex items-center gap-1"
                >
                  {art.linkText}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
