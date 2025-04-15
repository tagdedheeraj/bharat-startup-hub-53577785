
import SectionHeading from '@/components/SectionHeading';
import SectionImage from '@/components/shared/SectionImage';

const OurStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fadeInLeft">
            <SectionHeading
              subheading="OUR STORY"
              heading="Empowering Indian Startups Since 2010"
              description=""
              align="left"
            />
            <p className="text-gray-600 mb-6">
              Bharat Startup Solution was founded with a clear mission: to simplify the startup journey for Indian entrepreneurs and MSME owners. We recognized the challenges that new businesses face in navigating complex regulations, securing funding, and establishing market presence.
            </p>
            <p className="text-gray-600 mb-6">
              With our team of experienced professionals from various domains including finance, law, marketing, and business strategy, we've helped over 1000+ startups and MSMEs turn their visions into successful businesses.
            </p>
            <p className="text-gray-600">
              Today, we continue to innovate and expand our services to meet the evolving needs of Indian entrepreneurs, always staying true to our founding principles of integrity, excellence, and client success.
            </p>
          </div>
          <div className="md:w-1/2 animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform -rotate-3"></div>
              <SectionImage
                pageName="about"
                sectionName="story"
                fallbackSrc="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Our team in office"
                className="relative z-10 rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
