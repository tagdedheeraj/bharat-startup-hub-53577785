import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const SuccessStoriesPage = () => {
  const featuredStories = [
    {
      name: "TechInnovate Solutions",
      industry: "Software Development",
      service: "Funding Consultation",
      amount: "₹2.5 CR",
      description: "A promising software startup that secured significant funding to scale their innovative AI-powered business solution.",
      testimonial: "With Bharat Startup Solution's guidance, we secured ₹2.5 CR funding that transformed our business. Their expertise in preparing our pitch and connecting us with the right investors was invaluable.",
      person: "Raj Malhotra",
      position: "Founder & CEO",
      image: "public/lovable-uploads/0433a3aa-ca15-48e9-a229-33964e20a4fd.png"
    },
    {
      name: "GreenHealth Organics",
      industry: "Health & Wellness",
      service: "Legal Consultation",
      amount: "",
      description: "An organic health supplements company that navigated complex regulatory requirements with our legal guidance.",
      testimonial: "The legal team at Bharat Startup Solution helped us navigate the complex regulatory landscape of the health supplements industry. Their expertise ensured we were fully compliant while scaling our operations.",
      person: "Priya Sharma",
      position: "Co-founder",
      image: "public/lovable-uploads/7202be4c-4f99-4147-bc69-d18b503ec173.png"
    },
    {
      name: "EcoManufacture India",
      industry: "Manufacturing",
      service: "Funding & Compliance",
      amount: "₹3 CR",
      description: "A sustainable manufacturing unit that secured funding and streamlined their compliance processes.",
      testimonial: "Bharat Startup Solution's comprehensive approach helped us not only secure ₹3 CR in funding but also establish robust compliance systems. This dual support has been crucial to our rapid growth.",
      person: "Vikram Singh",
      position: "Managing Director",
      image: "public/lovable-uploads/0433a3aa-ca15-48e9-a229-33964e20a4fd.png"
    }
  ];

  const moreStories = [
    {
      name: "FoodTech Express",
      industry: "Food Delivery",
      service: "Funding & Marketing",
      result: "Secured ₹1.8 CR funding and increased market presence",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "EduLearn Platform",
      industry: "EdTech",
      service: "Legal & Certificate Marketing",
      result: "Achieved industry certifications and legal compliance",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "ArtCraft India",
      industry: "Handicrafts",
      service: "MSME Registration & Funding",
      result: "Registered as MSME and secured ₹75 Lac funding",
      image: "https://images.unsplash.com/photo-1509099652299-30938b0aeb63?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "TravelBuddy Apps",
      industry: "Travel Tech",
      service: "Funding Consultation",
      result: "Raised ₹2.2 CR in Series A funding",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "FashionTrend Retail",
      industry: "Fashion",
      service: "Legal & Compliance",
      result: "Streamlined legal structure and compliance processes",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "AgriTech Solutions",
      industry: "Agriculture",
      service: "Funding & Certificate Marketing",
      result: "Secured ₹1.5 CR funding and ISO certification",
      image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Real Businesses, Real Results</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how we've helped startups and MSMEs across India achieve their business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FEATURED STORIES"
            heading="Transforming Business Journeys"
            description="Learn how our services have helped these businesses overcome challenges and achieve success."
          />
          
          <div className="space-y-16 mt-12">
            {featuredStories.map((story, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 animate-fadeIn`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}></div>
                    <img
                      src={story.image}
                      alt={story.name}
                      className="relative z-10 rounded-xl shadow-xl object-cover h-72 w-full"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-brand-50 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-3 inline-block">
                    {story.industry} | {story.service}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                  {story.amount && (
                    <p className="text-lg font-semibold text-brand-600 mb-3">Funding Secured: {story.amount}</p>
                  )}
                  <p className="text-gray-600 mb-6">{story.description}</p>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm mb-6">
                    <div className="flex items-start">
                      <Quote className="h-8 w-8 text-brand-200 mr-3 flex-shrink-0" />
                      <p className="italic text-gray-600">{story.testimonial}</p>
                    </div>
                    <div className="mt-4 pl-11">
                      <p className="font-semibold">{story.person}</p>
                      <p className="text-sm text-gray-500">{story.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="MORE SUCCESS STORIES"
            heading="Our Growing Portfolio of Success"
            description="Explore more businesses that have thrived with our support."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {moreStories.map((story, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 animate-fadeIn h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    {story.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    <span className="font-medium">Service: </span>{story.service}
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium">
                      <span className="text-brand-600">Result: </span>{story.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="OUR IMPACT"
            heading="The Numbers That Define Our Success"
            description="A snapshot of our achievements in helping businesses grow and succeed."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold text-brand-600 mb-2">500+</div>
              <div className="text-lg font-medium">Startups Funded</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold text-brand-600 mb-2">₹1000Cr+</div>
              <div className="text-lg font-medium">Funding Facilitated</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <div className="text-4xl font-bold text-brand-600 mb-2">98%</div>
              <div className="text-lg font-medium">Client Satisfaction</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "400ms" }}>
              <div className="text-4xl font-bold text-brand-600 mb-2">25+</div>
              <div className="text-lg font-medium">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join our growing list of successful clients and take your business to new heights.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
