
import SectionHeading from '@/components/SectionHeading';

const ProcessSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="OUR PROCESS"
          heading="How We Help You Get Certified"
          description="Our structured approach ensures you get the most value from your certifications."
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-100"></div>
            
            {/* Step 1 */}
            <div className="relative mb-8 md:mb-0 animate-fadeIn">
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="order-2 md:order-1 md:w-5/12">
                  <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">Assessment & Eligibility</h3>
                    <p className="text-gray-600">
                      We start by assessing your business details, industry category, and eligibility for various certifications that would benefit your specific business needs.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex md:justify-center mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                    <span className="font-bold">1</span>
                  </div>
                </div>
                <div className="order-3 md:w-5/12"></div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative mb-8 md:mb-0 md:mt-8 animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="order-2 md:w-5/12"></div>
                <div className="order-1 flex md:justify-center mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                    <span className="font-bold">2</span>
                  </div>
                </div>
                <div className="order-3 md:w-5/12">
                  <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">Documentation & Preparation</h3>
                    <p className="text-gray-600">
                      We help you prepare all required documentation, financial statements, and business information needed for the certification application process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative mb-8 md:mb-0 md:mt-8 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="order-2 md:order-1 md:w-5/12">
                  <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">Application Process</h3>
                    <p className="text-gray-600">
                      We guide you through the complete application process, handling form submissions, digital signatures, and ensuring all information is accurate.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex md:justify-center mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                    <span className="font-bold">3</span>
                  </div>
                </div>
                <div className="order-3 md:w-5/12"></div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative mb-8 md:mb-0 md:mt-8 animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="order-2 md:w-5/12"></div>
                <div className="order-1 flex md:justify-center mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                    <span className="font-bold">4</span>
                  </div>
                </div>
                <div className="order-3 md:w-5/12">
                  <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">Certification & Verification</h3>
                    <p className="text-gray-600">
                      We follow up with relevant authorities, address any queries, and ensure the certification process moves smoothly toward completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="relative md:mt-8 animate-fadeIn" style={{ animationDelay: "400ms" }}>
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <div className="order-2 md:order-1 md:w-5/12">
                  <div className="p-6 rounded-xl bg-white shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">Benefit Activation</h3>
                    <p className="text-gray-600">
                      Once certified, we help you access and activate all the benefits available to you through your certifications, ensuring maximum value for your business.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex md:justify-center mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center z-10">
                    <span className="font-bold">5</span>
                  </div>
                </div>
                <div className="order-3 md:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
