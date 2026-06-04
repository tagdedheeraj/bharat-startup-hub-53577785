
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, FileText, Shield, Info, FileSignature, Building, Lock, RefreshCcw, Instagram, Building2, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">InCorpWale</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop solution for MSMEs and startups. We help businesses grow, fund, and succeed.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/share/18ajLDQWfE/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/incorpwale?igsh=bzM2aG11MGZheHNz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/incorpwale-com-289811412/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/it-solutions" className="text-gray-300 hover:text-white transition-colors">IT Solutions</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/grievances" className="text-gray-300 hover:text-white transition-colors">Submit Grievance</Link>
              </li>
              <li>
                <Link to="/ministry-of-commerce" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Building2 className="w-4 h-4 mr-2 text-brand-400" />
                  Ministry of Commerce & Industry
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/funding-consultation" className="text-gray-300 hover:text-white transition-colors">
                  Funding Consultation
                </Link>
              </li>
              <li>
                <Link to="/services/certificate-marketing" className="text-gray-300 hover:text-white transition-colors">
                  Certificate Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/legal-consultation" className="text-gray-300 hover:text-white transition-colors">
                  Legal Consultation
                </Link>
              </li>
              <li>
                <Link to="/more/compliance" className="text-gray-300 hover:text-white transition-colors">
                  Compliance Services
                </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-8">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-brand-400" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-brand-400" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Info className="w-4 h-4 mr-2 text-brand-400" />
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/client-service-agreement" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <FileSignature className="w-4 h-4 mr-2 text-brand-400" />
                  Client Service Agreement
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <RefreshCcw className="w-4 h-4 mr-2 text-brand-400" />
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-400 mr-3" />
                <a href="tel:+919726626660" className="text-gray-300 hover:text-white transition-colors">
                  +91 97266 26660
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} InCorpWale. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
