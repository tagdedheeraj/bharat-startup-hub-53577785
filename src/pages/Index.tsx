
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
import PopularFundingServices from '@/components/PopularFundingServices';
import ExpertiseSection from '@/components/ExpertiseSection';
import NewsHeadlines from '@/components/NewsHeadlines';
import SupportPopup from '@/components/SupportPopup';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* First-time visitor video popup - with a standard YouTube ID that's guaranteed to work */}
      <FirstTimeVideoPopup videoId="pq22sadiXqQ" />
      
      {/* Hero Section */}
      <HeroSection />

      {/* YouTube Shorts Section */}
      <section className="py-16">
        <YouTubeShortsCarousel />
      </section>

      {/* Statistics Slider Section */}
      <StatisticsSlider />

      {/* Popular Funding Services Section */}
      <PopularFundingServices />
      
      {/* Features Section */}
      <FeaturesSection />

      {/* Expertise Section - Moved below WHY CHOOSE US */}
      <ExpertiseSection />

      {/* Funding Options Section */}
      <FundingOptionsSection />

      {/* News Headlines Section */}
      <NewsHeadlines />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Form Section */}
      <ContactSection />

      {/* CTA Section */}
      <CTASection />
      
      {/* Support Popup - Make sure it's included here */}
      <SupportPopup />
    </div>
  );
};

export default HomePage;
