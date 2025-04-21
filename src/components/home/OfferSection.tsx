
import React from 'react';

const OFFER_SERVICES = [
  "Company Registration",
  "Logo",
  "Profile",
  "GST registration",
  "Startup",
  "Seed support",
  "80 IAC support",
  "Website",
  "Applications",
  "ISO certificate",
  "Compliances (1 Year)"
];

const handleRazorpay = () => {
  // Inject Razorpay's script if not already present
  if (!document.getElementById('razorpay-js')) {
    const script = document.createElement('script');
    script.id = 'razorpay-js';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => openRazorpay();
  } else {
    openRazorpay();
  }

  function openRazorpay() {
    const options = {
      key: "rzp_test_5mWVHqBDXtAfAg", // Razorpay Test Key
      amount: 10000000, // 1 lakh in paisa
      currency: "INR",
      name: "11 Services Combo Offer",
      description: "Idea to Implementation Combo, All in 1 Lakh Rupee",
      image: "/lovable-uploads/offer-section.png", // You can upload offer image if any
      handler: function (response: any){
        alert("Payment Success! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#9b87f5"
      },
      notes: {
        combo: "Idea to Implementation combo"
      }
    };
    // @ts-ignore
    if (window.Razorpay) {
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert('Unable to load Razorpay payment at the moment.');
    }
  }
};

const OfferSection = () => (
  <section className="relative py-16 md:py-24 bg-gradient-to-br from-brand-50 via-purple-50 to-blue-100 overflow-hidden">
    {/* Decorative background */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute left-1/3 top-1/2 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-25"></div>
      <div className="absolute bottom-0 right-8 w-72 h-72 bg-orange-200 rounded-full filter blur-2xl opacity-30"></div>
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto p-8 bg-white/90 rounded-3xl shadow-2xl ring-2 ring-brand-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-700 mb-3">11 Services in <span className="text-vivid-orange">₹1 Lakh</span></h2>
        <p className="text-center text-lg text-gray-700 font-medium mb-2">
          <span className="text-brand-700">Idea to Implementation</span> – Just in <span className="font-semibold text-orange-600">₹1,00,000</span>
        </p>
        <p className="text-center text-base text-gray-500 mb-5">Get everything you need to launch and grow your business. Combo Offer Includes:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8 text-gray-800 text-[16px] font-medium">
          {OFFER_SERVICES.map(service => (
            <li key={service} className="flex items-center gap-2">
              <span className="text-brand-500 text-lg">✔️</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-vivid-purple to-brand-600 hover:from-brand-600 hover:to-vivid-purple text-white px-8 py-3 rounded-xl font-semibold shadow-lg text-lg transition-transform hover:scale-105 focus:outline-none animate-pulse"
            onClick={handleRazorpay}
          >
            Pay ₹1,00,000 - Book Now
          </button>
        </div>
        <p className="text-xs text-center text-gray-400 mt-6">Powered by Razorpay (Test Mode)</p>
      </div>
    </div>
  </section>
);

export default OfferSection;
