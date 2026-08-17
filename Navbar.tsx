'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const productCategories = [
  {
    id: 'contact-sensing',
    title: 'Contact Sensing',
    subtitle: 'Thermocouples & RTDs',
    href: 'https://tempsens.com/ct/temperature-sensing-solutions/',
    items: [
      { label: 'Thermocouples & RTDs', href: 'https://tempsens.com/ct/temperature-sensing-solutions/' },
      { label: 'Thermowells & Sheaths', href: 'https://tempsens.com/ct/temperature-sensing-solutions/' },
      { label: 'Temperature Gauges', href: 'https://tempsens.com/ct/temperature-sensing-solutions/' },
      { label: 'Transmitters & Indicators', href: 'https://tempsens.com/ct/temperature-sensing-solutions/' },
      { label: 'Custom Sensor Assemblies', href: 'https://tempsens.com/ct/temperature-sensing-solutions/' },
    ],
  },
  {
    id: 'non-contact-sensing',
    title: 'Non Contact Sensing',
    subtitle: 'Pyrometers & Imagers',
    href: 'https://tempsens.com/ct/temperature-sensing-solutions/pyrometers/',
    items: [
      { label: 'Fixed Infrared Pyrometers', href: 'https://tempsens.com/ct/temperature-sensing-solutions/pyrometers/' },
      { label: 'Portable Pyrometers', href: 'https://tempsens.com/ct/temperature-sensing-solutions/pyrometers/' },
      { label: 'Thermal Imagers', href: 'https://tempsens.com/ct/temperature-sensing-solutions/pyrometers/' },
      { label: 'Furnace Monitoring Cameras', href: 'https://tempsens.com/ct/temperature-sensing-solutions/pyrometers/' },
      { label: 'Blackbody Sources', href: 'https://tempsens.com/ct/temperature-sensing-solutions/pyrometers/' },
    ],
  },
  {
    id: 'electric-heating',
    title: 'Electrical Heating',
    subtitle: 'Industrial Heaters',
    href: 'https://tempsens.com/ct/industrial-heaters/',
    items: [
      { label: 'Component & Cartridge Heaters', href: 'https://tempsens.com/ct/industrial-heaters/' },
      { label: 'Tubular & Immersion Heaters', href: 'https://tempsens.com/ct/industrial-heaters/' },
      { label: 'Process & Air Heaters', href: 'https://tempsens.com/ct/industrial-heaters/' },
      { label: 'Heating Jackets & Tapes', href: 'https://tempsens.com/ct/industrial-heaters/' },
      { label: 'Custom Heating Systems', href: 'https://tempsens.com/ct/industrial-heaters/' },
    ],
  },
  {
    id: 'cables-alloys',
    title: 'Cables & Alloys',
    subtitle: 'MI & Special Wires',
    href: 'https://tempsens.com/ct/cables/',
    items: [
      { label: 'Thermocouple Cables', href: 'https://tempsens.com/ct/cables/' },
      { label: 'Extension & Compensating Wires', href: 'https://tempsens.com/ct/cables/' },
      { label: 'Mineral Insulated (MI) Cables', href: 'https://tempsens.com/ct/cables/' },
      { label: 'Nickel & Special Alloys', href: 'https://tempsens.com/ct/cables/' },
      { label: 'Resistance Wires', href: 'https://tempsens.com/ct/cables/' },
    ],
  },
  {
    id: 'furnaces',
    title: 'Furnaces & Systems',
    subtitle: 'Process & Lab Furnaces',
    href: 'https://tempsens.com/ct/industrial-heaters/industrial-and-rd-furnaces/',
    items: [
      { label: 'Laboratory & R&D Furnaces', href: 'https://tempsens.com/ct/industrial-heaters/industrial-and-rd-furnaces/' },
      { label: 'Box & Tube Furnaces', href: 'https://tempsens.com/ct/industrial-heaters/industrial-and-rd-furnaces/' },
      { label: 'Industrial Heat Treatment', href: 'https://tempsens.com/ct/industrial-heaters/industrial-and-rd-furnaces/' },
      { label: 'Vacuum & Pit Furnaces', href: 'https://tempsens.com/ct/industrial-heaters/industrial-and-rd-furnaces/' },
      { label: 'Thermal Processing Systems', href: 'https://tempsens.com/ct/industrial-heaters/industrial-and-rd-furnaces/' },
    ],
  },
  {
    id: 'calibration-services',
    title: 'Calibration & Services',
    subtitle: 'Calibration Sources',
    href: 'https://tempsens.com/ct/temperature-sensing-solutions/temperature-calibration-and-services/',
    items: [
      { label: 'Temperature Calibrators', href: 'https://tempsens.com/ct/temperature-sensing-solutions/temperature-calibration-and-services/' },
      { label: 'Dry Block Calibrators', href: 'https://tempsens.com/ct/temperature-sensing-solutions/temperature-calibration-and-services/' },
      { label: 'Reference Sensors & Standards', href: 'https://tempsens.com/ct/temperature-sensing-solutions/temperature-calibration-and-services/' },
      { label: 'NABL Calibration Services', href: 'https://tempsens.com/ct/temperature-sensing-solutions/temperature-calibration-and-services/' },
      { label: 'Thermal Profiling & Audit', href: 'https://tempsens.com/ct/temperature-sensing-solutions/temperature-calibration-and-services/' },
    ],
  },
];

const companyItems = [
  { label: 'About Tempsens', href: 'https://tempsens.com/about-us/', desc: '48+ years of thermal engineering excellence' },
  { label: 'Manufacturing Facilities', href: 'https://tempsens.com/about-us/', desc: '11 backward-integrated global units' },
  { label: 'Quality & Certifications', href: 'https://tempsens.com/about-us/', desc: 'ISO 9001, NABL, CE & ATEX certified' },
  { label: 'R&D & Innovation', href: 'https://tempsens.com/about-us/', desc: '12 patents and continuous technology development' },
  { label: 'Global Footprint', href: 'https://tempsens.com/about-us/', desc: 'Exporting to over 75+ countries worldwide' },
  { label: 'Careers & Culture', href: 'https://tempsens.com/about-us/', desc: 'Join our team of thermal engineering specialists' },
];

const industryItems = [
  { label: 'Steel', href: 'https://tempsens.com/industry/steel-industry/', desc: 'High-temperature thermal measurement for steelmaking.' },
  { label: 'Cement', href: 'https://tempsens.com/industry/cement-industry/', desc: 'Kiln thermal profiling and energy-intensive process monitoring.' },
  { label: 'Petrochemical', href: 'https://tempsens.com/industry/oil-gas/', desc: 'Hazardous area temperature sensing and process heating.' },
  { label: 'Power', href: 'https://tempsens.com/industry/power-industry/', desc: 'Thermal sensing across generation, boilers, and turbine systems.' },
  { label: 'Nuclear & Defence', href: 'https://tempsens.com/industry/defence/', desc: 'Extreme-environment sensors for aerospace and nuclear reactors.' },
  { label: 'Glass', href: 'https://tempsens.com/industry/glass-industry/', desc: 'Non-contact infrared pyrometry and glass tank monitoring.' },
  { label: 'Plastic & Pharma', href: 'https://tempsens.com/industry/pharmaceutical-industry/', desc: 'Sterile process control and precise polymer thermal heating.' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCatId, setActiveCatId] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Apple Style Floating Header — Skiper38 UI */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3'
            : 'bg-black/50 backdrop-blur-xl border-b border-white/10 py-4'
        }`}
        onMouseLeave={() => {
          setActiveMenu(null);
          setActiveCatId(null);
        }}
      >
        <div className="max-w-[1720px] mx-auto px-6 lg:px-12 w-full">
          <nav className="flex items-center justify-between h-11" aria-label="Apple Style Navigation">
            
            {/* Logo */}
            <a href="https://tempsens.com/" className="flex items-center gap-2 text-white font-bold tracking-tight text-xl group">
              <span className="text-accent-gold group-hover:rotate-12 transition-transform duration-300">◆</span>
              <span className="tracking-widest">TEMPSENS</span>
            </a>

            {/* Apple Nav Items Row */}
            <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-white/80">
              
              {/* Company */}
              <button
                onMouseEnter={() => setActiveMenu('company')}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                  activeMenu === 'company' ? 'bg-white/15 text-white shadow-inner' : 'hover:text-white hover:bg-white/5'
                }`}
              >
                Company
              </button>

              {/* Products (Horizontal Category Stack) */}
              <button
                onMouseEnter={() => setActiveMenu('products')}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                  activeMenu === 'products' ? 'bg-white/15 text-white shadow-inner' : 'hover:text-white hover:bg-white/5'
                }`}
              >
                Products
              </button>

              {/* Industries */}
              <button
                onMouseEnter={() => setActiveMenu('industries')}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                  activeMenu === 'industries' ? 'bg-white/15 text-white shadow-inner' : 'hover:text-white hover:bg-white/5'
                }`}
              >
                Industries
              </button>

              {/* Investors */}
              <button
                onMouseEnter={() => setActiveMenu('investors')}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                  activeMenu === 'investors' ? 'bg-white/15 text-white shadow-inner' : 'hover:text-white hover:bg-white/5'
                }`}
              >
                Investors
              </button>

              {/* Resources */}
              <button
                onMouseEnter={() => setActiveMenu('resources')}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                  activeMenu === 'resources' ? 'bg-white/15 text-white shadow-inner' : 'hover:text-white hover:bg-white/5'
                }`}
              >
                Resources
              </button>

              {/* Events */}
              <a
                href="https://tempsens.com/events/"
                onMouseEnter={() => setActiveMenu(null)}
                className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                Events
              </a>

            </div>

            {/* Right Action CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
                <button className="text-xs font-mono text-white/70 hover:text-white px-2.5 py-1 rounded-full border border-white/20 hover:border-white/40 transition-colors">
                  EN ▾
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-neutral-900 border border-white/20 rounded-xl py-2 w-32 shadow-2xl text-xs text-white/80">
                    <a href="#" className="block px-3 py-1.5 hover:bg-white/10 hover:text-white">English (EN)</a>
                    <a href="#" className="block px-3 py-1.5 hover:bg-white/10 hover:text-white">Deutsch (DE)</a>
                    <a href="#" className="block px-3 py-1.5 hover:bg-white/10 hover:text-white">Français (FR)</a>
                    <a href="#" className="block px-3 py-1.5 hover:bg-white/10 hover:text-white">Español (ES)</a>
                  </div>
                )}
              </div>

              {/* Request Quote Button */}
              <a
                href="https://tempsens.com/contact-us/"
                className="btn-dark text-[11px] py-2 px-4 rounded-full bg-white/95 text-black font-semibold uppercase tracking-wider hover:bg-accent-gold hover:text-black transition-all shadow-lg"
              >
                Request Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white text-xl p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </nav>
        </div>

        {/* Skiper38 Full-Width Glass Mega Overlay */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-3xl border-b border-white/15 shadow-2xl overflow-hidden py-8 text-white"
            >
              <div className="max-w-[1720px] mx-auto px-6 lg:px-12 w-full">

                {/* ─── PRODUCTS MEGA DROPDOWN (Expanding Horizontal Category Strip — No 3x2 Matrix Card Stack) ─── */}
                {activeMenu === 'products' && (
                  <div>
                    {/* Top Row: Horizontal Category Stack */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pb-6 mb-6 border-b border-white/10">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 mr-2">Categories:</span>
                      {productCategories.map((cat) => {
                        const isSelected = (activeCatId || productCategories[0].id) === cat.id;
                        return (
                          <button
                            key={cat.id}
                            onMouseEnter={() => setActiveCatId(cat.id)}
                            onClick={() => setActiveCatId(cat.id)}
                            className={`px-4 py-2.5 rounded-2xl border text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                              isSelected
                                ? 'bg-accent-gold text-black border-accent-gold shadow-lg shadow-accent-gold/20 scale-105 font-bold'
                                : 'bg-white/5 border-white/15 text-white/80 hover:bg-white/10 hover:border-white/30'
                            }`}
                          >
                            <span>{cat.title}</span>
                            <span className="text-[10px] opacity-60">→</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Expanding Content Panel directly below Horizontal Category Strip */}
                    {(() => {
                      const activeCat = productCategories.find(c => c.id === (activeCatId || productCategories[0].id)) || productCategories[0];
                      return (
                        <div className="rounded-3xl border border-white/15 bg-neutral-900/90 p-8 backdrop-blur-2xl transition-all duration-300 shadow-2xl">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left Meta Information */}
                            <div className="lg:col-span-4 border-r border-white/10 pr-6">
                              <span className="text-[10px] font-mono text-accent-gold block tracking-widest uppercase mb-1">
                                {activeCat.subtitle}
                              </span>
                              <h3 className="text-2xl font-bold text-white mb-3">{activeCat.title}</h3>
                              <p className="text-xs text-white/70 leading-relaxed mb-6">
                                Precision-engineered {activeCat.title.toLowerCase()} thermal solutions designed for critical industrial applications.
                              </p>
                              <a
                                href={activeCat.href}
                                className="inline-flex items-center gap-2 btn-dark text-xs py-2.5 px-5 rounded-full bg-white text-black hover:bg-accent-gold transition-colors font-semibold"
                              >
                                Explore {activeCat.title} →
                              </a>
                            </div>

                            {/* Right Sub-items Grid */}
                            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                              {activeCat.items.map((sub, idx) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-gold hover:bg-white/10 transition-all group/link flex flex-col justify-between"
                                >
                                  <div>
                                    <span className="text-accent-gold text-[10px] font-mono block mb-1">0{idx + 1}</span>
                                    <h4 className="text-xs font-semibold text-white group-hover/link:text-accent-gold transition-colors">
                                      {sub.label}
                                    </h4>
                                  </div>
                                  <span className="mt-3 text-[10px] font-mono text-accent-gold opacity-0 group-hover/link:opacity-100 transition-opacity">
                                    Explore item →
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* ─── COMPANY MEGA DROPDOWN ─── */}
                {activeMenu === 'company' && (
                  <div>
                    <div className="text-center pb-4 mb-6 border-b border-white/10">
                      <span className="text-xs font-mono uppercase tracking-widest text-accent-gold">About Tempsens Group</span>
                      <h3 class="text-xl font-light text-white mt-1">Thermal Engineering Pioneers Since 1976</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {companyItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="rounded-2xl bg-neutral-900/70 border border-white/10 p-5 hover:border-accent-gold hover:bg-neutral-900 transition-all block group"
                        >
                          <h4 className="text-sm font-semibold text-white group-hover:text-accent-gold transition-colors">{item.label}</h4>
                          <p className="text-xs text-white/60 mt-2 leading-relaxed">{item.desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── INDUSTRIES MEGA DROPDOWN ─── */}
                {activeMenu === 'industries' && (
                  <div>
                    <div className="text-center pb-4 mb-6 border-b border-white/10">
                      <span className="text-xs font-mono uppercase tracking-widest text-accent-gold">Industrial Applications</span>
                      <h3 class="text-xl font-light text-white mt-1">Engineered for Harsh & Critical Environments</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                      {industryItems.map((ind) => (
                        <a
                          key={ind.label}
                          href={ind.href}
                          className="rounded-xl bg-neutral-900/60 border border-white/10 p-4 hover:border-accent-gold hover:bg-neutral-900 text-xs font-medium text-white/90 hover:text-white flex items-center justify-between group transition-all"
                        >
                          <span>{ind.label}</span>
                          <span className="text-accent-gold group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─── INVESTORS MEGA DROPDOWN ─── */}
                {activeMenu === 'investors' && (
                  <div>
                    <div className="text-center pb-4 mb-6 border-b border-white/10">
                      <span className="text-xs font-mono uppercase tracking-widest text-accent-gold">Investor Relations</span>
                      <h3 class="text-xl font-light text-white mt-1">Financial Transparency & Corporate Governance</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                      <div className="rounded-2xl bg-neutral-900/80 border border-white/10 p-6">
                        <div className="text-center pb-3 border-b border-white/10 mb-3">
                          <h4 className="text-sm font-semibold text-accent-gold uppercase tracking-wider">Financial Performance</h4>
                        </div>
                        <ul className="space-y-2 text-xs text-white/70">
                          <li><a href="https://tempsens.com/investors/" className="hover:text-white block py-1">Annual Reports & Financials</a></li>
                          <li><a href="https://tempsens.com/investors/" className="hover:text-white block py-1">Quarterly Performance Highlights</a></li>
                          <li><a href="https://tempsens.com/investors/" className="hover:text-white block py-1">Investor Presentations</a></li>
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-neutral-900/80 border border-white/10 p-6">
                        <div className="text-center pb-3 border-b border-white/10 mb-3">
                          <h4 className="text-sm font-semibold text-accent-gold uppercase tracking-wider">Governance & Leadership</h4>
                        </div>
                        <ul className="space-y-2 text-xs text-white/70">
                          <li><a href="https://tempsens.com/investors/" className="hover:text-white block py-1">Board of Directors & Committees</a></li>
                          <li><a href="https://tempsens.com/investors/" className="hover:text-white block py-1">Corporate Policies & Conduct</a></li>
                          <li><a href="https://tempsens.com/investors/" className="hover:text-white block py-1">ESG & Sustainability Commitments</a></li>
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-neutral-900/80 border border-white/10 p-6">
                        <div className="text-center pb-3 border-b border-white/10 mb-3">
                          <h4 className="text-sm font-semibold text-accent-gold uppercase tracking-wider">Shareholder Support</h4>
                        </div>
                        <ul className="space-y-2 text-xs text-white/70">
                          <li><a href="https://tempsens.com/investors/" className="hover:text-white block py-1">Shareholder Notices & Filings</a></li>
                          <li><a href="https://tempsens.com/investors/" className="hover:text-white block py-1">Registrar & Transfer Contacts</a></li>
                          <li><a href="https://tempsens.com/investors/" className="hover:text-white block py-1">Investor Grievances Desk</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* ─── RESOURCES MEGA DROPDOWN ─── */}
                {activeMenu === 'resources' && (
                  <div>
                    <div className="text-center pb-4 mb-6 border-b border-white/10">
                      <span className="text-xs font-mono uppercase tracking-widest text-accent-gold">Knowledge & Literature</span>
                      <h3 class="text-xl font-light text-white mt-1">Technical Resources & Thermal Engineering Guides</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                      <a href="https://tempsens.com/literature/" class="rounded-2xl bg-neutral-900/70 border border-white/10 p-5 hover:border-accent-gold transition-all block text-center">
                        <span className="text-2xl block mb-2">📄</span>
                        <h4 className="text-sm font-semibold text-white">Product Catalogues</h4>
                        <p className="text-[11px] text-white/60 mt-1">Comprehensive datasheets and specs</p>
                      </a>
                      <a href="https://tempsens.com/literature/" class="rounded-2xl bg-neutral-900/70 border border-white/10 p-5 hover:border-accent-gold transition-all block text-center">
                        <span className="text-2xl block mb-2">⚙️</span>
                        <h4 className="text-sm font-semibold text-white">Application Notes</h4>
                        <p className="text-[11px] text-white/60 mt-1">Real-world process engineering case studies</p>
                      </a>
                      <a href="https://tempsens.com/blog/" class="rounded-2xl bg-neutral-900/70 border border-white/10 p-5 hover:border-accent-gold transition-all block text-center">
                        <span className="text-2xl block mb-2">📰</span>
                        <h4 className="text-sm font-semibold text-white">Technical Blog</h4>
                        <p className="text-[11px] text-white/60 mt-1">Insights on temperature measurement</p>
                      </a>
                      <a href="https://tempsens.com/literature/" class="rounded-2xl bg-neutral-900/70 border border-white/10 p-5 hover:border-accent-gold transition-all block text-center">
                        <span className="text-2xl block mb-2">🔬</span>
                        <h4 className="text-sm font-semibold text-white">Whitepapers</h4>
                        <p className="text-[11px] text-white/60 mt-1">Research papers on high-temp alloys</p>
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-950 pt-24 px-6 pb-12 overflow-y-auto lg:hidden text-white">
          <div className="space-y-6">
            <a href="https://tempsens.com/about-us/" className="block text-lg font-light border-b border-white/10 pb-3">Company</a>
            <a href="https://tempsens.com/ct/temperature-sensing-solutions/" className="block text-lg font-light border-b border-white/10 pb-3">Products</a>
            <a href="https://tempsens.com/industry/steel-industry/" className="block text-lg font-light border-b border-white/10 pb-3">Industries</a>
            <a href="https://tempsens.com/investors/" className="block text-lg font-light border-b border-white/10 pb-3">Investors</a>
            <a href="https://tempsens.com/literature/" className="block text-lg font-light border-b border-white/10 pb-3">Resources</a>
            <a href="https://tempsens.com/events/" className="block text-lg font-light border-b border-white/10 pb-3">Events</a>
            <div className="pt-4">
              <a href="https://tempsens.com/contact-us/" className="btn-primary w-full justify-center">Request Quote</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

