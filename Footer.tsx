'use client';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-light border-t border-white/10 pt-20 pb-12" role="contentinfo">
      <div className="container-wide">
        {/* Top Statement */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-3xl font-bold tracking-tight text-white">TEMPSENS</span>
            <p className="mt-2 text-xs font-mono tracking-wider text-accent-gold uppercase">
              THERMAL ENGINEERING. ENGINEERED AROUND YOUR PROCESS.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://tempsens.com/contact-us/" className="btn-dark py-2.5 px-5 text-xs">
              Talk to our team →
            </a>
            <a href="https://tempsens.com/contact-us/" className="px-5 py-2.5 border border-white/30 text-white text-xs font-medium uppercase tracking-wider hover:border-white transition-colors">
              Request a quote →
            </a>
          </div>
        </div>

        {/* Middle: 5 Microcopy Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16 border-b border-white/10 text-xs">
          {/* Company */}
          <div>
            <span className="text-micro text-accent-gold block mb-4">COMPANY</span>
            <ul className="space-y-2 text-text-muted/70">
              <li><a href="https://tempsens.com/about-us/" className="hover:text-white transition-colors">About Tempsens</a></li>
              <li><a href="https://tempsens.com/about-us/" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="https://tempsens.com/about-us/" className="hover:text-white transition-colors">Global Presence</a></li>
              <li><a href="https://tempsens.com/award-and-accreditation/" className="hover:text-white transition-colors">Recognition</a></li>
              <li><a href="https://tempsens.com/careers/" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <span className="text-micro text-accent-gold block mb-4">PRODUCTS</span>
            <ul className="space-y-2 text-text-muted/70">
              <li><a href="https://tempsens.com/ct/temperature-sensing-solutions/" className="hover:text-white transition-colors">Temperature Sensing</a></li>
              <li><a href="https://tempsens.com/ct/temperature-sensing-solutions/pyrometers/" className="hover:text-white transition-colors">Non-Contact Sensing</a></li>
              <li><a href="https://tempsens.com/ct/industrial-heaters/" className="hover:text-white transition-colors">Industrial Heating</a></li>
              <li><a href="https://tempsens.com/ct/cables/" className="hover:text-white transition-colors">Cables & Wires</a></li>
              <li><a href="https://tempsens.com/ct/cables/nickel-thermocouple-alloy/" className="hover:text-white transition-colors">Nickel & Thermocouple Alloys</a></li>
              <li><a href="https://tempsens.com/ct/industrial-heaters/industrial-and-rd-furnaces/" className="hover:text-white transition-colors">Furnaces</a></li>
              <li><a href="https://tempsens.com/ct/temperature-sensing-solutions/temperature-calibration-and-services/" className="hover:text-white transition-colors">Calibration & Services</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <span className="text-micro text-accent-gold block mb-4">INDUSTRIES</span>
            <ul className="space-y-2 text-text-muted/70">
              <li><a href="https://tempsens.com/industry/power-industry/" className="hover:text-white transition-colors">Power</a></li>
              <li><a href="https://tempsens.com/industry/oil-gas/" className="hover:text-white transition-colors">Oil & Gas</a></li>
              <li><a href="https://tempsens.com/industry/steel-industry/" className="hover:text-white transition-colors">Steel</a></li>
              <li><a href="https://tempsens.com/industry/glass-industry/" className="hover:text-white transition-colors">Glass</a></li>
              <li><a href="https://tempsens.com/industry/cement-industry/" className="hover:text-white transition-colors">Cement</a></li>
              <li><a href="https://tempsens.com/industry/steel-industry/" className="hover:text-white transition-colors">Aluminum</a></li>
              <li><a href="https://tempsens.com/industry/pharmaceutical-industry/" className="hover:text-white transition-colors">Pharmaceutical</a></li>
              <li><a href="https://tempsens.com/industry/defence/" className="hover:text-white transition-colors">Defence & Aerospace</a></li>
              <li><a href="https://tempsens.com/literature/" className="hover:text-white transition-colors">Research & Development</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <span className="text-micro text-accent-gold block mb-4">RESOURCES</span>
            <ul className="space-y-2 text-text-muted/70">
              <li><a href="https://tempsens.com/blog/" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="https://tempsens.com/blog/" className="hover:text-white transition-colors">News & Events</a></li>
              <li><a href="https://tempsens.com/literature/" className="hover:text-white transition-colors">Literature</a></li>
              <li><a href="https://tempsens.com/videos/" className="hover:text-white transition-colors">Videos</a></li>
              <li><a href="https://tempsens.com/faq/" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-micro text-accent-gold block mb-4">CONTACT</span>
            <ul className="space-y-2 text-text-muted/70">
              <li><a href="https://tempsens.com/contact-us/" className="hover:text-white transition-colors">Talk to our team →</a></li>
              <li><a href="https://tempsens.com/contact-us/" className="hover:text-white transition-colors">Request a quote →</a></li>
              <li className="pt-2 text-[11px] font-mono text-text-muted">+91-9358835576</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-text-muted/50">
          <p>© Tempsens. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Thermal engineering solutions for the processes that keep industry moving.</p>
        </div>
      </div>
    </footer>
  );
}
