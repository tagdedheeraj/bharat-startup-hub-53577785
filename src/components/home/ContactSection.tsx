
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import ContactSectionWrapper from './ContactSectionWrapper';

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
          
          <ContactSectionWrapper>
            <ContactForm />
          </ContactSectionWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
