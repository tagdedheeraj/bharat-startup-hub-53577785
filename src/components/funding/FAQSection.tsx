
import { HelpCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQ[] = [
    {
      question: "How long does the funding process typically take?",
      answer: "The funding process generally takes 2-3 months from initial consultation to fund disbursement. However, this can vary depending on the complexity of your business, funding amount, and investor requirements."
    },
    {
      question: "What documents will I need to prepare?",
      answer: "You'll need to prepare a business plan, financial statements, financial projections, market analysis, team information, and details about how you plan to use the funds. We'll guide you through this process and help you prepare these documents."
    },
    {
      question: "What types of funding do you help secure?",
      answer: "We help businesses secure various types of funding including equity investment, debt financing, government grants, and hybrid financing options. The type of funding recommended will depend on your business model, stage, and specific requirements."
    },
    {
      question: "What is your success rate in securing funding?",
      answer: "We have a success rate of over 75% in securing funding for our clients. However, it's important to note that success depends on various factors including business viability, market conditions, and the quality of your business plan."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="FREQUENTLY ASKED QUESTIONS"
          heading="Get Answers to Your Funding Questions"
          description="Here are some common questions about our funding consultation services."
        />
        
        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 animate-fadeIn" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
