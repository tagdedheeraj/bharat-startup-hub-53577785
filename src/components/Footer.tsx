import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, FileText, Shield, Info, FileSignature, Building, Lock, RefreshCcw } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Bharat Startup Solution</h3>
            <p className="text-gray-300 mb-4">
              A Proud Product of Shaswat Initial Support Services
            </p>
            <p className="text-gray-300 mb-4">
              Your one-stop solution for MSMEs and startups. We help businesses grow, fund, and succeed.
            </p>
            <div className="flex items-center space-x-2 bg-brand-500/10 p-2 rounded">
              <Building className="w-5 h-5 text-brand-400" />
              <span className="text-sm text-gray-300">
                A Division of Shaswat Initial Support Services
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/share/1DWAwDkT81/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/bharatstartup_s?t=cECYSXiJ8HqqI7NNZ3bk_Q&s=08" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.instagram.com/bharatstartup_solution?igsh=NTlhODk1NnZncnBn" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.504.344-1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@BharatStartupSolution" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 01 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
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
                <Link to="/admin" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Lock className="w-4 h-4 mr-2 text-brand-400" />
                  Admin Panel
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
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-400 mt-1 mr-3" />
                <span className="text-gray-300">7th Floor - 727, Arved Transcube Plaza, 132 Ft. Ring Road, opp. Ranip BRTS, Ranip, Ahmedabad - 382480</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-400 mr-3" />
                <a href="tel:+917046396020" className="text-gray-300 hover:text-white transition-colors">
                  7046-396-020
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-400 mr-3" />
                <a href="mailto:info@bharatstartup.com" className="text-gray-300 hover:text-white transition-colors">
                  info@bharatstartup.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} Bharat Startup Solution. A Product of Shaswat Initial Support Services
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
                Disclaimer
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/client-service-agreement" className="text-gray-400 hover:text-white transition-colors text-sm">
                Client Service Agreement
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/admin" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                <Lock className="w-3 h-3 mr-1" />
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
