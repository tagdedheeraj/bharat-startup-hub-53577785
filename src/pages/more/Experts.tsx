
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const ExpertsPage = () => {
  const experts = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      expertise: "Venture Capital, Business Strategy",
      experience: "20+ years",
      bio: "Rajesh is a seasoned entrepreneur and venture capitalist with over two decades of experience in building and scaling businesses across various sectors. Before founding Bharat Startup Solution, he was a partner at a leading VC firm where he led investments in over 30 startups.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "#"
    },
    {
      name: "Priya Verma",
      position: "Legal Director",
      expertise: "Corporate Law, Compliance",
      experience: "15+ years",
      bio: "Priya is a corporate law expert with specialization in startup regulations and compliance frameworks. She has previously worked with top law firms in India and has helped over 200 startups navigate complex legal challenges.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "#"
    },
    {
      name: "Amit Patel",
      position: "Head of Funding",
      expertise: "Investment Banking, Fundraising",
      experience: "18+ years",
      bio: "Amit brings his extensive experience in investment banking to help startups secure funding. He has a strong network in the venture capital and private equity sectors and has facilitated funding of over ₹500 Crores for various businesses.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "#"
    },
    {
      name: "Neha Gupta",
      position: "Marketing Director",
      expertise: "Digital Marketing, Brand Development",
      experience: "12+ years",
      bio: "Neha is a marketing strategist with expertise in digital marketing and brand development. She has worked with Fortune 500 companies and startups alike, helping them establish strong market presence and customer acquisition strategies.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "#"
    },
    {
      name: "Vikram Singh",
      position: "Technology Advisor",
      expertise: "Technology Strategy, Digital Transformation",
      experience: "14+ years",
      bio: "Vikram is a technology strategist who helps businesses leverage the latest technologies for growth. He has led digital transformation initiatives for various organizations and provides valuable guidance on technology adoption.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "#"
    },
    {
      name: "Anjali Desai",
      position: "Financial Consultant",
      expertise: "Financial Planning, Investment Strategy",
      experience: "16+ years",
      bio: "Anjali is a financial expert who helps startups with financial planning, forecasting, and investment strategies. She has previously worked with a Big Four accounting firm and brings valuable insights into financial management.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      linkedin: "#"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Our Experts</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Meet the Team Behind Your Success</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of industry experts brings decades of experience to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="LEADERSHIP"
            heading="Our Core Team"
            description="Meet the visionaries leading Bharat Startup Solution."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {experts.slice(0, 3).map((expert, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-fadeIn h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    {expert.experience} Experience
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{expert.name}</h3>
                  <p className="text-brand-600 font-medium mb-2">{expert.position}</p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Expertise: </span>{expert.expertise}
                  </p>
                  <p className="text-gray-600 mb-4 flex-grow">{expert.bio}</p>
                  <div className="flex items-center space-x-4 mt-4">
                    <a 
                      href={expert.linkedin} 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={`mailto:${expert.name.toLowerCase().replace(' ', '.')}@bharatstartup.com`} 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Experts */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="DOMAIN EXPERTS"
            heading="Specialists in Their Fields"
            description="Our team of domain experts brings specialized knowledge to address your specific needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {experts.slice(3).map((expert, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-fadeIn h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    {expert.experience} Experience
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{expert.name}</h3>
                  <p className="text-brand-600 font-medium mb-2">{expert.position}</p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Expertise: </span>{expert.expertise}
                  </p>
                  <p className="text-gray-600 mb-4 flex-grow">{expert.bio}</p>
                  <div className="flex items-center space-x-4 mt-4">
                    <a 
                      href={expert.linkedin} 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={`mailto:${expert.name.toLowerCase().replace(' ', '.')}@bharatstartup.com`} 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="ADVISORY BOARD"
            heading="Industry Veterans Guiding Our Vision"
            description="Our advisory board comprises industry leaders who provide strategic guidance."
          />
          
          <div className="glass-card rounded-xl p-8 mt-12 animate-fadeIn">
            <p className="text-gray-600 mb-8">
              In addition to our core team and domain experts, Bharat Startup Solution benefits from the guidance of an advisory board comprising industry veterans. These accomplished professionals bring diverse perspectives and rich experience from various sectors, helping shape our strategic direction and enhance our service offerings.
            </p>
            
            <div className="flex justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Connect with Our Experts
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fadeInLeft">
              <SectionHeading
                subheading="OUR NETWORK"
                heading="Extending Beyond Our Team"
                description=""
                align="left"
              />
              <p className="text-gray-600 mb-6">
                Beyond our in-house experts, we maintain a vast network of industry specialists, consultants, and service providers who can be engaged for specific project requirements.
              </p>
              <p className="text-gray-600 mb-6">
                This extended network allows us to provide comprehensive solutions across various domains, ensuring that your business has access to the best expertise for any challenge it faces.
              </p>
              <p className="text-gray-600 mb-8">
                Our carefully curated network includes:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Venture capitalists and angel investors</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Industry-specific technical experts</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Government liaison specialists</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Marketing and branding professionals</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors"
              >
                Explore our extended network
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Professional network"
                  className="relative z-10 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Our Experts?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team and discover how our expertise can help your business grow.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertsPage;
