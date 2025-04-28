
import FirstTimeVideoPopup from '@/components/FirstTimeVideoPopup';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import FundingOptionsSection from '@/components/home/FundingOptionsSection';
import StatsSection from '@/components/home/StatsSection';
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

const HomePage = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`overflow-hidden ${isMobile ? 'pb-16' : ''}`}>
      {/* First-time visitor video popup - with a standard YouTube ID */}
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

      {/* Funding Options Section - Directly after Expertise Section */}
      <FundingOptionsSection />

      {/* News Headlines Section - Directly after Funding Options */}
      <NewsHeadlines />

      {/* Offer Section - moved below News Headlines */}
      <div className={isMobile ? "rounded-3xl mx-4 overflow-hidden shadow-lg my-8" : ""}>
        <OfferSection />
      </div>

      {/* Stats Section */}
      <StatsSection />

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
