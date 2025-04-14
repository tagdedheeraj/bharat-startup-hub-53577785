
const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-brand-100">
            We've helped numerous businesses achieve their growth objectives through our comprehensive services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 border border-brand-600 rounded-lg bg-brand-800/50 backdrop-blur-sm animate-fadeIn" style={{ animationDelay: "100ms" }}>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-brand-200">Startups Funded</div>
          </div>
          
          <div className="text-center p-6 border border-brand-600 rounded-lg bg-brand-800/50 backdrop-blur-sm animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <div className="text-4xl font-bold mb-2">₹1000Cr+</div>
            <div className="text-brand-200">Funding Facilitated</div>
          </div>
          
          <div className="text-center p-6 border border-brand-600 rounded-lg bg-brand-800/50 backdrop-blur-sm animate-fadeIn" style={{ animationDelay: "300ms" }}>
            <div className="text-4xl font-bold mb-2">1200+</div>
            <div className="text-brand-200">Legal Consultations</div>
          </div>
          
          <div className="text-center p-6 border border-brand-600 rounded-lg bg-brand-800/50 backdrop-blur-sm animate-fadeIn" style={{ animationDelay: "400ms" }}>
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-brand-200">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
