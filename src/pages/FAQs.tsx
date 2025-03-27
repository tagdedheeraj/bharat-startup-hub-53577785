
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";

const FAQs = () => {
  const faqs = [
    {
      question: "What services does Bharat Startup Solution offer?",
      answer: "We offer a wide range of services for startups and MSMEs including funding consultation, certificate marketing, legal consultation, CA services, IT solutions, and more. Our goal is to provide comprehensive support for your business growth."
    },
    {
      question: "How can I apply for funding through your services?",
      answer: "You can apply for funding by visiting our funding consultation page and filling out the application form. Our team will review your application and get in touch with you to discuss the next steps in the funding process."
    },
    {
      question: "What types of certificates do you help businesses obtain?",
      answer: "We assist businesses in obtaining various certificates including MSME Registration, Startup India Recognition, ISO Certification, GST Registration, and many other industry-specific certifications that can help boost your business credibility."
    },
    {
      question: "How long does the legal consultation process take?",
      answer: "The duration of our legal consultation process varies depending on the complexity of your legal needs. Generally, initial consultations take 1-2 business days, while more complex legal matters may take longer to resolve."
    },
    {
      question: "What CA services do you provide?",
      answer: "Our CA services include accounting, taxation, GST compliance, income tax filing, trademark registration, payroll management, and other financial compliance services tailored to your business needs."
    },
    {
      question: "Do you offer IT services for startups?",
      answer: "Yes, we offer comprehensive IT solutions including web development, app development, cloud solutions, database management, server management, and cybersecurity services to help startups build and maintain their digital infrastructure."
    },
    {
      question: "How much funding can I expect to secure through your services?",
      answer: "The amount of funding you can secure depends on various factors such as your business model, growth potential, current traction, and market opportunity. We help businesses secure funding ranging from ₹10 lakhs to ₹5 crores."
    },
    {
      question: "Do you provide ongoing support after service completion?",
      answer: "Yes, we provide ongoing support to our clients even after the completion of our services. We believe in building long-term relationships and helping our clients succeed at every stage of their business journey."
    },
  ];

  return (
    <div className="py-12">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
        centered
      />
      
      <div className="mt-8 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-5 py-4 hover:bg-gray-50 text-gray-800 font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 py-4 bg-white text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center p-6 bg-brand-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Still have questions?
          </h3>
          <p className="mb-5 text-gray-600">
            Our team is here to help. Contact us for more information about our services.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
