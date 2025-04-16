
const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-india-saffron/5 via-transparent to-india-green/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-india-saffron via-india-blue to-india-green bg-clip-text text-transparent font-display animate-gradient-x">
            Our Impact in Numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            We've helped numerous businesses achieve their growth objectives through our 
            <span className="font-medium text-india-blue"> comprehensive services</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-india-saffron to-india-green rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold font-display bg-gradient-to-br from-india-saffron to-india-blue bg-clip-text text-transparent animate-pulse">
                500+
              </div>
              <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mt-3">
                Startups Funded
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-india-saffron to-india-green rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold font-display bg-gradient-to-br from-india-green to-india-blue bg-clip-text text-transparent animate-pulse">
                ₹1000Cr+
              </div>
              <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mt-3">
                Funding Facilitated
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-india-saffron to-india-green rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold font-display bg-gradient-to-br from-india-blue to-india-saffron bg-clip-text text-transparent animate-pulse">
                1200+
              </div>
              <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mt-3">
                Legal Consultations
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-india-saffron to-india-green rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold font-display bg-gradient-to-br from-india-green to-india-saffron bg-clip-text text-transparent animate-pulse">
                98%
              </div>
              <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mt-3">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
