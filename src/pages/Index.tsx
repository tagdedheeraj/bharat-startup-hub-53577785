
import FirstTimeVideoPopup from '@/components/FirstTimeVideoPopup';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import CTASection from '@/components/home/CTASection';
import YouTubeShortsCarousel from '@/components/YouTubeShortsCarousel';
import StatisticsSlider from '@/components/StatisticsSlider';
import PopularFundingServices from '@/components/funding/PopularFundingServices';
import ExpertiseSection from '@/components/ExpertiseSection';
import NewsHeadlines from '@/components/NewsHeadlines';
import OfferSection from '@/components/home/OfferSection';
import { useIsMobile } from '@/hooks/use-mobile';
import StatsSection from '@/components/home/StatsSection';
import { useRef, useEffect } from 'react';
import MobileOptimizer from '@/components/layout/MobileOptimizer';

const HomePage = () => {
  const isMobile = useIsMobile();
  const mainRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={mainRef} className={`overflow-hidden ${isMobile ? 'pb-16' : ''}`}>
      {/* Mobile optimizer */}
      <MobileOptimizer mainRef={mainRef} />
      
      {/* First-time visitor video popup */}
      <FirstTimeVideoPopup videoId="pq22sadiXqQ" />

      {/* Hero Section */}
      <div className={isMobile ? "rounded-b-3xl overflow-hidden shadow-lg" : ""}>
        <HeroSection />
      </div>

      {/* YouTube Shorts Section */}
      <section className={`py-16 ${isMobile ? "px-4" : ""}`}>
        <YouTubeShortsCarousel />
      </section>

      {/* Statistics Slider Section */}
      <div className={isMobile ? "rounded-3xl mx-4 shadow-lg overflow-hidden" : ""}>
        <StatisticsSlider />
      </div>

      {/* Popular Funding Services Section */}
      <div className="mt-8">
        <PopularFundingServices />
      </div>
      
      {/* Features Section */}
      <FeaturesSection />

      {/* Expertise Section */}
      <div className={isMobile ? "rounded-3xl mx-4 overflow-hidden bg-white shadow-lg my-8" : ""}>
        <ExpertiseSection />
      </div>

      {/* Stats Section - Our Impact in Numbers */}
      <StatsSection />
      
      {/* News Headlines Section */}
      <NewsHeadlines />

      {/* Offer Section */}
      <div className={isMobile ? "rounded-3xl mx-4 overflow-hidden shadow-lg my-8" : ""}>
        <OfferSection />
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Form Section */}
      <ContactSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default HomePage;
