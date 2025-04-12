
import DisclaimerAlert from '@/components/funding/DisclaimerAlert';
import HeroSection from '@/components/funding/HeroSection';
import FundingOptionsSection from '@/components/funding/FundingOptionsSection';
import ProcessSection from '@/components/funding/ProcessSection';
import BenefitsSection from '@/components/funding/BenefitsSection';
import FAQSection from '@/components/funding/FAQSection';
import CTASection from '@/components/funding/CTASection';

const FundingConsultationPage = () => {
  return (
    <div>
      <DisclaimerAlert />
      <HeroSection />
      <FundingOptionsSection />
      <ProcessSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default FundingConsultationPage;
