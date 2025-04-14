
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import HeroSection from '@/components/funding/HeroSection';
import FundingOptionsSection from '@/components/funding/FundingOptionsSection';
import ProcessSection from '@/components/funding/ProcessSection';
import BenefitsSection from '@/components/funding/BenefitsSection';
import FAQSection from '@/components/funding/FAQSection';
import CTASection from '@/components/funding/CTASection';
import LegalDisclaimer from '@/components/funding/LegalDisclaimer';

const FundingConsultationPage = () => {
  const { toast } = useToast();
  
  // Simpler cleanup that doesn't interfere with dialog functionality
  useEffect(() => {
    console.log("FundingConsultationPage mounted");
    
    // Only show a toast notification
    setTimeout(() => {
      toast({
        title: "Page Ready",
        description: "Funding consultation options are now available.",
        duration: 3000,
      });
    }, 1000);
    
    return () => {
      // No aggressive cleanup on unmount
      console.log("FundingConsultationPage unmounted");
    };
  }, [toast]);

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
