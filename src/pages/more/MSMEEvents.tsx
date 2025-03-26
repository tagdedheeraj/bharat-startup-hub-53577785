
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Clock, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const MSMEEventsPage = () => {
  const upcomingEvents = [
    {
      title: "MSME Funding Summit 2023",
      date: "September 15, 2023",
      time: "10:00 AM - 5:00 PM",
      location: "Hotel Taj Palace, New Delhi",
      description: "A comprehensive summit focused on funding opportunities for MSMEs, featuring keynote speeches from industry leaders and networking sessions with potential investors.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Digital Transformation Workshop",
      date: "October 5, 2023",
      time: "2:00 PM - 6:00 PM",
      location: "Bharat Startup Solution Office, New Delhi",
      description: "A hands-on workshop designed to help MSMEs navigate the digital landscape and implement effective digital transformation strategies.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Compliance Masterclass for Startups",
      date: "October 20, 2023",
      time: "9:30 AM - 4:30 PM",
      location: "Virtual Event (Zoom)",
      description: "An in-depth masterclass on navigating the complex compliance landscape for startups, covering GST, company law, labor regulations, and more.",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const pastEvents = [
    {
      title: "Startup Pitch Competition",
      date: "August 10, 2023",
      location: "ITC Maurya, New Delhi",
      description: "A platform for startups to pitch their business ideas to a panel of investors and industry experts, with funding opportunities.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Legal Framework for MSMEs",
      date: "July 25, 2023",
      location: "Virtual Event (Zoom)",
      description: "A webinar discussing the legal aspects of running an MSME, including entity formation, contracts, and intellectual property protection.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Marketing Strategies for Small Businesses",
      date: "July 5, 2023",
      location: "Bharat Startup Solution Office, New Delhi",
      description: "An interactive session on effective marketing strategies for small businesses with limited budgets, focusing on digital marketing.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Funding Options for Early-Stage Startups",
      date: "June 15, 2023",
      location: "Hyatt Regency, Mumbai",
      description: "A comprehensive overview of various funding options available to early-stage startups, including angel investment, venture capital, and government schemes.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">MSME Events</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Knowledge Sharing & Networking</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join our events designed to help MSMEs and startups learn, connect, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="UPCOMING EVENTS"
            heading="Join Us at Our Next Event"
            description="Reserve your spot at our upcoming events designed to help your business succeed."
          />
          
          <div className="space-y-8 mt-12">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 h-64 lg:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <div className="bg-brand-50 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
                      Upcoming
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-brand-600 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-brand-600 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center md:col-span-2">
                        <MapPin className="h-5 w-5 text-brand-600 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Link to="/contact" className="btn-primary inline-flex items-center">
                      Register Now
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="PAST EVENTS"
            heading="Our Recent Events"
            description="Explore some of our successful past events and the value they delivered."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {pastEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
                    Past Event
                  </div>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-brand-600 mr-2" />
                    <span className="text-sm text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-brand-600 mr-2" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fadeInLeft">
              <SectionHeading
                subheading="PARTNER WITH US"
                heading="Host an Event with Bharat Startup Solution"
                description=""
                align="left"
              />
              <p className="text-gray-600 mb-6">
                Looking to organize an event for startups or MSMEs? Partner with us to leverage our expertise and network in the entrepreneurial ecosystem.
              </p>
              <p className="text-gray-600 mb-6">
                We collaborate with industry associations, educational institutions, government bodies, and corporate partners to organize impactful events that add value to the startup and MSME community.
              </p>
              <h3 className="text-xl font-bold mb-4">What We Offer:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Expert speakers and panelists from various domains</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Content development and agenda planning</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Outreach to the startup and MSME community</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Event promotion and management support</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Discuss Event Partnership
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Event collaboration"
                  className="relative z-10 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              subheading="STAY UPDATED"
              heading="Subscribe to Our Event Newsletter"
              description="Receive notifications about upcoming events, workshops, and networking opportunities."
            />
            
            <form className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MSMEEventsPage;
