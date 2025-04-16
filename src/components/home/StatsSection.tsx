
const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-india-saffron/5 via-transparent to-india-green/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-india-saffron via-india-blue to-india-green bg-clip-text text-transparent font-display animate-gradient-x">
            Our Impact in Numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            We've helped numerous businesses achieve their growth objectives through our 
            <span className="font-medium text-india-blue animate-pulse"> comprehensive services</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              value: "500+",
              label: "Startups Funded",
              gradient: "from-india-saffron to-india-blue",
              delay: 0.3
            },
            {
              value: "₹1000Cr+",
              label: "Funding Facilitated",
              gradient: "from-india-green to-india-blue",
              delay: 0.5
            },
            {
              value: "1200+",
              label: "Legal Consultations",
              gradient: "from-india-blue to-india-saffron",
              delay: 0.7
            },
            {
              value: "98%",
              label: "Client Satisfaction",
              gradient: "from-india-green to-india-saffron",
              delay: 0.9
            }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="relative group"
              style={{
                opacity: 0,
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${stat.delay}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-india-saffron to-india-green rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div 
                className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                }}
              >
                <div className={`text-5xl font-bold font-display bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent animate-pulse`}>
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-800 dark:text-gray-200 mt-3">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

