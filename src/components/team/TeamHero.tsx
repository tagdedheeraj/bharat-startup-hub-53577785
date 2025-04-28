
import React from 'react';

const TeamHero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 text-sm font-medium mb-6">Meet Our Team</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">The Talented People Behind Bharat Startup</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our team of dedicated professionals works tirelessly to help entrepreneurs and businesses succeed. 
            With diverse expertise and a shared passion for innovation, we're committed to transforming your vision into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
