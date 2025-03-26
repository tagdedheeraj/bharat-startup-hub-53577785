
import SectionHeading from '@/components/SectionHeading';
import { Award, Target, Clock, Users, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Our Story Section */}
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
                <img
                  src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Our team in office"
                  className="relative z-10 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="MISSION & VISION"
            heading="Driven by Purpose"
            description="Our guiding principles that shape everything we do."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-card rounded-xl p-8 animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
                <Target className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower Indian entrepreneurs by providing accessible, comprehensive business solutions that simplify their journey from ideation to success, enabling them to focus on innovation and growth.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-8 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="bg-brand-100 p-3 rounded-lg inline-block mb-4">
                <Award className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the catalyst for a new era of entrepreneurship in India, where every innovative idea has the opportunity to transform into a successful business that contributes to national growth and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="CORE VALUES"
            heading="The Principles That Guide Us"
            description="At Bharat Startup Solution, we're driven by these fundamental values in everything we do."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client-Centric</h3>
              <p className="text-gray-600">
                Our clients' success is our priority. We tailor our solutions to meet their unique needs and challenges.
              </p>
            </div>
            
            <div className="text-center animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every service we provide, ensuring the highest quality and professional standards.
              </p>
            </div>
            
            <div className="text-center animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices, building trust with our clients.
              </p>
            </div>
            
            <div className="text-center animate-fadeIn" style={{ animationDelay: "400ms" }}>
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and continuously evolve our services to meet the changing needs of the business landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR TEAM"
            heading="Meet the Experts Behind Bharat Startup Solution"
            description="A team of dedicated professionals with expertise in various domains of business development."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Rajesh Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Rajesh Sharma</h3>
                <p className="text-brand-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years of experience in business consulting and venture capital, Rajesh leads our strategic vision.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Priya Verma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Priya Verma</h3>
                <p className="text-brand-600 mb-4">Legal Director</p>
                <p className="text-gray-600">
                  A corporate law expert with specialization in startup regulations and compliance frameworks.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Amit Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Amit Patel</h3>
                <p className="text-brand-600 mb-4">Head of Funding</p>
                <p className="text-gray-600">
                  Former investment banker with extensive connections in the venture capital and private equity sectors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/more/experts" className="btn-primary inline-flex items-center">
              View Full Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
