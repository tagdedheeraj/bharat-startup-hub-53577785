
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
