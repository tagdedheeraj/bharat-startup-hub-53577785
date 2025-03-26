
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Show success message
      toast.success('Your message has been sent successfully!', {
        description: 'We will get back to you shortly.',
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions or ready to start? We're here to help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Contact Form */}
            <div className="lg:w-3/5 animate-fadeInLeft">
              <SectionHeading
                subheading="SEND A MESSAGE"
                heading="Let's Start a Conversation"
                description="Fill out the form below and we'll get back to you as soon as possible."
                align="left"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
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
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full md:w-auto btn-primary flex items-center justify-center"
                  >
                    {submitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Right Column - Contact Information */}
            <div className="lg:w-2/5 animate-fadeInRight">
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-50 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Office Address</h4>
                      <p className="text-gray-600 mt-1">
                        7th Floor - 727, Arved Transcube Plaza, 132 Ft. Ring Road,<br />
                        opp. Ranip BRTS, Ranip, Ahmedabad - 382480, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-50 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-gray-600 mt-1">
                        <a href="mailto:info@bharatstartup.com" className="hover:text-brand-600">
                          info@bharatstartup.com
                        </a><br />
                        <a href="mailto:support@bharatstartup.com" className="hover:text-brand-600">
                          support@bharatstartup.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-50 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:+917046396020" className="hover:text-brand-600">
                          7046-396-020
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FIND US"
            heading="Our Location"
            description="Visit our office in the heart of Ahmedabad's business district."
          />
          
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-gray-200 animate-fadeIn">
            {/* Replace with actual map embed */}
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Map Embed Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="QUICK ANSWERS"
            heading="Frequently Asked Questions"
            description="Find quick answers to common questions about contacting us."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            <div className="glass-card rounded-xl p-6 animate-fadeIn">
              <h3 className="text-xl font-bold mb-3">How quickly will you respond to my inquiry?</h3>
              <p className="text-gray-600">
                We strive to respond to all inquiries within 24 business hours. For urgent matters, we recommend calling our support line directly.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "100ms" }}>
              <h3 className="text-xl font-bold mb-3">Can I schedule a consultation before committing?</h3>
              <p className="text-gray-600">
                Yes, we offer a free initial consultation to understand your business needs before you commit to any of our services.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-bold mb-3">Do you offer virtual consultations?</h3>
              <p className="text-gray-600">
                Absolutely! We offer both in-person and virtual consultations via video conferencing to accommodate clients from all locations.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: "300ms" }}>
              <h3 className="text-xl font-bold mb-3">What information should I prepare before contacting you?</h3>
              <p className="text-gray-600">
                Having basic information about your business, specific challenges you're facing, and goals you want to achieve will help us provide more targeted assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
