
import React from 'react';

const JoinSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
          <p className="text-xl text-white/80 mb-8">
            We're always looking for talented individuals to join our team. If you're passionate about helping startups succeed, we'd love to hear from you.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
