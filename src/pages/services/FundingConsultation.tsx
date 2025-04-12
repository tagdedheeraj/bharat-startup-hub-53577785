
import HeroSection from '@/components/funding/HeroSection';
import FundingOptionsSection from '@/components/funding/FundingOptionsSection';
import ProcessSection from '@/components/funding/ProcessSection';
import BenefitsSection from '@/components/funding/BenefitsSection';
import FAQSection from '@/components/funding/FAQSection';
import CTASection from '@/components/funding/CTASection';
import LegalDisclaimer from '@/components/funding/LegalDisclaimer';
import { useEffect } from 'react';
import { ensureBottomNavVisibility } from '@/utils/portalCleanup';

const FundingConsultationPage = () => {
  // Force rerender of any portals when mounting this page
  useEffect(() => {
    console.log("FundingConsultationPage mounted - ensuring bottom nav visibility");
    
    // Function to ensure bottom navigation is visible
    const refreshBottomNav = () => {
      ensureBottomNavVisibility();
      const bottomNav = document.querySelector('.fixed.bottom-0');
      if (bottomNav) {
        bottomNav.classList.remove('hidden');
        console.log("Bottom nav visibility forced on funding page");
      }
    };
    
    // Run multiple times to ensure it catches any potential timing issues
    refreshBottomNav();
    const timer1 = setTimeout(refreshBottomNav, 100);
    const timer2 = setTimeout(refreshBottomNav, 500);
    const timer3 = setTimeout(refreshBottomNav, 1000);
    const timer4 = setTimeout(refreshBottomNav, 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
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
