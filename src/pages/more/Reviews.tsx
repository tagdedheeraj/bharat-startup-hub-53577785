
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ThumbsUp, Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import YouTubeShortsCarousel from '@/components/YouTubeShortsCarousel';

const ReviewsPage = () => {
  const featuredReviews = [
    {
      name: "Rahul Kumar",
      company: "FinTech Innovations",
      service: "Funding Consultation",
      rating: 5,
      review: "Bharat Startup Solution helped us secure ₹2 CR funding for our fintech platform. Their guidance throughout the process was invaluable. The team's expertise in preparing our pitch deck and connecting us with the right investors made all the difference. Highly recommended for any startup looking for funding support.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Ananya Patel",
      company: "EcoRetail India",
      service: "Legal Consultation",
      rating: 5,
      review: "The legal consultation services provided by Bharat Startup Solution helped us navigate complex regulations and set up our business properly. Their team of legal experts provided clear guidance on compliance requirements, contract drafting, and intellectual property protection. Their support has been crucial in establishing a solid legal foundation for our business.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Vikram Thakur",
      company: "TechManufacture",
      service: "Compliance Services",
      rating: 5,
      review: "Their compliance services saved us countless hours and ensured we met all regulatory requirements. The team's attention to detail and proactive approach helped us avoid potential compliance issues. We can now focus on our core business operations without worrying about regulatory challenges. I would definitely recommend their services to other manufacturing units.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const clientReviews = [
    {
      name: "Priya Sharma",
      company: "HealthTech Solutions",
      service: "Funding & Legal Support",
      rating: 5,
      review: "Comprehensive support that helped us secure funding and establish proper legal frameworks. Excellent service!",
    },
    {
      name: "Ajay Verma",
      company: "EduTech Innovations",
      service: "Certificate Marketing",
      rating: 4,
      review: "The certificate marketing services helped establish our credibility in the market. Very satisfied with the results.",
    },
    {
      name: "Neha Gupta",
      company: "Sustainable Fashion",
      service: "MSME Registration",
      rating: 5,
      review: "Smooth and hassle-free MSME registration process. The team was responsive and knowledgeable.",
    },
    {
      name: "Sanjay Mehta",
      company: "Agritech Solutions",
      service: "Funding Consultation",
      rating: 5,
      review: "Successfully secured ₹1.5 CR funding with their expert guidance. Excellent network of investors!",
    },
    {
      name: "Aarti Singh",
      company: "Digital Marketing Agency",
      service: "Legal & Compliance",
      rating: 4,
      review: "Comprehensive legal and compliance support that helped us avoid potential regulatory issues.",
    },
    {
      name: "Rajiv Kapoor",
      company: "IoT Devices Manufacturer",
      service: "Certificate Marketing & Funding",
      rating: 5,
      review: "The dual approach of certification and funding support gave our business the boost it needed.",
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-gradient-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Client Reviews</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">What Our Clients Say About Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how we've helped businesses like yours achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="section-light py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn">
              <div className="flex justify-center mb-4">
                <Star className="h-10 w-10 text-yellow-400" fill="#FACC15" />
              </div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <div className="flex justify-center mb-4">
                <ThumbsUp className="h-10 w-10 text-brand-600" />
              </div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-brand-600" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="section-medium py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FEATURED REVIEWS"
            heading="Hear From Our Clients"
            description="Read what our clients have to say about their experience working with us."
          />
          
          <div className="space-y-8 mt-12">
            {featuredReviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gray-100 p-6 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-1">{review.name}</h3>
                    <p className="text-sm text-gray-600 text-center mb-2">{review.company}</p>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400" fill="#FACC15" />
                      ))}
                    </div>
                  </div>
                  <div className="md:w-3/4 p-6 md:p-8">
                    <div className="bg-brand-50 text-brand-700 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                      {review.service}
                    </div>
                    <p className="text-gray-600 italic text-lg leading-relaxed">"{review.review}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Client Reviews */}
      <section className="section-gradient-2 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="MORE TESTIMONIALS"
            heading="What Others Are Saying"
            description="More reviews from our satisfied clients across various industries."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {clientReviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="#FACC15" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.review}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center">
                    <span>{review.company}</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="text-brand-600">{review.service}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Shorts Section */}
      <section className="section-light py-16">
        <YouTubeShortsCarousel />
      </section>

      {/* Leave a Review */}
      <section className="section-gradient-3 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              subheading="SHARE YOUR EXPERIENCE"
              heading="Been Our Client? Leave a Review"
              description="We value your feedback. Share your experience of working with us."
            />
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mt-12 animate-fadeIn">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Used</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="funding-consultation">Funding Consultation</option>
                    <option value="certificate-marketing">Certificate Marketing</option>
                    <option value="legal-consultation">Legal Consultation</option>
                    <option value="msme-registration">MSME Registration</option>
                    <option value="compliance">Compliance Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="focus:outline-none"
                        aria-label={`Rate ${rating} stars`}
                      >
                        <Star className="w-7 h-7 text-gray-300 hover:text-yellow-400" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                  <textarea
                    id="review"
                    name="review"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="Share your experience working with us"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button type="submit" className="btn-primary">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Start your journey with Bharat Startup Solution and experience the difference our expertise can make for your business.
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

export default ReviewsPage;
