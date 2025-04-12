
import HeroSection from '@/components/funding/HeroSection';
import FundingOptionsSection from '@/components/funding/FundingOptionsSection';
import ProcessSection from '@/components/funding/ProcessSection';
import BenefitsSection from '@/components/funding/BenefitsSection';
import FAQSection from '@/components/funding/FAQSection';
import CTASection from '@/components/funding/CTASection';
import LegalDisclaimer from '@/components/funding/LegalDisclaimer';
import { useEffect } from 'react';

const FundingConsultationPage = () => {
  // Force rerender of any portals when mounting this page
  useEffect(() => {
    // This helps ensure bottom navigation is visible
    const refreshBottomNav = () => {
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav) {
        bottomNav.classList.remove('hidden');
      }
    };
    
    refreshBottomNav();
    // Small delay to ensure DOM is fully loaded
    const timer = setTimeout(refreshBottomNav, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-20"> {/* Added padding to bottom to ensure content doesn't get hidden behind the nav */}
      <HeroSection />
      <FundingOptionsSection />
      <ProcessSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <LegalDisclaimer />
    </div>
  );
};

export default FundingConsultationPage;
