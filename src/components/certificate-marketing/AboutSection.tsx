
import SectionHeading from '@/components/SectionHeading';
import SectionImage from '@/components/shared/SectionImage';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fadeInLeft">
            <SectionHeading
              subheading="WHY CERTIFICATIONS MATTER"
              heading="Certifications Unlock Growth Opportunities"
              description=""
              align="left"
            />
            <p className="text-gray-600 mb-6">
              In today's competitive business landscape, having the right certifications can significantly impact your business success. For MSMEs and startups, these certifications serve as official validation of your quality, processes, and commitment to excellence.
            </p>
            <p className="text-gray-600 mb-6">
              Government-recognized certifications like MSME and Startup India registration open doors to exclusive benefits, funding opportunities, tax exemptions, and preferential treatment in government procurement.
            </p>
            <p className="text-gray-600">
              Our expert team guides you through the entire certification process and helps you leverage these certifications to build trust, win customers, and access the full range of benefits available to certified businesses.
            </p>
          </div>
          <div className="lg:w-1/2 animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform -rotate-3"></div>
              <SectionImage
                pageName="certificate-marketing"
                sectionName="about"
                fallbackSrc="/lovable-uploads/6566b2a8-7eca-450d-a989-1c3f27d3fdcd.png"
                alt="Business certification"
                className="relative z-10 rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
