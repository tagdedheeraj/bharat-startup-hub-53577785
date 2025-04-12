
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subheading="GET STARTED TODAY"
            heading="Contact Us"
            description="Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible."
          />
          
          <div className="mt-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-india-saffron/20 to-india-green/20 transform rotate-1 rounded-lg"></div>
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
