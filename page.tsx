import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandStatement from '@/components/sections/BrandStatement';
import WhatWeDo from '@/components/sections/WhatWeDo';
import CustomEngineering from '@/components/sections/CustomEngineering';
import Manufacturing from '@/components/sections/Manufacturing';
import IndustriesSection from '@/components/sections/IndustriesSection';
import GlobalSection from '@/components/sections/GlobalSection';
import NumbersSection from '@/components/sections/NumbersSection';
import DifferenceSection from '@/components/sections/DifferenceSection';
import CalibrationSection from '@/components/sections/CalibrationSection';
import KnowledgeSection from '@/components/sections/KnowledgeSection';
import NewsSection from '@/components/sections/NewsSection';
import FinalConversion from '@/components/sections/FinalConversion';
import FinalBrandStatement from '@/components/sections/FinalBrandStatement';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-red selection:text-white">
      {/* Existing Unchanged Navbar & Hero */}
      <Navbar />
      <Hero />

      {/* Post-Hero Sections Architecture */}
      <BrandStatement />
      <WhatWeDo />
      <CustomEngineering />
      <Manufacturing />
      <IndustriesSection />
      <GlobalSection />
      <NumbersSection />
      <DifferenceSection />
      <CalibrationSection />
      <KnowledgeSection />
      <NewsSection />
      <FinalConversion />
      <FinalBrandStatement />

      {/* Section 15: Footer */}
      <Footer />
    </main>
  );
}
