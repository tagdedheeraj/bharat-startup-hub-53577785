
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import HeroSection from '@/components/funding/HeroSection';
import FundingOptionsSection from '@/components/funding/FundingOptionsSection';
import ProcessSection from '@/components/funding/ProcessSection';
import BenefitsSection from '@/components/funding/BenefitsSection';
import FAQSection from '@/components/funding/FAQSection';
import CTASection from '@/components/funding/CTASection';
import LegalDisclaimer from '@/components/funding/LegalDisclaimer';
import SectionImage from '@/components/shared/SectionImage';

const FundingConsultationPage = () => {
  const { toast } = useToast();
  
  // Simpler cleanup that doesn't interfere with dialog functionality
  useEffect(() => {
    console.log("FundingConsultationPage mounted");
    
    // Only show a toast notification
    setTimeout(() => {
      toast({
        title: "Page Ready",
        description: "Funding consultation options are now available. Click the Support button if you need assistance.",
        duration: 5000,
      });
    }, 1000);
    
    return () => {
      // No aggressive cleanup on unmount
      console.log("FundingConsultationPage unmounted");
    };
  }, [toast]);

  return (
    <div className="pb-20">
      <SectionImage 
        pageName="funding-consultation"
        sectionName="hero"
        fallbackSrc="public/lovable-uploads/0433a3aa-ca15-48e9-a229-33964e20a4fd.png"
        className="w-full h-96 object-cover rounded-lg shadow-lg"
        alt="Bharat Startup Solution Team"
      />
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
