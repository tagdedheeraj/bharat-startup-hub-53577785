
import SectionHeading from '@/components/SectionHeading';

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">We Are Bharat Startup Solution</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your trusted partner in navigating the complex journey of building and growing a successful business in India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
