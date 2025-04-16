
import HeroSection from '@/components/certificate-marketing/HeroSection';
import AboutSection from '@/components/certificate-marketing/AboutSection';
import EssentialCertificationsSection from '@/components/certificate-marketing/EssentialCertificationsSection';
import IndustryCertificationsSection from '@/components/certificate-marketing/IndustryCertificationsSection';
import ProcessSection from '@/components/certificate-marketing/ProcessSection';
import BenefitsSection from '@/components/certificate-marketing/BenefitsSection';
import FAQSection from '@/components/certificate-marketing/FAQSection';
import CTASection from '@/components/certificate-marketing/CTASection';

const CertificateMarketingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <EssentialCertificationsSection />
      <IndustryCertificationsSection />
      <ProcessSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default CertificateMarketingPage;
