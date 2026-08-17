'use client';

import { motion } from 'framer-motion';
import { FadeUp, RevealImage } from '@/components/animations';

export default function ServicesSection() {
  return (
    <section className="bg-bg-primary section-padding" id="services" aria-label="Calibration and Services">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <RevealImage
                src="/images/products/temperature-calibrator.jpeg"
                alt="Temperature Calibration & Services"
                className="aspect-[4/3] w-full"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-bg-dark text-text-light p-6 max-w-xs shadow-xl">
                <span className="text-micro text-accent-gold block mb-1">NABL Accredited</span>
                <p className="text-[13px] text-text-muted leading-snug">
                  Precision calibration services meeting international standards.
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6">
            <FadeUp>
              <span className="text-micro text-accent-gold">Services & Calibration</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-heading mt-6">
                Temperature Calibration & Technical Services
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 text-body text-text-secondary">
                Tempsens offers comprehensive temperature calibration and testing services. Our state-of-the-art calibration laboratories provide high-precision calibration for thermal sensors, pyrometers, thermal imagers, and temperature indicators.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <ul className="mt-8 space-y-3 text-[15px] text-text-primary">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent-red rounded-full" />
                  <span>Fixed point and comparison calibration techniques</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent-red rounded-full" />
                  <span>Temperature range from -196°C to 2700°C</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent-red rounded-full" />
                  <span>On-site calibration & thermal audit solutions</span>
                </li>
              </ul>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="mt-10">
                <a
                  href="https://tempsens.com/ct/temperature-sensing-solutions/temperature-calibration-and-services/"
                  className="btn-primary"
                >
                  Explore Calibration Services
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
