
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="SUCCESS STORIES"
          heading="What Our Clients Say About Us"
          description="Discover how we've helped businesses like yours achieve their goals."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fadeIn" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-gray-500 font-semibold text-lg">RK</span>
              </div>
              <div>
                <h4 className="font-bold">Rahul Kumar</h4>
                <p className="text-sm text-gray-500">FinTech Startup</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600">
              "Bharat Startup Solution helped us secure ₹2 CR funding for our fintech platform. Their guidance throughout the process was invaluable."
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-gray-500 font-semibold text-lg">AP</span>
              </div>
              <div>
                <h4 className="font-bold">Ananya Patel</h4>
                <p className="text-sm text-gray-500">E-commerce MSME</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600">
              "The legal consultation services provided by Bharat Startup Solution helped us navigate complex regulations and set up our business properly."
            </p>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fadeIn" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-gray-500 font-semibold text-lg">VT</span>
              </div>
              <div>
                <h4 className="font-bold">Vikram Thakur</h4>
                <p className="text-sm text-gray-500">Manufacturing Unit</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600">
              "Their compliance services saved us countless hours and ensured we met all regulatory requirements. Highly recommend their expertise!"
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/success-stories" className="btn-primary inline-flex items-center">
            View All Success Stories
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
