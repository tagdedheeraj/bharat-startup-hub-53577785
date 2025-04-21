
import React from "react";
import { Gift, Award, Rocket, BadgeDollarSign, Star } from "lucide-react";

const OFFER_SERVICES = [
  { name: "Company Registration", icon: <Award className="text-brand-600" /> },
  { name: "Logo", icon: <Star className="text-vivid-purple" /> },
  { name: "Profile", icon: <BadgeDollarSign className="text-brand-500" /> },
  { name: "GST registration", icon: <Award className="text-vivid-purple" /> },
  { name: "Startup", icon: <Rocket className="text-orange-400" /> },
  { name: "Seed support", icon: <Gift className="text-vivid-purple" /> },
  { name: "80 IAC support", icon: <Star className="text-yellow-500" /> },
  { name: "Website", icon: <Rocket className="text-blue-400" /> },
  { name: "Applications", icon: <Gift className="text-green-500" /> },
  { name: "ISO certificate", icon: <Award className="text-pink-500" /> },
  { name: "Compliances (1 Year)", icon: <BadgeDollarSign className="text-brand-600" /> },
];

const handleRazorpay = () => {
  if (!document.getElementById("razorpay-js")) {
    const script = document.createElement("script");
    script.id = "razorpay-js";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => openRazorpay();
  } else {
    openRazorpay();
  }

  function openRazorpay() {
    const options = {
      key: "rzp_test_5mWVHqBDXtAfAg",
      amount: 10000000,
      currency: "INR",
      name: "11 Services Combo Offer",
      description: "Idea to Implementation Combo, All in 1 Lakh Rupee",
      image: "/lovable-uploads/offer-section.png",
      handler: function (response: any) {
        alert("Payment Success! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#9b87f5",
      },
      notes: {
        combo: "Idea to Implementation combo",
      },
    };
    // @ts-ignore
    if (window.Razorpay) {
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert("Unable to load Razorpay payment at the moment.");
    }
  }
};

const OfferSection = () => (
  <section
    className="relative py-20 md:py-28 bg-gradient-to-tr from-brand-100 via-purple-50 to-blue-100 overflow-hidden animate-fade-in"
    style={{
      backgroundImage:
        "linear-gradient(109.6deg, rgba(223,234,247,0.9) 11.2%, rgba(244,248,252,0.96) 91.1%)",
    }}
  >
    {/* Decorative back overlays */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute left-1/3 top-1/2 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -top-28 left-10 w-48 h-48 bg-orange-200 rounded-full filter blur-2xl opacity-25"></div>
      <div className="absolute bottom-0 right-8 w-72 h-72 bg-pink-200 rounded-full filter blur-2xl opacity-25"></div>
    </div>

    {/* Card Container */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto p-10 bg-white/90 rounded-[2.5rem] shadow-2xl ring-4 ring-vivid-purple/10 border border-brand-50 animate-scale-in transition">
        {/* Top Badge Row */}
        <div className="flex flex-col items-center gap-2">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-vivid-purple to-orange-400 text-white shadow hover:scale-105 transition">
            Limited Time Mega Offer
          </span>
        </div>
        <div className="flex items-center gap-3 justify-center mt-3">
          <Gift className="w-8 h-8 text-orange-400 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-700 text-center mb-2 drop-shadow-lg" style={{ letterSpacing: '-1px' }}>
            11 Services in <span className="text-vivid-purple">₹1 Lakh</span>
          </h2>
        </div>
        {/* Removed the "Idea to Implementation" line here */}

        <div className="flex items-center gap-2 justify-center text-base text-orange-500 mb-3">
          <Rocket className="w-5 h-5" />
          <span>Just in</span>
          <span className="font-bold text-orange-600">₹1,00,000</span>
          <Award className="w-5 h-5" />
        </div>
        {/* Combo Info Chip */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl text-sm bg-gradient-to-r from-vivid-purple via-orange-200 to-pink-200 text-brand-800 font-semibold shadow-md border border-brand-100 animate-fade-in">
            <BadgeDollarSign className="w-4 h-4 text-vivid-purple" />
            All-In-One Startup Combo
          </span>
        </div>
        {/* Services List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 text-gray-900 text-[17px] font-medium">
          {OFFER_SERVICES.map((service) => (
            <li
              key={service.name}
              className="flex items-center gap-2 bg-brand-50/70 rounded-lg px-3 py-2 transition hover:scale-105 hover:bg-vivid-purple/10 shadow-sm border border-transparent"
            >
              <span className="">{service.icon}</span>
              <span>{service.name}</span>
            </li>
          ))}
        </ul>
        {/* Call-to-Action */}
        <div className="flex flex-col items-center gap-2">
          <button
            className="relative inline-flex items-center gap-2 text-lg font-bold px-10 py-3 rounded-2xl bg-gradient-to-r from-vivid-purple to-orange-400 hover:from-orange-400 hover:to-vivid-purple transition hover:scale-105 text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-vivid-purple/60 mt-1 mb-2 animate-pulse"
            onClick={handleRazorpay}
          >
            <Rocket className="w-6 h-6" />
            Pay ₹1,00,000 - Book Now
            <Star className="w-6 h-6 text-amber-400" />
            <span className="absolute top-[-18px] right-[-24px] flex items-center bg-pink-200 text-pink-700 text-xs font-semibold px-2 py-1 rounded-full border border-pink-300 shadow animate-pulse">Test Mode</span>
          </button>
          <span className="text-xs text-center text-gray-400">
            Safe, secure payment via Razorpay (Test Only)
          </span>
        </div>
        {/* Limited Tag + Decorative Icon */}
        <div className="flex justify-center mt-4">
          <span className="flex items-center gap-1 bg-orange-100 border border-orange-300 rounded-full px-4 py-1 text-xs font-bold text-orange-600 shadow animate-fade-in">
            <Gift className="w-3 h-3" />
            Limited Period Combo
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default OfferSection;

